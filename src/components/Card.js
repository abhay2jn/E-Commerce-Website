import { IoBagAdd } from "react-icons/io5";

function Card({img,title,star,reviews,prevPrice,newPrice}) {
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img"></img>
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star}{star}{star}{star}{star}
            <span className="Total-Reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del>  
              {newPrice}
            </div>
            <div className="bag">
              <IoBagAdd className="bag-icon"/>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Card;