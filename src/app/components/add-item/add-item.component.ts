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
      list: ''
    });
  }

  ngOnInit() {
    this.todoApi.getLists()
    .subscribe(data => {
      this.lists = data['_embedded'].list
    })
  }

  onSubmit(itemData) {
    this.todoApi.postItem(itemData)
    .subscribe(res => {
      this.router.navigate(['']);
    })
  }
}
