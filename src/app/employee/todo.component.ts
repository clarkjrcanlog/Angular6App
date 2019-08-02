import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray, FormControl } from '@angular/forms'; //imports formGroup and formControl
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoForm : FormGroup;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.todoForm = this.fb.group({
      tasks: this.fb.array([
        this.addTaskFormGroup()
      ])
    });
  }

  addTaskButtonClick(): void{
    (<FormArray>this.todoForm.get('tasks')).push(this.addTaskFormGroup());
  }

  addTaskFormGroup(): FormGroup{
    return this.fb.group({
      taskList: ['', Validators.required]
    })
  }

  removeSkillButtonClick(taskGroupIndex: number): void {
    const tasksFormArray = <FormArray>this.todoForm.get('tasks');
    tasksFormArray.removeAt(taskGroupIndex);
    tasksFormArray.markAsDirty();
    tasksFormArray.markAsTouched();

  }

}
