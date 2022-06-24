import { ComponentFixture, TestBed } from '@angular/core/testing';
import { from } from 'rxjs';
import { BookingComponent } from '../booking/booking.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let components: BookingComponent;
  let fixtures: ComponentFixture<BookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();
  });
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingComponent]
    })
      .compileComponents()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);

    fixtures = TestBed.createComponent(BookingComponent);
  
    component = fixture.componentInstance;
    fixture.detectChanges();

    components = fixtures.componentInstance;
    fixtures.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
