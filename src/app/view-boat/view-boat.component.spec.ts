import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBoatComponent } from './view-boat.component';

describe('ViewBoatComponent', () => {
  let component: ViewBoatComponent;
  let fixture: ComponentFixture<ViewBoatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBoatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
