function getIcon(string) {
    if (
        string.includes("precipitacion") ||
        string.includes("tormenta") ||
        string.includes("chaparron")
    )
        return "./assets/images/drop.svg";
    if (string.includes("soleado") || string.includes("despejado"))
        return "./assets/images/sunny.svg";
    if (string.includes("nublado") || string.includes("nubosidad"))
        return "./assets/images/cloud.svg";
    return "./assets/images/warning.svg";
}

const setWeatherCards = payload => ({
    type: "SET_WEATHERCARDS",
    payload: payload
});
const getWeatherCards = location => dispatch => {
    const day1 = "http://localhost:4000/forecast0";
    const day2 = "http://localhost:4000/forecast1";
    const day3 = "http://localhost:4000/forecast2";
    Promise.all(
        [day1, day2, day3].map(el =>
            fetch(el).then(function(res) {
                if (!res.ok) {
                    throw new Error();
                }
                return res.json();
            })
        )
    )
        .then(function(response) {
            const weatherCard = response.map((currentDay, index) => {
                const element = currentDay.filter(el => el.name === location)[0]
                    .weather;
                if (element === undefined) return {};
                const currentDate = new Date();
                currentDate.setDate(currentDate.getDate() + index);
                return {
                    day: [
                        "Domingo",
                        "Lunes",
                        "Martes",
                        "Miércoles",
                        "Jueves",
                        "Viernes",
                        "Sábado"
                    ][currentDate.getDay()],
                    date: currentDate.toLocaleDateString(),
                    icon: getIcon(
                        element.morning_desc + element.afternoon_desc
                    ),
                    tempMin: Math.min(
                        element.morning_temp,
                        element.afternoon_temp
                    ),
                    tempMax: Math.max(
                        element.morning_temp,
                        element.afternoon_temp
                    ),
                    morningDesc: element.morning_desc,
                    afternoonDesc: element.afternoon_desc
                };
            });

            dispatch(setWeatherCards(weatherCard));
        })
        .catch(error => {
            throw error;
        });
};

export { getWeatherCards };
