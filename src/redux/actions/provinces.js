import { FETCH_WEATHER } from "../../commons/constants";

const setProvinces = payload => ({
    type: "SET_PROVINCES",
    payload: payload
});
const getProvinces = () => dispatch => {
    fetch(FETCH_WEATHER)
        .then(response => response.json())
        .then(response => {
            const provinces = response.reduce((accumulated, actual) => {
                if (accumulated.some(el => el.province === actual.province)) {
                    const modifiedProvince = accumulated.filter(
                        el => el.province === actual.province
                    )[0];
                    modifiedProvince.prom += 1;
                    modifiedProvince.temp += actual.weather.temp;
                    modifiedProvince.humidity += actual.weather.humidity;
                    modifiedProvince.thermalSensation += actual.weather.st;
                    modifiedProvince.visibility += actual.weather.visibility;
                    modifiedProvince.windSpeed += actual.weather.wind_speed;
                    modifiedProvince.pressure += actual.weather.pressure;
                    return [
                        ...accumulated.filter(
                            el => el.province !== actual.province
                        ),
                        modifiedProvince
                    ];
                } else {
                    const newProvince = {
                        prom: 1,
                        province: actual.province,
                        temp: actual.weather.temp,
                        humidity: actual.weather.humidity,
                        thermalSensation: actual.weather.st,
                        visibility: actual.weather.visibility,
                        windSpeed: actual.weather.wind_speed,
                        pressure: actual.weather.pressure
                    };
                    return [...accumulated, newProvince];
                }
            }, []);
            dispatch(
                setProvinces(
                    provinces.map(el => {
                        return {
                            province: el.province,
                            temp: el.temp / el.prom,
                            humidity: el.humidity / el.prom,
                            thermalSensation: el.thermalSensation / el.prom,
                            visibility: el.visibility / el.prom,
                            windSpeed: el.windSpeed / el.prom,
                            pressure: el.pressure / el.prom
                        };
                    })
                )
            );
        })
        .catch(error => {
            throw error;
        });
};

export { getProvinces };
