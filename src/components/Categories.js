// src/components/Categories.js
import React, { useState, useEffect } from 'react';
import CategoryList from './CategoryList';
import ItemList from './ItemList';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
// 法一
  const fetchData=async()=>{
    try{const res=await fetch('https://stream-menu-svc-v3.herokuapp.com/category')
    if(!res.ok){
      throw new Error(`an error ${res.status}`)
    }
    const data= await res.json()
    setCategories(data)}catch(e){
      console.error('Error fetching data:',e)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  //法二
  // useEffect(() => {
  //   fetch('https://stream-menu-svc-v3.herokuapp.com/category')
  //     .then(response => response.json())
  //     .then(data => setCategories(data));
  // }, []);

  const handleCategoryClick = (shortName) => {
    setSelectedCategory(shortName);
    fetch(`https://stream-menu-svc-v3.herokuapp.com/item?category=${shortName}`)
      .then(response => response.json())
      .then(data => setItems(data));
  };

  return (
    <div>
      <hr />
      <p style={{ fontStyle: 'italic' }}>Streamlinity UI test assignment starts below this line...</p>
      <hr />
      <div className="row">
        <div className="col-4">
          <CategoryList 
            onCategoryClick={handleCategoryClick} 
            categories={categories} 
            selectedCategory={selectedCategory}
          />
        </div>
        <div className="col-8">
          {selectedCategory && <ItemList items={items} selectedCategory={selectedCategory} />}
        </div>
      </div>
    </div>
  );
}

export default Categories;
