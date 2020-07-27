import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAutomobileComponent } from './view-automobile.component';

describe('ViewAutomobileComponent', () => {
  let component: ViewAutomobileComponent;
  let fixture: ComponentFixture<ViewAutomobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAutomobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAutomobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
