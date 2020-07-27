import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobtechDetailComponent } from './globtech-detail.component';

describe('GlobtechDetailComponent', () => {
  let component: GlobtechDetailComponent;
  let fixture: ComponentFixture<GlobtechDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobtechDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobtechDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
