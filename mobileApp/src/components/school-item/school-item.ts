import { Component, Input } from "@angular/core";
import { SchoolService } from "../../services/schools/school.service";
import { School } from "../../types/School";

@Component({
  selector: "school-item",
  templateUrl: "school-item.html",
})
export class SchoolItemComponent {
  @Input() item?: School;
  @Input() h1?: boolean;
  @Input() h2?: boolean;
  @Input() cod?: boolean;

  constructor(private schoolService: SchoolService) {}

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
