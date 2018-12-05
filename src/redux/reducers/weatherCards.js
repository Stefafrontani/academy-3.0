const initialState = {
    weatherCards: [
        {
            day: "Miércoles",
            date: "12/5/2018",
            icon: "./assets/images/drop.svg",
            tempMin: 15,
            tempMax: 27,
            morningDesc:
                "Nubosidad variable. Probabilidad de chaparrones y tormentas aisladas, algunas localmente fuertes, especialmente a la madrugada. Mejorando temporariamente. Vientos leves de direcciones variables, cambiando a moderados del sudeste.",
            afternoonDesc:
                "Nubosidad variable. Probabilidad de chaparrones y tormentas. Vientos moderados del sector este."
        },
        {
            day: "Jueves",
            date: "12/6/2018",
            icon: "./assets/images/drop.svg",
            tempMin: 14,
            tempMax: 26,
            morningDesc: "Inestable con probables precipitaciones",
            afternoonDesc: "Tormentas aisladas"
        },
        {
            day: "Viernes",
            date: "12/7/2018",
            icon: "./assets/images/drop.svg",
            tempMin: 16,
            tempMax: 32,
            morningDesc: "Inestable con probables precipitaciones",
            afternoonDesc: "Mejorando"
        }
    ]
};

const weatherCards = (state = initialState, action) => {
    switch (action.type) {
        case "SET_WEATHERCARDS":
            return Object.assign({}, state, {
                weatherCards: action.payload
            });
        default:
            return state;
    }
};

export default weatherCards;
