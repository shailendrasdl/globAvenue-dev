import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailboatComponent } from './detailboat.component';

describe('DetailboatComponent', () => {
  let component: DetailboatComponent;
  let fixture: ComponentFixture<DetailboatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailboatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailboatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
