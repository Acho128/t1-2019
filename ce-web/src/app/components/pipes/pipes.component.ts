import { Component, OnInit } from "@angular/core";
import { DataStorageService } from "src/app/services/dataStorage/data-storage.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-pipes",
  templateUrl: "./pipes.component.html",
  styleUrls: ["./pipes.component.css"]
})
export class PipesComponent implements OnInit {
  nombre: string = "Cristhian Monge Camacho";
  curso: string = "Programación Web - UNA";
  numero1: number = 1100000000000.5556865966564;
  numero2: number = 16541685285.168486464861651111;
  numero3: number = 35153866816.516865;
  fechaNacimiento = new Date(1995, 2, 13);
  fechaActual = new Date();
  moneda: number = 1800.69;
  noticias: JSON;
  noticias$: any;
  urlYoutube: string = " https://www.youtube.com/embed/EtQMBrerfz4";
  constructor(private _datalocalStorage: DataStorageService) {
    this.noticias = _datalocalStorage.getObjectValue("noticias");
    //this.noticias$ = _datalocalStorage.getNoticiasAsync();
  }

  ngOnInit() {}
}
