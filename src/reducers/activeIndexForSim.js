const activeIndexForSim =(state = 0, action) =>{
    switch(action.type) {
        case 'setActiveIndexForSim':
            return action.payload;
        default :
            return state;
    }
}

export default activeIndexForSim;