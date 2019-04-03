import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-horarios-list',
  templateUrl: './horarios-list.component.html',
  styleUrls: ['./horarios-list.component.css']
})

export class HorariosListComponent implements OnInit {
  reloj:[];
  huso:number=50;
  modalRef: BsModalRef;
  relojEvento:Date;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  showDate(fechaAMostrar:Date,template: TemplateRef<any>){
    //alert(fechaAMostrar);
    this.relojEvento=fechaAMostrar;
    this.modalRef = this.modalService.show(template);
  }
}
