import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ id, name, catergory }) {
  const [itemName, setAddItem] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");
  




  function handleAddItem(item){
    setAddItem( items => [...items, item])
  }


  
  function handleSubmit(e) {
    e.preventDefault();
  // If no name is provided return nothing immediately
    if(!itemName)return;

    console.log(e);

    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory,
    };

    handleAddItem(newItem)

    setAddItem("");
    setItemCategory("Produce")

  }
  
  
  
  
  



  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={(e) => setAddItem(e.target.value)}
          value={itemName}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={itemCategory}
          onChange={(e) => setItemCategory(e.target.value)}
        >
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
