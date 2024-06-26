const express = require("express");
const router = express.Router();

const routeData = [
  {
    client_id: "7",
    status: "READY",
    route_title: "COACALCO ENT",
    code: "TRAT00-ENT",
    distance: 28.97555734508139,
    is_active: true,
    stations: [
      {
        id: "2809cabc-357a-4a78-9b1b-0a6646cd004e",
        type: "out",
        order: 6,
      },
      {
        id: "f34b89f9-24ce-4c9e-8ea7-3fd2b5d4d7c2",
        type: "in",
        order: 1,
      },
      {
        id: "7df63f8c-fe9d-4471-a0b8-2c9c81c6fa7b",
        type: "in",
        order: 5,
      },
      {
        id: "fb9d8249-93a3-4323-a7f9-bacc8413e587",
        type: "in",
        order: 2,
      },
      {
        id: "8950397b-6d61-4b24-96f7-92622e674409",
        type: "in",
        order: 4,
      },
      {
        id: "0849e4b6-4be5-4442-8a5f-37833cc3539c",
        type: "in",
        order: 3,
      },
    ],
    error: null,
    time_zone: "America/Mexico_City",
    created_at: "2023-11-28T18:26:35.616Z",
    updated_at: "2024-03-07T20:32:05.093Z",
    geojson: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-99.0916817975, 19.6324495225],
          },
          properties: {
            name: "CASA TOÑO C",
            address: "",
            type: "in",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-99.12377304, 19.63125178],
          },
          properties: {
            name: "COSMOPOL",
            address: "",
            type: "in",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-99.16300394, 19.62216335],
          },
          properties: {
            name: "LA BANDERA TULTITLAN",
            address: "",
            type: "in",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-99.18688, 19.59298],
          },
          properties: {
            name: "PUENTE PEATONAL ( LA QUEBRADA)",
            address: "",
            type: "in",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-99.19438, 19.56594],
          },
          properties: {
            name: "SUBURBANO ( SAN RAFAEL)",
            address: "",
            type: "in",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-99.2257463, 19.4760571],
          },
          properties: {
            name: "TRANSPORTES LIPU",
            address: "",
            type: "out",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [
              [-99.09175, 19.63247],
              [-99.09187, 19.63213],
              [-99.09198, 19.63218],
              [-99.09238, 19.63233],
              [-99.09369, 19.63283],
              [-99.09484, 19.63328],
              [-99.09653, 19.63389],
              [-99.09749, 19.63418],
              [-99.09841, 19.63453],
              [-99.09894, 19.63472],
              [-99.09963, 19.6349],
              [-99.10118, 19.63512],
              [-99.10217, 19.63526],
              [-99.10249, 19.63533],
              [-99.10324, 19.63544],
              [-99.10344, 19.63547],
              [-99.10431, 19.6356],
              [-99.10609, 19.63586],
              [-99.10738, 19.63605],
              [-99.10883, 19.63627],
              [-99.10937, 19.6363],
              [-99.10987, 19.63628],
              [-99.11041, 19.63614],
              [-99.1107, 19.63603],
              [-99.11173, 19.63561],
              [-99.11207, 19.6355],
              [-99.11262, 19.6353],
              [-99.11338, 19.63503],
              [-99.11457, 19.6346],
              [-99.11684, 19.63378],
              [-99.11775, 19.63345],
              [-99.11966, 19.63269],
              [-99.12, 19.63258],
              [-99.12281, 19.63157],
              [-99.12424, 19.63106],
              [-99.12483, 19.63085],
              [-99.12534, 19.63071],
              [-99.12637, 19.63051],
              [-99.12743, 19.63035],
              [-99.1296, 19.62999],
              [-99.1304, 19.62989],
              [-99.1321, 19.6296],
              [-99.13483, 19.62914],
              [-99.13712, 19.62878],
              [-99.13891, 19.62839],
              [-99.13953, 19.62824],
              [-99.14329, 19.62725],
              [-99.14581, 19.6266],
              [-99.14635, 19.62644],
              [-99.14885, 19.62578],
              [-99.15295, 19.62475],
              [-99.15482, 19.62429],
              [-99.15617, 19.62395],
              [-99.15688, 19.62377],
              [-99.15949, 19.62306],
              [-99.16152, 19.62255],
              [-99.16278, 19.62221],
              [-99.16316, 19.62212],
              [-99.16532, 19.62156],
              [-99.16655, 19.62127],
              [-99.16737, 19.62105],
              [-99.16878, 19.62065],
              [-99.17039, 19.62024],
              [-99.17162, 19.61995],
              [-99.17341, 19.61948],
              [-99.17495, 19.61908],
              [-99.17564, 19.61889],
              [-99.17622, 19.61871],
              [-99.17656, 19.61858],
              [-99.17694, 19.6184],
              [-99.17872, 19.61742],
              [-99.17949, 19.61701],
              [-99.17976, 19.61686],
              [-99.18003, 19.61664],
              [-99.18022, 19.61643],
              [-99.18049, 19.61604],
              [-99.18073, 19.61552],
              [-99.18097, 19.61436],
              [-99.18122, 19.61291],
              [-99.18132, 19.61211],
              [-99.18148, 19.61118],
              [-99.18186, 19.60903],
              [-99.18198, 19.60853],
              [-99.18203, 19.60822],
              [-99.18204, 19.60796],
              [-99.18223, 19.60701],
              [-99.18228, 19.60672],
              [-99.18231, 19.60659],
              [-99.18243, 19.60596],
              [-99.18261, 19.60514],
              [-99.1829, 19.60324],
              [-99.18347, 19.60012],
              [-99.18356, 19.59958],
              [-99.18361, 19.59913],
              [-99.18364, 19.59866],
              [-99.18363, 19.59844],
              [-99.18338, 19.59576],
              [-99.18334, 19.59505],
              [-99.18334, 19.59487],
              [-99.18337, 19.59472],
              [-99.18343, 19.59454],
              [-99.18364, 19.59409],
              [-99.18375, 19.59392],
              [-99.18386, 19.59378],
              [-99.18411, 19.59358],
              [-99.18433, 19.59346],
              [-99.18458, 19.59338],
              [-99.18474, 19.59336],
              [-99.18507, 19.59337],
              [-99.18524, 19.59333],
              [-99.18547, 19.59328],
              [-99.18643, 19.59302],
              [-99.18646, 19.59302],
              [-99.18673, 19.59293],
              [-99.18688, 19.59294],
              [-99.18694, 19.59295],
              [-99.18708, 19.593],
              [-99.18718, 19.59316],
              [-99.18731, 19.59313],
              [-99.18732, 19.59304],
              [-99.18734, 19.59296],
              [-99.18737, 19.59289],
              [-99.18744, 19.59281],
              [-99.18798, 19.5923],
              [-99.18808, 19.59215],
              [-99.18902, 19.59135],
              [-99.18936, 19.59104],
              [-99.18957, 19.59078],
              [-99.1907, 19.58981],
              [-99.19109, 19.58951],
              [-99.19168, 19.58915],
              [-99.19356, 19.58825],
              [-99.19358, 19.58818],
              [-99.19364, 19.58811],
              [-99.19389, 19.58793],
              [-99.19404, 19.58782],
              [-99.1943, 19.58756],
              [-99.1944, 19.58745],
              [-99.19469, 19.58703],
              [-99.19489, 19.58663],
              [-99.19498, 19.58632],
              [-99.19503, 19.58589],
              [-99.19501, 19.58571],
              [-99.19497, 19.58535],
              [-99.19489, 19.58501],
              [-99.19455, 19.58365],
              [-99.19444, 19.58319],
              [-99.1942, 19.5825],
              [-99.19405, 19.58204],
              [-99.19387, 19.58157],
              [-99.19384, 19.58147],
              [-99.1938, 19.58111],
              [-99.19381, 19.58087],
              [-99.19386, 19.58068],
              [-99.19393, 19.58045],
              [-99.19405, 19.58014],
              [-99.19424, 19.57981],
              [-99.19433, 19.5797],
              [-99.19447, 19.57955],
              [-99.19471, 19.57932],
              [-99.19498, 19.57901],
              [-99.19524, 19.57875],
              [-99.1956, 19.57835],
              [-99.1959, 19.57797],
              [-99.19609, 19.57768],
              [-99.19649, 19.57712],
              [-99.19676, 19.57665],
              [-99.19683, 19.57637],
              [-99.19686, 19.57599],
              [-99.19684, 19.57564],
              [-99.19672, 19.57486],
              [-99.19663, 19.57435],
              [-99.19648, 19.57381],
              [-99.19643, 19.57362],
              [-99.19634, 19.57332],
              [-99.19613, 19.57285],
              [-99.1955, 19.5717],
              [-99.19486, 19.57087],
              [-99.19457, 19.57035],
              [-99.19445, 19.57001],
              [-99.19442, 19.56983],
              [-99.19425, 19.56872],
              [-99.19422, 19.56829],
              [-99.19425, 19.56732],
              [-99.1944, 19.56574],
              [-99.19446, 19.56488],
              [-99.19451, 19.56389],
              [-99.1946, 19.56237],
              [-99.19461, 19.56217],
              [-99.1948, 19.56162],
              [-99.19502, 19.56121],
              [-99.19511, 19.56112],
              [-99.19528, 19.56104],
              [-99.19615, 19.56096],
              [-99.19653, 19.56095],
              [-99.19787, 19.56084],
              [-99.1979, 19.56062],
              [-99.19811, 19.55889],
              [-99.19829, 19.55703],
              [-99.19835, 19.55638],
              [-99.19843, 19.55578],
              [-99.19851, 19.55522],
              [-99.19885, 19.55523],
              [-99.19915, 19.55525],
              [-99.20021, 19.55541],
              [-99.20207, 19.55574],
              [-99.20246, 19.55582],
              [-99.20308, 19.55592],
              [-99.20402, 19.55583],
              [-99.20436, 19.55581],
              [-99.20464, 19.55584],
              [-99.2051, 19.55454],
              [-99.20593, 19.55203],
              [-99.20604, 19.55176],
              [-99.20637, 19.55065],
              [-99.20667, 19.54948],
              [-99.20671, 19.5492],
              [-99.20681, 19.54816],
              [-99.207, 19.54598],
              [-99.2071, 19.54448],
              [-99.20716, 19.54382],
              [-99.20721, 19.54322],
              [-99.20728, 19.54278],
              [-99.20728, 19.54263],
              [-99.20727, 19.54248],
              [-99.20731, 19.54189],
              [-99.20736, 19.54065],
              [-99.20737, 19.53971],
              [-99.20738, 19.53935],
              [-99.2075, 19.5379],
              [-99.20762, 19.53656],
              [-99.2078, 19.53463],
              [-99.20796, 19.53302],
              [-99.20814, 19.53093],
              [-99.20824, 19.52966],
              [-99.2083, 19.52881],
              [-99.20845, 19.5271],
              [-99.20855, 19.52643],
              [-99.2086, 19.52624],
              [-99.20875, 19.52585],
              [-99.20898, 19.52542],
              [-99.20949, 19.52462],
              [-99.21062, 19.52296],
              [-99.21129, 19.52193],
              [-99.21318, 19.51901],
              [-99.2142, 19.51741],
              [-99.21473, 19.51663],
              [-99.2153, 19.51571],
              [-99.21543, 19.51549],
              [-99.21593, 19.51471],
              [-99.21674, 19.51344],
              [-99.21695, 19.51312],
              [-99.21793, 19.51164],
              [-99.21798, 19.51158],
              [-99.21802, 19.51153],
              [-99.21805, 19.51151],
              [-99.21818, 19.51133],
              [-99.21881, 19.51033],
              [-99.21902, 19.51001],
              [-99.21922, 19.50975],
              [-99.21998, 19.50859],
              [-99.22056, 19.50768],
              [-99.22083, 19.50726],
              [-99.22175, 19.50575],
              [-99.22189, 19.50543],
              [-99.22196, 19.50521],
              [-99.22201, 19.505],
              [-99.22204, 19.5047],
              [-99.22216, 19.50344],
              [-99.22225, 19.50264],
              [-99.22234, 19.50234],
              [-99.22251, 19.50205],
              [-99.22269, 19.50184],
              [-99.22298, 19.50155],
              [-99.22363, 19.50094],
              [-99.22492, 19.49969],
              [-99.22543, 19.49917],
              [-99.22571, 19.49879],
              [-99.22593, 19.49845],
              [-99.22605, 19.49824],
              [-99.22613, 19.49808],
              [-99.22642, 19.49731],
              [-99.22652, 19.49694],
              [-99.22672, 19.496],
              [-99.22689, 19.49543],
              [-99.22728, 19.49361],
              [-99.22746, 19.49256],
              [-99.22764, 19.49185],
              [-99.22787, 19.49115],
              [-99.22804, 19.49058],
              [-99.22914, 19.48744],
              [-99.22974, 19.48572],
              [-99.23035, 19.48414],
              [-99.23097, 19.48241],
              [-99.2313, 19.48137],
              [-99.23143, 19.48095],
              [-99.23152, 19.48078],
              [-99.2315, 19.48068],
              [-99.23151, 19.48061],
              [-99.23153, 19.48053],
              [-99.23153, 19.4805],
              [-99.23145, 19.48047],
              [-99.23139, 19.48049],
              [-99.23135, 19.48055],
              [-99.23129, 19.48065],
              [-99.23129, 19.48071],
              [-99.23126, 19.48082],
              [-99.23079, 19.48228],
              [-99.23052, 19.48302],
              [-99.22982, 19.48277],
              [-99.22912, 19.48252],
              [-99.22942, 19.48172],
              [-99.23022, 19.47969],
              [-99.23041, 19.47921],
              [-99.22891, 19.47845],
              [-99.22539, 19.47683],
              [-99.22549, 19.47603],
            ],
          },
          properties: {
            name: null,
            address: null,
            type: "LineString",
          },
        },
      ],
    },
    route_id: "656630db0682686821ac990d",
  },
];

router.get("/route-detail", (req, res) => {
  res.json(routeData);
});

module.exports = router;
