const products =(state = null, action) =>{
    switch(action.type) {
        case 'setProducts':
            return action.payload;
        default :
            return state;
    }
}

export default products;