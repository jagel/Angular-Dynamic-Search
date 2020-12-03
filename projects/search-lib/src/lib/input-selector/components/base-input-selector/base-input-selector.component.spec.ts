import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseInputSelectorComponent } from './base-input-selector.component';

describe('BaseInputSelectorComponent', () => {
  let component: BaseInputSelectorComponent;
  let fixture: ComponentFixture<BaseInputSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseInputSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseInputSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
