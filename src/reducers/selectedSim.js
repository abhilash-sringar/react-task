const selectedSim =(state = "1", action) =>{
    switch(action.type) {
        case 'setSelectedSim':
            return action.payload;
        default :
            return state;
    }
}

export default selectedSim;