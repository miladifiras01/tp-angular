import { Component } from '@angular/core';
import { BehaviorSubject, Observable, concatMap, scan } from 'rxjs';
import { ProduitService } from '../produit.service';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  isDisabled = false
  produits$ = new Observable<Produit[]>();
  produitNumber$ = new BehaviorSubject<number>(0);

  constructor(private produitService: ProduitService) {
    this.produits$ = this.produitNumber$.pipe(
      concatMap((skip) => this.produitService.getProduits(12, skip)),
      scan((previous, res)=> {
        return [...previous, ...res]
      }, [] as Produit[])
    );    
  }
  
  loadMore() {
    const nextPage = this.produitNumber$.value + 12;
    if (nextPage <= 100) this.produitNumber$.next(nextPage);
    else {
      this.produitNumber$.complete();
      this.isDisabled = true
    }
  }

}
