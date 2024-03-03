import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFetcherPageComponent } from './data-fetcher-page.component';

describe('DataImporterComponent', () => {
  let component: DataFetcherPageComponent;
  let fixture: ComponentFixture<DataFetcherPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataFetcherPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataFetcherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
