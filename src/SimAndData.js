import React from 'react';
function SimAndData(props) {

    return (
        <div className="product-card-v3_product_card__bundle__k32cr">
            <div className="product-card-v3_product_card__bundle__sim__3LnuH">
                <svg className="product-card-v3_product_card__bundle__sim__icon__1fBWe" width="60" height="90" viewBox="0 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42.876 0.938576L59.118 18.3407C59.682 18.945 60 19.7614 60 20.6164L60 86.7857C60 88.56 58.656 90 57 90H3C1.344 90 -3.8147e-06 88.56 -3.8147e-06 86.7857L-3.8147e-06 3.21429C-3.8147e-06 1.44 1.344 0 3 0H40.758C41.55 0 42.318 0.340721 42.876 0.938576Z" fill="#5514B4"></path>
                </svg>
                <div className="product-card-v3_product_card__bundle__sim__count__3boEo">
                    <div className="product-card-v3_product_card__bundle__sim__count__digit__9QWxz s2">{props.simData && props.simData.sim_count}</div>
                        <div className="product-card-v3_product_card__bundle__sim__count__text__2FWXi">SIMs</div>
                    </div>
                </div>
                <div className="product-card-v3_product_card__bundle__allowance__3IRLL">
                    <span className="product-card-v3_product_card__bundle__allowance__data__zm3DC s2">{props.simData && props.simData.data_allowance}GB </span><span>each</span>
                           {(props.simData && props.simData.data_allowance > props.simData.was_data_allowance) ? <div className="product-card-v3_product_card__bundle__allowance__data_desc__3_x3V">Was <del>{ props.simData.was_data_allowance}GB</del> each</div>: null}
             </div>
        </div>
    );
}

export default SimAndData;