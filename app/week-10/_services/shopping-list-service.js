import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


export async function getItems(userId) {
    try {
      const itemsRef = collection(db, "users", userId, "items");
      const snapshot = await getDocs(itemsRef);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name,
        quantity: doc.data().quantity,
        category: doc.data().category
      }));
    } catch (error) {
      console.error("Error loading items:", error);
      return [];
    }
  }
  
  export async function addItem(userId, item) {
    try {
      const itemsRef = collection(db, "users", userId, "items");
      const docRef = await addDoc(itemsRef, {
        name: item.name,
        quantity: item.quantity || 1,
        category: item.category
      });
      return docRef.id;
    } catch (error) {
      console.error("Error adding item:", error);
      return null;
    }
  }