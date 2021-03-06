const ZONES = [
    "Villa de María, Córdoba",
    "Tunuyan, Mendoza",
    "San Rafael, Mendoza",
    "General Alvear, Mendoza",
    "Puerto Iguazú, Misiones",
    "Posadas, Misiones",
    "Apóstoles, Misiones",
    "Salta, Salta",
    "Rivadavia, Salta",
    "Córdoba, Córdoba",
    "Yacimientos Río Turbio, Santa Cruz",
    "Junín, Buenos Aires",
    "Sauce Viejo, Santa Fe",
    "Casilda, Santa Fe",
    "Chacabuco, Buenos Aires",
    "Villa Regina, Río Negro",
    "Cipolletti, Río Negro",
    "Río Colorado, Río Negro",
    "San Antonio Oeste, Río Negro",
    "Choele Choel, Río Negro",
    "El Bolsón, Río Negro",
    "Viedma, Río Negro",
    "San Carlos de Bariloche, Río Negro",
    "Tartagal, Salta",
    "San Ramón de La Nueva Orán, Salta",
    "General Roca, Río Negro",
    "San José de Jachal, San Juan",
    "Caucete, San Juan",
    "San Juan, San Juan",
    "Santa Rosa del Conlara, San Luis",
    "Merlo, San Luis",
    "Villa Reynolds, San Luis",
    "Metán, Salta",
    "San Luis, San Luis",
    "La Toma, San Luis",
    "Justo Daract, San Luis",
    "Perito Moreno, Santa Cruz",
    "Gobernador Gregores, Santa Cruz",
    "Caleta Olivia, Santa Cruz",
    "El Calafate, Santa Cruz",
    "Puerto Deseado, Santa Cruz",
    "Puerto San Julián, Santa Cruz",
    "Puerto Santa Cruz, Santa Cruz",
    "Pehuajó, Buenos Aires",
    "Neuquén, Neuquén",
    "Zapala, Neuquén",
    "Oberá, Misiones",
    "Cutral Co, Neuquén",
    "Villa La Angostura, Neuquén",
    "Chapelco, Neuquén",
    "San Martín de Los Andes, Neuquén",
    "Tafí Viejo, Tucumán",
    "Concepción, Tucumán",
    "Aguilares, Tucumán",
    "San Miguel de Tucumán, Tucumán",
    "Base Carlini, Tierra del Fuego, Antártida e Islas del Atlántico Sur",
    "Base Marambio, Tierra del Fuego, Antártida e Islas del Atlántico Sur",
    "Eldorado, Misiones",
    "San Carlos, Mendoza",
    "Pilar Observatorio, Córdoba",
    "Base Esperanza, Tierra del Fuego, Antártida e Islas del Atlántico Sur",
    "Base Orcadas, Tierra del Fuego, Antártida e Islas del Atlántico Sur",
    "Base San Martín, Tierra del Fuego, Antártida e Islas del Atlántico Sur",
    "Bernardo de Irigoyen, Misiones",
    "Victorica, La Pampa",
    "Base Belgrano II, Tierra del Fuego, Antártida e Islas del Atlántico Sur",
    "Pinamar, Buenos Aires",
    "Azul, Buenos Aires",
    "Puerto Madryn, Chubut",
    "Perico, Jujuy",
    "9 de Julio, Buenos Aires",
    "Las Flores, Buenos Aires",
    "General Villegas, Buenos Aires",
    "Olavarría, Buenos Aires",
    "Dolores, Buenos Aires",
    "Coronel Pringles, Buenos Aires",
    "Villa Gesell, Buenos Aires",
    "Tandil, Buenos Aires",
    "Mar del Plata, Buenos Aires",
    "Balcarce, Buenos Aires",
    "Maipú, Buenos Aires",
    "San Clemente del Tuyú, Buenos Aires",
    "Tres Arroyos, Buenos Aires",
    "Miramar, Buenos Aires",
    "Necochea, Buenos Aires",
    "Carmen de Patagones, Buenos Aires",
    "Bahía Blanca, Buenos Aires",
    "Coronel Suarez, Buenos Aires",
    "Pigüé, Buenos Aires",
    "Monte Hermoso, Buenos Aires",
    "Benito Juárez, Buenos Aires",
    "San Pedro, Buenos Aires",
    "Zárate, Buenos Aires",
    "San Antonio de Areco, Buenos Aires",
    "Pergamino, Buenos Aires",
    "Santa María, Catamarca",
    "Andalgalá, Catamarca",
    "San Fernando del Valle de Catamarca, Catamarca",
    "Tinogasta, Catamarca",
    "Belén, Catamarca",
    "General José de San Martín, Chaco",
    "Resistencia, Chaco",
    "Presidencia Roque Sáenz Peña, Chaco",
    "Esquel, Chubut",
    "Paso de Indios, Chubut",
    "Comodoro Rivadavia, Chubut",
    "Villa Ángela, Chaco",
    "Trelew, Chubut",
    "Ushuaia, Tierra del Fuego, Antártida e Islas del Atlántico Sur",
    "Tolhuin, Tierra del Fuego, Antártida e Islas del Atlántico Sur",
    "Rawson, Chubut",
    "Río Grande, Tierra del Fuego, Antártida e Islas del Atlántico Sur",
    "Puerto Argentino, Tierra del Fuego, Antártida e Islas del Atlántico Sur",
    "Cruz del Eje, Córdoba",
    "Cosquin, Córdoba",
    "Alta Gracia, Córdoba",
    "Villa Dolores, Córdoba",
    "Humahuaca, Jujuy",
    "Mina Clavero, Córdoba",
    "Villa General Belgrano, Córdoba",
    "Marcos Juárez, Córdoba",
    "San Francisco, Córdoba",
    "Bell Ville, Córdoba",
    "Villa María, Córdoba",
    "Río Tercero, Córdoba",
    "Río Cuarto, Córdoba",
    "La Carlota, Córdoba",
    "Almafuerte, Córdoba",
    "Coronel Moldes, Córdoba",
    "Laboulaye, Córdoba",
    "Ituzaingo, Corrientes",
    "Villa Huidobro, Córdoba",
    "Empedrado, Corrientes",
    "Corrientes, Corrientes",
    "Paso de Los Libres, Corrientes",
    "Curuzú Cuatiá, Corrientes",
    "Monte Caseros, Corrientes",
    "La Paz, Entre Ríos",
    "Paraná, Entre Ríos",
    "Concordia, Entre Ríos",
    "Goya, Corrientes",
    "Gualeguaychú, Entre Ríos",
    "Concepción del Uruguay, Entre Ríos",
    "Gualeguay, Entre Ríos",
    "Pirané, Formosa",
    "Las Lomitas, Formosa",
    "Clorinda, Formosa",
    "Formosa, Formosa",
    "Colón, Entre Ríos",
    "La Quiaca, Jujuy",
    "Palpala, Jujuy",
    "San Salvador de Jujuy, Jujuy",
    "Libertador Gral San Martín, Jujuy",
    "Eduardo Castex, La Pampa",
    "General Pico, La Pampa",
    "San Pedro de Jujuy, Jujuy",
    "Intendente Alvear, La Pampa",
    "Santa Rosa, La Pampa",
    "25 de Mayo, La Pampa",
    "General Acha, La Pampa",
    "Chilecito, La Rioja",
    "Aimogasta, La Rioja",
    "Malargüe, Mendoza",
    "Uspallata, Mendoza",
    "Punta de Vacas, Mendoza",
    "Mendoza, Mendoza",
    "San Martín, Mendoza",
    "Chepes, La Rioja",
    "Chamical, La Rioja",
    "La Rioja, La Rioja",
    "Mercedes, Corrientes",
    "Maquinchao, Río Negro",
    "Santa Teresita, Buenos Aires",
    "San Carlos de Bolívar, Buenos Aires",
    "San Bernardo, Buenos Aires",
    "Ceres, Santa Fe",
    "Reconquista, Santa Fe",
    "Río Gallegos, Santa Cruz",
    "Tostado, Santa Fe",
    "Sunchales, Santa Fe",
    "San Javier, Santa Fe",
    "Sastre, Santa Fe",
    "San Cristóbal, Santa Fe",
    "El Trebol, Santa Fe",
    "Rosario, Santa Fe",
    "Venado Tuerto, Santa Fe",
    "Rafaela, Santa Fe",
    "Santa Fe, Santa Fe",
    "Melincué, Santa Fe",
    "Las Rosas, Santa Fe",
    "Santiago del Estero, Santiago del Estero",
    "Termas de Río Hondo, Santiago del Estero",
    "Frias, Santiago del Estero",
    "Añatuya, Santiago del Estero",
    "Chascomus, Buenos Aires",
    "Trenque Lauquen, Buenos Aires",
    "Tigre, Buenos Aires",
    "Ciudad Jardin Lomas del Palomar, Buenos Aires",
    "Campo de Mayo, Buenos Aires",
    "El Palomar, Buenos Aires",
    "Aeroparque Buenos Aires, Capital Federal",
    "San Andrés, Buenos Aires",
    "Banfield, Buenos Aires",
    "Punta Indio, Buenos Aires",
    "San Fernando, Buenos Aires",
    "San Isidro, Buenos Aires",
    "Mariano Moreno, Buenos Aires",
    "Don Torcuato, Buenos Aires",
    "José María Ezeiza, Buenos Aires",
    "Merlo, Buenos Aires",
    "San Miguel, Buenos Aires",
    "La Plata, Buenos Aires",
    "Quilmes, Buenos Aires",
    "Avellaneda, Buenos Aires",
    "Ciudad Evita, Buenos Aires",
    "Lomas de Zamora, Buenos Aires",
    "Capital Federal, Capital Federal",
    "Morón, Buenos Aires"
];

const PROPERTIES = [
    "Humedad",
    "Visibilidad",
    "Velocidad del Viento",
    "Temperatura",
    "Presión",
    "Sensación Térmica"
];

const DAYS = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
];

export { ZONES, PROPERTIES, DAYS };
