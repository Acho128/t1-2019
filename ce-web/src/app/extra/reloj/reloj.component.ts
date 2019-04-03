import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-reloj",
  templateUrl: "./reloj.component.html",
  styleUrls: ["./reloj.component.css"]
})
export class RelojComponent implements OnInit {
  @Input() huso: number;
  @Output() dateEmitter = new EventEmitter<Date>();
  
  fecha: Date=new Date();
  constructor() {
    this.fecha.setHours(this.fecha.getHours());
  }

  ngOnInit() {}

  emitDate() {
    this.dateEmitter.emit(this.fecha);
  }
}
