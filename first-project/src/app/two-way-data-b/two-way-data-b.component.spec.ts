import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDataBComponent } from './two-way-data-b.component';

describe('TwoWayDataBComponent', () => {
  let component: TwoWayDataBComponent;
  let fixture: ComponentFixture<TwoWayDataBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayDataBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayDataBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
