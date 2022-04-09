const TodoItem = ({ todo }) => {
  return (
    <li className={`${todo.done ? 'checked' : ''}`}>
      {todo.title} <span className="close">&times;</span>
    </li>
  );
};

export default TodoItem;
