import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTodoItemDetailsComponent } from './my-todo-item-details.component';

describe('MyTodoItemDetailsComponent', () => {
  let component: MyTodoItemDetailsComponent;
  let fixture: ComponentFixture<MyTodoItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTodoItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTodoItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
