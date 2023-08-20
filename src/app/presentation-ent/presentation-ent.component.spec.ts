import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationENTComponent } from './presentation-ent.component';

describe('PresentationENTComponent', () => {
  let component: PresentationENTComponent;
  let fixture: ComponentFixture<PresentationENTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresentationENTComponent]
    });
    fixture = TestBed.createComponent(PresentationENTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
