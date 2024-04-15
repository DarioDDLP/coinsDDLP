import { Injectable } from '@angular/core';
import { Firestore, collectionData, orderBy, query } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  euros = collection(this._Firestore, 'euro')

  constructor(private _Firestore: Firestore) {
  }

  //TODO: Pendiente tipar
  getAll(): Observable<any> {
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

    const orderedQuery = query(this.euros, orderBy('year'), orderBy('country'), orderBy('faceValue'));
    return collectionData(orderedQuery, { idField: 'id' }).pipe(
      map((docs: any[]) => {
        // Ordenar los documentos según el criterio personalizado
        return docs.sort((a, b) => {
          // Primero, ordenar por año
          if (a.year !== b.year) {
            return a.year - b.year;
          }
          // Luego, ordenar por país
          const countryOrder = a.country.localeCompare(b.country);
          if (countryOrder !== 0) {
            return countryOrder;
          }
          // Finalmente, ordenar por el criterio personalizado
          const orderA = customOrder[a.faceValue];
          const orderB = customOrder[b.faceValue];
          return orderA - orderB;
        });
      })
    );
  }

  //TODO: Pendiente tipar
  addInfo(coin: any): Promise<any> {
    return addDoc(this.euros, coin)
  }
}
