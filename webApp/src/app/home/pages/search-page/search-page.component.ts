import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeFacade } from 'src/app/home/home.facade';
import { School } from 'src/app/shared/types/School';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  public schools: School[] = [];
  public checkoutForm = this.formBuilder.group({
    request: '',
  });

  constructor(
    private homeFacade: HomeFacade,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.schools = homeFacade.getSchoolList();
    this.checkoutForm = homeFacade.checkoutForm;
    this.onSubmit();
  }

  ngOnInit(): void {}
  // Consumindo API para buscar a escola
  public onSubmit(): void {
    if (this.checkoutForm.controls['request'].value) {
      this.schools =
        this.homeFacade.getSchoolList().filter((el: School) => {
          return (
            el.noEntidade
              .toLowerCase()
              .indexOf(
                this.checkoutForm.controls['request'].value.toLowerCase()
              ) > -1 ||
            el.coEntidade
              .toString()
              .indexOf(
                this.checkoutForm.controls['request'].value.toLowerCase()
              ) > -1
          );
        }) ?? [];
    } else {
      // Listar todos
      this.schools = this.homeFacade.getSchoolList();
    }
  }

  public goToDetailPage(school: School) {
    this.homeFacade.setCurrentSchool(school);
    this.router.navigate([`/school/${school.id}`]);
  }
}
