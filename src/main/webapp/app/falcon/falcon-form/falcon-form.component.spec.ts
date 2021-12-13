import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconFormComponent } from './falcon-form.component';

describe('FalconFormComponent', () => {
  let component: FalconFormComponent;
  let fixture: ComponentFixture<FalconFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FalconFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FalconFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
