import mobileData from './mobileData';
import products from './products';
import selectedDataPlan from './selectedDataPlan';
import singleSimPriceForData from './singleSimPriceForData';
import activeIndexForData from './activeIndexForData';
import activeIndexForSim from './activeIndexForSim';
import productCardDetails from './productCardDetails';
import selectedSim from './selectedSim';
import {combineReducers} from 'redux';

const allReducers  = combineReducers({
    data : mobileData ,
    products : products,
    selectedDataPlan :selectedDataPlan,
    singleSimPriceForData :singleSimPriceForData,
    activeIndexForSim:activeIndexForSim,
    activeIndexForData:activeIndexForData,
    productCardDetails: productCardDetails,
    selectedSim:selectedSim

})

export  default allReducers