// src/components/CategoryList.js
import React from 'react';

function CategoryList({ categories, onCategoryClick }) {
    return (
        <div className="category-list">
            <h4>Menu Categories</h4>
            <ul>
                {categories.map(category => (
                    <li
                        key={category.id}
                        onClick={() => onCategoryClick(category.short_name)}
                    >
                        {category.name} - ({category.short_name})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CategoryList;
