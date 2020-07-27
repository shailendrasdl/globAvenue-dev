import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomobileVendComponent } from './automobile-vend.component';

describe('AutomobileVendComponent', () => {
  let component: AutomobileVendComponent;
  let fixture: ComponentFixture<AutomobileVendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomobileVendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomobileVendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
