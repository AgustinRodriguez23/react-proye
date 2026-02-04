import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD0CuMA-I_qTMSvDHJDotxNK8yRPm5CHuY",
  authDomain: "react-proye.firebaseapp.com",
  projectId: "react-proye",
  storageBucket: "react-proye.firebasestorage.app",
  messagingSenderId: "240036730378",
  appId: "1:240036730378:web:a4070dd6afc616161171f3"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export async function getData(){
    const collectionRef = collection(db, "products")
    const productsSnapshot = await getDocs(collectionRef)
    const docs = productsSnapshot.docs
    const dataDocs = docs.map( item => {
        return ({ ...item.data(), id: item.id})
    })
    return dataDocs
}

export async function getItemData(itemID){
    const documentRef = doc(db, "products", itemID)
    const docSnapshot = await getDoc(documentRef)
    console.log(docSnapshot)
    const docData = docSnapshot.data()
    const docDataWithID = { ...docData, id: docSnapshot.id}
    return docDataWithID
}

export async function getCategoryData(categoryID){
    const collectionRef = collection(db, "products")
    const q = query(collectionRef, where("category", "==", categoryID))
    const productsSnapshot = await getDocs(q)
    const docs = productsSnapshot.docs
    const dataDocs = docs.map( item => {
        return ({ ...item.data(), id: item.id})
    })
    return dataDocs
}

export async function createBuyOrder(buyOrderData){
    const collectionRef = collection(db, "orders")
    const docRef = await addDoc(collectionRef, buyOrderData)
    alert("gracias !!")   
}

export async function exportProductsToFirestore(){

    for(let item of products){
    delete item.id    
    const docRef = addDoc(collection(db, "products"), item)
    }
}