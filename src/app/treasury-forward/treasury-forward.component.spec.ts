import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreasuryForwardComponent } from './treasury-forward.component';

describe('TreasuryForwardComponent', () => {
  let component: TreasuryForwardComponent;
  let fixture: ComponentFixture<TreasuryForwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreasuryForwardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreasuryForwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
