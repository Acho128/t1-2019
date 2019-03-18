import { Component, OnInit } from "@angular/core";
import { DataStorageService } from "../../services/dataStorage/data-storage.service";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private DataStorageService: DataStorageService) {
    DataStorageService.setObjectValue("paptito", 123);
    console.log(DataStorageService.getObjectValue("paptito"));
  }

  ngOnInit() {}
}
