import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualProgressSetterComponent } from './manual-progress-setter.component';

describe('ManualProgressSetterComponent', () => {
  let component: ManualProgressSetterComponent;
  let fixture: ComponentFixture<ManualProgressSetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManualProgressSetterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManualProgressSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
