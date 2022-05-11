import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
// Import types
import { School } from "../../types/School";
import { FormBuilder } from "@angular/forms";
import { ApiComponent } from "../api";

@Injectable()
export class SchoolService {
  // Variáveis que serão utilizadas:
  public data: School[] = [];
  public idSchool: number;
  public checkoutForm = this.formBuilder.group({
    request: "",
  });
  // Carregamento de favoritos do root (home) deve ser feito
  // por meio de um subscribe, pois não recarrega a página,
  // e por isso é utilizado o behaviorSubject
  private favoriteSchools: BehaviorSubject<School[]> = new BehaviorSubject<
    School[]
  >([]);
  private currentSchool: BehaviorSubject<School> = new BehaviorSubject<School>(
    null
  );
  // https://backefront.com.br/como-usar-behavior-subject/

  constructor(private formBuilder: FormBuilder, private api: ApiComponent) {}

  setSchools() {
    this.api.fetchSchools().subscribe((response) => {
      response.map((item, index) => {
        const element = {
          id: index,
          favorite: false,
          nuAnoCenso: item.nuAnoCenso,
          coEntidade: item.coEntidade,
          noEntidade: item.noEntidade,
          tpDependencia: item.tpDependencia,
          localizacao: item.localizacao,
          noRegiao: item.noRegiao,
          coUf: item.coUf,
          sgUf: item.sgUf,
          coMunicipio: item.coMunicipio,
          noMunicipio: item.noMunicipio,
        };
        return this.data.push(element);
      });
    });
  }
  // Para tela de detalhes
  setCurrentSchool(newSchoolID: number) {
    this.currentSchool.next(this.data[newSchoolID]);
  }
  getCurrentSchool() {
    // Utilizando o observable pelo subscribe.
    return this.currentSchool.asObservable();
  }

  // Para tela principal de favoritos
  getFavoriteSchools() {
    // Utilizando o observable para dar subscribe.
    return this.favoriteSchools.asObservable();
  }

  setFavoriteSchool(newFavoriteSchool: School) {
    this.favoriteSchools.next([
      ...this.favoriteSchools.getValue(),
      newFavoriteSchool,
    ]);
  }

  deleteFavoriteSchool(idFavoriteSchool: number) {
    this.data[idFavoriteSchool].favorite = false;
    const favorites = this.favoriteSchools
      .getValue()
      .filter((el) => el.favorite);
    this.favoriteSchools.next(favorites);
  }
}
