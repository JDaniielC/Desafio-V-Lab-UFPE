import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { School } from 'src/app/shared/types/School';

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

@Injectable({ providedIn: 'root' })
export class HomeState {
  private currentSchool: BehaviorSubject<School | null> =
    new BehaviorSubject<School | null>(initialState);

  private favoriteSchools: BehaviorSubject<School[]> = new BehaviorSubject<
    School[]
  >([]);

  private schoolList: BehaviorSubject<School[]> = new BehaviorSubject<School[]>(
    []
  );

  public constructor() {}

  getSchoolList() {
    return this.schoolList.getValue();
  }

  setSchoolList(schoolList: School[]) {
    this.schoolList.next(schoolList);
  }

  getCurrentSchool() {
    return this.currentSchool.asObservable();
  }

  setCurrentSchool(school: School) {
    this.currentSchool.next(school);
  }

  getFavoriteSchools() {
    return this.favoriteSchools.asObservable();
  }

  setFavoriteSchool(school: School) {
    this.favoriteSchools.next([...this.favoriteSchools.getValue(), school]);
  }

  removeFavoriteSchool(idFavoriteSchool: number) {
    this.schoolList.value[idFavoriteSchool].favorite = false;
    const favorites = this.favoriteSchools
      .getValue()
      .filter((el) => el.id != idFavoriteSchool);
    this.favoriteSchools.next(favorites);
    console.log(this.favoriteSchools.value);
  }
}
