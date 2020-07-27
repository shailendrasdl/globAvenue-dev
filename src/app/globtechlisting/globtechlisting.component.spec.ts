import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobtechlistingComponent } from './globtechlisting.component';

describe('GlobtechlistingComponent', () => {
  let component: GlobtechlistingComponent;
  let fixture: ComponentFixture<GlobtechlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobtechlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobtechlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
