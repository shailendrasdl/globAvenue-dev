import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobtechComponent } from './globtech.component';

describe('GlobtechComponent', () => {
  let component: GlobtechComponent;
  let fixture: ComponentFixture<GlobtechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobtechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
