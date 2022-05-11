import { Component, Input } from "@angular/core";

@Component({
  selector: "empty-list",
  templateUrl: "empty-list.html",
})
export class EmptyListComponent {
  @Input() favoritos: boolean = false;
  @Input() busca: boolean = false;

  constructor() {}
}
