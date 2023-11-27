import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Cv } from "../model/cv";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent {
  @Input() cvs: Cv[] | null = [];
  @Output()
  cvExperience = new EventEmitter();
  @Input({required: false}) showButtons: boolean = true;
  isHidden = true;
  @Output()
  selectCv = new EventEmitter<Cv>();
  /*   @Output()
  forwardCv = new EventEmitter(); */
  showSenior: boolean = true;
  showJunior: boolean = false;
  constructor() {}
  showHide() {
    this.isHidden = !this.isHidden;
  }
  setSenior() {
    this.showSenior = true;
    this.showJunior = false;
    this.cvExperience.emit("Senior");
  }
  setJunior() {
    this.showSenior = false;
    this.showJunior = true;
    this.cvExperience.emit("Junior");
  }
  onSelectCv(cv: Cv) {
    this.selectCv.emit(cv);
  }
}
