import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DospuntosComponent } from './dospuntos.component';

describe('DospuntosComponent', () => {
  let component: DospuntosComponent;
  let fixture: ComponentFixture<DospuntosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DospuntosComponent]
    });
    fixture = TestBed.createComponent(DospuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
