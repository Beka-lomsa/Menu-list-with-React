 function Categories({categories, filterItems}) {
  return (
  <div className="btn-container">
    {categories.map((cateory, index) => {
      return(
        <button 
        type="button" 
        className="filter-btn"
        key={index}
        onClick={() => filterItems(cateory)}>
          {cateory}
        </button>
      )
    })}
  </div>
  )

}




export default Categories;