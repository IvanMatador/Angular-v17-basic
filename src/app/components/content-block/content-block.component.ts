import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content-block',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './content-block.component.html',
  styleUrl: './content-block.component.scss'
})
export class ContentBlockComponent {

}
