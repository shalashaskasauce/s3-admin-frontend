import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectFunctionsComponent } from './object-functions.component';

describe('ObjectFunctionsComponent', () => {
  let component: ObjectFunctionsComponent;
  let fixture: ComponentFixture<ObjectFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectFunctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
