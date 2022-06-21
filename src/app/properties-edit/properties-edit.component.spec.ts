import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesEditComponent } from './properties-edit.component';

describe('PropertiesEditComponent', () => {
  let component: PropertiesEditComponent;
  let fixture: ComponentFixture<PropertiesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
