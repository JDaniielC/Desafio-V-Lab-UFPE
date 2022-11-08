import { Component, Input, OnInit } from '@angular/core';
import { HomeFacade } from 'src/app/home/home.facade';
import { School } from 'src/app/shared/types/School';

@Component({
  selector: 'app-school-item',
  templateUrl: './school-item.component.html',
  styleUrls: ['./school-item.component.scss'],
})
export class SchoolItemComponent implements OnInit {
  @Input() item: School = {
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
  @Input() h1?: boolean;
  @Input() h2?: boolean;
  @Input() cod?: boolean;

  constructor(private homeFacade: HomeFacade) {}

  ngOnInit(): void {}

  favorite(cod: number): void {
    this.homeFacade.setFavoriteSchool(this.item);
    this.item.favorite = true;
  }

  unfavorite(cod: number): void {
    this.homeFacade.removeFavoriteSchool(cod);
    this.item.favorite = false;
  }
}
