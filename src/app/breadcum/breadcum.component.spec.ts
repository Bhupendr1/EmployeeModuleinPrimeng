import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcumComponent } from './breadcum.component';

describe('BreadcumComponent', () => {
  let component: BreadcumComponent;
  let fixture: ComponentFixture<BreadcumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
