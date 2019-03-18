import { Component, OnInit } from "@angular/core";
import { DataStorageService } from "../../services/dataStorage/data-storage.service";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  private jsonNoticias: any = [
    {
      Id: 0,
      Titulo: "Noticia 1",
      //Imagen: "DSC1.jpg",
      Imagen: "../../../assets/imagenes/DSC1.JPG",
      Descripcion: "Descripcion noticia 1",
      fechaCreacion: "18-03-2019",
      ultimaModificacion: "18-03-2019"
    },
    {
      Id: 1,
      Titulo: "Noticia 2",
      //Imagen: "DSC2.jpg",
      Imagen: "../../../assets/imagenes/DSC2.JPG",
      Descripcion: "Descripcion noticia 2",
      fechaCreacion: "19-03-2019",
      ultimaModificacion: "19-03-2019"
    },
    {
      Id: 2,
      Titulo: "Noticia 2",
      //Imagen: "DSC3.jpg",
      Imagen: "../../../assets/imagenes/DSC3.JPG",
      Descripcion: "Descripcion noticia 2",
      fechaCreacion: "20-03-2019",
      ultimaModificacion: "20-03-2019"
    },
    {
      Id: 3,
      Titulo: "Noticia 3",
      //Imagen: "DSC4.jpg",
      Imagen: "../../../assets/imagenes/DSC4.JPG",
      Descripcion: "Descripcion noticia 3",
      fechaCreacion: "21-03-2019",
      ultimaModificacion: "21-03-2019"
    }
  ];

  constructor(private DataStorageService: DataStorageService) {
    //DataStorageService.setObjectValue("noticias", this.jsonNoticias);
  }

  ngOnInit() {}
}
