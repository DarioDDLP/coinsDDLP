import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { FirebaseService } from '../../services/firebase.service';
import { EuroCoin } from '../../interfaces/euroCoin.interface';
import { getNametoFlags, normalizeString } from '../../shared/helpers/normalize-strings';

// Components PrimeNG
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { OptionUds } from '../../interfaces/optionsUds.interface';
@Component({
  selector: 'app-euros',
  standalone: true,
  imports: [CommonModule, FormsModule, BadgeModule, ButtonModule, DropdownModule, IconFieldModule, InputIconModule, InputSwitchModule, InputTextModule, ProgressSpinnerModule, TableModule,],
  templateUrl: './euros.component.html',
  styleUrl: './euros.component.scss'
})
export default class EurosComponent {
  // Services
  private _firebaseService = inject(FirebaseService)
  private _router = inject(Router)

  eurosFiltered = signal<EuroCoin[]>([]);
  euros = signal<EuroCoin[]>([]);
  searchText = signal('');
  getNametoFlags = getNametoFlags;
  normalizeString = normalizeString;

  isLoading = signal(false);

  isFilterByCommemoratives = signal(false);

  optionsUds: OptionUds[] = [
    {
      id: 0,
      name: 'Todas'
    },
    {
      id: 1,
      name: 'Obtenidas'
    },
    {
      id: 2,
      name: 'Faltantes'
    }
  ];

  optionsUdsSelected = signal<OptionUds | undefined>(undefined);


  ngOnInit() {
    this.getAllEuros();
  }

  getAllEuros() {
    this.isLoading.set(true);
    this._firebaseService.getAll().subscribe({
      next: (coins) => {
        console.log(coins);
        this.eurosFiltered.set(coins);
        this.euros.set(coins);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.isLoading.set(false);
      }
    });
  }

  searchEuros() {
    this.isLoading.set(true);
    if (this.searchText()) {
      const coinToSearch = this.normalizeString(this.searchText().trim()).split(" ");
      this.eurosFiltered.set(
        this.euros().filter(coin => {
          const coinValues = [
            coin.country,
            coin.faceValue,
            coin.year,
            coin.mint
          ].map(value => this.normalizeString(value || "")).join(" ");
          const coinWords = coinValues.split(" ");
          return coinToSearch.every(term => coinWords.includes(term));
        })
      );
    } else {
      this.eurosFiltered.set(this.euros());
      this.searchText.set('');
    }
    this.filterByCommemoratives();
    this.filterByUds();
    this.isLoading.set(false);
  }

  filterByCommemoratives() {
    if (this.isFilterByCommemoratives()) {
      this.eurosFiltered.set(this.eurosFiltered().filter(coin => coin.commemorative));
    }
  }

  filterByUds() {
    switch (this.optionsUdsSelected()?.id) {
      case 0:
        break;
      case 1:
        this.eurosFiltered.set(this.eurosFiltered().filter(coin => +coin.uds >= 1));
        break;
      case 2:
        this.eurosFiltered.set(this.eurosFiltered().filter(coin => +coin.uds === 0));
        break;
      default:
        break;
    }
  }

  async addInfo() {
    const pais = 'Bélgica'
    const año = '1999'
    const info = [
      {
        "country": pais,
        "year": año,
        "faceValue": "1 Céntimo",
        "mint": "",
        "conservation": "EBC",
        "description": "Rey Alberto II",
        "commemorative": "",
        "uds": "1",
        "idNum": "73",
        "observations": "Esto es una observación de prueba para ver cómo queda en la web y maquetarla en condiciones."
      },
      {
        "country": pais,
        "year": año,
        "faceValue": "2 Céntimos",
        "mint": "",
        "conservation": "SC",
        "description": "Rey Alberto II",
        "commemorative": "",
        "uds": "0",
        "idNum": "78",
        "observations": ""
      },
      {
        "country": pais,
        "year": año,
        "faceValue": "5 Céntimos",
        "mint": "",
        "conservation": "MBC",
        "description": "Rey Alberto II",
        "commemorative": "",
        "uds": "1",
        "idNum": "74",
        "observations": ""
      },
      {
        "country": pais,
        "year": año,
        "faceValue": "10 Céntimos",
        "mint": "",
        "conservation": "BC",
        "description": "Rey Alberto II",
        "commemorative": "",
        "uds": "1",
        "idNum": "75",
        "observations": ""
      },
      {
        "country": pais,
        "year": año,
        "faceValue": "20 Céntimos",
        "mint": "",
        "conservation": "RC",
        "description": "Rey Alberto II",
        "commemorative": "",
        "uds": "0",
        "idNum": "79",
        "observations": ""
      },
      {
        "country": pais,
        "year": año,
        "faceValue": "50 Céntimos",
        "mint": "",
        "conservation": "MC",
        "description": "Rey Alberto II",
        "commemorative": "",
        "uds": "1",
        "idNum": "76",
        "observations": ""
      },
      {
        "country": pais,
        "year": año,
        "faceValue": "1 Euro",
        "mint": "",
        "conservation": "EBC",
        "description": "Rey Alberto II",
        "commemorative": "",
        "uds": "1",
        "idNum": "77",
        "observations": ""
      },
      {
        "country": pais,
        "year": año,
        "faceValue": "2 Euros",
        "mint": "",
        "conservation": "",
        "description": "Rey Alberto II",
        "commemorative": "",
        "uds": "0",
        "idNum": "80",
        "observations": ""
      },
      {
        "country": pais,
        "year": año,
        "faceValue": "2 Euros",
        "mint": "",
        "conservation": "",
        "description": "Rey Alberto II",
        "commemorative": "conmemorativas",
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
