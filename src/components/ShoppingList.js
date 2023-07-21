import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");



  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }







  const itemsToDisplay = items.filter((item) => {
    const itemCategoryMatches = selectedCategory === "All" || item.category === selectedCategory;
    const itemNameMatches = item.name.toLowerCase().includes(search.toLowerCase());

    return itemCategoryMatches && (search === "" || itemNameMatches);
  });




  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter 
      search={search}
        onCategoryChange={handleCategoryChange} 
        onSearchChange={setSearch}
      />
      <ul className="Items" on>
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
