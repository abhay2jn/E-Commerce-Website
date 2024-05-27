import "./Category.css"

function Category() {
  return (
    <div>
    <h2 className="sidebar-tittle">Category</h2>
    <div>
      <label className="sidebar-label-container">
        <input type="radio" name="test"></input>
        <span className="checkmark"></span>All
      </label>
    </div>
    <label className="sidebar-label-container">
        <input type="radio" name="test"></input>
        <span className="checkmark"></span>Sneakers
      </label><label className="sidebar-label-container">
        <input type="radio" name="test"></input>
        <span className="checkmark"></span>Flats
      </label><label className="sidebar-label-container">
        <input type="radio" name="test"></input>
        <span className="checkmark"></span>Sandals
      </label><label className="sidebar-label-container">
        <input type="radio" name="test"></input>
        <span className="checkmark"></span>heels
      </label>
    </div>
  )
}

export default Category;