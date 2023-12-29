import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [ RouterLinkActive, RouterModule, RouterLink ],
  providers: [{ provide: ActivatedRoute, useValue: ActivatedRoute }],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  constructor(activatedRoute: ActivatedRoute) {}

}
