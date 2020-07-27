import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealestateVendComponent } from './realestate-vend.component';

describe('RealestateVendComponent', () => {
  let component: RealestateVendComponent;
  let fixture: ComponentFixture<RealestateVendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealestateVendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealestateVendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
