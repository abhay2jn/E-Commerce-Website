import Button from "../components/Button";
import "./Recommended.css";

function Recommended({handleClick}) {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommendation</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Merrell" title="Merrell" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
          <Button onClickHandler={handleClick} value="girls" title="Girl's Section" />
        </div>
      </div>
    </>
  )
}

export default Recommended;