import { Component } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { Observable, distinctUntilChanged } from "rxjs";
import Swal from "sweetalert2";
import { EmbaucheService } from "../services/embauche.service";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  nb = 0;
  cvs$: Observable<Cv[]>;
  constructor(private cvService: CvService ,private embaucheService: EmbaucheService ) {
    this.cvService.selectCv$
      .pipe(distinctUntilChanged())
      .subscribe(() => this.nb++);
    this.cvs$ = this.cvService.getCvsFromAPI();
  }
  get embauches(){
    return this.embaucheService.getEmbauches();
  }
}
