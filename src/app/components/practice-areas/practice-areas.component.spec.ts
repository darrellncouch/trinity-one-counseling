import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeAreasComponent } from './practice-areas.component';

describe('PracticeAreasComponent', () => {
  let component: PracticeAreasComponent;
  let fixture: ComponentFixture<PracticeAreasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PracticeAreasComponent]
    });
    fixture = TestBed.createComponent(PracticeAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
