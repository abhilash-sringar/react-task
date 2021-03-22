const singleSimPriceForData =(state = null, action) =>{
    switch(action.type) {
        case 'setSingleSimPriceForData':
            return action.payload;
        default :
            return state;
    }
}

export default singleSimPriceForData;