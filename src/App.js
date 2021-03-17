import React, {
    useState,useEffect
} from 'react';
import MultiSwitch from "./MultiSwitch";
import Countdown from "react-countdown";
import ProductCard from "./ProductCard";

function App() {
    const[sims]=useState(["1","2","3","4","5"])
    const title = "How Many Sims Do You Need???"
    const description =  "Each extra SIM has a 20% discount"
    const subTitle =  "How Much Data Would You Like Per Sim???"
    const[data,setData]=useState([])
    const[products,setProducts]=useState(null)
    const[selectedSim,setSelectedSim] = useState("1")
    const[singleSimPriceForData, setSingleSimPriceForData] = useState(null);
    const[selectedDataPlan,setSelectedDataPlan] = useState("")
    const[productCardDetails, setProductCard] =  useState(null);
    const[activeIndexForSim,setActiveIndexForSim] = useState(0);
    const[activeIndexForData,setActiveIndexForData] = useState(0);


    let handleClick = (value, id) => {
       let simSelected;
       let dataPlanSelected;
       if(value.includes("GB")) {
         dataPlanSelected = value.includes("MOB-") ? value : "MOB-"+value
         setSelectedDataPlan(dataPlanSelected)
         simSelected = selectedSim;
         setActiveIndexForData(id);
       }else {
         setSelectedSim(value)
         dataPlanSelected = selectedDataPlan;
         simSelected = value;
         setActiveIndexForSim(id);
       }
       setProductCard(products[dataPlanSelected][simSelected - 1])

    }
    useEffect(() => {
         axios.get('/products.json')
             .then(function (response) {
                let data = response.data
                let simData =[];
                let obj ={};
                setProducts(data);
                Object.keys(data).map(key => getKeys(key,data,simData,obj))
                setSingleSimPriceForData(obj);
                setSelectedDataPlan("MOB-"+simData[0])
                setData(simData);
                setProductCard(data["MOB-"+simData[0]][0])

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
            <MultiSwitch activeIndex ={activeIndexForSim} title={title} description={description} data={sims} handleClick={handleClick}/>
            <MultiSwitch activeIndex ={activeIndexForData} title={subTitle}  data={data} handleClick={handleClick}/>
            {productCardDetails ? <ProductCard planDetails={productCardDetails} singleSimPrice ={singleSimPriceForData} selectedDataPlan={selectedDataPlan} selectedSim={selectedSim}></ProductCard> : null}
        </div>
    );
}

export default App;