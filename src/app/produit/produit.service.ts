import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Produit } from './model/produit';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }
  getProduits(take : number,skip: number): Observable<Produit[]>{
    const url = `https://dummyjson.com/products?skip=${skip}&limit=${take}`;
    return this.http.get<{produits: Produit[]}>(url).pipe(
      map((res: any)=> res.products)
    );
  }
}
