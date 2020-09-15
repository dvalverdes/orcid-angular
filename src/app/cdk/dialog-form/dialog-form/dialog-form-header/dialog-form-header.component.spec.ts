import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormHeaderComponent } from './dialog-form-header.component';

describe('DialogFormHeaderComponent', () => {
  let component: DialogFormHeaderComponent;
  let fixture: ComponentFixture<DialogFormHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFormHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFormHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
