// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachItem, deleteItem} = props
  const {title, id} = eachItem

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="todoitem-list">
      <p className="list-para">{title}</p>
      <button onClick={onDelete} className="button" type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
