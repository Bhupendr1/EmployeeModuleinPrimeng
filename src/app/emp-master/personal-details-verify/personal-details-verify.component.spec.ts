import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsVerifyComponent } from './personal-details-verify.component';

describe('PersonalDetailsVerifyComponent', () => {
  let component: PersonalDetailsVerifyComponent;
  let fixture: ComponentFixture<PersonalDetailsVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDetailsVerifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalDetailsVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
