import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

import { School } from 'src/app/shared/types/School';

import { HomeApi } from './api/home.api';
import { HomeState } from './state/home.state';

@Injectable({
  providedIn: 'root',
})
export class HomeFacade {
  public idSchool: number = 0;
  public checkoutForm = this.formBuilder.group({
    request: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private readonly api: HomeApi,
    private readonly state: HomeState
  ) {}

  setSchools() {
    this.api.fetchSchools().subscribe((response) => {
      let data: School[] = [];
      response.map((item, index) => {
        const element = {
          ...item,
          id: index,
          favorite: false,
        };
        return data.push(element);
      });
      this.setSchoolList(data);
    });
  }

  getSchoolList() {
    return this.state.getSchoolList();
  }

  setSchoolList(schoolList: School[]) {
    this.state.setSchoolList(schoolList);
  }

  getCurrentSchool(): Observable<School | null> {
    return this.state.getCurrentSchool();
  }

  setCurrentSchool(school: School) {
    this.state.setCurrentSchool(school);
  }

  getFavoriteSchoolList(): Observable<School[] | null> {
    return this.state.getFavoriteSchools();
  }

  setFavoriteSchool(school: School) {
    return this.state.setFavoriteSchool(school);
  }

  removeFavoriteSchool(idSchool: number) {
    return this.state.removeFavoriteSchool(idSchool);
  }
}
