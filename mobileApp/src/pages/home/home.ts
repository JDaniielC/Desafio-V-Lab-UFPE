import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular";
import { SchoolService } from "../../services/schools/school.service";
import { FormBuilder } from "@angular/forms";
import { School } from "../../types/School";
import { DetailPage } from "../detail/detail";
import { SearchPage } from "../search/search";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  styles: ["home.scss"],
})
export class HomePage implements OnInit {
  public favoriteSchools: School[];
  public checkoutForm = this.formBuilder.group({
    request: "",
  });

  timeout: any;

  constructor(
    private navCtrl: NavController,
    private schoolService: SchoolService,
    private formBuilder: FormBuilder
  ) {
    schoolService.setSchools();
    schoolService.getFavoriteSchools().subscribe((data) => {
      this.favoriteSchools = data;
    });
  }

  // lifecycle hooks
  ngOnInit() {}

  // A troca de páginas:
  goToSearchPage() {
    this.navCtrl.push(SearchPage);
  }
  goToDetailPage(id: number) {
    this.schoolService.setCurrentSchool(id);
    this.navCtrl.push(DetailPage);
  }

  searchBounce() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.onSubmit();
    }, 1000);
  }

  onSubmit() {
    this.schoolService.checkoutForm = this.checkoutForm;
    this.goToSearchPage();
  }
}
