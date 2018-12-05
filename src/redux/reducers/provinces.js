const initialState = {
    provinces: [
        {
            province: "Buenos Aires",
            temp: 24,
            humidity: 87,
            thermalSensation: 23
        }
    ]
};

const provinces = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PROVINCES":
            return Object.assign({}, state, {
                provinces: action.payload
            });
        default:
            return state;
    }
};

export default provinces;
