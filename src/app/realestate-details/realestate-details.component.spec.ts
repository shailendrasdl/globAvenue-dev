import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealestateDetailsComponent } from './realestate-details.component';

describe('RealestateDetailsComponent', () => {
  let component: RealestateDetailsComponent;
  let fixture: ComponentFixture<RealestateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealestateDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealestateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
