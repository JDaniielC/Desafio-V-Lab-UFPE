import { Component, Input, OnInit } from '@angular/core';
import { SchoolsService } from 'src/services/schools.service';
import { School } from 'src/types/School';

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

  constructor(private schoolService: SchoolsService) {}

  ngOnInit(): void {}

  favorite(cod: number): void {
    this.schoolService.setFavoriteSchool(this.item);
    this.item.favorite = true;
    if (this.schoolService.data[cod])
      this.schoolService.data[cod].favorite = true;
  }

  unfavorite(cod: number): void {
    this.schoolService.deleteFavoriteSchool(cod);
    this.item.favorite = false;
  }
}
