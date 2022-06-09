import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlladvertiseComponent } from './alladvertise.component';

describe('AlladvertiseComponent', () => {
  let component: AlladvertiseComponent;
  let fixture: ComponentFixture<AlladvertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlladvertiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlladvertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
