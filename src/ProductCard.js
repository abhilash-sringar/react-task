import React, {
    useState
} from 'react';
import Countdown from 'react-countdown';
import SimAndData from "./SimAndData";
import PlanDetails from "./PlanDetails";
import Title from "./Title";
import PriceCard from "./PriceCard"

    function ProductCard(props) {
       const countdownEndTime =  props.planDetails.countdown_end_time;
       const [planDetails] = useState(["4G and 5G enabled","Unlimited minutes and texts", "Access to 5 million BT Wi-fi hotspots","30-day money-back guarantee"])
       const renderer = ({ days, hours, minutes, seconds }) => {
             return <span className='countdown-timer' >{days}d {hours}h {minutes}m {seconds}s</span>;
       };
    return (

       <div className="product-card-v3_product_card__3AoVU">
          <div className="product-card-v3_product_card__wrap__1pdaE ">
             {countdownEndTime ?
                <div className="pc-price" >
                    <div className="limited-offer">Price has never been lower</div>
                    <div className="countdown-timer">
                        <Countdown date={countdownEndTime} renderer={renderer} />
                    </div>
                </div>
             : null}

            <SimAndData simData={props.planDetails}></SimAndData>
            <PlanDetails details={planDetails}></PlanDetails>
            {props.planDetails.merch_strip_text !== undefined ? <Title title={props.planDetails.merch_strip_text} style={'product-card-v3_product_card__merch_strip__1SMur'}/> : null}
            <PriceCard price={props.planDetails} singleSimPrice ={props.singleSimPrice} selectedDataPlan={props.selectedDataPlan} selectedSim={props.selectedSim}></PriceCard>
          </div>
       </div>
    );
}

export default ProductCard;