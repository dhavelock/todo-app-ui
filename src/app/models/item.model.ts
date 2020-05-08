export interface Item {
  title: string;
  description: string;
  _links: {
    self: {
      href: string
    },
    todoList: {
      href: string
    },
    items: {
      href: string
    }
  };
}
