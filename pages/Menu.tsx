import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

type Wine = {
    name: string;
    grapes: string;
    priceGlass: number | string;
    priceBottle: number;
    vintage?: string;
    origin?: string; // Optional if we want to add later
};

type WineCategory = {
    title: string;
    wines: Wine[];
};

export const wineData: WineCategory[] = [
    {
        "title": "Wijnen per glas",
        "wines": [
            {
                "name": "Blankenhorn Cr\u00e9mant",
                "grapes": "A uxerrois, Chardonnay, Weissburgunde r",
                "priceGlass": 10.0,
                "priceBottle": 60.0,
                "vintage": "",
                "origin": "Mousserend"
            },
            {
                "name": "Champagne Andr\u00e9 Chemin \u201cBlanc des Noirs\u201d",
                "grapes": "P inot Noir",
                "priceGlass": 14.4,
                "priceBottle": 85.0,
                "vintage": "",
                "origin": "Mousserend"
            },
            {
                "name": "Quinta Porrais Douro Branco",
                "grapes": "C \u00f3dega do Larinho, Rabigato, Verdelho, Viosinho",
                "priceGlass": 6.2,
                "priceBottle": 31.0,
                "vintage": "2024",
                "origin": "Wit"
            },
            {
                "name": "Fran\u00e7ois Chidaine Touraine S",
                "grapes": "a uvignon Blanc",
                "priceGlass": 9.4,
                "priceBottle": 47.0,
                "vintage": "2023",
                "origin": "Wit"
            },
            {
                "name": "Von Oetinger Riesling Alte Reben",
                "grapes": "Ri esling",
                "priceGlass": 13.4,
                "priceBottle": 67.0,
                "vintage": "2018",
                "origin": "Wit"
            },
            {
                "name": "Stahlnagel Silvaner",
                "grapes": "S ilvaner",
                "priceGlass": 7.4,
                "priceBottle": 37.0,
                "vintage": "2024",
                "origin": "Wit"
            },
            {
                "name": "Verus Furmint",
                "grapes": "F urmint",
                "priceGlass": 8.8,
                "priceBottle": 44.0,
                "vintage": "2024",
                "origin": "Wit"
            },
            {
                "name": "Fabrizio Vella CatarrattoO range",
                "grapes": "Catarratto",
                "priceGlass": 10.2,
                "priceBottle": 51.0,
                "vintage": "Natuurwijn 2024",
                "origin": "Wit"
            },
            {
                "name": "Leonardo Bussoletti Colle Ozio Grechetto",
                "grapes": "G rechetto",
                "priceGlass": 11.8,
                "priceBottle": 58.0,
                "vintage": "2024",
                "origin": "Wit"
            },
            {
                "name": "Cellier des Chartreux C\u00f4tes du Rhone",
                "grapes": "Clairette, Grenache Blanc, Roussanne, Viognie r8.4",
                "priceGlass": 0,
                "priceBottle": 42.0,
                "vintage": "2023",
                "origin": "Wit"
            },
            {
                "name": "I Pentri l\u2019Amore della Api F",
                "grapes": "i ano",
                "priceGlass": 11.8,
                "priceBottle": 59.0,
                "vintage": "2024",
                "origin": "Wit"
            },
            {
                "name": "Sebastien Giroux Macon-Fuiss\u00e9",
                "grapes": "C hardonnay",
                "priceGlass": 13.6,
                "priceBottle": 68.0,
                "vintage": "2023",
                "origin": "Wit"
            },
            {
                "name": "Lo\u00efc Mah\u00e9 Savenni\u00e8res Fougerais",
                "grapes": "C henin Blanc",
                "priceGlass": 17.6,
                "priceBottle": 88.0,
                "vintage": "2022",
                "origin": "Coravin Wit"
            },
            {
                "name": "Domaine S\u00e9guinot Bordet Chablis1 er Cru Fourchaume",
                "grapes": "C hardonnay",
                "priceGlass": 17.0,
                "priceBottle": 85.0,
                "vintage": "2023",
                "origin": "Coravin Wit"
            },
            {
                "name": "Maison Bruyere et David Condrieu",
                "grapes": "V iognier",
                "priceGlass": 17.8,
                "priceBottle": 89.0,
                "vintage": "2022",
                "origin": "Coravin Wit"
            },
            {
                "name": "Domaine Vincent Latour Meursault C",
                "grapes": "h ardonnay",
                "priceGlass": 24.8,
                "priceBottle": 124.0,
                "vintage": "2020",
                "origin": "Coravin Wit"
            },
            {
                "name": "Pfannebecker Ros\u00e9",
                "grapes": "C abernet Sauvignon, Schwarzriesling, Sp\u00e4tburgund er",
                "priceGlass": 8.2,
                "priceBottle": 42.0,
                "vintage": "2024",
                "origin": "Rose"
            },
            {
                "name": "Aphros Vinh\u00e3o",
                "grapes": "Vinh\u00e3o",
                "priceGlass": 10.6,
                "priceBottle": 53.0,
                "vintage": "2022",
                "origin": "Rood"
            },
            {
                "name": "Parajes del Valle Monastrell Ecol\u00f3gicoM",
                "grapes": "o nastrel l",
                "priceGlass": 7.4,
                "priceBottle": 37.0,
                "vintage": "2023",
                "origin": "Rood"
            },
            {
                "name": "Domaine Berthault Bourgogne Rouge",
                "grapes": "Pinot Noir",
                "priceGlass": 12.8,
                "priceBottle": 64.0,
                "vintage": "2023",
                "origin": "Rood"
            },
            {
                "name": "V ista Nova Vinho Tinto",
                "grapes": "Camarate, Castel\u00e3o, Touriga naciona l",
                "priceGlass": 5.8,
                "priceBottle": 29.0,
                "vintage": "2022",
                "origin": "Rood"
            },
            {
                "name": "Gross Hisno Vino Noir",
                "grapes": "B laufrankisch, Welschrieslin g",
                "priceGlass": 10.4,
                "priceBottle": 52.0,
                "vintage": "Natuurwijn 2024",
                "origin": "Rood"
            },
            {
                "name": "Villa BibbianiC hianti Montalbano",
                "grapes": "C anaiolo Nero, Colorino, Sangiovese",
                "priceGlass": 9.8,
                "priceBottle": 49.0,
                "vintage": "2023",
                "origin": "Rood"
            },
            {
                "name": "Schieber Bikav\u00e9r",
                "grapes": "C abernet Franc, Cabernet Sauvignon, Kadarka, K\u00e9kfrankos, Merlo t",
                "priceGlass": 9.2,
                "priceBottle": 46.0,
                "vintage": "2023",
                "origin": "Rood"
            },
            {
                "name": "Domain de la Gravierette Ju de Vie",
                "grapes": "G renache, Marselan, Mourv\u00e8dre, Merlot",
                "priceGlass": 8.2,
                "priceBottle": 42.0,
                "vintage": "2023",
                "origin": "Rood"
            },
            {
                "name": "Bodegas Arrocal Ribera del Duero",
                "grapes": "A lbillo Mayor, Garnacha, Tinto Fino",
                "priceGlass": 10.8,
                "priceBottle": 54.0,
                "vintage": "2023",
                "origin": "Rood"
            },
            {
                "name": "B odega Solabal Rioja Reserva",
                "grapes": "T empranillo",
                "priceGlass": 13.0,
                "priceBottle": 65.0,
                "vintage": "2019",
                "origin": "Rood"
            },
            {
                "name": "Maison Bruyere et David St Joseph",
                "grapes": "S yrah",
                "priceGlass": 15.4,
                "priceBottle": 77.0,
                "vintage": "2022",
                "origin": "Rood"
            },
            {
                "name": "D omaine Gilles Robin Cornas",
                "grapes": "S yrah",
                "priceGlass": 19.8,
                "priceBottle": 105.0,
                "vintage": "2016",
                "origin": "Coravin rood"
            },
            {
                "name": "Domaine de Ferrand Ch\u00e2teauneu-fdu-Pape",
                "grapes": "G renache, Syrah",
                "priceGlass": 18.6,
                "priceBottle": 93.0,
                "vintage": "2015",
                "origin": "Coravin rood"
            },
            {
                "name": "Voerzio Martini Barolo La SerraN",
                "grapes": "e bbiolo",
                "priceGlass": 18.6,
                "priceBottle": 93.0,
                "vintage": "2021",
                "origin": "Coravin rood"
            },
            {
                "name": "L a Collina dei Ciliegi Amarone della Valpolicella C",
                "grapes": "o rvina, Corvinone, Rondinella",
                "priceGlass": 19.0,
                "priceBottle": 95.0,
                "vintage": "2019",
                "origin": "Coravin rood"
            },
            {
                "name": "D omaine Corty Juran\u00e7on",
                "grapes": "G ros Manseng, Petit Manseng",
                "priceGlass": 7.5,
                "priceBottle": 48.0,
                "vintage": "2022",
                "origin": "Dessert"
            },
            {
                "name": "Gracia Hnos Tauromaquia Pedro Xim\u00e9ne z",
                "grapes": "",
                "priceGlass": 9.4,
                "priceBottle": 47.0,
                "vintage": "",
                "origin": "Dessert"
            },
            {
                "name": "D omaine Clos Naudin Vouvray Moelleux",
                "grapes": "C henin Blanc",
                "priceGlass": 11.0,
                "priceBottle": 72.0,
                "vintage": "2017",
                "origin": "Dessert"
            },
            {
                "name": "Quinta da Pedra Alta Tawny Port",
                "grapes": "",
                "priceGlass": 11.0,
                "priceBottle": 59.0,
                "vintage": "",
                "origin": "Dessert"
            }
        ]
    },
    {
        "title": "Mousserend",
        "wines": [
            {
                "name": "Domaine Gamet Rive Gauche",
                "grapes": "C hardonnay, Pinot noir, Pinot Meunier",
                "priceGlass": 0,
                "priceBottle": 84.0,
                "vintage": "",
                "origin": "Frankrijk |C hampagne"
            },
            {
                "name": "Champagne Andr\u00e9 Chemin",
                "grapes": "P inot Noir",
                "priceGlass": 0,
                "priceBottle": 85.0,
                "vintage": "",
                "origin": "Frankrijk |C hampagne"
            },
            {
                "name": "Champagne Jean Dumangin",
                "grapes": "C hardonnay",
                "priceGlass": 0,
                "priceBottle": 87.0,
                "vintage": "",
                "origin": "Frankrijk |C hampagne"
            },
            {
                "name": "Champagne Sadi Malot",
                "grapes": "C hardonnay, Pinot noir",
                "priceGlass": 0,
                "priceBottle": 90.0,
                "vintage": "",
                "origin": "Frankrijk |C hampagne"
            },
            {
                "name": "Champagne Roger Coulon 1er Cru L'Homm\u00e9e Vieilles Vigne s",
                "grapes": "C hardonnay, Pinot Noir",
                "priceGlass": 0,
                "priceBottle": 95.0,
                "vintage": "",
                "origin": "Frankrijk |C hampagne"
            },
            {
                "name": "Fallet-Pr\u00e9vostat Blanc de Blancs Extra-Brut Grand Cru",
                "grapes": "Chardonnay",
                "priceGlass": 0,
                "priceBottle": 115.0,
                "vintage": "",
                "origin": "Frankrijk |C hampagne"
            },
            {
                "name": "David L\u00e9clapart l'Ap\u00f4tre Blanc de Blancs Extr-aBrut",
                "grapes": "C hardonnay",
                "priceGlass": 0,
                "priceBottle": 290.0,
                "vintage": "2010",
                "origin": "Frankrijk |C hampagne"
            },
            {
                "name": "Domaine de la RouletiereC r\u00e9mant de Vouvray Cuvee Gilet",
                "grapes": "C henin Blanc",
                "priceGlass": 0,
                "priceBottle": 56.0,
                "vintage": "",
                "origin": "Frankrijk |L oire"
            },
            {
                "name": "Francois Chidaine Petillant Montlouis-sur-Loire",
                "grapes": "C henin Blanc",
                "priceGlass": 0,
                "priceBottle": 68.0,
                "vintage": "",
                "origin": "Frankrijk |L oire"
            },
            {
                "name": "Lo\u00efc Mah\u00e9 Petit Moulin Brut Nature",
                "grapes": "C henin Blanc",
                "priceGlass": 0,
                "priceBottle": 70.0,
                "vintage": "",
                "origin": "Frankrijk |L oire"
            },
            {
                "name": "Ros\u00e9 Cava Nit Del Foc Organic Br\u00fat",
                "grapes": "Garnacha",
                "priceGlass": 0,
                "priceBottle": 46.0,
                "vintage": "",
                "origin": "Spanje |P enedes"
            },
            {
                "name": "Viader Corpinnat Les Eretes Brut Nature",
                "grapes": "M acabeo, Xarel-lo",
                "priceGlass": 0,
                "priceBottle": 53.0,
                "vintage": "",
                "origin": "Spanje |P enedes"
            },
            {
                "name": "Viader Corpinnat La Llena Brut Nature",
                "grapes": "M acabeo, Xare-llo",
                "priceGlass": 0,
                "priceBottle": 67.0,
                "vintage": "",
                "origin": "Spanje |P enedes"
            },
            {
                "name": "Natuurwijn Alta Alella Bruant Cava",
                "grapes": "X arel-lo",
                "priceGlass": 0,
                "priceBottle": 69.0,
                "vintage": "",
                "origin": "Spanje |P enedes"
            },
            {
                "name": "Alta Alella Laieta Gran Reserva Brut Nature",
                "grapes": "Chardonnay, Macabeo, Pinot Noir, Xare-llo",
                "priceGlass": 0,
                "priceBottle": 71.0,
                "vintage": "",
                "origin": "Spanje |P enedes"
            },
            {
                "name": "Masot Prosecco Spumante",
                "grapes": "G lera",
                "priceGlass": 0,
                "priceBottle": 47.0,
                "vintage": "",
                "origin": "Itali\u00eb |V eneto"
            },
            {
                "name": "Blankenhorn Cr\u00e9mant",
                "grapes": "A uxerrois, Chardonnay, Weissburgunde r",
                "priceGlass": 0,
                "priceBottle": 60.0,
                "vintage": "",
                "origin": "Duitsland |B aden"
            },
            {
                "name": "Natuurwijn Thomas Buchmayer Sauvignon Blanc Pet Nat",
                "grapes": "S auvignon Blanc",
                "priceGlass": 0,
                "priceBottle": 59.0,
                "vintage": "",
                "origin": "Oostenrijk |W einvierte l"
            },
            {
                "name": "Istenic Brut No.1",
                "grapes": "C hardonnay, Pinot Noir, Rumeni Plavec",
                "priceGlass": 0,
                "priceBottle": 56.0,
                "vintage": "",
                "origin": "Sloveni\u00eb |B izeljsko sremic"
            },
            {
                "name": "Lo\u00efc Mah\u00e9 Petit Moulin Brut Nature",
                "grapes": "C henin Blanc",
                "priceGlass": 0,
                "priceBottle": 70.0,
                "vintage": "",
                "origin": "Portugal |D ouro"
            },
            {
                "name": "Alta Alella Laieta Gran Reserva Brut Nature",
                "grapes": "Xarel-lo, Chardonnay, Macabeo, Pinot Noi r",
                "priceGlass": 0,
                "priceBottle": 71.0,
                "vintage": "",
                "origin": "Portugal |D ouro"
            }
        ]
    },
    {
        "title": "Witte Wijn",
        "wines": [
            {
                "name": "Von Oetinger WeisburgunderT radition",
                "grapes": "W eisburgunde r",
                "priceGlass": 0,
                "priceBottle": 56.0,
                "vintage": "2023",
                "origin": "Rheingau"
            },
            {
                "name": "Von Oetinger Riesling Alte Reben",
                "grapes": "R iesling",
                "priceGlass": 0,
                "priceBottle": 67.0,
                "vintage": "2019",
                "origin": "Rheingau"
            },
            {
                "name": "V on Oetinger Riesling Tradition",
                "grapes": "R iesling",
                "priceGlass": 0,
                "priceBottle": 78.0,
                "vintage": "2016",
                "origin": "Rheingau"
            },
            {
                "name": "V on Oetinger Riesling Siegelsberg GG",
                "grapes": "R iesling",
                "priceGlass": 0,
                "priceBottle": 85.0,
                "vintage": "2016",
                "origin": "Rheingau"
            },
            {
                "name": "Von Oetinger Riesling Hohenrain GG",
                "grapes": "R iesling",
                "priceGlass": 0,
                "priceBottle": 99.0,
                "vintage": "2020",
                "origin": "Rheingau"
            },
            {
                "name": "V on Oetinger Riesling Hohenrain GG",
                "grapes": "R iesling",
                "priceGlass": 0,
                "priceBottle": 103.0,
                "vintage": "2017",
                "origin": "Rheingau"
            },
            {
                "name": "V on Oetinger Riesling Hohenrain GG",
                "grapes": "R iesling",
                "priceGlass": 0,
                "priceBottle": 105.0,
                "vintage": "2015",
                "origin": "Rheingau"
            },
            {
                "name": "Pfannebecker Riesling",
                "grapes": "R iesling",
                "priceGlass": 0,
                "priceBottle": 42.0,
                "vintage": "2024",
                "origin": "Rheinhessen"
            },
            {
                "name": "P fannebecker Sankt Georgenberg Riesling",
                "grapes": "R iesling",
                "priceGlass": 0,
                "priceBottle": 71.0,
                "vintage": "2016",
                "origin": "Rheinhessen"
            },
            {
                "name": "T heo Minges RieslingG leisweiler holl e",
                "grapes": "R iesling",
                "priceGlass": 0,
                "priceBottle": 52.0,
                "vintage": "2023",
                "origin": "Pfalz"
            },
            {
                "name": "B lankenhorn Le Clocher Erste Lage Chasselas",
                "grapes": "C hasselas",
                "priceGlass": 0,
                "priceBottle": 69.0,
                "vintage": "2021",
                "origin": "Baden"
            },
            {
                "name": "D omaine Saint-Pancrace Bourgogne Blanc",
                "grapes": "C hardonnay",
                "priceGlass": 0,
                "priceBottle": 59.0,
                "vintage": "2023",
                "origin": "Bourgogne C| hablis & C\u00f4tes de Auxer e"
            },
            {
                "name": "Domaine S\u00e9guinot Bordet Chablis Vieilles Vignes",
                "grapes": "C hardonnay",
                "priceGlass": 0,
                "priceBottle": 64.0,
                "vintage": "2024",
                "origin": "Bourgogne C| hablis & C\u00f4tes de Auxer e"
            },
            {
                "name": "Domaine S\u00e9guinot Bordet Chablis1 er Cru Fourchaume",
                "grapes": "C hardonnay",
                "priceGlass": 0,
                "priceBottle": 85.0,
                "vintage": "2023",
                "origin": "Bourgogne C| hablis & C\u00f4tes de Auxer e"
            },
            {
                "name": "Vincent Dauvisat Chablis 1er Cru La Fores",
                "grapes": "tC hardonnay",
                "priceGlass": 0,
                "priceBottle": 260.0,
                "vintage": "2019",
                "origin": "Bourgogne C| hablis & C\u00f4tes de Auxer e"
            },
            {
                "name": "Benjamin Leroux Bourgogne Blan c",
                "grapes": "C hardonnay",
                "priceGlass": 0,
                "priceBottle": 86.0,
                "vintage": "2023",
                "origin": "Bourgogne C| \u00f4te de Beaunn e"
            },
            {
                "name": "B enjamin Leroux Auxey-Duresses",
                "grapes": "C hardonnay",
                "priceGlass": 0,
                "priceBottle": 96.0,
                "vintage": "2023",
                "origin": "Bourgogne C| \u00f4te de Beaunn e"
            },
            {
                "name": "Domaine Fran\u00e7oise et Denis Clair Saint-Aubin 1er Cru",
                "grapes": "",
                "priceGlass": 0,
                "priceBottle": 99.0,
                "vintage": "2023",
                "origin": "Bourgogne C| \u00f4te de Beaunn e"
            },
            {
                "name": "Domaine Fran\u00e7oise et Denis Clair Saint-Aubin 1er Cru 'Les Frionnes",
                "grapes": "'C hardonnay",
                "priceGlass": 0,
                "priceBottle": 109.0,
                "vintage": "2023",
                "origin": "'Sur le Sentier du Clou '|C hardonnay"
            },
            {
                "name": "Domaine Vincent Latour Meursaul t",
                "grapes": "C hardonnay",
                "priceGlass": 0,
                "priceBottle": 124.0,
                "vintage": "2020",
                "origin": "'Sur le Sentier du Clou '|C hardonnay"
            },
            {
                "name": "Domaine Jean-Marc Boillot Meursault",
                "grapes": "Ch ardonnay",
                "priceGlass": 0,
                "priceBottle": 128.0,
                "vintage": "2022",
                "origin": "'Sur le Sentier du Clou '|C hardonnay"
            },
            {
                "name": "Marc Colin Chassagne-Montrachet Margot",
                "grapes": "C hardonnay",
                "priceGlass": 0,
                "priceBottle": 130.0,
                "vintage": "2023",
                "origin": "'Sur le Sentier du Clou '|C hardonnay"
            },
            {
                "name": "Domaine Michel Niellon Chassagn-eMontrachet",
                "grapes": "C hardonnay",
                "priceGlass": 0,
                "priceBottle": 133.0,
                "vintage": "2022",
                "origin": "'Sur le Sentier du Clou '|C hardonnay"
            },
            {
                "name": "Maison Jessiaume Meursau l",
                "grapes": "tC hardonnay",
                "priceGlass": 0,
                "priceBottle": 136.0,
                "vintage": "2023",
                "origin": "'Sur le Sentier du Clou '|C hardonnay"
            },
            {
                "name": "Jacques Prieur Meursault Clos de Mazeray Monopol e",
                "grapes": "C hardonnay",
                "priceGlass": 0,
                "priceBottle": 169.0,
                "vintage": "2023",
                "origin": "'Sur le Sentier du Clou '|C hardonnay"
            },
            {
                "name": "Hubert Lamy Puligny-Montrachet 1er Cru 'Les Tremblots' Vieilles Vign e",
                "grapes": "sC hardonnay",
                "priceGlass": 0,
                "priceBottle": 199.0,
                "vintage": "2022",
                "origin": "'Sur le Sentier du Clou '|C hardonnay"
            },
            {
                "name": "D omaine Berthault Bourgogne Aligote",
                "grapes": "A ligot\u00e9",
                "priceGlass": 0,
                "priceBottle": 55.0,
                "vintage": "2024",
                "origin": "Bourgogne C| \u00f4tes Chalonaise"
            },
            {
                "name": "D omaine Berthault Givry",
                "grapes": "C hardonnay",
                "priceGlass": 0,
                "priceBottle": 79.0,
                "vintage": "2024",
                "origin": "Bourgogne C| \u00f4tes Chalonaise"
            },
            {
                "name": "Jean Marie Chaland Vir\u00e9 Cless\u00e9V ieilles Vignes",
                "grapes": "C hardonnay",
                "priceGlass": 0,
                "priceBottle": 65.0,
                "vintage": "2023",
                "origin": "Bourgogne M| acon"
            },
            {
                "name": "Sebastien Giroux Macon-Fuisse",
                "grapes": "C hardonnay",
                "priceGlass": 0,
                "priceBottle": 68.0,
                "vintage": "2023",
                "origin": "Bourgogne M| acon"
            },
            {
                "name": "Sebastien Giroux Pouilly Fuiss\u00e9",
                "grapes": "C hardonnay",
                "priceGlass": 0,
                "priceBottle": 79.0,
                "vintage": "2022",
                "origin": "Bourgogne M| acon"
            },
            {
                "name": "Jean Marie Chaland Vir\u00e9 Cless\u00e9 Clos de la Buc",
                "grapes": "C hardonnay",
                "priceGlass": 0,
                "priceBottle": 86.0,
                "vintage": "2023",
                "origin": "Bourgogne M| acon"
            },
            {
                "name": "F ran\u00e7ois Chidaine Touraine",
                "grapes": "S auvignon Blanc",
                "priceGlass": 0,
                "priceBottle": 47.0,
                "vintage": "2024",
                "origin": "Loire | oTuraine, Sancerre & Pouill-yFum\u00e9"
            },
            {
                "name": "Domaine Regis MinetP ouilly-Fum\u00e9 Vieilles Vignes",
                "grapes": "S auvignon Blanc",
                "priceGlass": 0,
                "priceBottle": 56.0,
                "vintage": "2023",
                "origin": "Loire | oTuraine, Sancerre & Pouill-yFum\u00e9"
            },
            {
                "name": "P ascal et Nicolas Reverdy Sancerre",
                "grapes": "S auvignon Blanc",
                "priceGlass": 0,
                "priceBottle": 68.0,
                "vintage": "2024",
                "origin": "Loire | oTuraine, Sancerre & Pouill-yFum\u00e9"
            },
            {
                "name": "Pascal et Nicolas Reverdy Sancerre La Grand Rue",
                "grapes": "S auvignon Blanc",
                "priceGlass": 0,
                "priceBottle": 79.0,
                "vintage": "2023",
                "origin": "Loire | oTuraine, Sancerre & Pouill-yFum\u00e9"
            },
            {
                "name": "Domaine de La Fontainerie Vouvra",
                "grapes": "yC henin Blanc",
                "priceGlass": 0,
                "priceBottle": 48.0,
                "vintage": "2023",
                "origin": "Loire |V ouvray, Anjou, Saumur & Savenn\u00e8ires"
            },
            {
                "name": "Perray-Jouannet Anjou Blanc",
                "grapes": "C henin Blanc",
                "priceGlass": 0,
                "priceBottle": 68.0,
                "vintage": "2023",
                "origin": "Loire |V ouvray, Anjou, Saumur & Savenn\u00e8ires"
            },
            {
                "name": "Lo\u00efc Mah\u00e9 Savenni\u00e8res Sables & Schistes",
                "grapes": "C henin Blanc",
                "priceGlass": 0,
                "priceBottle": 73.0,
                "vintage": "2023",
                "origin": "Loire |V ouvray, Anjou, Saumur & Savenn\u00e8ires"
            },
            {
                "name": "L o\u00efc Mah\u00e9 Savenni\u00e8res Fougerais",
                "grapes": "C henin Blanc",
                "priceGlass": 0,
                "priceBottle": 88.0,
                "vintage": "2019",
                "origin": "Loire |V ouvray, Anjou, Saumur & Savenn\u00e8ires"
            },
            {
                "name": "D omaine du Collier Saumur Blanc",
                "grapes": "C henin Blanc",
                "priceGlass": 0,
                "priceBottle": 102.0,
                "vintage": "2018",
                "origin": "Loire |V ouvray, Anjou, Saumur & Savenn\u00e8ires"
            },
            {
                "name": "N icolas Joly Savenni\u00e8res Roche-Aux-Moines Clos de la Bergerie",
                "grapes": "C henin Blanc",
                "priceGlass": 0,
                "priceBottle": 119.0,
                "vintage": "2019",
                "origin": "Loire |V ouvray, Anjou, Saumur & Savenn\u00e8ires"
            },
            {
                "name": "N icolas Joly Savenni\u00e8res Roche-Aux-Moines Clos de la Bergerie",
                "grapes": "C henin Blanc",
                "priceGlass": 0,
                "priceBottle": 140.0,
                "vintage": "2015",
                "origin": "Loire |V ouvray, Anjou, Saumur & Savenn\u00e8ires"
            },
            {
                "name": "N icolas Joly Savenni\u00e8res Clos de la Coul\u00e9e de Serrant",
                "grapes": "C henin Blanc",
                "priceGlass": 0,
                "priceBottle": 210.0,
                "vintage": "2013",
                "origin": "Loire |V ouvray, Anjou, Saumur & Savenn\u00e8ires"
            },
            {
                "name": "Maison Bruyere et David ViognierV",
                "grapes": "io gnier",
                "priceGlass": 0,
                "priceBottle": 59.0,
                "vintage": "2024",
                "origin": "NoordelijkeR h\u00f4ne"
            },
            {
                "name": "Gilles Robin Crozes Hermitage Blanc Papillon",
                "grapes": "M arsanne",
                "priceGlass": 0,
                "priceBottle": 68.0,
                "vintage": "2023",
                "origin": "NoordelijkeR h\u00f4ne"
            },
            {
                "name": "M aison Bruyere et David Condrieu",
                "grapes": "V iognier",
                "priceGlass": 0,
                "priceBottle": 89.0,
                "vintage": "2023",
                "origin": "NoordelijkeR h\u00f4ne"
            },
            {
                "name": "C ellier des Chartreux C\u00f4tes du Rh\u00f4ne",
                "grapes": "C lairette, Grenache Blanc, Roussanne, Viognier",
                "priceGlass": 0,
                "priceBottle": 42.0,
                "vintage": "2024",
                "origin": "ZuidelijkeR h\u00f4ne"
            },
            {
                "name": "D omaine Tempier Bandol Blanc",
                "grapes": "C lairette, Bourboulenc, Ugni Blanc, Rolle",
                "priceGlass": 0,
                "priceBottle": 79.0,
                "vintage": "2019",
                "origin": "Bandol"
            },
            {
                "name": "Saint Auriol Reserve Blanc",
                "grapes": "M arsanne, Roussanne, Sauvignon Blanc, Vermentin o",
                "priceGlass": 0,
                "priceBottle": 29.0,
                "vintage": "2024",
                "origin": "Languedoc"
            },
            {
                "name": "Icare Chardonnay",
                "grapes": "C hardonnay",
                "priceGlass": 0,
                "priceBottle": 47.0,
                "vintage": "2023",
                "origin": "Languedoc"
            },
            {
                "name": "La Combe de Grinou Bergerac Blanc",
                "grapes": "S auvignon Blanc, Semillon",
                "priceGlass": 0,
                "priceBottle": 37.0,
                "vintage": "2024",
                "origin": "Bergerac"
            },
            {
                "name": "Soif Art Blanc",
                "grapes": "Loin de l\u2019\u0153il, Mauzac, Muscadelle, Sauvignon Bla nc",
                "priceGlass": 0,
                "priceBottle": 41.0,
                "vintage": "Natuurwijn 2023",
                "origin": "C\u00f4tes du Tarn"
            },
            {
                "name": "Voerzio Martini Langhe DOC Arneis",
                "grapes": "Arneis",
                "priceGlass": 0,
                "priceBottle": 49.0,
                "vintage": "2023",
                "origin": "Piemonte"
            },
            {
                "name": "Gavi di Gavi Mainin la Ghibellin a",
                "grapes": "Cortese",
                "priceGlass": 0,
                "priceBottle": 53.0,
                "vintage": "2024",
                "origin": "Piemonte"
            },
            {
                "name": "C olle Adimari Drim",
                "grapes": "Ansonica, Vermentino",
                "priceGlass": 0,
                "priceBottle": 34.0,
                "vintage": "2024",
                "origin": "Toscane"
            },
            {
                "name": "Vallevo Trebbiano d\u2019Abruzzo",
                "grapes": "T rebbiano",
                "priceGlass": 0,
                "priceBottle": 38.0,
                "vintage": "2024",
                "origin": "Abruzzen"
            },
            {
                "name": "Leonardo Bussoletti Colle Ozio Grechetto",
                "grapes": "G rechetto",
                "priceGlass": 0,
                "priceBottle": 58.0,
                "vintage": "2024",
                "origin": "Umbri\u00eb"
            },
            {
                "name": "I Pentri Monte Cigno Falanghina",
                "grapes": "Falanghina",
                "priceGlass": 0,
                "priceBottle": 48.0,
                "vintage": "2024",
                "origin": "Campania"
            },
            {
                "name": "I Pentri L\u2019Amore della Api Fiano",
                "grapes": "Fiano",
                "priceGlass": 0,
                "priceBottle": 59.0,
                "vintage": "2024",
                "origin": "Campania"
            },
            {
                "name": "Oranje wijn 2024",
                "grapes": "Fabrizio Vella Catarratto Orange | Catarratto",
                "priceGlass": 0,
                "priceBottle": 51.0,
                "vintage": "",
                "origin": "Sicili\u00eb"
            },
            {
                "name": "Bodegas Encima Cig\u00fcena Godello",
                "grapes": "G odello",
                "priceGlass": 0,
                "priceBottle": 46.0,
                "vintage": "2024",
                "origin": "Galici\u00eb"
            },
            {
                "name": "Ardora Maris Albari\u00f1o A",
                "grapes": "l barino",
                "priceGlass": 0,
                "priceBottle": 47.0,
                "vintage": "2024",
                "origin": "Galici\u00eb"
            },
            {
                "name": "T andem Inmacula V",
                "grapes": "i ognier, Viura",
                "priceGlass": 0,
                "priceBottle": 50.0,
                "vintage": "2023",
                "origin": "Galici\u00eb"
            },
            {
                "name": "Alta Alella Cau d\u2019en Genis X",
                "grapes": "a rel-lo",
                "priceGlass": 0,
                "priceBottle": 62.0,
                "vintage": "2019",
                "origin": "Galici\u00eb"
            },
            {
                "name": "M arques de Tomares Rioja Gran Reserv a",
                "grapes": "G arnacha Blanca, Viura",
                "priceGlass": 0,
                "priceBottle": 76.0,
                "vintage": "2016",
                "origin": "Rioja"
            },
            {
                "name": "P iedra Fluida Listan Blanco",
                "grapes": "L istan Blanco",
                "priceGlass": 0,
                "priceBottle": 64.0,
                "vintage": "2022",
                "origin": "Tenerife"
            },
            {
                "name": "Gerhard Deim Gr\u00fcner Veltliner",
                "grapes": "G r\u00fcner Veltliner",
                "priceGlass": 0,
                "priceBottle": 38.0,
                "vintage": "2024",
                "origin": "Kampta l"
            },
            {
                "name": "Buchmayer Riesling",
                "grapes": "R iesling",
                "priceGlass": 0,
                "priceBottle": 60.0,
                "vintage": "Natuurwijn 2023",
                "origin": "Weinvierte l"
            },
            {
                "name": "Buchmayer Gr\u00fcnerV eltliner",
                "grapes": "G r\u00fcner Veltliner",
                "priceGlass": 0,
                "priceBottle": 49.0,
                "vintage": "Natuurwijn 2022",
                "origin": "Weinvierte l"
            },
            {
                "name": "F ranz Hirtzberger Hochrain Riesling Smaragd",
                "grapes": "R iesling",
                "priceGlass": 0,
                "priceBottle": 160.0,
                "vintage": "2011",
                "origin": "Wachau"
            },
            {
                "name": "Verus Furmint",
                "grapes": "F urmint",
                "priceGlass": 0,
                "priceBottle": 44.0,
                "vintage": "2024",
                "origin": "Podravje"
            },
            {
                "name": "Verus Sauvignon Blanc",
                "grapes": "S auvignon Blanc",
                "priceGlass": 0,
                "priceBottle": 48.0,
                "vintage": "2024",
                "origin": "Podravje"
            },
            {
                "name": "Gross Hisno Vino Blanc",
                "grapes": "P inot Blanc, Sauvignon blanc, Welschriesling",
                "priceGlass": 0,
                "priceBottle": 53.0,
                "vintage": "Natuurwijn 2024",
                "origin": "Podravje"
            },
            {
                "name": "M arof Chardonnay",
                "grapes": "C hardonnay",
                "priceGlass": 0,
                "priceBottle": 85.0,
                "vintage": "2021",
                "origin": "Podravje"
            },
            {
                "name": "Oranje wijn 2022",
                "grapes": "Nando Rebula Blue labe l | R ebula",
                "priceGlass": 0,
                "priceBottle": 68.0,
                "vintage": "",
                "origin": "Primorska"
            },
            {
                "name": "Quinta das Arcas Vinho Verde",
                "grapes": "A rinto, Loureiro, Trajadura",
                "priceGlass": 0,
                "priceBottle": 33.0,
                "vintage": "2024",
                "origin": "Vinho Verde"
            },
            {
                "name": "Aphros Loureiro",
                "grapes": "L oureiro",
                "priceGlass": 0,
                "priceBottle": 42.0,
                "vintage": "2023",
                "origin": "Vinho Verde"
            },
            {
                "name": "Aphros Loureiro Orange",
                "grapes": "L oureiro",
                "priceGlass": 0,
                "priceBottle": 45.0,
                "vintage": "2023",
                "origin": "Vinho Verde"
            },
            {
                "name": "Aphros Melissae",
                "grapes": "L oureiro",
                "priceGlass": 0,
                "priceBottle": 63.0,
                "vintage": "2020",
                "origin": "Vinho Verde"
            },
            {
                "name": "Quinta Porrais Douro Branco",
                "grapes": "C \u00f3dega do larinho, Rabigato, Verdelho, Viosinh o",
                "priceGlass": 0,
                "priceBottle": 31.0,
                "vintage": "2024",
                "origin": "Douro"
            },
            {
                "name": "Lista Negra Branco",
                "grapes": "A rinto, Fern\u00e3o Pires, Moscate l",
                "priceGlass": 0,
                "priceBottle": 31.0,
                "vintage": "2024",
                "origin": "Set\u00fabal"
            },
            {
                "name": "L ista Negra Reserva",
                "grapes": "A rinto, Chardonnay",
                "priceGlass": 0,
                "priceBottle": 38.0,
                "vintage": "2024",
                "origin": "Set\u00fabal"
            },
            {
                "name": "Fitapreta Branco Ancestral",
                "grapes": "A licante Branco, Arinto Tamarez , Rabo deO velha, Roupeiro",
                "priceGlass": 0,
                "priceBottle": 49.0,
                "vintage": "2024",
                "origin": "Alentejo"
            },
            {
                "name": "Novus Optimum Moschofilero",
                "grapes": "M oshofilero",
                "priceGlass": 0,
                "priceBottle": 56.0,
                "vintage": "2023",
                "origin": "Peloponnesos"
            },
            {
                "name": "Testalonga Baby Bandit oChenin Blanc",
                "grapes": "C henin Blanc",
                "priceGlass": 0,
                "priceBottle": 61.0,
                "vintage": "Natuurwijn 2024",
                "origin": "Swartland"
            },
            {
                "name": "Voerzio Martini Langhe DOC Arneis",
                "grapes": "A rneis",
                "priceGlass": 0,
                "priceBottle": 49.0,
                "vintage": "2023",
                "origin": "Portugal |D ouro"
            },
            {
                "name": "La Combe de Grinou Bergerac Blanc",
                "grapes": "S auvignon Blanc, Semillon",
                "priceGlass": 0,
                "priceBottle": 37.0,
                "vintage": "2024",
                "origin": "Portugal |D ouro"
            },
            {
                "name": "Soif Art Blanc",
                "grapes": "L oin de l\u2019\u0153il, Mauzac, Muscadelle, Sauvignon Blan c",
                "priceGlass": 0,
                "priceBottle": 41.0,
                "vintage": "2023",
                "origin": "Portugal |D ouro"
            },
            {
                "name": "Ardora Maris Albari\u00f1o A",
                "grapes": "l barino",
                "priceGlass": 0,
                "priceBottle": 47.0,
                "vintage": "2024",
                "origin": "Portugal |D ouro"
            },
            {
                "name": "Leonardo Bussoletti Colle Ozio Grechetto",
                "grapes": "G rechetto",
                "priceGlass": 0,
                "priceBottle": 58.0,
                "vintage": "2023",
                "origin": "Portugal |D ouro"
            },
            {
                "name": "I Pentri L\u2019Amore della Api Fiano",
                "grapes": "F iano",
                "priceGlass": 0,
                "priceBottle": 59.0,
                "vintage": "2024",
                "origin": "Portugal |D ouro"
            },
            {
                "name": "Maison Bruyere et David Viognier",
                "grapes": "V iognier",
                "priceGlass": 0,
                "priceBottle": 59.0,
                "vintage": "2023",
                "origin": "Portugal |D ouro"
            }
        ]
    },
    {
        "title": "Ros\u00e9",
        "wines": [
            {
                "name": "Pfannebecker Ros\u00e9",
                "grapes": "C abernet Sauvignon, Schwarzriesling, Sp\u00e4tburgund er",
                "priceGlass": 0,
                "priceBottle": 42.0,
                "vintage": "2024",
                "origin": "Rheinhessen"
            },
            {
                "name": "Pascal et Nicolas Reverdy Sancerre Ros\u00e9",
                "grapes": "P inot Noir",
                "priceGlass": 0,
                "priceBottle": 62.0,
                "vintage": "2024",
                "origin": "Sancerre"
            },
            {
                "name": "Ch\u00e2teau de Vauclaire",
                "grapes": "C abernet Sauvignon, Cinsault, Grenache, Syrah",
                "priceGlass": 0,
                "priceBottle": 44.0,
                "vintage": "2024",
                "origin": "Provence"
            },
            {
                "name": "Domaine Cureb\u00e9asse Provence Ros\u00e9",
                "grapes": "M ourvedre, Grenache, Tiboure n",
                "priceGlass": 0,
                "priceBottle": 62.0,
                "vintage": "2023",
                "origin": "Provence"
            },
            {
                "name": "Ferry Lacombe Mira Ros\u00e9",
                "grapes": "Grenache Noir",
                "priceGlass": 0,
                "priceBottle": 44.0,
                "vintage": "2024",
                "origin": "IGP M\u00e9diterran\u00e9 e"
            },
            {
                "name": "Gris de C\u0153ur Ros\u00e9",
                "grapes": "C incault, Grenache",
                "priceGlass": 0,
                "priceBottle": 39.0,
                "vintage": "2024",
                "origin": "Languedoc"
            },
            {
                "name": "Novaripa Pinot Grigio Ramato",
                "grapes": "P inot Grigio",
                "priceGlass": 0,
                "priceBottle": 37.0,
                "vintage": "2024",
                "origin": "Abruzzen"
            },
            {
                "name": "FitaPreta Solera Ros\u00e9",
                "grapes": "A ragonez, Castel\u00e3o, Trincadeir a",
                "priceGlass": 0,
                "priceBottle": 57.0,
                "vintage": "",
                "origin": "Alentejo"
            }
        ]
    },
    {
        "title": "Rode Wijn",
        "wines": [
            {
                "name": "Pfannebecker Sp\u00e4tburgunde",
                "grapes": "rS p\u00e4tburgunder",
                "priceGlass": 0,
                "priceBottle": 49.0,
                "vintage": "2019",
                "origin": "Rheinhessen"
            },
            {
                "name": "P fannebecker Sankt Georgenberg Sp\u00e4tburgunde",
                "grapes": "r Sp\u00e4tburgunder",
                "priceGlass": 0,
                "priceBottle": 78.0,
                "vintage": "2015",
                "origin": "Rheinhessen"
            },
            {
                "name": "T inhof Eisenstad Blaufrankisch",
                "grapes": "B laufrankisch",
                "priceGlass": 0,
                "priceBottle": 62.0,
                "vintage": "2021",
                "origin": "Burgenland"
            },
            {
                "name": "T inhof Gloria Blaufrankisch",
                "grapes": "B laufrankisch",
                "priceGlass": 0,
                "priceBottle": 75.0,
                "vintage": "2015",
                "origin": "Burgenland"
            },
            {
                "name": "D omaine Coillot Gevrey Chambertin Vieilles Vigne s",
                "grapes": "Pinot Noir",
                "priceGlass": 0,
                "priceBottle": 110.0,
                "vintage": "Laatste fles 2021",
                "origin": "Bourgogne C| \u00f4te de Nuits"
            },
            {
                "name": "Domaine Tortochot Gevrey-Chambertin Les Corv\u00e9es",
                "grapes": "Pinot Noir",
                "priceGlass": 0,
                "priceBottle": 120.0,
                "vintage": "2022",
                "origin": "Bourgogne C| \u00f4te de Nuits"
            },
            {
                "name": "Domaine Christophe Bryczek More-ySaint-Denis 1er cru",
                "grapes": "Pinot Noir",
                "priceGlass": 0,
                "priceBottle": 128.0,
                "vintage": "2017",
                "origin": "Bourgogne C| \u00f4te de Nuits"
            },
            {
                "name": "D omaine Coquard Loison-Fleurot Chambolle-Musigny",
                "grapes": "Pinot Noir",
                "priceGlass": 0,
                "priceBottle": 129.0,
                "vintage": "2017",
                "origin": "\u201cCuv\u00e9e de Pape Jean Paul II\u201d"
            },
            {
                "name": "Remoriquet Nuits st Georges 1er cru Rue de Chaux",
                "grapes": "Pinot Noir",
                "priceGlass": 0,
                "priceBottle": 139.0,
                "vintage": "2009",
                "origin": "\u201cCuv\u00e9e de Pape Jean Paul II\u201d"
            },
            {
                "name": "D omaine Bachelet C\u00f4te de Nuits Village",
                "grapes": "P inot Noir",
                "priceGlass": 0,
                "priceBottle": 159.0,
                "vintage": "2016",
                "origin": "\u201cCuv\u00e9e de Pape Jean Paul II\u201d"
            },
            {
                "name": "Domaine Heresztyn-Mazzini Gevrey-Chambertin 1er Cru 'La Perri\u00e8re",
                "grapes": "'P inot Noir",
                "priceGlass": 0,
                "priceBottle": 175.0,
                "vintage": "2018",
                "origin": "Bourgogne | C\u00f4te de Nusi tcont."
            },
            {
                "name": "D omaine Philippe Livera Chapelle-Chambertin Grand Cru",
                "grapes": "Pinot Noir",
                "priceGlass": 0,
                "priceBottle": 270.0,
                "vintage": "2017",
                "origin": "Bourgogne | C\u00f4te de Nusi tcont."
            },
            {
                "name": "J ean-Jacques Confuron Clos Vougeot Grand Cru",
                "grapes": "Pinot Noir",
                "priceGlass": 0,
                "priceBottle": 325.0,
                "vintage": "2015",
                "origin": "Bourgogne | C\u00f4te de Nusi tcont."
            },
            {
                "name": "Jessiaume Bourgogne Rouge Les Perriere s",
                "grapes": "Pinot Noir",
                "priceGlass": 0,
                "priceBottle": 78.0,
                "vintage": "2022",
                "origin": "Bourgogne C| \u00f4te de Beaunn e"
            },
            {
                "name": "Domaine Michel EcardS avigny-les-Beaune 1er Cru Les Gravains",
                "grapes": "P inot Noir",
                "priceGlass": 0,
                "priceBottle": 84.0,
                "vintage": "2015",
                "origin": "Bourgogne C| \u00f4te de Beaunn e"
            },
            {
                "name": "D omaine Hubert Lamy Saint-Aubin 1er Cru Rouge Derri\u00e8re chez Edouard",
                "grapes": "Pinot Noir",
                "priceGlass": 0,
                "priceBottle": 105.0,
                "vintage": "2016",
                "origin": "Bourgogne C| \u00f4te de Beaunn e"
            },
            {
                "name": "Domaine Marquis d'Angervill eVolnay",
                "grapes": "Pinot Noir",
                "priceGlass": 0,
                "priceBottle": 188.0,
                "vintage": "2022",
                "origin": "Bourgogne C| \u00f4te de Beaunn e"
            },
            {
                "name": "D omaine de Courcel Pommard 1erC ru \u2018Grand Clos des Epenots\u2019",
                "grapes": "Pinot Noir",
                "priceGlass": 0,
                "priceBottle": 205.0,
                "vintage": "2019",
                "origin": "Bourgogne C| \u00f4te de Beaunn e"
            },
            {
                "name": "Domaine Berthault Bourgogne Rouge",
                "grapes": "Pinot Noir",
                "priceGlass": 0,
                "priceBottle": 64.0,
                "vintage": "2023",
                "origin": "Bourgogne C| \u00f4te Chalonnaise"
            },
            {
                "name": "Domaine Berthault Mercurey \u201cen Boussoy\u201d",
                "grapes": "Pinot Noir",
                "priceGlass": 0,
                "priceBottle": 80.0,
                "vintage": "2023",
                "origin": "Bourgogne C| \u00f4te Chalonnaise"
            },
            {
                "name": "D omaine Joblot Givry 1er cru Servoisine",
                "grapes": "P inot Noir",
                "priceGlass": 0,
                "priceBottle": 85.0,
                "vintage": "2015",
                "origin": "Bourgogne C| \u00f4te Chalonnaise"
            },
            {
                "name": "D omaine Perol-Bien \u00e9lev\u00e9",
                "grapes": "Gamay",
                "priceGlass": 0,
                "priceBottle": 47.0,
                "vintage": "2023",
                "origin": "Beaujolais"
            },
            {
                "name": "Thibault Ducroux Morgon",
                "grapes": "Gamay",
                "priceGlass": 0,
                "priceBottle": 56.0,
                "vintage": "2023",
                "origin": "Beaujolais"
            },
            {
                "name": "Jean Foillard Morgon",
                "grapes": "Gamay",
                "priceGlass": 0,
                "priceBottle": 73.0,
                "vintage": "2022",
                "origin": "Beaujolais"
            },
            {
                "name": "J ean-Claude Lapalu Brouilly Cuv\u00e9e des Fous",
                "grapes": "Gamay",
                "priceGlass": 0,
                "priceBottle": 78.0,
                "vintage": "2014",
                "origin": "Beaujolais"
            },
            {
                "name": "D omaine des Ragueni\u00e8res laP errinelle",
                "grapes": "C abernet Franc",
                "priceGlass": 0,
                "priceBottle": 59.0,
                "vintage": "2018",
                "origin": "Loire |B ourgeuil"
            },
            {
                "name": "D omaine des Raguen\u00e8ires Les Cailloux",
                "grapes": "C abernet Franc",
                "priceGlass": 0,
                "priceBottle": 65.0,
                "vintage": "2021",
                "origin": "Loire |B ourgeuil"
            },
            {
                "name": "D omaine Philippe Alliet Chinon L\u2019Huisserie",
                "grapes": "C abernet Franc",
                "priceGlass": 0,
                "priceBottle": 78.0,
                "vintage": "2015",
                "origin": "Loire |C hinon"
            },
            {
                "name": "C h\u00e2teau B\u00e9lair-Monange Annonce Saint-\u00c9milion",
                "grapes": "M erlot, Cabernet Franc",
                "priceGlass": 0,
                "priceBottle": 115.0,
                "vintage": "2015",
                "origin": "Bordeaux |S aint-\u00c9milion"
            },
            {
                "name": "Ch\u00e2teau Belair-Monange Saint \u00c9milion Grand Cru",
                "grapes": "M erlot, Cabernet Franc",
                "priceGlass": 0,
                "priceBottle": 240.0,
                "vintage": "2009",
                "origin": "Bordeaux |S aint-\u00c9milion"
            },
            {
                "name": "L a Vieille France Graves",
                "grapes": "C abernet Sauvignon ,Merlot, Petit Verdot",
                "priceGlass": 0,
                "priceBottle": 54.0,
                "vintage": "2019",
                "origin": "Bordeaux |G raves en Pessa-cLeognan"
            },
            {
                "name": "Ch\u00e2teau de Fieuzal Rouge",
                "grapes": "C abernet Sauvignon ,Merlot, Petit Verdot, Cabernet Franc",
                "priceGlass": 0,
                "priceBottle": 98.0,
                "vintage": "2004",
                "origin": "Bordeaux |G raves en Pessa-cLeognan"
            },
            {
                "name": "Chateau Brown Pessac-L\u00e9ognan Grand Cru",
                "grapes": "C abernet Sauvignon ,Merlot, Petit Verdot",
                "priceGlass": 0,
                "priceBottle": 117.0,
                "vintage": "2010",
                "origin": "Bordeaux |G raves en Pessa-cLeognan"
            },
            {
                "name": "Ch\u00e2teau Potensac",
                "grapes": "C abernet Sauvignon ,Merlot, Cabernet Franc",
                "priceGlass": 0,
                "priceBottle": 89.0,
                "vintage": "2009",
                "origin": "Bordeaux |M edoc"
            },
            {
                "name": "L a Dame de Montrose",
                "grapes": "C abernet Sauvignon ,Merlot, Cabernet Franc, Petit Verdot",
                "priceGlass": 0,
                "priceBottle": 102.0,
                "vintage": "2015",
                "origin": "Bordeaux |S aint Est\u00e8phe"
            },
            {
                "name": "Ch\u00e2teau Cos d'Estournel Saint-Est\u00e8phe",
                "grapes": "",
                "priceGlass": 0,
                "priceBottle": 295.0,
                "vintage": "2010",
                "origin": "Bordeaux |S aint Est\u00e8phe"
            },
            {
                "name": "Ch\u00e2teau Haut-Bages-Averous",
                "grapes": "C abernet Sauvignon ,Merlot, Cabernet Franc",
                "priceGlass": 0,
                "priceBottle": 129.0,
                "vintage": "2000",
                "origin": "Bordeaux |P auilliac"
            },
            {
                "name": "Chateau d\u2019Armailhac Grand Cru Class\u00e9",
                "grapes": "",
                "priceGlass": 0,
                "priceBottle": 138.0,
                "vintage": "2010",
                "origin": "Bordeaux |P auilliac"
            },
            {
                "name": "Ch\u00e2teau Talbo t",
                "grapes": "C abernet Sauvignon ,Merlot, Cabernet Franc, Petit Verdot",
                "priceGlass": 0,
                "priceBottle": 165.0,
                "vintage": "1996",
                "origin": "Bordeaux |S aint-Julien"
            },
            {
                "name": "Ch\u00e2teau Malescot St. Exup\u00e9ry",
                "grapes": "C abernet Sauvignon, Merlot, Petit Verdot",
                "priceGlass": 0,
                "priceBottle": 115.0,
                "vintage": "2004",
                "origin": "Bordeaux |M argaux"
            },
            {
                "name": "C h\u00e2teau du Tertre",
                "grapes": "C abernet Sauvignon ,Merlot, Cabernet Franc, Petit Verdot",
                "priceGlass": 0,
                "priceBottle": 145.0,
                "vintage": "1995",
                "origin": "Bordeaux |M argaux"
            },
            {
                "name": "Chateau de Cranne Black Malbec",
                "grapes": "M albec",
                "priceGlass": 0,
                "priceBottle": 47.0,
                "vintage": "2022",
                "origin": "Bordeaux"
            },
            {
                "name": "Chateau du Cedre",
                "grapes": "C \u00f4t",
                "priceGlass": 0,
                "priceBottle": 169.0,
                "vintage": "1999",
                "origin": "Cahors"
            },
            {
                "name": "Chateau du Cedre",
                "grapes": "C \u00f4t",
                "priceGlass": 0,
                "priceBottle": 168.0,
                "vintage": "2000",
                "origin": "Cahors"
            },
            {
                "name": "M aison Bruyere et David St Joseph",
                "grapes": "S yrah",
                "priceGlass": 0,
                "priceBottle": 77.0,
                "vintage": "2023",
                "origin": "Noordelijke Rh\u00f4ne"
            },
            {
                "name": "D omaine Gilles Robin Cornas",
                "grapes": "S yrah",
                "priceGlass": 0,
                "priceBottle": 105.0,
                "vintage": "2016",
                "origin": "Noordelijke Rh\u00f4ne"
            },
            {
                "name": "D omaine Gilles Robin Hermitage",
                "grapes": "S yrah",
                "priceGlass": 0,
                "priceBottle": 130.0,
                "vintage": "2017",
                "origin": "Noordelijke Rh\u00f4ne"
            },
            {
                "name": "Solitude C\u00f4tes du Rh\u00f4ne Reserve",
                "grapes": "G renache, Mourv\u00e8dre ,Syrah",
                "priceGlass": 0,
                "priceBottle": 42.0,
                "vintage": "2023",
                "origin": "Zuidelijke Rh\u00f4ne"
            },
            {
                "name": "Domaine de Pieblanc PallieroudGai gondas",
                "grapes": "G renache, Syrah",
                "priceGlass": 0,
                "priceBottle": 78.0,
                "vintage": "2021",
                "origin": "Zuidelijke Rh\u00f4ne"
            },
            {
                "name": "Domaine de la Solitude Ch\u00e2teauneuf du Pape",
                "grapes": "",
                "priceGlass": 0,
                "priceBottle": 87.0,
                "vintage": "2023",
                "origin": "Zuidelijke Rh\u00f4ne"
            },
            {
                "name": "Domaine de Ferrand Ch\u00e2teauneuf-du-Pape",
                "grapes": "G renache, Syrah",
                "priceGlass": 0,
                "priceBottle": 93.0,
                "vintage": "2015",
                "origin": "Zuidelijke Rh\u00f4ne"
            },
            {
                "name": "Domaine Croze-Granier Ch\u00e2teuneuf-du-Pape",
                "grapes": "G renache, Mourv\u00e8dre",
                "priceGlass": 0,
                "priceBottle": 115.0,
                "vintage": "2016",
                "origin": "Zuidelijke Rh\u00f4ne"
            },
            {
                "name": "R otem et Mounir SaoumaC h\u00e2teauneuf-du-Pape \u201cOmnia\u201d",
                "grapes": "S yrah, Grenache, Mourv\u00e8dre",
                "priceGlass": 0,
                "priceBottle": 145.0,
                "vintage": "2018",
                "origin": "Zuidelijke Rh\u00f4ne"
            },
            {
                "name": "C h\u00e2teau de Beaucastel Ch\u00e2teauneu-fdu-Pape",
                "grapes": "C insault, Grenache, Mourv\u00e8dre, Syrah",
                "priceGlass": 0,
                "priceBottle": 173.0,
                "vintage": "2016",
                "origin": "Zuidelijke Rh\u00f4ne"
            },
            {
                "name": "Domaine de la Graveirette Ju de Vie",
                "grapes": "Grenache, Marselan, Merlot, Mourv\u00e8der",
                "priceGlass": 0,
                "priceBottle": 42.0,
                "vintage": "2023",
                "origin": "Vin de France"
            },
            {
                "name": "M as Cal Demoura Les Combariolles",
                "grapes": "S yrah, Grenache, Mourv\u00e8dre, Carignan, Cinsaul t",
                "priceGlass": 0,
                "priceBottle": 79.0,
                "vintage": "2016",
                "origin": "Languedoc |T errasses duL arzac"
            },
            {
                "name": "Endrizzi Gran Masetto Teroldego",
                "grapes": "T oreldego",
                "priceGlass": 0,
                "priceBottle": 114.0,
                "vintage": "2009",
                "origin": "Alto Adige"
            },
            {
                "name": "Cantina Dacapo Barbera d'Ast i",
                "grapes": "B arbera",
                "priceGlass": 0,
                "priceBottle": 56.0,
                "vintage": "2023",
                "origin": "Piemonte"
            },
            {
                "name": "Voerzio Martini LangheN ebbiolo",
                "grapes": "N ebbiolo",
                "priceGlass": 0,
                "priceBottle": 69.0,
                "vintage": "2022",
                "origin": "Piemonte"
            },
            {
                "name": "V oerzio Martini Barolo",
                "grapes": "N ebbiolo",
                "priceGlass": 0,
                "priceBottle": 79.0,
                "vintage": "2021",
                "origin": "Piemonte"
            },
            {
                "name": "V oerzio Martini Barolo La Serra",
                "grapes": "N ebbiolo",
                "priceGlass": 0,
                "priceBottle": 93.0,
                "vintage": "2021",
                "origin": "Piemonte"
            },
            {
                "name": "Voerzio Martini Barolo La Serr",
                "grapes": "aN ebbiolo",
                "priceGlass": 0,
                "priceBottle": 95.0,
                "vintage": "2019",
                "origin": "Piemonte"
            },
            {
                "name": "Ferdinando Principiano Barolo del Comume di Serralunga d'A l",
                "grapes": "bN aebbiolo",
                "priceGlass": 0,
                "priceBottle": 109.0,
                "vintage": "2015",
                "origin": "Piemonte"
            },
            {
                "name": "V oerzio Martini Barolo Cerequio",
                "grapes": "N ebbiolo",
                "priceGlass": 0,
                "priceBottle": 127.0,
                "vintage": "2018",
                "origin": "Piemonte"
            },
            {
                "name": "F erdinando Principiano Barolo Boscareto",
                "grapes": "N ebbiolo",
                "priceGlass": 0,
                "priceBottle": 168.0,
                "vintage": "2013",
                "origin": "Piemonte"
            },
            {
                "name": "C omm. G.B. Burlotto Barolo",
                "grapes": "N ebbiolo",
                "priceGlass": 0,
                "priceBottle": 22.0,
                "vintage": "2016",
                "origin": "Piemonte"
            },
            {
                "name": "L a Collina dei Ciliegi Amarone della Valpolicella",
                "grapes": "C orvina, Corvinone, Rondinella",
                "priceGlass": 0,
                "priceBottle": 95.0,
                "vintage": "2020",
                "origin": "Valpolicella"
            },
            {
                "name": "V illa BibbianiC hianti Montalbano",
                "grapes": "M erlot, Sangiovese",
                "priceGlass": 0,
                "priceBottle": 49.0,
                "vintage": "2021",
                "origin": "Toscane |C hianti"
            },
            {
                "name": "V illa Bibbiani Treggiaia IGT",
                "grapes": "C abernet Sauvignon, Sangiovese",
                "priceGlass": 0,
                "priceBottle": 63.0,
                "vintage": "2020",
                "origin": "Toscane |C hianti"
            },
            {
                "name": "Dario Di Vaira Bolgheri Rosso",
                "grapes": "C abernet Franc, Cabernet Sauvignon, Merlo t",
                "priceGlass": 0,
                "priceBottle": 65.0,
                "vintage": "2023",
                "origin": "Toscane |C hianti"
            },
            {
                "name": "Dario di Vaira Bolgheri Superiore",
                "grapes": "C abernet Franc, Cabernet Sauvignon, Merlo t",
                "priceGlass": 0,
                "priceBottle": 93.0,
                "vintage": "2022",
                "origin": "Toscane |C hianti"
            },
            {
                "name": "Isole e Olena Cepparello",
                "grapes": "S angiovese",
                "priceGlass": 0,
                "priceBottle": 150.0,
                "vintage": "2018",
                "origin": "Toscane |C hianti"
            },
            {
                "name": "B ibi Graetz Toscana IGT Colore",
                "grapes": "S angiovese",
                "priceGlass": 0,
                "priceBottle": 230.0,
                "vintage": "2019",
                "origin": "Toscane |C hianti"
            },
            {
                "name": "L ambardi Rosso di Montalcino",
                "grapes": "Sangiovese",
                "priceGlass": 0,
                "priceBottle": 70.0,
                "vintage": "2021",
                "origin": "Toscane |M ontalcino"
            },
            {
                "name": "L ambardi Brunello di Montalcin o",
                "grapes": "S angiovese",
                "priceGlass": 0,
                "priceBottle": 96.0,
                "vintage": "2020",
                "origin": "Toscane |M ontalcino"
            },
            {
                "name": "S iro Pacenti Brunello di Montalcino PS Vecchie Vigne",
                "grapes": "S angiovese",
                "priceGlass": 0,
                "priceBottle": 133.0,
                "vintage": "2017",
                "origin": "Toscane |M ontalcino"
            },
            {
                "name": "Biondi Santi Brunello di Montalcino Tenuta Grepp o",
                "grapes": "S angiovese",
                "priceGlass": 0,
                "priceBottle": 282.0,
                "vintage": "2010",
                "origin": "Toscane |M ontalcino"
            },
            {
                "name": "P odere Casanova Mane Toscana",
                "grapes": "C abernet Sauvignon, Merlot, Sangioves e",
                "priceGlass": 0,
                "priceBottle": 46.0,
                "vintage": "2021",
                "origin": "IGT Toscane"
            },
            {
                "name": "T errecarsiche Don Filippo Primitivo",
                "grapes": "P rimitivo",
                "priceGlass": 0,
                "priceBottle": 37.0,
                "vintage": "2024",
                "origin": "Puglia"
            },
            {
                "name": "F anova Primitivo",
                "grapes": "P rimitivo",
                "priceGlass": 0,
                "priceBottle": 53.0,
                "vintage": "2022",
                "origin": "Puglia"
            },
            {
                "name": "Nona Priorat",
                "grapes": "Carinyena, Garnacha, Merlot, Syrah",
                "priceGlass": 0,
                "priceBottle": 62.0,
                "vintage": "2022",
                "origin": "Priorat"
            },
            {
                "name": "M as d'en Gil Clos Font\u00e0 Priorat",
                "grapes": "Garnacha, Carinyena",
                "priceGlass": 0,
                "priceBottle": 105.0,
                "vintage": "2017",
                "origin": "Priorat"
            },
            {
                "name": "Mas Doix Priorat",
                "grapes": "G arnacha, Carinena, Syrah, Merlot,C abernet Sauvignon",
                "priceGlass": 0,
                "priceBottle": 172.0,
                "vintage": "Laatste fles 2007",
                "origin": "Priorat"
            },
            {
                "name": "L lenca Plana Montsant",
                "grapes": "C arinyena, Garnacha",
                "priceGlass": 0,
                "priceBottle": 45.0,
                "vintage": "2023",
                "origin": "Montsan t"
            },
            {
                "name": "M arques de Tomares Rioja Crianz a",
                "grapes": "G raciano, Tempranillo",
                "priceGlass": 0,
                "priceBottle": 42.0,
                "vintage": "2021",
                "origin": "Rioja"
            },
            {
                "name": "B odega Solabal Rioja Reserva",
                "grapes": "T empranillo",
                "priceGlass": 0,
                "priceBottle": 65.0,
                "vintage": "2020",
                "origin": "Rioja"
            },
            {
                "name": "M arques De Tomares Rioja Gran Reserva",
                "grapes": "M azuelo, Tempranill o",
                "priceGlass": 0,
                "priceBottle": 75.0,
                "vintage": "2020",
                "origin": "Rioja"
            },
            {
                "name": "Puente del Ea Coraz Rioja",
                "grapes": "T empranillo",
                "priceGlass": 0,
                "priceBottle": 87.0,
                "vintage": "2016",
                "origin": "Rioja"
            },
            {
                "name": "Bodegas Arrocal",
                "grapes": "A lbillo Mayor, Garnacha, Tinto Fino",
                "priceGlass": 0,
                "priceBottle": 54.0,
                "vintage": "2023",
                "origin": "Ribera del Deuro"
            },
            {
                "name": "Bodegas Arrocal los Colmenares",
                "grapes": "T empranillo",
                "priceGlass": 0,
                "priceBottle": 72.0,
                "vintage": "2023",
                "origin": "Ribera del Deuro"
            },
            {
                "name": "Algars Tinto",
                "grapes": "G arnacha, Tempranillo",
                "priceGlass": 0,
                "priceBottle": 32.0,
                "vintage": "2023",
                "origin": "Terra Alta"
            },
            {
                "name": "P arajes del ValleM onastrell Ecol\u00f3gico",
                "grapes": "M onastrel l",
                "priceGlass": 0,
                "priceBottle": 38.0,
                "vintage": "2024",
                "origin": "Jumilla"
            },
            {
                "name": "Aphros Vinh\u00e3o",
                "grapes": "V inh\u00e3o",
                "priceGlass": 0,
                "priceBottle": 53.0,
                "vintage": "2022",
                "origin": "Vinho Verde"
            },
            {
                "name": "Lista Negra Lisboaf ield Blend",
                "grapes": "n vt",
                "priceGlass": 0,
                "priceBottle": 29.0,
                "vintage": "2023",
                "origin": "Lisboa"
            },
            {
                "name": "FitaPreta Alentejo Tinto",
                "grapes": "A ragones, Alicante Bouschet, Trincadeira, Castel\u00e3 o",
                "priceGlass": 0,
                "priceBottle": 50.0,
                "vintage": "2023",
                "origin": "Alentejo"
            },
            {
                "name": "Natus Intus Tinto",
                "grapes": "A ragones, Trincadeira",
                "priceGlass": 0,
                "priceBottle": 62.0,
                "vintage": "Natuurwijn 2022",
                "origin": "Alentejo"
            },
            {
                "name": "B aby Bandito Cinsault",
                "grapes": "C insault",
                "priceGlass": 0,
                "priceBottle": 58.0,
                "vintage": "Natuurwijn 2023",
                "origin": "Swartland"
            },
            {
                "name": "S chieber Bikav\u00e9r",
                "grapes": "C abernet Franc, Cabernet Sauvignon, Kadarka, K\u00e9kfrankos, Merlo t",
                "priceGlass": 0,
                "priceBottle": 34.0,
                "vintage": "2023",
                "origin": "Szeksz\u00e1rd"
            },
            {
                "name": "Marof Gor\u010diko Noir",
                "grapes": "Blaufrankisch, Merlot, Zweigelt",
                "priceGlass": 0,
                "priceBottle": 59.0,
                "vintage": "Natuurwijn 2019",
                "origin": "Prekmurje"
            },
            {
                "name": "Gross Hisno Vino Noir",
                "grapes": "B laufrankisch, Welschrieslin g",
                "priceGlass": 0,
                "priceBottle": 52.0,
                "vintage": "Natuurwijn 2024",
                "origin": "Stajerska"
            },
            {
                "name": "Los Vascos Le Dix de los Vascos",
                "grapes": "C abernet Sauvignon, Carmenere, Syrah",
                "priceGlass": 0,
                "priceBottle": 125.0,
                "vintage": "2008",
                "origin": "Colchagua Valle y"
            },
            {
                "name": "J oseph Phelps Freestone Pinot Noir",
                "grapes": "P inot Noir",
                "priceGlass": 0,
                "priceBottle": 125.0,
                "vintage": "2016",
                "origin": "Sonoma"
            },
            {
                "name": "Pfannebecker Sp\u00e4tburgunderS",
                "grapes": "p\u00e4 tburgunder",
                "priceGlass": 0,
                "priceBottle": 49.0,
                "vintage": "2019",
                "origin": "Portugal |D ouro"
            },
            {
                "name": "Thibault Ducroux Morgon",
                "grapes": "Gamay",
                "priceGlass": 0,
                "priceBottle": 56.0,
                "vintage": "2023",
                "origin": "Portugal |D ouro"
            },
            {
                "name": "FitaPreta Alentejo Tinto",
                "grapes": "A ragones, Alicante Bouschet, Trincadeira, Castel\u00e3 o",
                "priceGlass": 0,
                "priceBottle": 50.0,
                "vintage": "2023",
                "origin": "Portugal |D ouro"
            },
            {
                "name": "Marof Gori\u010dko Noir",
                "grapes": "B laufrankisch, Merlot, Zweige lt",
                "priceGlass": 0,
                "priceBottle": 59.0,
                "vintage": "2019",
                "origin": "Portugal |D ouro"
            },
            {
                "name": "Cantina Dacapo Barbera d'Ast i",
                "grapes": "B arbera",
                "priceGlass": 0,
                "priceBottle": 56.0,
                "vintage": "2023",
                "origin": "Portugal |D ouro"
            },
            {
                "name": "L lenca Plana Montsant",
                "grapes": "C arinyena, Grenache",
                "priceGlass": 0,
                "priceBottle": 45.0,
                "vintage": "2021",
                "origin": "Portugal |D ouro"
            },
            {
                "name": "Bodegas Arroca lRibera del Deuro",
                "grapes": "A lbillo mayor, Garnacha, Tempranil lo",
                "priceGlass": 0,
                "priceBottle": 54.0,
                "vintage": "2023",
                "origin": "Portugal |D ouro"
            }
        ]
    },
    {
        "title": "Dessertwijn",
        "wines": [
            {
                "name": "Ch\u00e2teau Suduiraut Sauternes",
                "grapes": "S auvignon Blanc, Semillon | 7 50 ml",
                "priceGlass": 0,
                "priceBottle": 95.0,
                "vintage": "2007",
                "origin": "Frankrijk | Sauterne s"
            },
            {
                "name": "C h\u00e2teau Rieussec Sauternes",
                "grapes": "S auvignon Blanc, Semillon | 3 75 ml",
                "priceGlass": 0,
                "priceBottle": 85.0,
                "vintage": "2015",
                "origin": "Frankrijk | Sauterne s"
            },
            {
                "name": "200 4",
                "grapes": "C h\u00e2teau Rieussec Sauternes | S auvignon Blanc, Semillon | 3 75 ml",
                "priceGlass": 0,
                "priceBottle": 85.0,
                "vintage": "",
                "origin": "Frankrijk | Sauterne s"
            },
            {
                "name": "D omaine des Baumard Coteaux de Layon Clos st. Catharine",
                "grapes": "C henin Blanc | 5 00 ml",
                "priceGlass": 0,
                "priceBottle": 59.0,
                "vintage": "2019",
                "origin": "Frankrijk |L oire"
            },
            {
                "name": "D omaine Foreau Vouvray Moelleux",
                "grapes": "Chenin Blanc | 750 ml",
                "priceGlass": 0,
                "priceBottle": 72.0,
                "vintage": "2017",
                "origin": "Frankrijk |L oire"
            },
            {
                "name": "M arc Br\u00e9dif Vouvray Nectar",
                "grapes": "Chenin Blanc | 375 ml",
                "priceGlass": 0,
                "priceBottle": 81.0,
                "vintage": "1996",
                "origin": "Frankrijk |L oire"
            },
            {
                "name": "D omaine Corty Juran\u00e7on",
                "grapes": "Petit Manseng, Gros Manseng | 750 ml",
                "priceGlass": 0,
                "priceBottle": 48.0,
                "vintage": "2022",
                "origin": "Frankrijk |Ju ran\u00e7on"
            },
            {
                "name": "Gracia Hnos Tauromaquia Pedro Xim\u00e9nez 5",
                "grapes": "0 0 ml",
                "priceGlass": 0,
                "priceBottle": 47.0,
                "vintage": "",
                "origin": "Spanje | Andalusi \u00eb"
            },
            {
                "name": "A ndrea Rinaldi Moscatod \u2019Asti",
                "grapes": "Moscato | 750 ml",
                "priceGlass": 0,
                "priceBottle": 40.0,
                "vintage": "2024",
                "origin": "Itali\u00eb |P iemonte"
            },
            {
                "name": "Quinta da Pedra Alta No3 White Port",
                "grapes": "5 00 ml",
                "priceGlass": 0,
                "priceBottle": 53.0,
                "vintage": "",
                "origin": "Portugal |D ouro"
            },
            {
                "name": "Quinta da Pedra Alta 10yr old Tawny Port Alta",
                "grapes": "5 00 ml",
                "priceGlass": 0,
                "priceBottle": 59.0,
                "vintage": "",
                "origin": "Portugal |D ouro"
            }
        ]
    }
];

export type FoodItem = {
    name: string;
    description?: string;
    price: number;
};

export type FoodCategory = {
    title: string;
    description?: string;
    items: FoodItem[];
};

const foodData: FoodCategory[] = [
    {
        title: "Winter menu",
        description: "vast menu | per tafel te bestellen",
        items: [
            { name: "Winter menu 3 gangen", price: 45 },
            { name: "Winter menu 4 gangen", price: 55 },
            { name: "Winter menu 5 gangen (inclusief kaas)", price: 65 },
        ]
    },
    {
        title: "Fingerfoods",
        items: [
            { name: "Oesters per stuk", price: 4.5 },
            { name: "Ierse oester", description: "schuim van gerookte paling", price: 7 },
            { name: "Jamón Ibérico", description: "cebo de campo", price: 17 },
            { name: "Rillettes van makreel", description: "lavas, granny smith", price: 10 },
            { name: "Kaaskroketjes van L'Etivaz", description: "4 stuks, bieslookmayonaise", price: 11 },
            { name: "Mantequilla olijven", price: 5 },
            { name: "Zuurdesem met boter", price: 6 },
            { name: "Kazen van Eriks", price: 16 },
        ]
    },
    {
        title: "Voorgerechten",
        items: [
            { name: "Gele biet", description: "spinazie créme, Colombo kerrie, krokante mais", price: 16 },
            { name: "Crudo van zeebaars", description: "duindoornbes, jalapeño, koriander", price: 17 },
            { name: "Steak tartaar", description: "tomatenkroepoek, mierikswortel", price: 16 },
            { name: "BBQ Spitskool", description: "Duxelles, hazelnoot, oude Stolwijker, beurre noisette dressing", price: 17 },
        ]
    },
    {
        title: "Hoofdgerechten",
        items: [
            { name: "Kabeljauw", description: "gestoofde prei, Hollandaise van zuurkool", price: 28 },
            { name: "Wilde paddenstoelen", description: "schorseneren, Belper Knolle, saus van gepofte knoflook", price: 26 },
            { name: "Kalfssukade", description: "gekarameliseerde sjalot , knolselderij créme, jus de veau", price: 28 },
        ]
    },
    {
        title: "Bijgerechten",
        items: [
            { name: "Little gem salade", description: "Dressing van dragon", price: 5 },
            { name: "Pommes frites", description: "huisgemaakte mayonaise", price: 6 },
        ]
    },
    {
        title: "Dessert",
        items: [
            { name: "Chocolade taartje", description: "amarena kersen, pecannoot, kersen sorbet", price: 12 },
            { name: "Kaas van buurman Erik’s", description: "4 kazen | rozijnenbrood", price: 16 },
            { name: "Wisselende crème brûlée", price: 10 },
        ]
    }
];

const WineItem = ({ wine }: { wine: Wine }) => (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-brand-green-dark/10 pb-4 mb-6 group hover:bg-brand-gold/5 transition-colors p-3 -mx-3 rounded-lg">
        <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
                {wine.vintage && <span className="text-brand-gold font-body text-sm font-bold">{wine.vintage}</span>}
                <h4 className="font-display text-xl text-brand-green-dark uppercase tracking-wide group-hover:text-brand-gold transition-colors">{wine.name}</h4>
            </div>
            <p className="font-body text-brand-grey/80 italic text-sm mt-1">{wine.grapes}</p>
        </div>
        <div className="flex gap-6 mt-2 md:mt-0 font-display text-lg text-brand-green-dark">
            <div className="flex flex-col items-end">
                <span className="text-xs text-brand-gold uppercase tracking-widest mb-1">Glas</span>
                <span>€ {typeof wine.priceGlass === 'number' ? wine.priceGlass.toFixed(2) : wine.priceGlass}</span>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-xs text-brand-gold uppercase tracking-widest mb-1">Fles</span>
                <span>€ {wine.priceBottle.toFixed(2)}</span>
            </div>
        </div>
    </div>
);

const FoodItemRow = ({ item }: { item: FoodItem }) => (
    <div className="flex justify-between items-baseline border-b border-brand-green-dark/10 pb-4 mb-4 group hover:bg-brand-gold/5 transition-colors p-3 -mx-3 rounded-lg">
        <div className="flex flex-col max-w-[80%]">
            <h4 className="font-display text-xl text-brand-green-dark group-hover:text-brand-gold transition-colors">{item.name}</h4>
            {item.description && <p className="font-body text-brand-grey/80 italic text-sm mt-1">{item.description}</p>}
        </div>
        <div className="font-display text-lg text-brand-green-dark">
            € {item.price.toFixed(2)}
        </div>
    </div>
);

import { useSearchParams } from 'react-router-dom';
import { WineFlipbook } from '../components/WineFlipbook';

export const Menu: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState<'wijn' | 'menu'>('wijn');

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab === 'menu') {
            setActiveTab('menu');
        } else if (tab === 'wijn') {
            setActiveTab('wijn');
        }
    }, [searchParams]);

    return (
        <div className="min-h-screen pt-16 md:pt-20 bg-brand-cream fade-in">
            {/* Header */}
            <div className="bg-brand-green-dark py-12 md:py-20 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pattern-dots bg-repeat"></div>
                <h1 className="font-display text-4xl md:text-7xl text-brand-cream uppercase tracking-widest relative z-10 drop-shadow-md">Onze Kaart</h1>
                <p className="font-body text-brand-gold italic text-lg md:text-xl mt-3 md:mt-4 relative z-10">Ontdek onze selectie</p>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-brand-cream/95 backdrop-blur-sm border-b border-brand-gold/20 shadow-sm">
                <div className="max-w-4xl mx-auto flex justify-center">
                    <button
                        onClick={() => setActiveTab('wijn')}
                        className={`px-6 py-4 md:px-8 md:py-6 font-display text-base md:text-lg tracking-widest uppercase transition-all relative ${activeTab === 'wijn' ? 'text-brand-green-dark' : 'text-brand-grey/40 hover:text-brand-green-dark'}`}
                    >
                        Wijnkaart
                        {activeTab === 'wijn' && <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-gold"></span>}
                    </button>
                    <button
                        onClick={() => setActiveTab('menu')}
                        className={`px-6 py-4 md:px-8 md:py-6 font-display text-base md:text-lg tracking-widest uppercase transition-all relative ${activeTab === 'menu' ? 'text-brand-green-dark' : 'text-brand-grey/40 hover:text-brand-green-dark'}`}
                    >
                        Menukaart
                        {activeTab === 'menu' && <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-gold"></span>}
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                {activeTab === 'wijn' ? (
                    <div className="animate-fade-in w-full">
                        <WineFlipbook />
                    </div>
                ) : (
                    <div className="animate-fade-in space-y-20">

                        {/* Intro / Chef's Note (Optional, keeping it if desired or removing for pure minimalism) */}
                        <div className="glass p-8 border border-brand-gold/20 bg-brand-gold/5 mb-16 text-center rounded-sm max-w-3xl mx-auto">
                            <h3 className="font-display text-2xl text-brand-green-dark mb-4 uppercase tracking-[0.2em]">Diner</h3>
                            <p className="font-body text-brand-grey/90 leading-relaxed italic font-light">
                                "Net als bij wijn vinden we het belangrijk om nieuwe smaken te ontdekken. Het steeds wisselende menu is geïnspireerd op de wijngebieden van onze wijnboeren."
                            </p>
                        </div>

                        {foodData.map((category, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-8 md:gap-16">
                                {/* Left Column: Vertical Title */}
                                <div className="md:w-1/4 flex md:justify-end">
                                    <h3 className="font-display text-2xl md:text-3xl text-brand-green-dark uppercase tracking-[0.3em] text-center md:text-right border-b-2 md:border-b-0 md:border-r-2 border-brand-gold/30 pb-2 md:pb-0 md:pr-4">
                                        {/* Auto-shorten specific titles for the aesthetic if needed, or use full title */}
                                        {category.title === "Voorgerechten" ? "VOOR" :
                                            category.title === "Hoofdgerechten" ? "HOOFD" :
                                                category.title === "Bijgerechten" ? "ERBIJ" :
                                                    category.title === "Tussengerechten" ? "TUSSEN" :
                                                        category.title === "Dessert" ? "NA" :
                                                            category.title.toUpperCase()}
                                    </h3>
                                </div>

                                {/* Right Column: Items */}
                                <div className="md:w-3/4 flex flex-col gap-6 pt-2">
                                    {category.items.map((item, iIndex) => (
                                        <div key={iIndex} className="group cursor-default">
                                            <div className="flex justify-between items-baseline border-b border-brand-sand/30 pb-3">
                                                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 max-w-[90%]">
                                                    <h4 className="font-display text-lg md:text-xl text-brand-green-dark font-bold tracking-wide group-hover:text-brand-gold transition-colors">
                                                        {item.name}
                                                    </h4>
                                                    {item.description && (
                                                        <span className="hidden md:inline text-brand-gold/50">•</span>
                                                    )}
                                                    {item.description && (
                                                        <p className="font-body text-brand-grey/70 italic text-sm md:text-base font-light">
                                                            {item.description}
                                                        </p>
                                                    )}
                                                </div>
                                                <div className="font-display text-lg text-brand-green-dark font-medium whitespace-nowrap ml-4">
                                                    {item.price % 1 === 0 ? item.price : item.price.toFixed(1)}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
