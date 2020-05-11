import { Component, Input } from '@angular/core';
import { Item } from '../../models/item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item: Item;

  constructor(private router: Router) { }

  onClick() {
    this.router.navigate(['item', this.item.id])
  }
}
