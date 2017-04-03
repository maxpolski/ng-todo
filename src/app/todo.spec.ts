import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept data in constructor', () => {
    const todo = new Todo({ id: 12, title: 'some title' });

    expect(todo.id).toEqual(12);
    expect(todo.title).toEqual('some title');
  });

  it('should have default title state equal empty string', () => {
    const todo = new Todo({ completed: true });

    expect(todo.title).toEqual('');
  });

  it('should have default complete state equal false', () => {
    const todo = new Todo({ id: 12, title: 'some title' });

    expect(todo.complete).toEqual(false);
  });
});
