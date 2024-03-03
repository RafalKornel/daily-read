import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlDataFetcherComponent } from './url-data-fetcher.component';

describe('DataImporterComponent', () => {
  let component: UrlDataFetcherComponent;
  let fixture: ComponentFixture<UrlDataFetcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlDataFetcherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UrlDataFetcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
