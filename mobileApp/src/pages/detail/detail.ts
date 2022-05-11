import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { SchoolService } from "../../services/schools/school.service";
import { School } from "../../types/School";

@Component({
  selector: "page-detail",
  templateUrl: "detail.html",
  styles: ["detail.scss"],
})
export class DetailPage {
  public schoolData: School;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public schoolService: SchoolService
  ) {
    schoolService.getCurrentSchool().subscribe((newData) => {
      this.schoolData = newData;
    });
  }

  favorite() {
    const id = this.schoolData.id;
    this.schoolService.setFavoriteSchool(this.schoolData);
    this.schoolData.favorite = true;
    this.schoolService.data[id].favorite = true;
  }

  unfavorite() {
    const id = this.schoolData.id;
    this.schoolService.deleteFavoriteSchool(id);
    this.schoolData.favorite = false;
  }
}
