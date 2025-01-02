import React from "react";

const Products = (props) => {
    return(
        <div className="col-md-4">
            <img src={"/img/shoes" + (props.i + 1) + ".jpg"} width = "80%" />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
        </div>
    );
};
export default Products