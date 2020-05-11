import { Item } from './item.model';

export interface List {
  id: number,
  name: string;
  items: Item[];
}
