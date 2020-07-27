import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobtechvendComponent } from './globtechvend.component';

describe('GlobtechvendComponent', () => {
  let component: GlobtechvendComponent;
  let fixture: ComponentFixture<GlobtechvendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobtechvendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobtechvendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
