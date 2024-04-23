import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Components PrimeNG
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';

import { FirebaseService } from '../../services/firebase.service';
import { EuroCoin } from '../../interfaces/euroCoin.interface';
import { Router } from '@angular/router';
import { getNametoFlags } from '../../shared/helpers/normalize-names';
@Component({
  selector: 'app-euros',
  standalone: true,
  imports: [CommonModule, TableModule, BadgeModule, ButtonModule],
  templateUrl: './euros.component.html',
  styleUrl: './euros.component.scss'
})
export default class EurosComponent {

  euros: EuroCoin[] = [];
  getNametoFlags = getNametoFlags;

  constructor(
    private _firebaseService: FirebaseService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._firebaseService.getAll().subscribe(coins => {
      console.log(coins);
      this.euros = coins;
    })
  }

  async addInfo() {
    const info = [
      {
        "country": "España",
        "year": "1999",
        "faceValue": "1 Céntimo",
        "mint": "",
        "conservation": "EBC",
        "description": "Rey Alberto II",
        "uds": "1",
        "idNum": "73",
        "observations": "Esto es una observación de prueba para ver cómo queda en la web y maquetarla en condiciones."
      },
      {
        "country": "Bélgica",
        "year": "2000",
        "faceValue": "2 Céntimos",
        "mint": "",
        "conservation": "SC",
        "description": "Rey Alberto II",
        "uds": "0",
        "idNum": "78",
        "observations": ""
      },
      {
        "country": "España",
        "year": "1999",
        "faceValue": "5 Céntimos",
        "mint": "",
        "conservation": "MBC",
        "description": "Rey Alberto II",
        "uds": "1",
        "idNum": "74",
        "observations": ""
      },
      {
        "country": "Bélgica",
        "year": "1999",
        "faceValue": "10 Céntimos",
        "mint": "A Berlin",
        "conservation": "BC",
        "description": "Rey Alberto II",
        "uds": "1",
        "idNum": "75",
        "observations": ""
      },
      {
        "country": "Bélgica",
        "year": "1999",
        "faceValue": "20 Céntimos",
        "mint": "D Hamburgo",
        "conservation": "RC",
        "description": "Rey Alberto II",
        "uds": "0",
        "idNum": "79",
        "observations": ""
      },
      {
        "country": "Bélgica",
        "year": "1999",
        "faceValue": "50 Céntimos",
        "mint": "A Berlin",
        "conservation": "MC",
        "description": "Rey Alberto II",
        "uds": "1",
        "idNum": "76",
        "observations": ""
      },
      {
        "country": "Bélgica",
        "year": "1999",
        "faceValue": "1 Euro",
        "mint": "J japon",
        "conservation": "EBC",
        "description": "Rey Alberto II",
        "uds": "1",
        "idNum": "77",
        "observations": ""
      },
      {
        "country": "Bélgica",
        "year": "1999",
        "faceValue": "2 Euros",
        "mint": "F francia",
        "conservation": "",
        "description": "Rey Alberto II",
        "uds": "0",
        "idNum": "80",
        "observations": ""
      }
    ]

    try {
      for (const coin of info) {
        await this._firebaseService.addInfo(coin);
        console.log('moneda añadida:', coin);
      }

    } catch (error) {
      console.error('Error al agregar monedas:', error);
    }
  }

  deleteAll() {
    this._firebaseService.pruebaDeletemuchas()
  }

  goToCoinDetails(id: string) {
    this._router.navigate(['/home/euros/' + id]);
    console.log(id);
  }





}
