const WEATHERCARDS_INITIAL_STATE = {
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

const SET_WEATHERCARDS = "SET_WEATHERCARDS";

export { WEATHERCARDS_INITIAL_STATE, SET_WEATHERCARDS };
