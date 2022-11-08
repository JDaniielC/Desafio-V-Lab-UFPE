import { Component, OnInit } from '@angular/core';
import { HomeFacade } from 'src/app/home/home.facade';
import { School } from 'src/app/shared/types/School';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {
  public schoolData: School = {
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

  constructor(public homeFacade: HomeFacade) {
    homeFacade.getCurrentSchool().subscribe((newData) => {
      this.schoolData = newData ?? this.schoolData;
    });
  }

  public favorite() {
    this.homeFacade.setFavoriteSchool(this.schoolData);
    this.schoolData.favorite = true;
  }

  public unfavorite() {
    const id = this.schoolData.id;
    this.homeFacade.removeFavoriteSchool(id);
    this.schoolData.favorite = false;
  }

  ngOnInit(): void {}
}
