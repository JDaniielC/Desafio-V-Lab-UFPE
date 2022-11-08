import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeFacade } from 'src/app/home/home.facade';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  public checkoutForm = this.formBuilder.group({
    request: '',
  });
  timeout: any;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private homeFacade: HomeFacade,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public searchBounce() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.onSubmit();
    }, 1000);
  }

  private goToSearchPage() {
    this.router.navigate(['/search']);
  }

  public onSubmit() {
    this.homeFacade.checkoutForm = this.checkoutForm;
    if (this.router.url !== '/search') this.goToSearchPage();
  }
}
