import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTodoComponentComponent } from './my-todo-component.component';

describe('MyTodoComponentComponent', () => {
  let component: MyTodoComponentComponent;
  let fixture: ComponentFixture<MyTodoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTodoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTodoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
