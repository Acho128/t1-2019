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
      id: 0,
      titulo: "Noticia 1",
      //Imagen: "DSC1.jpg",
      imagen: "../../../assets/imagenes/DSC1.JPG",
      descripcion: "Descripcion noticia 1",
      fechaCreacion: "18-03-2019",
      ultimaModificacion: "18-03-2019"
    },
    {
      id: 1,
      titulo: "Noticia 2",
      //Imagen: "DSC2.jpg",
      imagen: "../../../assets/imagenes/DSC2.JPG",
      descripcion: "Descripcion noticia 2",
      fechaCreacion: "19-03-2019",
      ultimaModificacion: "19-03-2019"
    },
    {
      id: 2,
      titulo: "Noticia 3",
      //Imagen: "DSC3.jpg",
      imagen: "../../../assets/imagenes/DSC3.JPG",
      descripcion: "Descripcion noticia 3",
      fechaCreacion: "20-03-2019",
      ultimaModificacion: "20-03-2019"
    },
    {
      id: 3,
      titulo: "Noticia 4",
      //Imagen: "DSC4.jpg",
      imagen: "../../../assets/imagenes/DSC4.JPG",
      descripcion: "Descripcion noticia 4",
      fechaCreacion: "21-03-2019",
      ultimaModificacion: "21-03-2019"
    }
  ];

  constructor(private DataStorageService: DataStorageService) {
    ///DataStorageService.setObjectValue("noticias", this.jsonNoticias);
  }

  ngOnInit() {}
}
