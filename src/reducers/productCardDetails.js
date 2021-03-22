const productCardDetails =(state = null, action) =>{
    switch(action.type) {
        case 'setProductCard':
            return action.payload;
        default :
            return state;
    }
}

export default productCardDetails;