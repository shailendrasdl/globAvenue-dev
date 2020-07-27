import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatvendComponent } from './boatvend.component';

describe('BoatvendComponent', () => {
  let component: BoatvendComponent;
  let fixture: ComponentFixture<BoatvendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatvendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatvendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
