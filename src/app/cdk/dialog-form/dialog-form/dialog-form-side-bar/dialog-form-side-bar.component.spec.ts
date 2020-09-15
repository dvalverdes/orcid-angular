import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormSideBarComponent } from './dialog-form-side-bar.component';

describe('DialogFormSideBarComponent', () => {
  let component: DialogFormSideBarComponent;
  let fixture: ComponentFixture<DialogFormSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFormSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFormSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
