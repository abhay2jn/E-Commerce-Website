import { LiaStarSolid } from "react-icons/lia";
import { IoBagAdd } from "react-icons/io5";
import "./Products.css";

function Products() {
  return (
    <>
    <section className="card-container">
      <section className="card">
        <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Sneakers" className="card-img"></img>
        <div className="card-details">
          <h3 className="card-title">Sneaker</h3>
          <section className="card-reviews">
            <LiaStarSolid className="ratings-star" /><LiaStarSolid className="ratings-star" /><LiaStarSolid className="ratings-star" /><LiaStarSolid className="ratings-star" /><LiaStarSolid className="ratings-star" />
            <span className="Total-Reviews">2</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>$300</del>  
              $200
            </div>
            <div className="bag">
              <IoBagAdd className="bag-icon"/>
            </div>
          </section>
        </div>
      </section>
    <section className="card">
    <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Sneakers" className="card-img"></img>
        <div className="card-details">
          <h3 className="card-title">Sneaker</h3>
          <section className="card-reviews">
            <LiaStarSolid className="ratings-star" /><LiaStarSolid className="ratings-star" /><LiaStarSolid className="ratings-star" /><LiaStarSolid className="ratings-star" /><LiaStarSolid className="ratings-star" />
            <span className="Total-Reviews">2</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>$300</del>  
              $200
            </div>
            <div className="bag">
              <IoBagAdd className="bag-icon"/>
            </div>
          </section>
        </div>
      </section>
      <section className="card">
        <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Sneakers" className="card-img"></img>
        <div className="card-details">
          <h3 className="card-title">Sneaker</h3>
          <section className="card-reviews">
            <LiaStarSolid className="ratings-star" /><LiaStarSolid className="ratings-star" /><LiaStarSolid className="ratings-star" /><LiaStarSolid className="ratings-star" /><LiaStarSolid className="ratings-star" />
            <span className="Total-Reviews">2</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>$300</del>  
              $200
            </div>
            <div className="bag">
              <IoBagAdd className="bag-icon"/>
            </div>
          </section>
        </div>
      </section>
      <section className="card">
        <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Sneakers" className="card-img"></img>
        <div className="card-details">
          <h3 className="card-title">Sneaker</h3>
          <section className="card-reviews">
            <LiaStarSolid className="ratings-star" /><LiaStarSolid className="ratings-star" /><LiaStarSolid className="ratings-star" /><LiaStarSolid className="ratings-star" /><LiaStarSolid className="ratings-star" />
            <span className="Total-Reviews">2</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>$300</del>  
              $200
            </div>
            <div className="bag">
              <IoBagAdd className="bag-icon"/>
            </div>
          </section>
        </div>
      </section>
      </section>
      </>
  )
}

export default Products;