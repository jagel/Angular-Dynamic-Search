import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicStructureLibComponent } from './dynamic-structure-lib.component';

describe('DynamicStructureLibComponent', () => {
  let component: DynamicStructureLibComponent;
  let fixture: ComponentFixture<DynamicStructureLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicStructureLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicStructureLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
