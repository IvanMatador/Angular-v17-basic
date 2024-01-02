import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenuItemComponent } from './left-menu-item.component';

describe('LeftMenuItemComponent', () => {
  let component: LeftMenuItemComponent;
  let fixture: ComponentFixture<LeftMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftMenuItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
