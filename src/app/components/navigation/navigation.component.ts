import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, ActivatedRoute, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [ RouterLinkActive, RouterModule, RouterLink, MatButtonModule ],
  providers: [{ provide: ActivatedRoute, useValue: ActivatedRoute }],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(activatedRoute: ActivatedRoute) {}

}
