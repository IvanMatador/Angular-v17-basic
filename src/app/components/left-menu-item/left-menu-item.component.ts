import { Component, Input } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-left-menu-item',
  standalone: true,
  imports: [MatExpansionModule, MatIconModule, MatButtonModule],
  templateUrl: './left-menu-item.component.html',
  styleUrl: './left-menu-item.component.scss'
})
export class LeftMenuItemComponent {

  @Input({required: true}) item: any;

}
