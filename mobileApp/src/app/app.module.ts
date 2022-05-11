import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { SchoolService } from "../services/schools/school.service";
import { HttpClientModule } from "@angular/common/http";
import { DetailPage } from "../pages/detail/detail";
import { SearchPage } from "../pages/search/search";
import { SchoolItemComponent } from "../components/school-item/school-item";
import { ApiComponent } from "../services/api";
import { EmptyListComponent } from "../components/empty-list/empty-list";
import { TabNavigationComponent } from "../components/tab-navigation/tab-navigation";

@NgModule({
  // Adicionado em declarations e entryComponents as páginas adicionais
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    SearchPage,
    SchoolItemComponent,
    EmptyListComponent,
    TabNavigationComponent,
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpClientModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, DetailPage, SearchPage],
  providers: [
    ApiComponent,
    SchoolService,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
})
export class AppModule {}
