const activeIndexForData =(state = 0, action) =>{
    switch(action.type) {
        case 'setActiveIndexForData':
            return action.payload;
        default :
            return state;
    }
}


export default activeIndexForData;