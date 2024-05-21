import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NumistaService } from '../../../services/numista.service';
import { getNametoFlags } from '../../../shared/helpers/normalize-names';
import { EuroValuePipe } from "../../../shared/pipes/euro-value.pipe";
import { FirebaseService } from '../../../services/firebase.service';
import { EuroCoin } from '../../../interfaces/euroCoin.interface';
import { BadgeModule } from 'primeng/badge';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CommonModule, Location } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { conservationStates, getConservationColors } from '../../../shared/config/conservation-states';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-euros-detail',
  standalone: true,
  templateUrl: './euros-detail.component.html',
  styleUrl: './euros-detail.component.scss',
  imports: [CommonModule, EuroValuePipe, BadgeModule, ButtonModule, DialogModule, DropdownModule, FormsModule, InputNumberModule, InputTextareaModule, FloatLabelModule, ProgressSpinnerModule, TagModule, TooltipModule]
})
export default class EurosDetailComponent {
  coin: EuroCoin | null = null;
  id: string | undefined = undefined;
  getConservationColors = getConservationColors;
  getNametoFlags = getNametoFlags;

  isLoading = false;

  // Modal dialog variables
  isVisibleEditModal = false;
  conservationStates = conservationStates;
  conservationStateSelected: any;
  unitsSelected: number = 0;
  editedObservations: string = '';

  dataCoin = {
    "id": 75,
    "url": "https://es.numista.com/catalogue/pieces75.html",
    "title": "10 Euro Cents - Albert II (1st map, 1st type, 1st portrait)",
    "category": "coin",
    "issuer": {
      "code": "belgique",
      "name": "Bélgica"
    },
    "min_year": 1999,
    "max_year": 2006,
    "type": "Moneda circulante normal",
    "ruler": [
      {
        "id": 1170,
        "name": "Albert II",
        "wikidata_id": "Q3911",
        "group": {
          "id": 530,
          "name": "House of Belgium"
        }
      }
    ],
    "value": {
      "text": "10 Euro Cents",
      "numeric_value": 0.1,
      "currency": {
        "id": 9003,
        "name": "Euro",
        "full_name": "Euro (2002-date)"
      }
    },
    "demonetization": {
      "is_demonetized": false
    },
    "shape": "Circular",
    "composition": {
      "text": "Oro nórdico (89% Copper, 5% Aluminium, 5% Zinc, 1% Tin)"
    },
    "technique": {
      "text": "<a href=\"/catalogue/technique.php?id=3\">Acuñación a máquina</a>"
    },
    "obverse": {
      "engravers": [
        "Jan Alfons Keustermans"
      ],
      "description": "Retrato de perfil izquierdo del rey Alberto II rodeado por las doce estrellas de Europa, entre las que se sitúa su monograma: una \"A\" mayúscula con el número romano \"II\" debajo de una corona.",
      "lettering": "A II 2004",
      "lettering_scripts": [
        {
          "name": "Latina"
        }
      ],
      "picture": "https://es.numista.com/catalogue/photos/belgique/3429-original.jpg",
      "thumbnail": "https://es.numista.com/catalogue/photos/belgique/3429-180.jpg",
      "picture_copyright": "Joseph Kunnappally"
    },
    "reverse": {
      "engravers": [
        "Luc Luycx"
      ],
      "description": "Un mapa, junto al valor facial, simboliza la reunión de las quince naciones de la Unión Europea",
      "lettering": "10 EURO CENT LL",
      "lettering_scripts": [
        {
          "name": "Latina"
        }
      ],
      "picture": "https://es.numista.com/catalogue/photos/belgique/3430-original.jpg",
      "thumbnail": "https://es.numista.com/catalogue/photos/belgique/3430-180.jpg",
      "picture_copyright": "Joseph Kunnappally"
    },
    "comments": "<span style=\"text-decoration:underline;\"><span style=\"font-weight:bold;\">Distinción entre las variedades de 1999:</span></span><br />\r\nAnverso 1 :<br />\r\nEl grabado es grueso<br />\r\n1) La base de la corona está<br />\r\nmuy regularmente curvada<br />\r\n2) El soporte de la cruz es estrecho y está cerca de la corona<br />\r\n3) La punta de la A está muy cerca de la corona<br /><br />\r\nAnverso 2:<br />\r\nEl grabado es grueso<br />\r\n1) La base de la corona<br />\r\nes achatada<br />\r\n2) El soporte de la cruz es estrecho y está cerca de la corona<br />\r\n3) La punta de la A está muy cerca de la corona<br /><br />\r\nAnverso 3:<br />\r\nEl grabado es fino<br />\r\n1) La base de la corona está curvada muy uniformemente<br />\r\n2) El soporte de la cruz es ancho y está ligeramente separado de la corona<br />\r\n3) La punta de la A está alejada de la corona<br />\r\n<a href=\"https://en.numista.com/catalogue/images/5c88c0fcca3b5.jpg\"><img src=\"https://en.numista.com/catalogue/images/miniatures/5c88c0fcca3b5.jpg\" alt=\"\" width=\"200\" height=\"105\" /></a><br /><br />\r\n<span style=\"text-decoration:underline;\"><span style=\"font-style:italic;\"><span style=\"font-weight:bold;\">BU 1999 - 2001</span></span></span><br />\r\nSerie de introducción del euro con monedas de 1999 a 2001<br />\r\n<span style=\"font-style:italic;\"><a href=\"https://en.numista.com/catalogue/images/63936acc26541.jpg\"><img src=\"https://en.numista.com/catalogue/images/miniatures/63936acc26541.jpg\" alt=\"\" width=\"199\" height=\"111\" /></a></span><br /><br />\r\n<span style=\"text-decoration:underline;\"><span style=\"font-style:italic;\"><span style=\"font-weight:bold;\">BU 2002</span></span></span><br />\r\n1 - Serie anual en caja - las Espuelas de Oro a 100.000 + 1 medalla (700 años de la Batalla de las Espuelas de Oro: 1302 - 2002)<br />\r\n<a href=\"https://en.numista.com/catalogue/images/5f7b5544c8ffc.jpg\"><img src=\"https://en.numista.com/catalogue/images/miniatures/5f7b5544c8ffc.jpg\" alt=\"\" width=\"200\" height=\"103\" /></a><br />\r\n2 - Adiós al franco, bienvenido al euro, 20.000 ejemplares<br />\r\n<a href=\"https://en.numista.com/catalogue/images/5f7b5552d0539.jpg\"><img src=\"https://en.numista.com/catalogue/images/miniatures/5f7b5552d0539.jpg\" alt=\"\" width=\"200\" height=\"143\" /></a><br />\r\n3 - Ciclismo en carretera CM, 20.000 ejemplares<br />\r\n<span style=\"font-style:italic;\">imagen por encontrar</span><br /><br />\r\n<span style=\"text-decoration:underline;\"><span style=\"font-style:italic;\"><span style=\"font-weight:bold;\">BU 2003</span></span></span><br />\r\n1 - 50 años de TV en Bélgica + 1 medalla (50 años de TV en Bélgica) 100.000 ejemplares<br />\r\n<a href=\"https://en.numista.com/catalogue/images/5f7b515bcda37.jpg\"><img src=\"https://en.numista.com/catalogue/images/miniatures/5f7b515bcda37.jpg\" alt=\"\" width=\"188\" height=\"250\" /></a><br />\r\n2- 100 años de Ford, 15.000 ejemplares<br />\r\n<span style=\"font-style:italic;\">imagen por encontrar</span><br />\r\n3 - Nacimiento, 10.000 ejemplares<br />\r\n<span style=\"font-style:italic;\">imagen por encontrar</span><br />\r\n4 - Boda, 10.000 ejemplares<br />\r\n<span style=\"font-style:italic;\">imagen por encontrar</span><br /><br />\r\n<span style=\"text-decoration:underline;\"><span style=\"font-style:italic;\"><span style=\"font-weight:bold;\">BU 2004</span></span></span><br />\r\n1 - 140 años de la Cruz Roja 60.000 ejemplares + 1 medalla clásica<br />\r\n<a href=\"https://en.numista.com/catalogue/images/5f7b5dba80e18.jpg\"><img src=\"https://en.numista.com/catalogue/images/miniatures/5f7b5dba80e18.jpg\" alt=\"\" width=\"200\" height=\"111\" /></a><br />\r\n2 - 140 años de la Cruz Roja + 1 medalla con la cruz pintada de rojo, 2.000 ejemplares<br />\r\n<span style=\"font-style:italic;\">imagen por encontrar</span><br />\r\n3 - Nacimiento, 10.000 ejemplares<br />\r\n<span style=\"font-style:italic;\">imagen por encontrar</span><br />\r\n4 - Boda, 10.000 ejemplares<br />\r\n<span style=\"font-style:italic;\">imagen por encontrar</span><br /><br />\r\n<span style=\"text-decoration:underline;\"><span style=\"font-style:italic;\"><span style=\"font-weight:bold;\">BU 2005</span></span></span><br />\r\n1 - Grand' Place + 1 medalla sin colorear 38 000 ejemplares<br />\r\n<a href=\"https://en.numista.com/catalogue/images/5f7b609c5a7fa.jpg\"><img src=\"https://en.numista.com/catalogue/images/miniatures/5f7b609c5a7fa.jpg\" alt=\"\" width=\"200\" height=\"94\" /></a><br />\r\n2 - Grand' Place + 1 medalla coloreada a 2 000 ejemplares<br />\r\n<span style=\"font-style:italic;\">imagen por encontrar</span><br /><br />\r\n<span style=\"text-decoration:underline;\"><span style=\"font-style:italic;\"><span style=\"font-weight:bold;\">BU 2006</span></span></span><br />\r\n1 - Beguinajes flamencos + 1 medalla sin colorear 38 000 ejemplares<br />\r\n<a href=\"https://en.numista.com/catalogue/images/5f7b61958ae38.jpg\"><img src=\"https://en.numista.com/catalogue/images/miniatures/5f7b61958ae38.jpg\" alt=\"\" width=\"200\" height=\"105\" /></a><br />\r\n2 - Los beguinajes flamencos + 1 medalla coloreada en 2 000 ejemplares<br />\r\n<span style=\"font-style:italic;\">imagen por encontrar</span>",
    "related_types": [
      {
        "id": 6296,
        "title": "10 Euro Cents - Albert II (2nd map, 2nd type, 1st portrait)",
        "category": "coin",
        "country": {
          "code": "belgique",
          "name": "Bélgica"
        },
        "minYear": 2009,
        "maxYear": 2013
      }
    ],
    "references": [
      {
        "catalogue": {
          "id": 3,
          "code": "KM"
        },
        "number": "227"
      },
      {
        "catalogue": {
          "id": 192,
          "code": "LA"
        },
        "number": "BEM-4.1"
      },
      {
        "catalogue": {
          "id": 24,
          "code": "Schön"
        },
        "number": "205"
      }
    ],
    "weight": 4.1,
    "size": 19.75,
    "thickness": 1.93,
    "orientation": "medal",
    "edge": {
      "description": "Indentado",
      "picture": "https://es.numista.com/catalogue/photos/belgique/3062-original.jpg",
      "thumbnail": "https://es.numista.com/catalogue/photos/belgique/3062-180.jpg",
      "picture_copyright": "Cyrillius"
    },
    "mints": [
      {
        "id": "1338",
        "name": "Royal Mint of Belgium"
      }
    ]
  }

  constructor(
    private _route: ActivatedRoute,
    private _firebaseService: FirebaseService,
    private _numistaServices: NumistaService,
    private _location: Location
  ) { }

  async ngOnInit() {
    this.isLoading = true;
    this.id = this._route.snapshot.paramMap.get('id')!;
    await this.getCoinById(this.id)
    console.log(this.coin);

    // this._numistaServices.getCoinByIdNum(this.idNum).subscribe(coin => {
    //   console.log(coin);
    // })
  }

  async getCoinById(id: string) {
    try {
      this.coin = await this._firebaseService.getCoinById(id)
      this.conservationStateSelected = this.conservationStates.find(state => state.
        name === this.coin!.conservation
      )
      this.unitsSelected = +this.coin?.uds!
      this.editedObservations = this.coin?.observations!
      this.isLoading = false;
    } catch (error) {
      console.error(error);
      this.isLoading = false;
    }
  }

  async updateCoin() {
    this.isLoading = true;
    try {
      await this._firebaseService.updateCoin(this.id!, {
        conservation: this.conservationStateSelected!.name,
        uds: this.unitsSelected.toString(),
        observations: this.editedObservations
      })
      this.getCoinById(this.id!)
    } catch (error) {
      console.log(error);
    }
    this.isVisibleEditModal = false;
  }

  goBack() {
    this._location.back();
  }

  showEditModal() {
    this.isVisibleEditModal = true;
  }
}
