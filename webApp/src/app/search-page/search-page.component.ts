import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SchoolsService } from 'src/services/schools.service';
import { School } from 'src/types/School';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  public schools: School[];
  public checkoutForm = this.formBuilder.group({
    request: '',
  });

  constructor(
    private schoolService: SchoolsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.schools = schoolService.data;
    this.checkoutForm = schoolService.checkoutForm;
    this.onSubmit();
  }

  ngOnInit(): void {}
  // Consumindo API para buscar a escola
  public onSubmit(): void {
    if (this.checkoutForm.controls['request'].value) {
      this.schools = this.schoolService.data.filter((el: School) => {
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
      });
    } else {
      // Listar todos
      this.schools = this.schoolService.data;
    }
  }

  public goToDetailPage(id: number) {
    this.schoolService.setCurrentSchool(id);
    this.router.navigate([`/school/${id}`]);
  }
}
