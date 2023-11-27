import { ToastrService } from 'ngx-toastr';
import { Cv } from '../model/cv';
import { Injectable } from '@angular/core';
// import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  private embaucheList: Cv[] = [];
  constructor(private toastr: ToastrService) {}

  addEmbauche(cv: Cv) {
    let tempCv = this.embaucheList.find((c) => c.id === cv.id);
    if (!tempCv) {
      this.embaucheList.push(cv);
      this.toastr.success('Cv hired successfully!', 'Success');
    }
    else{
      // Swal.fire('Oops...', 'This Cv is already hired!', 'error');
      this.toastr.error('This Cv is already hired!', 'Oops...');
    }
  }

  getEmbauches() {
    return this.embaucheList;
  }
}
