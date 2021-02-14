import React from 'react' 
import { CATEGORIES } from './data'
const Categories = (props) => {
    return (
        <div className="categories">
            <h5>Category filters</h5>
            {CATEGORIES.map((category, index) => <button key={index} onClick={() => props.handleCategoryFilter(category)} className={category === "All" ? "selected" : null}>{category}</button>)}
        </div>
    )
}

export default Categories