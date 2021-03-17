import React from 'react';
function PlanDetails(props) {

    return (
        <div className="product-card-v3_product_card__features__2uTjN">
         {props.details.map((value, index) => (
            <div key={index} className="product-card-v3_product_card__features__item__3bkhY">{value}</div>
         ))}
        </div>
    );
}

export default PlanDetails;