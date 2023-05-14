import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
export const loginUser = (data) => {

    var invalidRequest = 0;
    Object.keys(data).map(key => {
        if (data[key] === '') {
            invalidRequest = 1;
            return 1;
        }
        return 1;
    })

    if (invalidRequest === 1) {
        alert("All Fields are compulsory.")
        return;
    }

    signInWithEmailAndPassword(auth, data.email, data.password).then(result => {
        console.log(result)
        return "success";
    }).catch(err => {
        var msg = err.message.split('/')
        alert(msg[msg.length - 1])
    })

}