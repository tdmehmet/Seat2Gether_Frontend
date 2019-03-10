import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusmasterdataComponent } from './busmasterdata.component';

describe('BusmasterdataComponent', () => {
  let component: BusmasterdataComponent;
  let fixture: ComponentFixture<BusmasterdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusmasterdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusmasterdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
