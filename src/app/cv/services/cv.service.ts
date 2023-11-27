import { Observable, Subject, catchError, of } from 'rxjs';
import { Cv } from '../model/cv';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class CvService {
  private selectCvSubject = new Subject<Cv>();
  selectCv$ = this.selectCvSubject.asObservable();
  fakeCvs = [
    new Cv(1, 'sellaouti', 'aymen', 'as.jpg', 45),
    new Cv(2, 'sellaouti', 'skander', 'cv.png', 10),
    new Cv(3, 'Dhaouadi', 'yassine', '', 22),
    new Cv(4, 'Mourali', 'sandra', '              ', 22),
  ];
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  selectCv(cv: Cv) {
    this.selectCvSubject.next(cv);
  }
  getCvsFromAPI() {
    const url = 'https://apilb.tridevs.net/api/personnes';
    return this.http.get<Cv[]>(url).pipe(
      catchError((error) => {
        // Swal.fire('Oops...', 'Something went wrong!', 'error');
        this.toastr.error('Something went wrong!', 'Oops...');
        return of(this.fakeCvs);
      })
    );
  }
  getCvById(id: number) {
    const url = 'https://apilb.tridevs.net/api/personnes/' + id;
    return this.http.get<Cv>(url);
  }
  deleteCv(id: number) {
    const url = 'https://apilb.tridevs.net/api/personnes/' + id;
    return this.http.delete(url);
  }
  getPersonneByName(name: string): Observable<Cv[]> {
    if (name.length > 0) {
      const params = new HttpParams().set(
        'filter',
        JSON.stringify({ where: { name: { like: `%${name}%` } } })
      );
      return this.http
        .get<Cv[]>('https://apilb.tridevs.net/api/personnes/', { params })
        .pipe(
          catchError((error) => {
            return of(this.fakeCvs.filter((cv) => cv.name.includes(name) || cv.firstname.includes(name)));
          })
        );
    } else {
      return of([]);
    }
  }
}
