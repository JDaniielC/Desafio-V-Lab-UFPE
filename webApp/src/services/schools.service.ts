import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { School } from 'src/types/School';
import { ApiService } from './api.service';

const initialState: School = {
  id: 0,
  favorite: false,
  nuAnoCenso: 0,
  coEntidade: 0,
  noEntidade: '',
  tpDependencia: 0,
  localizacao: '',
  noRegiao: '',
  coUf: 0,
  sgUf: '',
  coMunicipio: 0,
  noMunicipio: '',
};

@Injectable({
  providedIn: 'root',
})
export class SchoolsService {
  public data: School[] = [];
  public idSchool: number = 0;
  public checkoutForm = this.formBuilder.group({
    request: '',
  });

  private favoriteSchools: BehaviorSubject<School[]> = new BehaviorSubject<
    School[]
  >([]);
  private currentSchool: BehaviorSubject<School> = new BehaviorSubject<School>(
    initialState
  );

  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

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
