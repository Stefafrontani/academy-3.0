function propertyMap(prop) {
    switch (prop) {
        case "Humedad":
            return "humidity";
        case "Visibilidad":
            return "visibility";
        case "Sensación Térmica":
            return "thermalSensation";
        case "Temperatura":
            return "temp";
        case "Presión":
            return "pressure";
        default:
            break;
    }
}

export { propertyMap };
