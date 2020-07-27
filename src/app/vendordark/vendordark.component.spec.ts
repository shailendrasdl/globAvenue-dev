import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendordarkComponent } from './vendordark.component';

describe('VendordarkComponent', () => {
  let component: VendordarkComponent;
  let fixture: ComponentFixture<VendordarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendordarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendordarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
