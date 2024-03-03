import { TestBed } from '@angular/core/testing';

import { AscensionDataParserService } from './ascension-data-parser.service';

describe('AscensionDataParserService', () => {
  let service: AscensionDataParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AscensionDataParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
