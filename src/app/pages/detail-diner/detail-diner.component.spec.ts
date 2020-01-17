import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDinerComponent } from './detail-diner.component';

describe('DetailDinerComponent', () => {
  let component: DetailDinerComponent;
  let fixture: ComponentFixture<DetailDinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
