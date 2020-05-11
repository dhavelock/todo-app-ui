import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoApiService } from '../../services/todo-api.service';
import { Router } from '@angular/router';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  itemForm: any;
  lists: List[];

  constructor(private formBuilder: FormBuilder, private todoApi: TodoApiService, private router: Router) {
    this.itemForm = this.formBuilder.group({
      title: '',
      description: '',
      createdDate: '',
      list: ''
    });
  }

  ngOnInit() {
    this.todoApi.getLists()
    .subscribe((response: List[]) => this.lists = response);
  }

  onSubmit(itemData) {
    this.todoApi.postItem({
      createdDate: itemData.createdDate,
      title: itemData.title,
      description: itemData.description
    }, itemData.list)
    .subscribe(
      () => this.router.navigate(['']),
      error => alert(error.error.message)
    );
  }
}
