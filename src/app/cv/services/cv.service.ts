import { Subject, catchError, of } from 'rxjs';
import { Cv } from '../model/cv';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({ providedIn: 'root' })
export class CvService {
  private selectCvSubject = new Subject<Cv>();
  selectCv$ = this.selectCvSubject.asObservable();
  constructor(private http: HttpClient) {
  }

  selectCv(cv: Cv) {
    this.selectCvSubject.next(cv);
  }
  getCvsFromAPI() {
    const url = 'https://apilb.tridevs.net/api/personnes';
    return this.http.get<Cv[]>(url).pipe(
      catchError((error) => {
        Swal.fire('Oops...', 'Something went wrong!', 'error');
        return of([
          new Cv(1, 'sellaouti', 'aymen', 'as.jpg'),
          new Cv(2, 'sellaouti', 'skander', 'cv.png'),
          new Cv(3, 'Dhaouadi', 'yassine', ''),
          new Cv(4, 'Mourali', 'sandra', '              ')
        ]);
      })
    )
  }
  getCvById(id: number) {
    const url = 'https://apilb.tridevs.net/api/personnes/' + id;
    return this.http.get<Cv>(url);
  }
  deleteCv(id: number) {
    const url = 'https://apilb.tridevs.net/api/personnes/' + id;
    return this.http.delete(url);
    
  }
}
