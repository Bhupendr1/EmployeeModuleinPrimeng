import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetheadDeductionComponent } from './budgethead-deduction.component';

describe('BudgetheadDeductionComponent', () => {
  let component: BudgetheadDeductionComponent;
  let fixture: ComponentFixture<BudgetheadDeductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetheadDeductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetheadDeductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
