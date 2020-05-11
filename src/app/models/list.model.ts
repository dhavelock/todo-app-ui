export interface List {
  name: string;
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
