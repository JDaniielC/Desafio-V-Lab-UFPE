import { Component } from "@angular/core";
import { Platform } from "ionic-angular";

@Component({
  selector: "tab-navigation",
  templateUrl: "tab-navigation.html",
})
export class TabNavigationComponent {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is("android");
  }
}
