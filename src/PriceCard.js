import React from 'react';
import Button from "./Button"
    function PriceCard(props) {
     const priceInEuro = (props) => {
        return (
            Math.round(props * 0.010)
        )
    }

    const getFamilyPlaningSavings = (selectedSimPrice) => {
            let singleSimPrice= props.singleSimPrice[props.selectedDataPlan];
            let priceForSimSelected = singleSimPrice * props.selectedSim;
            if(selectedSimPrice!==priceForSimSelected) {
                return (
                    <div className="price-card-v3_price_card__features__item__1CmSd price-card-v3_price_card__features__item_featured__NR6Ya">£{priceInEuro(priceForSimSelected-selectedSimPrice)} &nbsp;a month Family SIM saving</div>

                )
           }

    }

    const wasAmount = () => {
       if(props.price.was_monthly_cost > props.price.monthly_cost) {
         return(<>Was <del>£{priceInEuro(props.price.was_monthly_cost)}</del></>);
        }
    }

    return (
        <div className="price-card-v3_price_card__22LR6">
            <div className="price-card-v3_price_card__monthly_price__2ZW40">{wasAmount()}<span className="price-card-v3_price_card__monthly_price__major__2obrR s2">£{priceInEuro(props.price.monthly_cost)}</span><sup className="bold price-card-v3_terms_symbol__a-_ZZ"><b>Δ</b></sup><span>&nbsp;a month</span></div>
            <div className="price-card-v3_price_card__features__3-KQJ">
                {getFamilyPlaningSavings(props.price.monthly_cost)}
                <div className="price-card-v3_price_card__features__item__1CmSd">12-month contract</div>
            </div>
            <div><Button text={"Choose Card"} variant={"variant-2"}/></div>
        </div>
    );
}

export default PriceCard;