import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SchoolsService } from 'src/services/schools.service';
import { School } from 'src/types/School';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'webApp';

  public favoriteSchools: School[] = [];
  public checkoutForm = this.formBuilder.group({
    request: '',
  });

  constructor(
    private schoolService: SchoolsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    schoolService.setSchools();
    schoolService.getFavoriteSchools().subscribe((data: School[]) => {
      this.favoriteSchools = data;
    });
  }

  // lifecycle hooks
  ngOnInit() {}

  // A troca de páginas:
  goToDetailPage(id: number) {
    this.schoolService.setCurrentSchool(id);
    this.router.navigate([`/school/${id}`]);
  }
}
