import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRealestateComponent } from './view-realestate.component';

describe('ViewRealestateComponent', () => {
  let component: ViewRealestateComponent;
  let fixture: ComponentFixture<ViewRealestateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRealestateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRealestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
