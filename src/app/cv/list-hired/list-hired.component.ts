import { Component, Input } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-list-hired',
  templateUrl: './list-hired.component.html',
  styleUrls: ['./list-hired.component.css']
})
export class ListHiredComponent {
  @Input() embauches: Cv[] =[];
  constructor(){}
  
  
}
