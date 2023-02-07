import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityCareComponent } from './quality-care.component';

describe('QualityCareComponent', () => {
  let component: QualityCareComponent;
  let fixture: ComponentFixture<QualityCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
