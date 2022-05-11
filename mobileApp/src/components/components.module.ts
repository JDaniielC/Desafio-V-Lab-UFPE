import { NgModule } from "@angular/core";
import { SchoolItemComponent } from "./school-item/school-item";
import { EmptyListComponent } from "./empty-list/empty-list";
import { TabNavigationComponent } from './tab-navigation/tab-navigation';
@NgModule({
  declarations: [SchoolItemComponent, EmptyListComponent,
    TabNavigationComponent],
  imports: [],
  exports: [SchoolItemComponent, EmptyListComponent,
    TabNavigationComponent],
})
export class ComponentsModule {}
