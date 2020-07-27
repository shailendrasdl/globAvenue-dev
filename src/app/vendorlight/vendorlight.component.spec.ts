import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorlightComponent } from './vendorlight.component';

describe('VendorlightComponent', () => {
  let component: VendorlightComponent;
  let fixture: ComponentFixture<VendorlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
