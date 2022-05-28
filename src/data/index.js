import {
  PlanetEarth,
  PlanetEarthInernal,
  GeologyEarth,
  PlanetJupiter,
  PlanetJupiterInernal,
  GeologyJupiter,
  PlanetMars,
  PlanetMarsInernal,
  GeologyMars,
  PlanetMercury,
  PlanetMercuryInernal,
  GeologyMercury,
  PlanetNeptune,
  PlanetNeptuneInernal,
  GeologyNeptune,
  PlanetSaturn,
  PlanetSaturnInernal,
  GeologySaturn,
  PlanetUranus,
  PlanetUranusInernal,
  GeologyUranus,
  PlanetVenus,
  PlanetVenusInernal,
  GeologyVenus,
} from '../assets'

export const planets = [
  // Mercury
  {
    name: 'mercury',
    color: '#419EBB',
    pathname: '/mercury/overview',
    overview: {
      info: " Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
      sourceUrl: 'https://en.wikipedia.org/wiki/Mercury_(planet)',
      svg: PlanetMercury,
    },
    structure: {
      info: "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
      sourceUrl:
        'https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure',
      svg: PlanetMercuryInernal,
    },
    geology: {
      info: "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
      sourceUrl:
        'https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology',
      svg: PlanetMercuryInernal,
      png: GeologyMercury,
    },
    details: [
      {
        title: 'rotation time',
        info: '58.6 Days',
      },
      {
        title: 'revolution time',
        info: '87.97 Days',
      },
      {
        title: 'radius',
        info: '2,439.7 KM',
      },
      {
        title: 'average temp.',
        info: '430°c',
      },
    ],
  },
  // Venus
  {
    name: 'venus',
    color: '#EDA249',
    pathname: '/venus/overview',
    overview: {
      info: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
      sourceUrl: 'https://en.wikipedia.org/wiki/Venus',
      svg: PlanetVenus,
    },
    structure: {
      info: '  The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.',
      sourceUrl: 'https://en.wikipedia.org/wiki/Venus#Internal_structure',
      svg: PlanetVenusInernal,
    },
    geology: {
      info: 'Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.',
      sourceUrl: 'https://en.wikipedia.org/wiki/Venus#Surface_geology',
      svg: PlanetVenusInernal,
      png: GeologyVenus,
    },
    details: [
      {
        title: 'rotation time',
        info: '243 Days',
      },
      {
        title: 'revolution time',
        info: '224.7 Days',
      },
      {
        title: 'radius',
        info: '6,051.8 KM',
      },
      {
        title: 'average temp.',
        info: '471°c',
      },
    ],
  },

  // Earth
  {
    name: 'earth',
    color: '#6D2ED5',
    pathname: '/earth/overview',
    overview: {
      info: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
      sourceUrl: 'https://en.wikipedia.org/wiki/Earth',
      svg: PlanetEarth,
    },
    structure: {
      info: "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
      sourceUrl: 'https://en.wikipedia.org/wiki/Earth#Internal_structure',
      svg: PlanetEarthInernal,
    },
    geology: {
      info: 'The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.',
      sourceUrl: 'https://en.wikipedia.org/wiki/Earth#Surface',
      svg: PlanetEarthInernal,
      png: GeologyEarth,
    },
    details: [
      {
        title: 'rotation time',
        info: '0.99 Days',
      },
      {
        title: 'revolution time',
        info: '365.26 Days',
      },
      {
        title: 'radius',
        info: '6,371 KM',
      },
      {
        title: 'average temp.',
        info: '16°c',
      },
    ],
  },
  // Mars
  {
    name: 'mars',
    color: '#D14C32',
    pathname: '/mars/overview',
    overview: {
      info: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
      sourceUrl: 'https://en.wikipedia.org/wiki/Mars',
      svg: PlanetMars,
    },
    structure: {
      info: 'Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.',
      sourceUrl: 'https://en.wikipedia.org/wiki/Mars#Internal_structure',
      svg: PlanetMarsInernal,
    },
    geology: {
      info: 'Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.',
      sourceUrl: 'https://en.wikipedia.org/wiki/Mars#Surface_geology',
      svg: PlanetMarsInernal,
      png: GeologyMars,
    },
    details: [
      {
        title: 'rotation time',
        info: '1.03 Days',
      },
      {
        title: 'revolution time',
        info: '1.88 Years',
      },
      {
        title: 'radius',
        info: '3,389.5 KM',
      },
      {
        title: 'average temp.',
        info: '-28°c',
      },
    ],
  },
  // Jupiter
  {
    name: 'jupiter',
    color: '#D83A34',
    pathname: '/jupiter/overview',
    overview: {
      info: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.',
      sourceUrl: 'https://en.wikipedia.org/wiki/Jupiter',
      svg: PlanetJupiter,
    },
    structure: {
      info: "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
      sourceUrl: 'https://en.wikipedia.org/wiki/Jupiter#Internal_structure',
      svg: PlanetJupiterInernal,
    },
    geology: {
      info: 'The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.',
      sourceUrl:
        'https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices',
      svg: PlanetJupiterInernal,
      png: GeologyJupiter,
    },
    details: [
      {
        title: 'rotation time',
        info: '9.93 Hours',
      },
      {
        title: 'revolution time',
        info: '11.86 Years',
      },
      {
        title: 'radius',
        info: '69,911 KM',
      },
      {
        title: 'average temp.',
        info: '-108°c',
      },
    ],
  },

  // Saturn
  {
    name: 'saturn',
    color: '#CD5120',
    pathname: '/saturn/overview',
    overview: {
      info: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.',
      sourceUrl: 'https://en.wikipedia.org/wiki/Saturn',
      svg: PlanetSaturn,
    },
    structure: {
      info: "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
      sourceUrl: 'https://en.wikipedia.org/wiki/Saturn#Internal_structure',
      svg: PlanetSaturnInernal,
    },
    geology: {
      info: "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
      sourceUrl: 'https://en.wikipedia.org/wiki/Saturn#Atmosphere',
      svg: PlanetSaturnInernal,
      png: GeologySaturn,
    },
    details: [
      {
        title: 'rotation time',
        info: '10.8 Hours',
      },
      {
        title: 'revolution time',
        info: '29.46 Years',
      },
      {
        title: 'radius',
        info: '58,232 KM',
      },
      {
        title: 'average temp.',
        info: '-138°c',
      },
    ],
  },
  // Uranus
  {
    name: 'uranus',
    color: '#1EC1A2',
    pathname: '/uranus/overview',
    overview: {
      info: 'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
      sourceUrl: 'https://en.wikipedia.org/wiki/Uranus',
      svg: PlanetUranus,
    },
    structure: {
      info: "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
      sourceUrl: 'https://en.wikipedia.org/wiki/Uranus#Internal_structure',
      svg: PlanetUranusInernal,
    },
    geology: {
      info: "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
      sourceUrl: 'https://en.wikipedia.org/wiki/Uranus#Atmosphere',
      svg: PlanetUranusInernal,
      png: GeologyUranus,
    },
    details: [
      {
        title: 'rotation time',
        info: '17.2 Hours',
      },
      {
        title: 'revolution time',
        info: '84 Years',
      },
      {
        title: 'radius',
        info: '25,362 KM',
      },
      {
        title: 'average temp.',
        info: '-195°c',
      },
    ],
  },
  // Neptune
  {
    name: 'neptune',
    color: '#2D68F0',
    pathname: '/neptune/overview',
    overview: {
      info: 'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.',
      sourceUrl: 'https://en.wikipedia.org/wiki/Neptune',
      svg: PlanetNeptune,
    },
    structure: {
      info: "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
      sourceUrl: 'https://en.wikipedia.org/wiki/Neptune#Internal_structure',
      svg: PlanetNeptuneInernal,
    },
    geology: {
      info: "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
      sourceUrl: 'https://en.wikipedia.org/wiki/Neptune#Atmosphere',
      svg: PlanetNeptuneInernal,
      png: GeologyNeptune,
    },
    details: [
      {
        title: 'rotation time',
        info: '16.08 Hours',
      },
      {
        title: 'revolution time',
        info: '164.79 Years',
      },
      {
        title: 'radius',
        info: '24,622 KM',
      },
      {
        title: 'average temp.',
        info: '-201°c',
      },
    ],
  },
]
