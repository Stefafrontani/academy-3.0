const PROVINCES_INITIAL_STATE = {
    provinces: [
        {
            province: "Capital Federal",
            temp: 21.9,
            humidity: 59,
            thermalSensation: 0,
            visibility: 10,
            windSpeed: 17,
            pressure: 1014.05
        },
        {
            province: "Chaco",
            temp: 32.599999999999994,
            humidity: 35,
            thermalSensation: 0,
            visibility: 17.5,
            windSpeed: 8,
            pressure: 998.9
        },
        {
            province: "Formosa",
            temp: 32.25,
            humidity: 34,
            thermalSensation: 0,
            visibility: 20,
            windSpeed: 9,
            pressure: 1000.5999999999999
        },
        {
            province: "Misiones",
            temp: 30.33333333333333,
            humidity: 32.666666666666664,
            thermalSensation: 0,
            visibility: 20,
            windSpeed: 8.333333333333334,
            pressure: 973.7666666666668
        },
        {
            province: "Salta",
            temp: 26.880000000000003,
            humidity: 48.2,
            thermalSensation: 6.44,
            visibility: 17,
            windSpeed: 8.8,
            pressure: 931.8799999999999
        },
        {
            province: "Tierra del Fuego, Antártida e Islas del Atlántico Sur",
            temp: 5.3,
            humidity: 66.5,
            thermalSensation: -1.5899999999999999,
            visibility: 17.6,
            windSpeed: 20.3,
            pressure: 994.7599999999999
        },
        {
            province: "Neuquén",
            temp: 18.26666666666667,
            humidity: 49.333333333333336,
            thermalSensation: 0,
            visibility: 14.166666666666666,
            windSpeed: 23.833333333333332,
            pressure: 950.2166666666667
        },
        {
            province: "Santiago del Estero",
            temp: 29.8,
            humidity: 44.5,
            thermalSensation: 22.5,
            visibility: 13.75,
            windSpeed: 6.5,
            pressure: 976.375
        },
        {
            province: "Mendoza",
            temp: 16.099999999999998,
            humidity: 70.55555555555556,
            thermalSensation: 0,
            visibility: 11.11111111111111,
            windSpeed: 10.777777777777779,
            pressure: 893.6333333333333
        },
        {
            province: "Santa Cruz",
            temp: 15.733333333333336,
            humidity: 32.666666666666664,
            thermalSensation: 0,
            visibility: 33.888888888888886,
            windSpeed: 19.666666666666668,
            pressure: 1003.9333333333335
        },
        {
            province: "Río Negro",
            temp: 15.589999999999998,
            humidity: 65.5,
            thermalSensation: 0,
            visibility: 18,
            windSpeed: 15.9,
            pressure: 989
        },
        {
            province: "Chubut",
            temp: 15.783333333333333,
            humidity: 47.333333333333336,
            thermalSensation: 0,
            visibility: 32.5,
            windSpeed: 20.166666666666668,
            pressure: 997.5
        },
        {
            province: "La Pampa",
            temp: 24.328571428571426,
            humidity: 38.714285714285715,
            thermalSensation: 0,
            visibility: 24.285714285714285,
            windSpeed: 21.714285714285715,
            pressure: 994.8714285714286
        },
        {
            province: "Tucumán",
            temp: 28,
            humidity: 50.5,
            thermalSensation: 28.55,
            visibility: 15,
            windSpeed: 9,
            pressure: 968.0999999999999
        },
        {
            province: "Jujuy",
            temp: 27.4,
            humidity: 31.428571428571427,
            thermalSensation: 0,
            visibility: 16.428571428571427,
            windSpeed: 17.571428571428573,
            pressure: 881.3285714285714
        },
        {
            province: "Córdoba",
            temp: 24.745000000000005,
            humidity: 44.15,
            thermalSensation: 1.335,
            visibility: 14.85,
            windSpeed: 14.35,
            pressure: 974.7100000000003
        },
        {
            province: "Corrientes",
            temp: 30.424999999999997,
            humidity: 42.625,
            thermalSensation: 22.125,
            visibility: 12.375,
            windSpeed: 14.5,
            pressure: 1000.8125
        },
        {
            province: "Buenos Aires",
            temp: 21.070909090909097,
            humidity: 52.50909090909091,
            thermalSensation: 0,
            visibility: 12.781818181818181,
            windSpeed: 16.963636363636365,
            pressure: 1010.2418181818178
        },
        {
            province: "San Luis",
            temp: 24.066666666666666,
            humidity: 44.333333333333336,
            thermalSensation: 0,
            visibility: 18.333333333333332,
            windSpeed: 28,
            pressure: 945.0666666666666
        },
        {
            province: "Catamarca",
            temp: 27.720000000000006,
            humidity: 40.4,
            thermalSensation: 5.66,
            visibility: 19,
            windSpeed: 5.4,
            pressure: 924.74
        },
        {
            province: "Entre Ríos",
            temp: 25.142857142857146,
            humidity: 45,
            thermalSensation: 0,
            visibility: 15,
            windSpeed: 15.571428571428571,
            pressure: 1008.5428571428572
        },
        {
            province: "La Rioja",
            temp: 28,
            humidity: 37.2,
            thermalSensation: 5.4399999999999995,
            visibility: 20,
            windSpeed: 12.2,
            pressure: 944.5200000000001
        },
        {
            province: "San Juan",
            temp: 23.8,
            humidity: 35,
            thermalSensation: 0,
            visibility: 20,
            windSpeed: 24.666666666666668,
            pressure: 921.5333333333333
        },
        {
            province: "Santa Fe",
            temp: 24.1875,
            humidity: 46.3125,
            thermalSensation: 1.775,
            visibility: 12.3125,
            windSpeed: 18.75,
            pressure: 0
        }
    ]
};

const SET_PROVINCES = "SET_PROVINCES";

export { PROVINCES_INITIAL_STATE, SET_PROVINCES };
