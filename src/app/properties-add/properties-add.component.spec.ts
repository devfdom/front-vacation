import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesAddComponent } from './properties-add.component';

describe("PropertiesAddComponent", () => {
  let component: PropertiesAddComponent;
  let fixture: ComponentFixture<PropertiesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertiesAddComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
