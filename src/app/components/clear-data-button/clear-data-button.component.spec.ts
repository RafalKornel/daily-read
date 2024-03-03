import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearDataButtonComponent } from './clear-data-button.component';

describe('ClearDataButtonComponent', () => {
  let component: ClearDataButtonComponent;
  let fixture: ComponentFixture<ClearDataButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClearDataButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClearDataButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
