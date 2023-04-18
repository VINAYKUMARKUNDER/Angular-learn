import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantainerComponent } from './cantainer.component';

describe('CantainerComponent', () => {
  let component: CantainerComponent;
  let fixture: ComponentFixture<CantainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CantainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
