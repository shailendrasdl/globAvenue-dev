import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailglobtechComponent } from './detailglobtech.component';

describe('DetailglobtechComponent', () => {
  let component: DetailglobtechComponent;
  let fixture: ComponentFixture<DetailglobtechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailglobtechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailglobtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
