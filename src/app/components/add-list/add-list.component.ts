import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoApiService } from '../../services/todo-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent {
  listForm: any;

  constructor(private formBuilder: FormBuilder, private todoApi: TodoApiService, private router: Router) {
    this.listForm = this.formBuilder.group({
      name: ''
    });
  }

  onSubmit(listData) {
    this.todoApi.postList(listData)
    .subscribe(res => {
      this.router.navigate(['']);
    })
  }
}
