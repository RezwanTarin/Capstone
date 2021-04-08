import FirebaseKeys from "./config"
import firebase from 'firebase'

class Fire {
    constructor() {
        firebase.initializeApp(FirebaseKeys)
    }

    addPost = async ({workType, projectName, projectDesc, budget, city, contactInfo}) => {
        return new Promise((res, rej) => {
            this.firestore.collection("posts").add({
                workType,
                projectName,
                projectDesc,
                budget,
                city,
                contactInfo,
                uid: this.uid,
                timestamp: this.timestamp,

            })
            .then(ref => {
                res(ref)
            })
            .catch(error => {
                rej(error)
            })
        })
    }

    get firestore() {
        return firebase.firestore()
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid
    }

    get timestamp() {
        return Date.now()
    }
}

Fire.shared = new Fire()
export default Fire;