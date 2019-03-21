import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Noticia } from "src/app/models/noticia/noticia";

@Injectable({
  providedIn: "root"
})
export class DataStorageService {
  constructor() {}

  setObjectValue = (key: string, objectValue: any) => {
    //debugger;
    if (window.localStorage) {
      localStorage.setItem(key, JSON.stringify(objectValue));
    } else {
      throw new Error(
        "No se puede almacenar la información, porque no está habilitado el localStorage"
      );
    }
  };
  getObjectValue = (key: string) => {
    //debugger;
    if (window.localStorage) {
      const DATA = JSON.parse(localStorage.getItem(key));
      if (DATA) {
        return DATA;
      } else {
        this.setObjectValue(key, null);
        return null;
        //throw new Error("No se encontró el valor ${key} en el localStorage");
      }
    } else {
      throw new Error(
        "No se puede obtener la información, porque no está habilitado el localStorage"
      );
    }
  };

  getNoticiasAsync = (): Observable<Noticia[]> => {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.getObjectValue("noticias"));
      }, 3000);
    });
  };
}
