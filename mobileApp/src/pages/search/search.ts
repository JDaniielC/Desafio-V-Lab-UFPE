import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { School } from "../../types/School";
import { SchoolService } from "../../services/schools/school.service";
import { FormBuilder } from "@angular/forms";
import { DetailPage } from "../detail/detail";

@Component({
  selector: "page-search",
  templateUrl: "search.html",
})
export class SearchPage {
  public schools: School[];
  private checkoutForm = this.formBuilder.group({
    request: "",
  });
  timeout: any;

  constructor(
    private navCtrl: NavController,
    public navParams: NavParams,
    private schoolService: SchoolService,
    private formBuilder: FormBuilder
  ) {
    this.schools = schoolService.data;
    this.checkoutForm = schoolService.checkoutForm;
    this.onSubmit();
  }

  // Consumindo API para buscar a escola
  onSubmit(): void {
    if (this.checkoutForm.controls["request"].value) {
      this.schools = this.schoolService.data.filter((el) => {
        return (
          el.noEntidade
            .toLowerCase()
            .indexOf(
              this.checkoutForm.controls["request"].value.toLowerCase()
            ) > -1 ||
          el.coEntidade
            .toString()
            .indexOf(
              this.checkoutForm.controls["request"].value.toLowerCase()
            ) > -1
        );
      });
    } else {
      // Listar todos
      this.schools = this.schoolService.data;
    }
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
}
