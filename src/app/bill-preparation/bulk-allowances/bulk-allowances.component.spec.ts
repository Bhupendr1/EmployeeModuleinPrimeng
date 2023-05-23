import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkAllowancesComponent } from './bulk-allowances.component';

describe('BulkAllowancesComponent', () => {
  let component: BulkAllowancesComponent;
  let fixture: ComponentFixture<BulkAllowancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkAllowancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkAllowancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
