import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssNomineeUpdateComponent } from './ess-nominee-update.component';

describe('EssNomineeUpdateComponent', () => {
  let component: EssNomineeUpdateComponent;
  let fixture: ComponentFixture<EssNomineeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EssNomineeUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EssNomineeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
