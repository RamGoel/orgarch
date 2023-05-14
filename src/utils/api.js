import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { checkValidObj } from "./plugins";
import { getDoc, setDoc, doc } from "firebase/firestore";

export const loginUser = (data, handler) => {

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
    }).catch(err => {
        var msg = err.message.split('/')
        alert(msg[msg.length - 1])
        return false;
    })

}
export const organizerSignup = (data) => {
    if (checkValidObj(data) === false) {
        alert("All Fields are compulsory.")
        return;
    }

    createUserWithEmailAndPassword(auth, data.email, data.password).then(result => {
        const docRef = doc(db, 'users', data.email)
        setDoc(docRef, { ...data, role: 'organizer' }).then(res => {
            console.log(res)
            return "success";
        }).catch(err => {
            alert(err.message)
        })
    }).catch(err => {
        var msg = err.message.split('/')
        alert(msg[msg.length - 1])
    })
}
export const reviewerSignup = (data) => {
    if (checkValidObj(data) === false) {
        alert("All Fields are compulsory.")
        return;
    }

    createUserWithEmailAndPassword(auth, data.email, data.password).then(result => {
        const docRef = doc(db, 'users', data.email)
        setDoc(docRef, { ...data, role: 'reviewer' }).then(res => {
            console.log(res)
            return "success";
        }).catch(err => {
            alert(err.message)
        })
    }).catch(err => {
        var msg = err.message.split('/')
        alert(msg[msg.length - 1])
    })
}

