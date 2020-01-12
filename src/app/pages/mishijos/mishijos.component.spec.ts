import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MishijosComponent } from './mishijos.component';

describe('MishijosComponent', () => {
  let component: MishijosComponent;
  let fixture: ComponentFixture<MishijosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MishijosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MishijosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
