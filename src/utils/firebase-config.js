/**
    FILE FOR CONFIGURATION AND FIREBASE UTILS
*/
import {initializeApp} from 'firebase/app';
import {
    getFirestore, collection, getDocs
} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyrErJXqBWyFQW1SYYHQYU6TFVlL2uVqY",
    authDomain: "magister-site.firebaseapp.com",
    projectId: "magister-site",
    storageBucket: "magister-site.appspot.com",
    messagingSenderId: "55875989282",
    appId: "1:55875989282:web:cfb487aee099bdd580bf7b"
};
// Initialize Firebase App
const app = initializeApp(firebaseConfig);
// utils
/* init database services */
const db = getFirestore(app)

export {db};













// /* init database services */
// const db = getFirestore();
// /* collections refs */
// const ramas = collection(db,'ramas');
// /* get collection data */
// // const ramasDocs = getDocs(ramas)
// // .then((snapshot) => {
// //     let ramas = [];
// //     snapshot.docs.forEach((doc) => {
// //         ramas.push( {...doc.data(), id: doc.id} )
// //     })
// //     console.log(ramas);
// // }).catch(err => {console.log(err.message)});

// export {ramas}