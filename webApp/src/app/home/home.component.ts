import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HomeFacade } from 'src/app/home/home.facade';
import { School } from 'src/app/shared/types/School';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'webApp';

  private schoolListSub: Subscription;
  public favoriteSchools: School[] = [];
  public checkoutForm = this.formBuilder.group({
    request: '',
  });

  constructor(
    private homeFacade: HomeFacade,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    homeFacade.setSchools();
    this.schoolListSub = homeFacade
      .getFavoriteSchoolList()
      .subscribe((data) => {
        this.favoriteSchools = data ?? [];
      });
  }

  // lifecycle hooks
  ngOnInit() {}
  ngOnDestroy(): void {
    this.schoolListSub.unsubscribe();
  }

  // A troca de páginas:
  goToDetailPage(school: School) {
    this.homeFacade.setCurrentSchool(school);
    this.router.navigate([`/school/${school.id}`]);
  }
}
