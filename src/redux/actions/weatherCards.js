import {
    FETCH_DAY0,
    FETCH_DAY1,
    FETCH_DAY2,
    DAYS,
    SET_WEATHERCARDS
} from "../../commons/constants";
import { getIcon } from "../../commons/functions";

const setWeatherCards = payload => ({
    type: SET_WEATHERCARDS,
    payload: payload
});
const getWeatherCards = location => dispatch => {
    Promise.all(
        [FETCH_DAY0, FETCH_DAY1, FETCH_DAY2].map(el =>
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
                if (element === undefined) throw new Error("Zone not found");
                const currentDate = new Date();
                currentDate.setDate(currentDate.getDate() + index);
                return {
                    day: DAYS[currentDate.getDay()],
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
