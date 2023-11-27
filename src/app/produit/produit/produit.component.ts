import { Component } from '@angular/core';
import { BehaviorSubject, Observable, concatMap, scan, takeUntil, takeWhile } from 'rxjs';
import { ProduitService } from '../produit.service';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  isDisabled = false;
  produits$ = new Observable<Produit[]>();
  produitNumber$ = new BehaviorSubject<number>(0);

  constructor(private produitService: ProduitService) {
    this.produits$ = this.produitNumber$.pipe(
      concatMap((skip) => this.produitService.getProduits(12, skip)),
      takeWhile((produits) => produits.length === 12, true),
      scan((previous, res)=> {
        return [...previous, ...res]
      }, [] as Produit[]),
    );
    this.produits$.subscribe({
      complete: () => {
        this.isDisabled = true;
      },
    });
  }
  
  loadMore() {
    const nextPage = this.produitNumber$.value + 12;
    this.produitNumber$.next(nextPage);
  }

}
