import { Component, OnInit } from "@angular/core";
import { Noticia } from "../../models/noticia/noticia";
@Component({
  selector: "app-noticias-list",
  templateUrl: "./noticias-list.component.html",
  styleUrls: ["./noticias-list.component.css"]
})
export class NoticiasListComponent implements OnInit {
  noticias: Array<Noticia>;
  constructor() {}

  ngOnInit() {}
}
