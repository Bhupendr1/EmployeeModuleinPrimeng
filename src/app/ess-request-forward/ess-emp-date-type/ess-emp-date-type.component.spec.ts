import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssEmpDateTypeComponent } from './ess-emp-date-type.component';

describe('EssEmpDateTypeComponent', () => {
  let component: EssEmpDateTypeComponent;
  let fixture: ComponentFixture<EssEmpDateTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EssEmpDateTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EssEmpDateTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
