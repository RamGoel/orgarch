import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { checkValidObj, generateKey } from "./plugins";
import { getDoc, setDoc, doc, getDocs, collection, query } from "firebase/firestore";

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
            handler(docSnapp.data().role)
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
        setDoc(docRef, { ...data, role: 'organizer' }).then(res => handler(res)).catch(err => {
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

export const getAllConferences = async ( handler, errHandler) => {
    const q = query(collection(db, "cities"));
    await getDocs(q).then(querySnapshot => {
        var allConferences = []
        querySnapshot.forEach((doc) => {
            allConferences.push(doc.data())
        })
        handler(allConferences)
    }).catch(err => errHandler(err))
}
export const addNewConference=async(data, handler, errHandler)=>{

    if (checkValidObj(data) === false) {
        alert("All Fields are compulsory.")
        return;
    }    
    
    const key=generateKey()
    const docRef=doc(db, 'conferences', key)

    setDoc(docRef, data).then(res=>handler(res)).catch(err=>errHandler(err))
}