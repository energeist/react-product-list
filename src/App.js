import { useState } from 'react';

import './App.css';
import { namesAndCategories } from './data';

import CategoryButton from './CategoryButton';
import Product from './Product';

import data from './data';


function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  const filteredData = data.filter(obj => {
    return obj.category === selectedCategory || selectedCategory === 'All'
  })

  const sumOfPrices = filteredData.reduce((sum, obj) => {
    let price = parseFloat(obj.price.slice(1));
    return sum + price;
  }, 0);
  
  return (
    <div className="App">
      <h1>React Product List</h1>
      <h2>Currently Selected Category: {selectedCategory}</h2>
      <h2>Sum of prices for currently selected category: ${sumOfPrices.toFixed(2)}</h2>
      <h3>Categories:</h3>
      <div className="CategoryList">
        <button
          key="All"
          onClick={()=> handleCategoryClick("All")}
          className={ selectedCategory === "All" ? "selected" : ""}
        >
          All <div
            className="Badge"
          >{data.length}</div>
        </button>
        {namesAndCategories.map((obj, i) => {
          return (
            <CategoryButton 
              key={obj.name}
              name={obj.name}
              count={obj.count}
              onClick={() => {
                handleCategoryClick(obj.name)  
              }}
              isSelected={obj.name === selectedCategory ? "selected" : ""}
            />
          )
        })}
      </div>
      <div className="ProductList">
        {filteredData.map((obj, i) => {
          return (
            <Product
              key={i}
              name={obj.name}
              price={obj.price}
              category={obj.category}
              rating={obj.rating.toFixed(1)}
              units={obj.units}
              outOfStock={obj.units === 0 ? "outOfStock" : ""}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
