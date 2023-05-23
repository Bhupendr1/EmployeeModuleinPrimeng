import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdoForwardComponent } from './ddo-forward.component';

describe('DdoForwardComponent', () => {
  let component: DdoForwardComponent;
  let fixture: ComponentFixture<DdoForwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdoForwardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DdoForwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
