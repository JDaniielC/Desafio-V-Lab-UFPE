import { Component, OnInit } from '@angular/core';
import { SchoolsService } from 'src/services/schools.service';
import { School } from 'src/types/School';

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

  constructor(public schoolService: SchoolsService) {
    schoolService.getCurrentSchool().subscribe((newData) => {
      this.schoolData = newData;
    });
  }

  public favorite() {
    const id = this.schoolData.id;
    this.schoolService.setFavoriteSchool(this.schoolData);
    this.schoolData.favorite = true;
    this.schoolService.data[id].favorite = true;
  }

  public unfavorite() {
    const id = this.schoolData.id;
    this.schoolService.deleteFavoriteSchool(id);
    this.schoolData.favorite = false;
  }

  ngOnInit(): void {}
}
