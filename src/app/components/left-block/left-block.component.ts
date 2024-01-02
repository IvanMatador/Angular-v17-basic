import { Component, OnDestroy, OnInit } from '@angular/core';
import { LeftMenuItemComponent } from '../left-menu-item/left-menu-item.component';
import { HomeLeftList } from 'src/app/constants/home-left-menu';
import { NavigationEnd, Router } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-block',
  standalone: true,
  imports: [CommonModule, LeftMenuItemComponent],
  templateUrl: './left-block.component.html',
  styleUrl: './left-block.component.scss'
})
export class LeftBlockComponent implements OnInit, OnDestroy {

  blockItems$: Subject<any> = new Subject();
  destroy$: Subject<any> = new Subject();

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this.destroy$),
    ).subscribe((event: any) => {
      const currentUrl = event.url.toString();
      console.log('Current URL:', currentUrl);
      console.log(currentUrl.includes('home'))
      if(currentUrl.includes('home')) {
        this.blockItems$.next(HomeLeftList);
      }
    });
  }

  ngOnInit() {
    this.blockItems$.subscribe((e)=>console.log(e))
  }

  ngOnDestroy() {
    if(this.destroy$) {
      this.destroy$.next(null);
      this.destroy$.complete();
    }
  }



}
