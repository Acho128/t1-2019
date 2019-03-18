import { Component, OnInit } from "@angular/core";
import { Noticia } from "../../models/noticia/noticia";
import { DataStorageService } from "../../services/dataStorage/data-storage.service";
@Component({
  selector: "app-noticias-list",
  templateUrl: "./noticias-list.component.html",
  styleUrls: ["./noticias-list.component.css"]
})
export class NoticiasListComponent implements OnInit {
  public noticias: Array<Noticia>;
  constructor(private _DataStorageService: DataStorageService) {
    this.noticias = _DataStorageService.getObjectValue("noticias");
  }

  ngOnInit() {
    //this.noticias = this._DataStorageService.getObjectValue("noticias");
  }
}
