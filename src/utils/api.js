import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { checkValidObj, generateKey, getErrMessage } from "./plugins";
import { getDoc, setDoc, doc, getDocs, collection, query, updateDoc, where } from "firebase/firestore";
import { storage } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const loginUser = (data, handler, errHandler) => {

    if (checkValidObj(data) === false) {
        alert("All Fields are compulsory.")
        return;
    }

    signInWithEmailAndPassword(auth, data.email, data.password).then(async result => {
        console.log(result)
        const docRef = doc(db, 'users', data.email)
        const docSnapp = await getDoc(docRef);
        if (docSnapp.exists()) {
            console.log(docSnapp.data())
            handler(docSnapp.data())
        } else {
            auth.signOut()
            alert("User Doesn't exists.")
        }
    }).catch(err => errHandler(err))

}
export const organizerSignup = (data, handler, errHandler) => {
    if (checkValidObj(data) === false) {
        alert("All Fields are compulsory.")
        return;
    }

    createUserWithEmailAndPassword(auth, data.email, data.password).then(result => {
        const docRef = doc(db, 'users', data.email)
        setDoc(docRef, { ...data, role: 'organizer' }).then(res => {
            handler(res)
        }).catch(err => {
            alert(err.message)
        })
    }).catch(err => errHandler(err))
}
export const reviewerSignup = (data, handler, errHandler) => {
    if (checkValidObj(data) === false) {
        alert("All Fields are compulsory.")
        return;
    }

    createUserWithEmailAndPassword(auth, data.email, data.password).then(result => {
        const docRef = doc(db, 'users', data.email)
        setDoc(docRef, { ...data, role: 'reviewer', assigned: null }).then(res => handler(res)).catch(err => {
            alert(err.message)
        })
    }).catch(err => errHandler(err))
}
export const authorSignup = (data, handler, errHandler) => {
    if (checkValidObj(data) === false) {
        alert("All Fields are compulsory.")
        return;
    }

    createUserWithEmailAndPassword(auth, data.email, data.password).then(result => {
        const docRef = doc(db, 'users', data.email)
        setDoc(docRef, { ...data, role: 'author', uploaded: null }).then(res => handler(res)).catch(err => {
            alert(err.message)
        })
    }).catch(err => errHandler(err))
}
export const getAllConferences = async (handler, errHandler) => {
    var allConferences = []
    const q = query(collection(db, "conferences"));
    await getDocs(q).then(querySnapshot => {
        querySnapshot.forEach((doc) => {
            allConferences.push(doc.data())
        })
    }).catch(err => errHandler(err))
    handler(allConferences)
}
export const addNewConference = async (data, handler, errHandler) => {

    if (checkValidObj(data) === false) {
        alert("All Fields are compulsory.")
        return;
    }

    const key = generateKey()
    const docRef = doc(db, 'conferences', key)

    setDoc(docRef, { ...data, papers: false, key: key }).then(res => handler(res, key)).catch(err => errHandler(err))
}
export const getConferenceById = async (id, handler, errHandler) => {
    const docRef = doc(db, 'conferences', id)
    getDoc(docRef).then(res => {
        if (res.exists) {
            handler(res.data())
        } else {
            handler(null)
        }
    }).catch(err => {
        errHandler(getErrMessage(err))
    })

}
export const submitPaper = (confId, newPaper, handler, errHandler) => {
    var paperId = generateKey()
    var urlOfPaper = '';
    var storageRef = ref(storage, newPaper.title)


    const uploadTask = uploadBytesResumable(storageRef, newPaper.file);

    uploadTask.on('state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        },
        (error) => {
            errHandler(getErrMessage(error))
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                urlOfPaper = downloadURL
            });


            const docRef = doc(db, 'conferences', confId)
            getDoc(docRef).then(res => {
                const updatedAllPapers = { ...res.data().papers }
                updatedAllPapers[paperId] = { ...newPaper, reviews: [], file: urlOfPaper, id: paperId, confId: confId }
                updateDoc(docRef, { papers: updatedAllPapers }).then(res => {
                    handler(res)
                }).catch(err => {
                    errHandler(err)
                })
            })

            handler("success")
        }
    );

}
export const enableCallForPapers = async (id, handler, errHandler) => {
    const docRef = doc(db, 'conferences', id)
    await updateDoc(docRef, {
        papers: {}
    }).then(res => {
        handler(res)
    }).catch(err => {
        errHandler(getErrMessage(err))
    })
}
export const getPapersById = async (id, handler, errHandler) => {
    const docRef = doc(db, 'conferences', id)

    getDoc(docRef).then(result => {
        handler(result.data())
    }).catch(err => errHandler(getErrMessage(err)))
}
export const getAllReviewer = async (handler, errHandler) => {
    const q = query(collection(db, "users"), where('role', '==', 'reviewer'));
    await getDocs(q).then(querySnapshot => {
        var allReviewers = []
        querySnapshot.forEach((doc) => {
            allReviewers.push(doc.data())
        })
        handler(allReviewers)
    }).catch(err => errHandler(getErrMessage(err)))
}
export const assignReviewer = async (email, paperId, confId, handler, errHandler) => {
    console.log('starting')
    const docRef = doc(db, 'conferences', confId)
    getDoc(docRef).then(res => {
        var allPapers = res.data().papers
        allPapers[paperId] = { ...allPapers[paperId], assigned: email }
        updateDoc(docRef, { papers: allPapers }).then(res => {
            handler(res)
        }).catch(err => errHandler(getErrMessage(err)))
    })

}
export const getAssignedPaper = async (email, handler, errHandler) => {
    var assignedPapers = []
    const q = query(collection(db, "conferences"));
    await getDocs(q).then(querySnapshot => {
        querySnapshot.forEach((doc) => {

            var conferenceData = doc.data()
            if (conferenceData.papers !== false) {
                // eslint-disable-next-line
                Object.values(conferenceData.papers).map(e => {
                    if (e.assigned === email) {
                        assignedPapers.push(e)
                        console.log(e)
                    }
                })
            }
        })
        handler(assignedPapers)
        // eslint-disable-next-line

    }).catch(err => errHandler(getErrMessage(err)))

}
export const getConferencesByEmail = async (email, handler, errHandler) => {
    var allConferences = []
    try {
        const q = query(collection(db, "conferences"), where('actor', '==', email));
        await getDocs(q).then(querySnapshot => {
            querySnapshot.forEach((doc) => {
                allConferences.push(doc.data())
            })
        }).catch(err => errHandler(getErrMessage(err)))
        handler(allConferences)
    } catch (e) {
        errHandler("Some Error Occured", e.message)
    }
}
export const submitReview = (confId, paperId, newReview, userName, userEmail, handler, errHandler) => {
    if (checkValidObj(newReview) === false) {
        alert("All Fields are compulsory.")
        return;
    }
    console.log(newReview)
    const docRef = doc(db, 'conferences', confId)
    getDoc(docRef).then(res => {
        const updatedAllPapers = { ...res.data().papers }
        var newReviews = [...updatedAllPapers[paperId].reviews, { ...newReview, reviewer: userName, email: userEmail }]
        updatedAllPapers[paperId].reviews = newReviews

        console.log(updatedAllPapers)
        updateDoc(docRef, { papers: updatedAllPapers }).then(res => {
            handler(res)
        }).catch(err => {
            errHandler(getErrMessage(err))
        })
    })
}

export const getReviewsById = async (id, handler, errHandler) => {
    const docRef = doc(db, 'conferences', id)

    getDoc(docRef).then(result => {
        handler(result.data())
    }).catch(err => errHandler(getErrMessage(err)))
}