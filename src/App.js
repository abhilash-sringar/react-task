import React, {
    useState,useEffect
} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setProducts,setMobileData,setSelectedDataPlan
,setProductCard,setSingleSimPriceForData,
setActiveIndexForData,setActiveIndexForSim,setSelectedSim} from './actions'
import MultiSwitch from "./MultiSwitch";
import Countdown from "react-countdown";
import ProductCard from "./ProductCard";

function App() {
    const sims = ["1","2","3","4","5"]
    const title = "How Many Sims Do You Need???"
    const description =  "Each extra SIM has a 20% discount"
    const subTitle =  "How Much Data Would You Like Per Sim???"
    const dispatch =  useDispatch();
    const productCardDetails = useSelector(state => state.productCardDetails);
    const activeSimIndex= useSelector(state => state.activeIndexForSim);
    const activeDataIndex= useSelector(state => state.activeIndexForData);
    const data = useSelector(state => state.data);
    const singleSimPrice = useSelector(state => state.singleSimPriceForData);
    const selectedDataPlan = useSelector(state => state.selectedDataPlan);
    const selectedSim = useSelector(state => state.selectedSim);
    const products = useSelector(state => state.products);


    let handleClick = (value, id) => {
       let simSelected;
       let dataPlanSelected;
       if(value.includes("GB")) {
         dataPlanSelected = value.includes("MOB-") ? value : "MOB-"+value
         dispatch(setSelectedDataPlan(dataPlanSelected))
         simSelected = selectedSim;
         dispatch(setActiveIndexForData(id))

       }else {
         dispatch(setSelectedSim(value))
         dataPlanSelected = selectedDataPlan;
         simSelected = value;
         dispatch(setActiveIndexForSim(id))
       }
       dispatch(setProductCard(products[dataPlanSelected][simSelected - 1]))


    }
    useEffect(() => {
         axios.get('/products.json')
             .then(function (response) {
                let data = response.data
                let simData =[];
                let obj ={};
                Object.keys(data).map(key => getKeys(key,data,simData,obj))
                dispatch(setProducts(data))
                dispatch(setMobileData(simData))
                dispatch(setSingleSimPriceForData(obj))
                dispatch(setSelectedDataPlan("MOB-"+simData[0]))
                dispatch(setProductCard(data["MOB-"+simData[0]][0]))

          })
             .catch(function (error) {
                 console.log(error);
         });
    }, []);

    let getKeys = (key,data,simData,obj) => {
       simData.push(key.split("MOB-")[1])
       obj[key]= data[key][0].monthly_cost
    }



    return (
        <div className="container">
            <MultiSwitch activeIndex ={activeSimIndex} title={title} description={description} data={sims} handleClick={handleClick}/>
            <MultiSwitch activeIndex ={activeDataIndex} title={subTitle}  data={data} handleClick={handleClick}/>
            {productCardDetails ? <ProductCard planDetails={productCardDetails} singleSimPrice ={singleSimPrice} selectedDataPlan={selectedDataPlan} selectedSim={selectedSim}></ProductCard> : null}
        </div>
    );
}

export default App;