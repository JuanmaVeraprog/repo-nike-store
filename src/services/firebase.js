
import { initializeApp } from "firebase/app";

import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where,
    addDoc,
    writeBatch
  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCap1x-o-FCb2Bkida7UM7bnB-W-rZRpYM",
  authDomain: "react-coderhouse-c9d32.firebaseapp.com",
  projectId: "react-coderhouse-c9d32",
  storageBucket: "react-coderhouse-c9d32.appspot.com",
  messagingSenderId: "109731912542",
  appId: "1:109731912542:web:bd5979072aec64f2208dcf"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export async function getProds() {
    const collectionRef = collection(db, "products");
    let results = await getDocs(collectionRef);
  
    let dataProds = results.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  
    return dataProds;
  }
  
  export async function getUnProd(idParams) {
    const docRef = doc(db, "products", idParams);
    const docResult = await getDoc(docRef);
    if (docResult.exists()) {
      return { id: docResult.id, ...docResult.data() };
    }
  }
  
  export async function getProdsByCategory(idCategoryParams) {
    const collectionRef = collection(db, "products");
  
    const queryCat = query(
      collectionRef,
      where("category", "==", idCategoryParams)
    );
  
    let results = await getDocs(queryCat);
  
    let dataProds = results.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  
    return dataProds;
  }
  
  export async function createBuyOrder(orderData){
    const collectionRef = collection(db, "orders");
    let respuesta = await addDoc(collectionRef, orderData)
    return respuesta.id;
  }
  

export default firebaseApp;