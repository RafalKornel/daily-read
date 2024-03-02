import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingDataHandlerComponent } from './reading-data-handler.component';

describe('DataImporterComponent', () => {
  let component: ReadingDataHandlerComponent;
  let fixture: ComponentFixture<ReadingDataHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingDataHandlerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadingDataHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
