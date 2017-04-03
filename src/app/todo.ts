interface TodoProps {
  id?: number;
  title?: string;
  complete?: boolean;
}

export class Todo implements TodoProps {
  id = null;
  title = '';
  complete = false;

  constructor(values: TodoProps = {}) {
    Object.assign(this, values);
  }
}
