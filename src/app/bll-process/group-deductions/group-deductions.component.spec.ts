import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDeductionsComponent } from './group-deductions.component';

describe('GroupDeductionsComponent', () => {
  let component: GroupDeductionsComponent;
  let fixture: ComponentFixture<GroupDeductionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupDeductionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupDeductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
