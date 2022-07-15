import { collection, getDocs } from 'firebase/firestore'
import { db } from './firebase-config'

const ramas = [];
const modalities = [];
const dates = [];
const provinces = [];
const rates = [];
const communities = [];

const querySnapshot = [
    await getDocs(collection(db, "ramas")),
    await getDocs(collection(db, "modalidades")),
    await getDocs(collection(db, "horarios")),
    await getDocs(collection(db, "provincias")),
    await getDocs(collection(db, "tarifas")),
    await getDocs(collection(db, "comunidades")),
]

querySnapshot[0].forEach((doc) => {
        const rama = {
            id: doc.id,
            titulo: doc.data().titulo
        }
        ramas.push(rama);
});
querySnapshot[1].forEach((doc) => {
    const modalidad = {
        id: doc.id,
        titulo: doc.data().nombre
    }
    modalities.push(modalidad);
});
querySnapshot[2].forEach((doc) => {
    const horario = {
        id: doc.id,
        titulo: doc.data().titulo
    }
    dates.push(horario);
});

querySnapshot[3].forEach((doc) => {
    const provincia = {
        id: doc.id,
        titulo: doc.data().nombre
    }
    provinces.push(provincia);
});

querySnapshot[4].forEach((doc) => {
    const tarifa = {
        id: doc.id,
        titulo: doc.data().titulo
    }
    rates.push(tarifa);
});

querySnapshot[5].forEach((doc) => {
    const comunidad = {
        id: doc.id,
        titulo: doc.data().nombre
    }
    communities.push(comunidad);
});

export {ramas,
    modalities,
    dates,
    provinces,
    rates,
    communities,
}


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