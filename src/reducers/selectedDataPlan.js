const selectedDataPlan =(state = "", action) =>{
    switch(action.type) {
        case 'setSelectedDataPlan':
            return action.payload;
        default :
            return state;
    }
}

export default selectedDataPlan;