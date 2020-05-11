import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { TodoApiService } from 'src/app/services/todo-api.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
  item: Item;

  constructor(private route: ActivatedRoute, private router: Router, private todoApi: TodoApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.todoApi.getItem(Number(params.get('itemId')))
      .subscribe((response: Item) => this.item = response);
    });
  }

  onDelete() {
    this.todoApi.deleteItem(this.item.id)
    .subscribe(() => this.router.navigate(['']))
  }
}
