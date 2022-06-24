import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachadvertisementComponent } from './eachadvertisement.component';

describe('EachadvertisementComponent', () => {
  let component: EachadvertisementComponent;
  let fixture: ComponentFixture<EachadvertisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachadvertisementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EachadvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
