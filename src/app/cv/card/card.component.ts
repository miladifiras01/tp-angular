import { Component, Input } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { Observable } from "rxjs";
import { EmbaucheService } from "../services/embauche.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  cv: Cv = new Cv();
  cv$: Observable<Cv>;
  constructor(private cvService: CvService, private embaucheService: EmbaucheService) {
    this.cv$ = this.cvService.selectCv$;
    this.cv$.subscribe((cv) => (this.cv = cv));
  }
  embaucheCv(){
    this.embaucheService.addEmbauche(this.cv);
  }
}
