import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAddTodoComponentComponent } from './my-add-todo-component.component';

describe('MyAddTodoComponentComponent', () => {
  let component: MyAddTodoComponentComponent;
  let fixture: ComponentFixture<MyAddTodoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAddTodoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAddTodoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
