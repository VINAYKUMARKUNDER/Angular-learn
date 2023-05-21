import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTodoComponent } from './my-todo.component';

describe('MyTodoComponent', () => {
  let component: MyTodoComponent;
  let fixture: ComponentFixture<MyTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyTodoComponent]
    });
    fixture = TestBed.createComponent(MyTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
