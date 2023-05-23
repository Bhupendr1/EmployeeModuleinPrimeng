import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpBankVerifyComponent } from './emp-bank-verify.component';

describe('EmpBankVerifyComponent', () => {
  let component: EmpBankVerifyComponent;
  let fixture: ComponentFixture<EmpBankVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpBankVerifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpBankVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
