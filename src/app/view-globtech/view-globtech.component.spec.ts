import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGlobtechComponent } from './view-globtech.component';

describe('ViewGlobtechComponent', () => {
  let component: ViewGlobtechComponent;
  let fixture: ComponentFixture<ViewGlobtechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGlobtechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGlobtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
