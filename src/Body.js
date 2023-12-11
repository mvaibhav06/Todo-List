import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import Items from "./Items";

const Body = () => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");

  const deleteItem = (myIndex) => {
    let newItems = [...items];
    const res = newItems.filter((item, index) => index !== myIndex);
    setItems(res);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (items.includes(value)) {
      setValue("");
    } else {
      if (value.length > 0) {
        setItems([...items, value]);
      }
      setValue("");
    }
  };

  return (
    <div>
      <form className="add-items my-3 container" onSubmit={handleSubmit}>
        <div className="icon">
          <IoIosAddCircle />
        </div>
        <input
          className="form-control mx-3"
          placeholder="Enter something to add!"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </form>

      <Items myItems={items} deleteItem={deleteItem} />
    </div>
  );
};

export default Body;
