import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssBankAccountChangeRequestComponent } from './ess-bank-account-change-request.component';

describe('EssBankAccountChangeRequestComponent', () => {
  let component: EssBankAccountChangeRequestComponent;
  let fixture: ComponentFixture<EssBankAccountChangeRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EssBankAccountChangeRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EssBankAccountChangeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
