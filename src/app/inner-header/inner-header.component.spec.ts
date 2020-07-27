import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerHeaderComponent } from './inner-header.component';

describe('InnerHeaderComponent', () => {
  let component: InnerHeaderComponent;
  let fixture: ComponentFixture<InnerHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
