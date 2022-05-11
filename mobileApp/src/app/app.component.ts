import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { SearchPage } from "../pages/search/search";
import { HomePage } from "../pages/home/home";

@Component({
  templateUrl: "app.html",
})
export class MyApp {
  // Navegação é colocada aqui:
  rootPage: any = HomePage;
  buscar: any;
  //https://ionicframework.com/docs/v3/components/#tabs
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.buscar = SearchPage;
    });
  }
}
