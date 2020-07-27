import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatlistingComponent } from './boatlisting.component';

describe('BoatlistingComponent', () => {
  let component: BoatlistingComponent;
  let fixture: ComponentFixture<BoatlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
