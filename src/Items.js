import { MdDelete } from "react-icons/md";

const Items = ({ myItems, deleteItem }) => {
  const renderedItems = myItems.map((item, index) => {
    return (
      <ul key={index} className={`todo-item `}>
        <li>{item}</li>
        <div className="icon1">
          <MdDelete onClick={() => deleteItem(index)} />
        </div>
      </ul>
    );
  });

  return (
    <div className="container ">
      <div className="container list-items">{renderedItems}</div>
    </div>
  );
};

export default Items;
