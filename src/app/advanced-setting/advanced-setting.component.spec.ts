import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSettingComponent } from './advanced-setting.component';

describe('AdvancedSettingComponent', () => {
  let component: AdvancedSettingComponent;
  let fixture: ComponentFixture<AdvancedSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
