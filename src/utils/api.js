import { auth, db, storageRef } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { checkValidObj, generateKey, getErrMessage } from "./plugins";
import { getDoc, setDoc, doc, getDocs, collection, query, updateDoc } from "firebase/firestore";
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
        setDoc(docRef, { ...data, role: 'reviewer' }).then(res => handler(res)).catch(err => {
            alert(err.message)
        })
    }).catch(err => errHandler(err))
}
export const getAllConferences = async (handler, errHandler) => {
    const q = query(collection(db, "conferences"));
    await getDocs(q).then(querySnapshot => {
        var allConferences = []
        querySnapshot.forEach((doc) => {
            allConferences.push(doc.data())
        })
        handler(allConferences)
    }).catch(err => errHandler(err))
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
export const submitPaper = (id, newPaper, handler, errHandler) => {
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

            const docRef = doc(db, 'conferences', id)
            getDoc(docRef).then(res => {
                updateDoc(docRef, { papers: [...res.data().papers, { ...newPaper, file: urlOfPaper }] }).then(res => {
                    handler(res)
                }).catch(err => {
                    errHandler(err)
                })
            })

            alert("Added Paper")
            handler("success")
        }
    );

}
export const enableCallForPapers = async (id, handler, errHandler) => {
    const docRef = doc(db, 'conferences', id)
    await updateDoc(docRef, {
        papers: []
    }).then(res => {
        handler(res)
    }).catch(err => {
        errHandler(getErrMessage(err))
    })
}
export const getPapersById=async (id, handler, errHandler)=>{
    const docRef=doc(db, 'conferences', id)

    getDoc(docRef).then(result=>{
        handler(result.data())
    }).catch(err=>errHandler(getErrMessage(err)))
}
