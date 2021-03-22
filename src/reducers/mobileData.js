const mobileData =(state = [], action) => {
    switch(action.type) {
        case 'setMobileData':
            return action.payload;
        default :
            return state;
    }
}

export default mobileData;