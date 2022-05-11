import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastController } from "ionic-angular";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { School } from "../../types/School";

@Injectable()
export class ApiComponent {
  constructor(private http: HttpClient, private toastCtrl: ToastController) {}

  private endpoint = "http://157.230.55.217/api/escolas";

  fetchSchools(): Observable<School[]> {
    const toast = this.toastCtrl.create({
      message: "Escolas carregadas com sucesso!",
      duration: 3000,
    });

    return this.http
      .get<School[]>(this.endpoint)
      .pipe(tap(() => toast.present()));
  }
}
