import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailautomobileComponent } from './detailautomobile.component';

describe('DetailautomobileComponent', () => {
  let component: DetailautomobileComponent;
  let fixture: ComponentFixture<DetailautomobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailautomobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailautomobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
