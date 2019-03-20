import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { DataStorageService } from "../../services/dataStorage/data-storage.service";
@Component({
  selector: "app-noticias-upsert",
  templateUrl: "./noticias-upsert.component.html",
  styleUrls: ["./noticias-upsert.component.css"]
})
export class NoticiasUpsertComponent implements OnInit {
  public formGroup: FormGroup;
  formBuilder: FormBuilder;
  noticiaId: number;
  constructor(
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService
  ) {
    this.formBuilder = new FormBuilder();
    //+ = convierte todo a enteros
    this.noticiaId = +this.route.snapshot.params["id"];
    this.iniciarNoticia();
    this.cargarNoticia(this.noticiaId);
  }

  ngOnInit() {}

  iniciarNoticia = () => {
    this.formGroup = this.formBuilder.group({
      id: ["(nueva)", [Validators.required]],
      titulo: ["", [Validators.required]],
      imagen: ["", [Validators.required]],
      descripcion: ["", [Validators.required, Validators.minLength(15)]],
      fechaCreacion: [new Date()],
      ultimaModificacion: [new Date()]
    });
  };

  cargarNoticia = (id: number) => {
    const listaNoticias = this.dataStorageService.getObjectValue("noticias");
    listaNoticias.forEach(noticia => {
      if (noticia.id == id) {
        this.formGroup = this.formBuilder.group({
          id: [id, [Validators.required]],
          titulo: [noticia.titulo, [Validators.required]],
          imagen: [noticia.imagen, [Validators.required]],
          descripcion: [
            noticia.descripcion,
            [Validators.required, Validators.minLength(15)]
          ],
          fechaCreacion: [noticia.fechaCreacion],
          ultimaModificacion: [noticia.ultimaModificacion]
        });
      }
    });
  };

  guardarData(_formGroup: FormGroup) {
    console.log(_formGroup);
    if (this.formGroup.valid) {
      let noticiaIndex = -1;
      const listaNoticias = this.dataStorageService.getObjectValue("noticias");
      listaNoticias.forEach((noticia, index) => {
        if (noticia.id == this.formGroup.value.id) {
          noticiaIndex = index;
        }
      });
      if (noticiaIndex >= 0) {
        listaNoticias[noticiaIndex] = this.formGroup.value;
      } else {
        this.formGroup.value.id = listaNoticias.length;
        listaNoticias.push(this.formGroup.value);
      }
      this.formGroup.patchValue({ ultimaModificacion: new Date() });
      this.dataStorageService.setObjectValue("noticias", listaNoticias);
      alert("Informacion guardada");
    } else {
      alert("Debe completar la informacion correctamente");
    }
  }
}
