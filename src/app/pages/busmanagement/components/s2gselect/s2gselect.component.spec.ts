import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S2gselectComponent } from './s2gselect.component';

describe('S2gselectComponent', () => {
  let component: S2gselectComponent;
  let fixture: ComponentFixture<S2gselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S2gselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S2gselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
