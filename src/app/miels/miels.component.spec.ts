import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MielsComponent } from './miels.component';

describe('MielsComponent', () => {
  let component: MielsComponent;
  let fixture: ComponentFixture<MielsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MielsComponent]
    });
    fixture = TestBed.createComponent(MielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
