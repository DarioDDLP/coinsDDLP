import { Injectable, inject } from '@angular/core';
import { DocumentData, DocumentSnapshot, Firestore, collectionData, deleteDoc, doc, getDoc, getDocs, orderBy, query, updateDoc } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { Observable, map } from 'rxjs';
import { EuroCoin } from '../interfaces/euroCoin.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  // Services
  private _Firestore = inject(Firestore);

  euros = collection(this._Firestore, 'euro')

  getAll(): Observable<EuroCoin[]> {
    const customOrder: { [denomination: string]: number } = {
      '1 Céntimo': 1,
      '2 Céntimos': 2,
      '5 Céntimos': 3,
      '10 Céntimos': 4,
      '20 Céntimos': 5,
      '50 Céntimos': 6,
      '1 Euro': 7,
      '2 Euros': 8,
      '2 Euros C': 9
    };

    const orderedQuery = query(this.euros, orderBy('year'), orderBy('country'), orderBy('mint'), orderBy('faceValue'));
    return collectionData(orderedQuery, { idField: 'id' }).pipe(
      map((docs: any[]) => {
        // Sort documents according to personalised criteria
        return docs.sort((a, b) => {
          // sort by year
          if (a.year !== b.year) {
            return a.year - b.year;
          }
          // sort by country
          const countryOrder = a.country.localeCompare(b.country);
          if (countryOrder !== 0) {
            return countryOrder;
          }
          // sort by mint
          const mintOrder = a.mint.localeCompare(b.mint);
          if (mintOrder !== 0) {
            return mintOrder;
          }
          // sort by the custom criteria "faceValue"
          const orderA = customOrder[a.faceValue];
          const orderB = customOrder[b.faceValue];
          return orderA - orderB;
        });
      })
    );
  }

  addInfo(coin: any): Promise<any> {
    return addDoc(this.euros, coin)
  }

  async getCoinById(id: string): Promise<any> {
    const ref = doc(this._Firestore, 'euro/' + id);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) return docSnap.data();
  }

  updateCoin(id: string, data: any): Promise<any> {
    const refEdit = doc(this._Firestore, 'euro/' + id)
    return updateDoc(refEdit, data)
  }

  async pruebaDeletemuchas() {
    console.log('entra');

    try {
      // Obtén una referencia a la colección 'Euro'
      const euroCollectionRef = this.euros;
      // Obtén todos los documentos de la colección
      const querySnapshot = await getDocs(euroCollectionRef);

      // Itera sobre cada documento y elimínalo
      querySnapshot.forEach(async doc => {
        await deleteDoc(doc.ref);
        console.log("Document successfully deleted!");
      });
    } catch (error) {
      console.error("Error deleting documents: ", error);
    }
  }
}
