import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ id, name, catergory }) {
  const [addItem, setAddItem] = useState("");

  // function handleAddNewItem(){

  //   setAddItem()
  // }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={(e) =>  setAddItem(e.target.value)}
          value={addItem}
        />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
