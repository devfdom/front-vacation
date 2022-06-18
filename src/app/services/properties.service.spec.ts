import { TestBed } from '@angular/core/testing';

import { PropertiesService } from './properties.service';

describe('PropertiesService', () => {
  beforeEach(()=> TestBed.configureTestingModule({}));
  let service: PropertiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertiesService);
  });

  it('should be created', () => {
    const service: PropertiesService = TestBed.get(PropertiesService)
    expect(service).toBeTruthy();
  });
});