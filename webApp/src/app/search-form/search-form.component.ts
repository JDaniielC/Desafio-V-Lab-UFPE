import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SchoolsService } from 'src/services/schools.service';

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
    private formBuilder: FormBuilder,
    private schoolService: SchoolsService,
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
    this.schoolService.checkoutForm = this.checkoutForm;
    if (this.router.url !== '/search') this.goToSearchPage();
  }
}
