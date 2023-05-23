import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssOtherNumberUpdateComponent } from './ess-other-number-update.component';

describe('EssOtherNumberUpdateComponent', () => {
  let component: EssOtherNumberUpdateComponent;
  let fixture: ComponentFixture<EssOtherNumberUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EssOtherNumberUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EssOtherNumberUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
