import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAllowanceComponent } from './group-allowance.component';

describe('GroupAllowanceComponent', () => {
  let component: GroupAllowanceComponent;
  let fixture: ComponentFixture<GroupAllowanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupAllowanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupAllowanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
