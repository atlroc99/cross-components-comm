import { TestBed, inject } from '@angular/core/testing';

import { CollectibleServiceService } from './collectible-service.service';

describe('CollectibleServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollectibleServiceService]
    });
  });

  it('should be created', inject([CollectibleServiceService], (service: CollectibleServiceService) => {
    expect(service).toBeTruthy();
  }));
});
