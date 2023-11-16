import { Cv } from '../model/cv';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  private embaucheList: Cv[] = [];
  constructor() {}

  addEmbauche(cv: Cv) {
    let tempCv = this.embaucheList.find((c) => c.id === cv.id);
    if (!tempCv) {
      this.embaucheList.push(cv);
    }
    else{
      Swal.fire('Oops...', 'This Cv is already hired!', 'error');
    }
  }

  getEmbauches() {
    return this.embaucheList;
  }
}
