var y = (a, n, s) => {
  if (!n.has(a))
    throw TypeError("Cannot " + s);
};
var e = (a, n, s) => (y(a, n, "read from private field"), s ? s.call(a) : n.get(a)), N = (a, n, s) => {
  if (n.has(a))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(a) : n.set(a, s);
}, l = (a, n, s, t) => (y(a, n, "write to private field"), t ? t.call(a, s) : n.set(a, s), s);
var T = (a, n, s) => (y(a, n, "access private method"), s);
const H = [
  [
    "01001",
    {
      n: "Autauga",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01003",
    {
      n: "Baldwin",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01005",
    {
      n: "Barbour",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01007",
    {
      n: "Bibb",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01009",
    {
      n: "Blount",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01011",
    {
      n: "Bullock",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01013",
    {
      n: "Butler",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01015",
    {
      n: "Calhoun",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01017",
    {
      n: "Chambers",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01019",
    {
      n: "Cherokee",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01021",
    {
      n: "Chilton",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01023",
    {
      n: "Choctaw",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01025",
    {
      n: "Clarke",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01027",
    {
      n: "Clay",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01029",
    {
      n: "Cleburne",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01031",
    {
      n: "Coffee",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01033",
    {
      n: "Colbert",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01035",
    {
      n: "Conecuh",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01037",
    {
      n: "Coosa",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01039",
    {
      n: "Covington",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01041",
    {
      n: "Crenshaw",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01043",
    {
      n: "Cullman",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01045",
    {
      n: "Dale",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01047",
    {
      n: "Dallas",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01049",
    {
      n: "DeKalb",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01051",
    {
      n: "Elmore",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01053",
    {
      n: "Escambia",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01055",
    {
      n: "Etowah",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01057",
    {
      n: "Fayette",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01059",
    {
      n: "Franklin",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01061",
    {
      n: "Geneva",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01063",
    {
      n: "Greene",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01065",
    {
      n: "Hale",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01067",
    {
      n: "Henry",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01069",
    {
      n: "Houston",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01071",
    {
      n: "Jackson",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01073",
    {
      n: "Jefferson",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01075",
    {
      n: "Lamar",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01077",
    {
      n: "Lauderdale",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01079",
    {
      n: "Lawrence",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01081",
    {
      n: "Lee",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01083",
    {
      n: "Limestone",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01085",
    {
      n: "Lowndes",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01087",
    {
      n: "Macon",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01089",
    {
      n: "Madison",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01091",
    {
      n: "Marengo",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01093",
    {
      n: "Marion",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01095",
    {
      n: "Marshall",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01097",
    {
      n: "Mobile",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01099",
    {
      n: "Monroe",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01101",
    {
      n: "Montgomery",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01103",
    {
      n: "Morgan",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01105",
    {
      n: "Perry",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01107",
    {
      n: "Pickens",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01109",
    {
      n: "Pike",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01111",
    {
      n: "Randolph",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01113",
    {
      n: "Russell",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01115",
    {
      n: "St. Clair",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01117",
    {
      n: "Shelby",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01119",
    {
      n: "Sumter",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01121",
    {
      n: "Talladega",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01123",
    {
      n: "Tallapoosa",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01125",
    {
      n: "Tuscaloosa",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01127",
    {
      n: "Walker",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01129",
    {
      n: "Washington",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01131",
    {
      n: "Wilcox",
      s: "AL",
      c: "t"
    }
  ],
  [
    "01133",
    {
      n: "Winston",
      s: "AL",
      c: "t"
    }
  ],
  [
    "02013",
    {
      n: "Aleutians East",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02016",
    {
      n: "Aleutians West",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02020",
    {
      n: "Anchorage",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02050",
    {
      n: "Bethel",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02060",
    {
      n: "Bristol Bay",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02063",
    {
      n: "Chugach",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02066",
    {
      n: "Copper River",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02068",
    {
      n: "Denali",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02070",
    {
      n: "Dillingham",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02090",
    {
      n: "Fairbanks North Star",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02100",
    {
      n: "Haines",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02105",
    {
      n: "Hoonah-Angoon",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02110",
    {
      n: "Juneau",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02122",
    {
      n: "Kenai Peninsula",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02130",
    {
      n: "Ketchikan Gateway",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02150",
    {
      n: "Kodiak Island",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02158",
    {
      n: "Kusilvak",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02164",
    {
      n: "Lake and Peninsula",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02170",
    {
      n: "Matanuska-Susitna",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02180",
    {
      n: "Nome",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02185",
    {
      n: "North Slope",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02188",
    {
      n: "Northwest Arctic",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02195",
    {
      n: "Petersburg",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02198",
    {
      n: "Prince of Wales-Hyder",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02220",
    {
      n: "Sitka",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02230",
    {
      n: "Skagway",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02240",
    {
      n: "Southeast Fairbanks",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02275",
    {
      n: "Wrangell",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02282",
    {
      n: "Yakutat",
      s: "AK",
      c: "f"
    }
  ],
  [
    "02290",
    {
      n: "Yukon-Koyukuk",
      s: "AK",
      c: "f"
    }
  ],
  [
    "04001",
    {
      n: "Apache",
      s: "AZ",
      c: "t"
    }
  ],
  [
    "04003",
    {
      n: "Cochise",
      s: "AZ",
      c: "t"
    }
  ],
  [
    "04005",
    {
      n: "Coconino",
      s: "AZ",
      c: "t"
    }
  ],
  [
    "04007",
    {
      n: "Gila",
      s: "AZ",
      c: "t"
    }
  ],
  [
    "04009",
    {
      n: "Graham",
      s: "AZ",
      c: "t"
    }
  ],
  [
    "04011",
    {
      n: "Greenlee",
      s: "AZ",
      c: "t"
    }
  ],
  [
    "04012",
    {
      n: "La Paz",
      s: "AZ",
      c: "t"
    }
  ],
  [
    "04013",
    {
      n: "Maricopa",
      s: "AZ",
      c: "t"
    }
  ],
  [
    "04015",
    {
      n: "Mohave",
      s: "AZ",
      c: "t"
    }
  ],
  [
    "04017",
    {
      n: "Navajo",
      s: "AZ",
      c: "t"
    }
  ],
  [
    "04019",
    {
      n: "Pima",
      s: "AZ",
      c: "t"
    }
  ],
  [
    "04021",
    {
      n: "Pinal",
      s: "AZ",
      c: "t"
    }
  ],
  [
    "04023",
    {
      n: "Santa Cruz",
      s: "AZ",
      c: "t"
    }
  ],
  [
    "04025",
    {
      n: "Yavapai",
      s: "AZ",
      c: "t"
    }
  ],
  [
    "04027",
    {
      n: "Yuma",
      s: "AZ",
      c: "t"
    }
  ],
  [
    "05001",
    {
      n: "Arkansas",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05003",
    {
      n: "Ashley",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05005",
    {
      n: "Baxter",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05007",
    {
      n: "Benton",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05009",
    {
      n: "Boone",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05011",
    {
      n: "Bradley",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05013",
    {
      n: "Calhoun",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05015",
    {
      n: "Carroll",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05017",
    {
      n: "Chicot",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05019",
    {
      n: "Clark",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05021",
    {
      n: "Clay",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05023",
    {
      n: "Cleburne",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05025",
    {
      n: "Cleveland",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05027",
    {
      n: "Columbia",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05029",
    {
      n: "Conway",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05031",
    {
      n: "Craighead",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05033",
    {
      n: "Crawford",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05035",
    {
      n: "Crittenden",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05037",
    {
      n: "Cross",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05039",
    {
      n: "Dallas",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05041",
    {
      n: "Desha",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05043",
    {
      n: "Drew",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05045",
    {
      n: "Faulkner",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05047",
    {
      n: "Franklin",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05049",
    {
      n: "Fulton",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05051",
    {
      n: "Garland",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05053",
    {
      n: "Grant",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05055",
    {
      n: "Greene",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05057",
    {
      n: "Hempstead",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05059",
    {
      n: "Hot Spring",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05061",
    {
      n: "Howard",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05063",
    {
      n: "Independence",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05065",
    {
      n: "Izard",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05067",
    {
      n: "Jackson",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05069",
    {
      n: "Jefferson",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05071",
    {
      n: "Johnson",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05073",
    {
      n: "Lafayette",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05075",
    {
      n: "Lawrence",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05077",
    {
      n: "Lee",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05079",
    {
      n: "Lincoln",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05081",
    {
      n: "Little River",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05083",
    {
      n: "Logan",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05085",
    {
      n: "Lonoke",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05087",
    {
      n: "Madison",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05089",
    {
      n: "Marion",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05091",
    {
      n: "Miller",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05093",
    {
      n: "Mississippi",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05095",
    {
      n: "Monroe",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05097",
    {
      n: "Montgomery",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05099",
    {
      n: "Nevada",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05101",
    {
      n: "Newton",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05103",
    {
      n: "Ouachita",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05105",
    {
      n: "Perry",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05107",
    {
      n: "Phillips",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05109",
    {
      n: "Pike",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05111",
    {
      n: "Poinsett",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05113",
    {
      n: "Polk",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05115",
    {
      n: "Pope",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05117",
    {
      n: "Prairie",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05119",
    {
      n: "Pulaski",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05121",
    {
      n: "Randolph",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05123",
    {
      n: "St. Francis",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05125",
    {
      n: "Saline",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05127",
    {
      n: "Scott",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05129",
    {
      n: "Searcy",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05131",
    {
      n: "Sebastian",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05133",
    {
      n: "Sevier",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05135",
    {
      n: "Sharp",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05137",
    {
      n: "Stone",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05139",
    {
      n: "Union",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05141",
    {
      n: "Van Buren",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05143",
    {
      n: "Washington",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05145",
    {
      n: "White",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05147",
    {
      n: "Woodruff",
      s: "AR",
      c: "t"
    }
  ],
  [
    "05149",
    {
      n: "Yell",
      s: "AR",
      c: "t"
    }
  ],
  [
    "06001",
    {
      n: "Alameda",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06003",
    {
      n: "Alpine",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06005",
    {
      n: "Amador",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06007",
    {
      n: "Butte",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06009",
    {
      n: "Calaveras",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06011",
    {
      n: "Colusa",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06013",
    {
      n: "Contra Costa",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06015",
    {
      n: "Del Norte",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06017",
    {
      n: "El Dorado",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06019",
    {
      n: "Fresno",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06021",
    {
      n: "Glenn",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06023",
    {
      n: "Humboldt",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06025",
    {
      n: "Imperial",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06027",
    {
      n: "Inyo",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06029",
    {
      n: "Kern",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06031",
    {
      n: "Kings",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06033",
    {
      n: "Lake",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06035",
    {
      n: "Lassen",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06037",
    {
      n: "Los Angeles",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06039",
    {
      n: "Madera",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06041",
    {
      n: "Marin",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06043",
    {
      n: "Mariposa",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06045",
    {
      n: "Mendocino",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06047",
    {
      n: "Merced",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06049",
    {
      n: "Modoc",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06051",
    {
      n: "Mono",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06053",
    {
      n: "Monterey",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06055",
    {
      n: "Napa",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06057",
    {
      n: "Nevada",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06059",
    {
      n: "Orange",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06061",
    {
      n: "Placer",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06063",
    {
      n: "Plumas",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06065",
    {
      n: "Riverside",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06067",
    {
      n: "Sacramento",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06069",
    {
      n: "San Benito",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06071",
    {
      n: "San Bernardino",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06073",
    {
      n: "San Diego",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06075",
    {
      n: "San Francisco",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06077",
    {
      n: "San Joaquin",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06079",
    {
      n: "San Luis Obispo",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06081",
    {
      n: "San Mateo",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06083",
    {
      n: "Santa Barbara",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06085",
    {
      n: "Santa Clara",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06087",
    {
      n: "Santa Cruz",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06089",
    {
      n: "Shasta",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06091",
    {
      n: "Sierra",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06093",
    {
      n: "Siskiyou",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06095",
    {
      n: "Solano",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06097",
    {
      n: "Sonoma",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06099",
    {
      n: "Stanislaus",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06101",
    {
      n: "Sutter",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06103",
    {
      n: "Tehama",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06105",
    {
      n: "Trinity",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06107",
    {
      n: "Tulare",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06109",
    {
      n: "Tuolumne",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06111",
    {
      n: "Ventura",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06113",
    {
      n: "Yolo",
      s: "CA",
      c: "t"
    }
  ],
  [
    "06115",
    {
      n: "Yuba",
      s: "CA",
      c: "t"
    }
  ],
  [
    "08001",
    {
      n: "Adams",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08003",
    {
      n: "Alamosa",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08005",
    {
      n: "Arapahoe",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08007",
    {
      n: "Archuleta",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08009",
    {
      n: "Baca",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08011",
    {
      n: "Bent",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08013",
    {
      n: "Boulder",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08014",
    {
      n: "Broomfield",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08015",
    {
      n: "Chaffee",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08017",
    {
      n: "Cheyenne",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08019",
    {
      n: "Clear Creek",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08021",
    {
      n: "Conejos",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08023",
    {
      n: "Costilla",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08025",
    {
      n: "Crowley",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08027",
    {
      n: "Custer",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08029",
    {
      n: "Delta",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08031",
    {
      n: "Denver",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08033",
    {
      n: "Dolores",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08035",
    {
      n: "Douglas",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08037",
    {
      n: "Eagle",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08039",
    {
      n: "Elbert",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08041",
    {
      n: "El Paso",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08043",
    {
      n: "Fremont",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08045",
    {
      n: "Garfield",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08047",
    {
      n: "Gilpin",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08049",
    {
      n: "Grand",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08051",
    {
      n: "Gunnison",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08053",
    {
      n: "Hinsdale",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08055",
    {
      n: "Huerfano",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08057",
    {
      n: "Jackson",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08059",
    {
      n: "Jefferson",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08061",
    {
      n: "Kiowa",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08063",
    {
      n: "Kit Carson",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08065",
    {
      n: "Lake",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08067",
    {
      n: "La Plata",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08069",
    {
      n: "Larimer",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08071",
    {
      n: "Las Animas",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08073",
    {
      n: "Lincoln",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08075",
    {
      n: "Logan",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08077",
    {
      n: "Mesa",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08079",
    {
      n: "Mineral",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08081",
    {
      n: "Moffat",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08083",
    {
      n: "Montezuma",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08085",
    {
      n: "Montrose",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08087",
    {
      n: "Morgan",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08089",
    {
      n: "Otero",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08091",
    {
      n: "Ouray",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08093",
    {
      n: "Park",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08095",
    {
      n: "Phillips",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08097",
    {
      n: "Pitkin",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08099",
    {
      n: "Prowers",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08101",
    {
      n: "Pueblo",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08103",
    {
      n: "Rio Blanco",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08105",
    {
      n: "Rio Grande",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08107",
    {
      n: "Routt",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08109",
    {
      n: "Saguache",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08111",
    {
      n: "San Juan",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08113",
    {
      n: "San Miguel",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08115",
    {
      n: "Sedgwick",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08117",
    {
      n: "Summit",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08119",
    {
      n: "Teller",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08121",
    {
      n: "Washington",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08123",
    {
      n: "Weld",
      s: "CO",
      c: "t"
    }
  ],
  [
    "08125",
    {
      n: "Yuma",
      s: "CO",
      c: "t"
    }
  ],
  [
    "09001",
    {
      n: "Fairfield",
      s: "CT",
      c: "t"
    }
  ],
  [
    "09003",
    {
      n: "Hartford",
      s: "CT",
      c: "t"
    }
  ],
  [
    "09005",
    {
      n: "Litchfield",
      s: "CT",
      c: "t"
    }
  ],
  [
    "09007",
    {
      n: "Middlesex",
      s: "CT",
      c: "t"
    }
  ],
  [
    "09009",
    {
      n: "New Haven",
      s: "CT",
      c: "t"
    }
  ],
  [
    "09011",
    {
      n: "New London",
      s: "CT",
      c: "t"
    }
  ],
  [
    "09013",
    {
      n: "Tolland",
      s: "CT",
      c: "t"
    }
  ],
  [
    "09015",
    {
      n: "Windham",
      s: "CT",
      c: "t"
    }
  ],
  [
    "10001",
    {
      n: "Kent",
      s: "DE",
      c: "t"
    }
  ],
  [
    "10003",
    {
      n: "New Castle",
      s: "DE",
      c: "t"
    }
  ],
  [
    "10005",
    {
      n: "Sussex",
      s: "DE",
      c: "t"
    }
  ],
  [
    "11001",
    {
      n: "District of Columbia",
      s: "DC",
      c: "t"
    }
  ],
  [
    "12001",
    {
      n: "Alachua",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12003",
    {
      n: "Baker",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12005",
    {
      n: "Bay",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12007",
    {
      n: "Bradford",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12009",
    {
      n: "Brevard",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12011",
    {
      n: "Broward",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12013",
    {
      n: "Calhoun",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12015",
    {
      n: "Charlotte",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12017",
    {
      n: "Citrus",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12019",
    {
      n: "Clay",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12021",
    {
      n: "Collier",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12023",
    {
      n: "Columbia",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12027",
    {
      n: "DeSoto",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12029",
    {
      n: "Dixie",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12031",
    {
      n: "Duval",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12033",
    {
      n: "Escambia",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12035",
    {
      n: "Flagler",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12037",
    {
      n: "Franklin",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12039",
    {
      n: "Gadsden",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12041",
    {
      n: "Gilchrist",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12043",
    {
      n: "Glades",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12045",
    {
      n: "Gulf",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12047",
    {
      n: "Hamilton",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12049",
    {
      n: "Hardee",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12051",
    {
      n: "Hendry",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12053",
    {
      n: "Hernando",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12055",
    {
      n: "Highlands",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12057",
    {
      n: "Hillsborough",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12059",
    {
      n: "Holmes",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12061",
    {
      n: "Indian River",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12063",
    {
      n: "Jackson",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12065",
    {
      n: "Jefferson",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12067",
    {
      n: "Lafayette",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12069",
    {
      n: "Lake",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12071",
    {
      n: "Lee",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12073",
    {
      n: "Leon",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12075",
    {
      n: "Levy",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12077",
    {
      n: "Liberty",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12079",
    {
      n: "Madison",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12081",
    {
      n: "Manatee",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12083",
    {
      n: "Marion",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12085",
    {
      n: "Martin",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12086",
    {
      n: "Miami-Dade",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12087",
    {
      n: "Monroe",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12089",
    {
      n: "Nassau",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12091",
    {
      n: "Okaloosa",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12093",
    {
      n: "Okeechobee",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12095",
    {
      n: "Orange",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12097",
    {
      n: "Osceola",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12099",
    {
      n: "Palm Beach",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12101",
    {
      n: "Pasco",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12103",
    {
      n: "Pinellas",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12105",
    {
      n: "Polk",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12107",
    {
      n: "Putnam",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12109",
    {
      n: "St. Johns",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12111",
    {
      n: "St. Lucie",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12113",
    {
      n: "Santa Rosa",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12115",
    {
      n: "Sarasota",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12117",
    {
      n: "Seminole",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12119",
    {
      n: "Sumter",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12121",
    {
      n: "Suwannee",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12123",
    {
      n: "Taylor",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12125",
    {
      n: "Union",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12127",
    {
      n: "Volusia",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12129",
    {
      n: "Wakulla",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12131",
    {
      n: "Walton",
      s: "FL",
      c: "t"
    }
  ],
  [
    "12133",
    {
      n: "Washington",
      s: "FL",
      c: "t"
    }
  ],
  [
    "13001",
    {
      n: "Appling",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13003",
    {
      n: "Atkinson",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13005",
    {
      n: "Bacon",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13007",
    {
      n: "Baker",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13009",
    {
      n: "Baldwin",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13011",
    {
      n: "Banks",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13013",
    {
      n: "Barrow",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13015",
    {
      n: "Bartow",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13017",
    {
      n: "Ben Hill",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13019",
    {
      n: "Berrien",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13021",
    {
      n: "Bibb",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13023",
    {
      n: "Bleckley",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13025",
    {
      n: "Brantley",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13027",
    {
      n: "Brooks",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13029",
    {
      n: "Bryan",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13031",
    {
      n: "Bulloch",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13033",
    {
      n: "Burke",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13035",
    {
      n: "Butts",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13037",
    {
      n: "Calhoun",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13039",
    {
      n: "Camden",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13043",
    {
      n: "Candler",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13045",
    {
      n: "Carroll",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13047",
    {
      n: "Catoosa",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13049",
    {
      n: "Charlton",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13051",
    {
      n: "Chatham",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13053",
    {
      n: "Chattahoochee",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13055",
    {
      n: "Chattooga",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13057",
    {
      n: "Cherokee",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13059",
    {
      n: "Clarke",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13061",
    {
      n: "Clay",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13063",
    {
      n: "Clayton",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13065",
    {
      n: "Clinch",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13067",
    {
      n: "Cobb",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13069",
    {
      n: "Coffee",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13071",
    {
      n: "Colquitt",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13073",
    {
      n: "Columbia",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13075",
    {
      n: "Cook",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13077",
    {
      n: "Coweta",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13079",
    {
      n: "Crawford",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13081",
    {
      n: "Crisp",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13083",
    {
      n: "Dade",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13085",
    {
      n: "Dawson",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13087",
    {
      n: "Decatur",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13089",
    {
      n: "DeKalb",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13091",
    {
      n: "Dodge",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13093",
    {
      n: "Dooly",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13095",
    {
      n: "Dougherty",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13097",
    {
      n: "Douglas",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13099",
    {
      n: "Early",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13101",
    {
      n: "Echols",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13103",
    {
      n: "Effingham",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13105",
    {
      n: "Elbert",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13107",
    {
      n: "Emanuel",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13109",
    {
      n: "Evans",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13111",
    {
      n: "Fannin",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13113",
    {
      n: "Fayette",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13115",
    {
      n: "Floyd",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13117",
    {
      n: "Forsyth",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13119",
    {
      n: "Franklin",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13121",
    {
      n: "Fulton",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13123",
    {
      n: "Gilmer",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13125",
    {
      n: "Glascock",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13127",
    {
      n: "Glynn",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13129",
    {
      n: "Gordon",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13131",
    {
      n: "Grady",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13133",
    {
      n: "Greene",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13135",
    {
      n: "Gwinnett",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13137",
    {
      n: "Habersham",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13139",
    {
      n: "Hall",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13141",
    {
      n: "Hancock",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13143",
    {
      n: "Haralson",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13145",
    {
      n: "Harris",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13147",
    {
      n: "Hart",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13149",
    {
      n: "Heard",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13151",
    {
      n: "Henry",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13153",
    {
      n: "Houston",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13155",
    {
      n: "Irwin",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13157",
    {
      n: "Jackson",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13159",
    {
      n: "Jasper",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13161",
    {
      n: "Jeff Davis",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13163",
    {
      n: "Jefferson",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13165",
    {
      n: "Jenkins",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13167",
    {
      n: "Johnson",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13169",
    {
      n: "Jones",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13171",
    {
      n: "Lamar",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13173",
    {
      n: "Lanier",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13175",
    {
      n: "Laurens",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13177",
    {
      n: "Lee",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13179",
    {
      n: "Liberty",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13181",
    {
      n: "Lincoln",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13183",
    {
      n: "Long",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13185",
    {
      n: "Lowndes",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13187",
    {
      n: "Lumpkin",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13189",
    {
      n: "McDuffie",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13191",
    {
      n: "McIntosh",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13193",
    {
      n: "Macon",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13195",
    {
      n: "Madison",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13197",
    {
      n: "Marion",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13199",
    {
      n: "Meriwether",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13201",
    {
      n: "Miller",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13205",
    {
      n: "Mitchell",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13207",
    {
      n: "Monroe",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13209",
    {
      n: "Montgomery",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13211",
    {
      n: "Morgan",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13213",
    {
      n: "Murray",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13215",
    {
      n: "Muscogee",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13217",
    {
      n: "Newton",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13219",
    {
      n: "Oconee",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13221",
    {
      n: "Oglethorpe",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13223",
    {
      n: "Paulding",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13225",
    {
      n: "Peach",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13227",
    {
      n: "Pickens",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13229",
    {
      n: "Pierce",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13231",
    {
      n: "Pike",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13233",
    {
      n: "Polk",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13235",
    {
      n: "Pulaski",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13237",
    {
      n: "Putnam",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13239",
    {
      n: "Quitman",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13241",
    {
      n: "Rabun",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13243",
    {
      n: "Randolph",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13245",
    {
      n: "Richmond",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13247",
    {
      n: "Rockdale",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13249",
    {
      n: "Schley",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13251",
    {
      n: "Screven",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13253",
    {
      n: "Seminole",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13255",
    {
      n: "Spalding",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13257",
    {
      n: "Stephens",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13259",
    {
      n: "Stewart",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13261",
    {
      n: "Sumter",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13263",
    {
      n: "Talbot",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13265",
    {
      n: "Taliaferro",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13267",
    {
      n: "Tattnall",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13269",
    {
      n: "Taylor",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13271",
    {
      n: "Telfair",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13273",
    {
      n: "Terrell",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13275",
    {
      n: "Thomas",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13277",
    {
      n: "Tift",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13279",
    {
      n: "Toombs",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13281",
    {
      n: "Towns",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13283",
    {
      n: "Treutlen",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13285",
    {
      n: "Troup",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13287",
    {
      n: "Turner",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13289",
    {
      n: "Twiggs",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13291",
    {
      n: "Union",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13293",
    {
      n: "Upson",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13295",
    {
      n: "Walker",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13297",
    {
      n: "Walton",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13299",
    {
      n: "Ware",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13301",
    {
      n: "Warren",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13303",
    {
      n: "Washington",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13305",
    {
      n: "Wayne",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13307",
    {
      n: "Webster",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13309",
    {
      n: "Wheeler",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13311",
    {
      n: "White",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13313",
    {
      n: "Whitfield",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13315",
    {
      n: "Wilcox",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13317",
    {
      n: "Wilkes",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13319",
    {
      n: "Wilkinson",
      s: "GA",
      c: "t"
    }
  ],
  [
    "13321",
    {
      n: "Worth",
      s: "GA",
      c: "t"
    }
  ],
  [
    "15001",
    {
      n: "Hawaii",
      s: "HI",
      c: "f"
    }
  ],
  [
    "15003",
    {
      n: "Honolulu",
      s: "HI",
      c: "f"
    }
  ],
  [
    "15005",
    {
      n: "Kalawao",
      s: "HI",
      c: "f"
    }
  ],
  [
    "15007",
    {
      n: "Kauai",
      s: "HI",
      c: "f"
    }
  ],
  [
    "15009",
    {
      n: "Maui",
      s: "HI",
      c: "f"
    }
  ],
  [
    "16001",
    {
      n: "Ada",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16003",
    {
      n: "Adams",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16005",
    {
      n: "Bannock",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16007",
    {
      n: "Bear Lake",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16009",
    {
      n: "Benewah",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16011",
    {
      n: "Bingham",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16013",
    {
      n: "Blaine",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16015",
    {
      n: "Boise",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16017",
    {
      n: "Bonner",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16019",
    {
      n: "Bonneville",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16021",
    {
      n: "Boundary",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16023",
    {
      n: "Butte",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16025",
    {
      n: "Camas",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16027",
    {
      n: "Canyon",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16029",
    {
      n: "Caribou",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16031",
    {
      n: "Cassia",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16033",
    {
      n: "Clark",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16035",
    {
      n: "Clearwater",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16037",
    {
      n: "Custer",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16039",
    {
      n: "Elmore",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16041",
    {
      n: "Franklin",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16043",
    {
      n: "Fremont",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16045",
    {
      n: "Gem",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16047",
    {
      n: "Gooding",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16049",
    {
      n: "Idaho",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16051",
    {
      n: "Jefferson",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16053",
    {
      n: "Jerome",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16055",
    {
      n: "Kootenai",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16057",
    {
      n: "Latah",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16059",
    {
      n: "Lemhi",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16061",
    {
      n: "Lewis",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16063",
    {
      n: "Lincoln",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16065",
    {
      n: "Madison",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16067",
    {
      n: "Minidoka",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16069",
    {
      n: "Nez Perce",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16071",
    {
      n: "Oneida",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16073",
    {
      n: "Owyhee",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16075",
    {
      n: "Payette",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16077",
    {
      n: "Power",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16079",
    {
      n: "Shoshone",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16081",
    {
      n: "Teton",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16083",
    {
      n: "Twin Falls",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16085",
    {
      n: "Valley",
      s: "ID",
      c: "t"
    }
  ],
  [
    "16087",
    {
      n: "Washington",
      s: "ID",
      c: "t"
    }
  ],
  [
    "17001",
    {
      n: "Adams",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17003",
    {
      n: "Alexander",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17005",
    {
      n: "Bond",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17007",
    {
      n: "Boone",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17009",
    {
      n: "Brown",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17011",
    {
      n: "Bureau",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17013",
    {
      n: "Calhoun",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17015",
    {
      n: "Carroll",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17017",
    {
      n: "Cass",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17019",
    {
      n: "Champaign",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17021",
    {
      n: "Christian",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17023",
    {
      n: "Clark",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17025",
    {
      n: "Clay",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17027",
    {
      n: "Clinton",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17029",
    {
      n: "Coles",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17031",
    {
      n: "Cook",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17033",
    {
      n: "Crawford",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17035",
    {
      n: "Cumberland",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17037",
    {
      n: "DeKalb",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17039",
    {
      n: "De Witt",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17041",
    {
      n: "Douglas",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17043",
    {
      n: "DuPage",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17045",
    {
      n: "Edgar",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17047",
    {
      n: "Edwards",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17049",
    {
      n: "Effingham",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17051",
    {
      n: "Fayette",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17053",
    {
      n: "Ford",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17055",
    {
      n: "Franklin",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17057",
    {
      n: "Fulton",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17059",
    {
      n: "Gallatin",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17061",
    {
      n: "Greene",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17063",
    {
      n: "Grundy",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17065",
    {
      n: "Hamilton",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17067",
    {
      n: "Hancock",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17069",
    {
      n: "Hardin",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17071",
    {
      n: "Henderson",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17073",
    {
      n: "Henry",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17075",
    {
      n: "Iroquois",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17077",
    {
      n: "Jackson",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17079",
    {
      n: "Jasper",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17081",
    {
      n: "Jefferson",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17083",
    {
      n: "Jersey",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17085",
    {
      n: "Jo Daviess",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17087",
    {
      n: "Johnson",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17089",
    {
      n: "Kane",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17091",
    {
      n: "Kankakee",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17093",
    {
      n: "Kendall",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17095",
    {
      n: "Knox",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17097",
    {
      n: "Lake",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17099",
    {
      n: "LaSalle",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17101",
    {
      n: "Lawrence",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17103",
    {
      n: "Lee",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17105",
    {
      n: "Livingston",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17107",
    {
      n: "Logan",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17109",
    {
      n: "McDonough",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17111",
    {
      n: "McHenry",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17113",
    {
      n: "McLean",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17115",
    {
      n: "Macon",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17117",
    {
      n: "Macoupin",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17119",
    {
      n: "Madison",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17121",
    {
      n: "Marion",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17123",
    {
      n: "Marshall",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17125",
    {
      n: "Mason",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17127",
    {
      n: "Massac",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17129",
    {
      n: "Menard",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17131",
    {
      n: "Mercer",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17133",
    {
      n: "Monroe",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17135",
    {
      n: "Montgomery",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17137",
    {
      n: "Morgan",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17139",
    {
      n: "Moultrie",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17141",
    {
      n: "Ogle",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17143",
    {
      n: "Peoria",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17145",
    {
      n: "Perry",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17147",
    {
      n: "Piatt",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17149",
    {
      n: "Pike",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17151",
    {
      n: "Pope",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17153",
    {
      n: "Pulaski",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17155",
    {
      n: "Putnam",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17157",
    {
      n: "Randolph",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17159",
    {
      n: "Richland",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17161",
    {
      n: "Rock Island",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17163",
    {
      n: "St. Clair",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17165",
    {
      n: "Saline",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17167",
    {
      n: "Sangamon",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17169",
    {
      n: "Schuyler",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17171",
    {
      n: "Scott",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17173",
    {
      n: "Shelby",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17175",
    {
      n: "Stark",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17177",
    {
      n: "Stephenson",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17179",
    {
      n: "Tazewell",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17181",
    {
      n: "Union",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17183",
    {
      n: "Vermilion",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17185",
    {
      n: "Wabash",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17187",
    {
      n: "Warren",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17189",
    {
      n: "Washington",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17191",
    {
      n: "Wayne",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17193",
    {
      n: "White",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17195",
    {
      n: "Whiteside",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17197",
    {
      n: "Will",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17199",
    {
      n: "Williamson",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17201",
    {
      n: "Winnebago",
      s: "IL",
      c: "t"
    }
  ],
  [
    "17203",
    {
      n: "Woodford",
      s: "IL",
      c: "t"
    }
  ],
  [
    "18001",
    {
      n: "Adams",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18003",
    {
      n: "Allen",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18005",
    {
      n: "Bartholomew",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18007",
    {
      n: "Benton",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18009",
    {
      n: "Blackford",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18011",
    {
      n: "Boone",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18013",
    {
      n: "Brown",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18015",
    {
      n: "Carroll",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18017",
    {
      n: "Cass",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18019",
    {
      n: "Clark",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18021",
    {
      n: "Clay",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18023",
    {
      n: "Clinton",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18025",
    {
      n: "Crawford",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18027",
    {
      n: "Daviess",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18029",
    {
      n: "Dearborn",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18031",
    {
      n: "Decatur",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18033",
    {
      n: "DeKalb",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18035",
    {
      n: "Delaware",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18037",
    {
      n: "Dubois",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18039",
    {
      n: "Elkhart",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18041",
    {
      n: "Fayette",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18043",
    {
      n: "Floyd",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18045",
    {
      n: "Fountain",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18047",
    {
      n: "Franklin",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18049",
    {
      n: "Fulton",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18051",
    {
      n: "Gibson",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18053",
    {
      n: "Grant",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18055",
    {
      n: "Greene",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18057",
    {
      n: "Hamilton",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18059",
    {
      n: "Hancock",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18061",
    {
      n: "Harrison",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18063",
    {
      n: "Hendricks",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18065",
    {
      n: "Henry",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18067",
    {
      n: "Howard",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18069",
    {
      n: "Huntington",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18071",
    {
      n: "Jackson",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18073",
    {
      n: "Jasper",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18075",
    {
      n: "Jay",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18077",
    {
      n: "Jefferson",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18079",
    {
      n: "Jennings",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18081",
    {
      n: "Johnson",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18083",
    {
      n: "Knox",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18085",
    {
      n: "Kosciusko",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18087",
    {
      n: "LaGrange",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18089",
    {
      n: "Lake",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18091",
    {
      n: "LaPorte",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18093",
    {
      n: "Lawrence",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18095",
    {
      n: "Madison",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18097",
    {
      n: "Marion",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18099",
    {
      n: "Marshall",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18101",
    {
      n: "Martin",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18103",
    {
      n: "Miami",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18105",
    {
      n: "Monroe",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18107",
    {
      n: "Montgomery",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18109",
    {
      n: "Morgan",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18111",
    {
      n: "Newton",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18113",
    {
      n: "Noble",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18115",
    {
      n: "Ohio",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18117",
    {
      n: "Orange",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18119",
    {
      n: "Owen",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18121",
    {
      n: "Parke",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18123",
    {
      n: "Perry",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18125",
    {
      n: "Pike",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18127",
    {
      n: "Porter",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18129",
    {
      n: "Posey",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18131",
    {
      n: "Pulaski",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18133",
    {
      n: "Putnam",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18135",
    {
      n: "Randolph",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18137",
    {
      n: "Ripley",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18139",
    {
      n: "Rush",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18141",
    {
      n: "St. Joseph",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18143",
    {
      n: "Scott",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18145",
    {
      n: "Shelby",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18147",
    {
      n: "Spencer",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18149",
    {
      n: "Starke",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18151",
    {
      n: "Steuben",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18153",
    {
      n: "Sullivan",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18155",
    {
      n: "Switzerland",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18157",
    {
      n: "Tippecanoe",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18159",
    {
      n: "Tipton",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18161",
    {
      n: "Union",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18163",
    {
      n: "Vanderburgh",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18165",
    {
      n: "Vermillion",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18167",
    {
      n: "Vigo",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18169",
    {
      n: "Wabash",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18171",
    {
      n: "Warren",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18173",
    {
      n: "Warrick",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18175",
    {
      n: "Washington",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18177",
    {
      n: "Wayne",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18179",
    {
      n: "Wells",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18181",
    {
      n: "White",
      s: "IN",
      c: "t"
    }
  ],
  [
    "18183",
    {
      n: "Whitley",
      s: "IN",
      c: "t"
    }
  ],
  [
    "19001",
    {
      n: "Adair",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19003",
    {
      n: "Adams",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19005",
    {
      n: "Allamakee",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19007",
    {
      n: "Appanoose",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19009",
    {
      n: "Audubon",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19011",
    {
      n: "Benton",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19013",
    {
      n: "Black Hawk",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19015",
    {
      n: "Boone",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19017",
    {
      n: "Bremer",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19019",
    {
      n: "Buchanan",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19021",
    {
      n: "Buena Vista",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19023",
    {
      n: "Butler",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19025",
    {
      n: "Calhoun",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19027",
    {
      n: "Carroll",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19029",
    {
      n: "Cass",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19031",
    {
      n: "Cedar",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19033",
    {
      n: "Cerro Gordo",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19035",
    {
      n: "Cherokee",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19037",
    {
      n: "Chickasaw",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19039",
    {
      n: "Clarke",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19041",
    {
      n: "Clay",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19043",
    {
      n: "Clayton",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19045",
    {
      n: "Clinton",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19047",
    {
      n: "Crawford",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19049",
    {
      n: "Dallas",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19051",
    {
      n: "Davis",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19053",
    {
      n: "Decatur",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19055",
    {
      n: "Delaware",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19057",
    {
      n: "Des Moines",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19059",
    {
      n: "Dickinson",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19061",
    {
      n: "Dubuque",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19063",
    {
      n: "Emmet",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19065",
    {
      n: "Fayette",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19067",
    {
      n: "Floyd",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19069",
    {
      n: "Franklin",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19071",
    {
      n: "Fremont",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19073",
    {
      n: "Greene",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19075",
    {
      n: "Grundy",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19077",
    {
      n: "Guthrie",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19079",
    {
      n: "Hamilton",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19081",
    {
      n: "Hancock",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19083",
    {
      n: "Hardin",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19085",
    {
      n: "Harrison",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19087",
    {
      n: "Henry",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19089",
    {
      n: "Howard",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19091",
    {
      n: "Humboldt",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19093",
    {
      n: "Ida",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19095",
    {
      n: "Iowa",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19097",
    {
      n: "Jackson",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19099",
    {
      n: "Jasper",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19101",
    {
      n: "Jefferson",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19103",
    {
      n: "Johnson",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19105",
    {
      n: "Jones",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19107",
    {
      n: "Keokuk",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19109",
    {
      n: "Kossuth",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19111",
    {
      n: "Lee",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19113",
    {
      n: "Linn",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19115",
    {
      n: "Louisa",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19117",
    {
      n: "Lucas",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19119",
    {
      n: "Lyon",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19121",
    {
      n: "Madison",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19123",
    {
      n: "Mahaska",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19125",
    {
      n: "Marion",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19127",
    {
      n: "Marshall",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19129",
    {
      n: "Mills",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19131",
    {
      n: "Mitchell",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19133",
    {
      n: "Monona",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19135",
    {
      n: "Monroe",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19137",
    {
      n: "Montgomery",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19139",
    {
      n: "Muscatine",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19141",
    {
      n: "O'Brien",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19143",
    {
      n: "Osceola",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19145",
    {
      n: "Page",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19147",
    {
      n: "Palo Alto",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19149",
    {
      n: "Plymouth",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19151",
    {
      n: "Pocahontas",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19153",
    {
      n: "Polk",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19155",
    {
      n: "Pottawattamie",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19157",
    {
      n: "Poweshiek",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19159",
    {
      n: "Ringgold",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19161",
    {
      n: "Sac",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19163",
    {
      n: "Scott",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19165",
    {
      n: "Shelby",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19167",
    {
      n: "Sioux",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19169",
    {
      n: "Story",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19171",
    {
      n: "Tama",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19173",
    {
      n: "Taylor",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19175",
    {
      n: "Union",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19177",
    {
      n: "Van Buren",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19179",
    {
      n: "Wapello",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19181",
    {
      n: "Warren",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19183",
    {
      n: "Washington",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19185",
    {
      n: "Wayne",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19187",
    {
      n: "Webster",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19189",
    {
      n: "Winnebago",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19191",
    {
      n: "Winneshiek",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19193",
    {
      n: "Woodbury",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19195",
    {
      n: "Worth",
      s: "IA",
      c: "t"
    }
  ],
  [
    "19197",
    {
      n: "Wright",
      s: "IA",
      c: "t"
    }
  ],
  [
    "20001",
    {
      n: "Allen",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20003",
    {
      n: "Anderson",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20005",
    {
      n: "Atchison",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20007",
    {
      n: "Barber",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20009",
    {
      n: "Barton",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20011",
    {
      n: "Bourbon",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20013",
    {
      n: "Brown",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20015",
    {
      n: "Butler",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20017",
    {
      n: "Chase",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20019",
    {
      n: "Chautauqua",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20021",
    {
      n: "Cherokee",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20023",
    {
      n: "Cheyenne",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20025",
    {
      n: "Clark",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20027",
    {
      n: "Clay",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20029",
    {
      n: "Cloud",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20031",
    {
      n: "Coffey",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20033",
    {
      n: "Comanche",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20035",
    {
      n: "Cowley",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20037",
    {
      n: "Crawford",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20039",
    {
      n: "Decatur",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20041",
    {
      n: "Dickinson",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20043",
    {
      n: "Doniphan",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20045",
    {
      n: "Douglas",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20047",
    {
      n: "Edwards",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20049",
    {
      n: "Elk",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20051",
    {
      n: "Ellis",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20053",
    {
      n: "Ellsworth",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20055",
    {
      n: "Finney",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20057",
    {
      n: "Ford",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20059",
    {
      n: "Franklin",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20061",
    {
      n: "Geary",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20063",
    {
      n: "Gove",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20065",
    {
      n: "Graham",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20067",
    {
      n: "Grant",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20069",
    {
      n: "Gray",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20071",
    {
      n: "Greeley",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20073",
    {
      n: "Greenwood",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20075",
    {
      n: "Hamilton",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20077",
    {
      n: "Harper",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20079",
    {
      n: "Harvey",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20081",
    {
      n: "Haskell",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20083",
    {
      n: "Hodgeman",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20085",
    {
      n: "Jackson",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20087",
    {
      n: "Jefferson",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20089",
    {
      n: "Jewell",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20091",
    {
      n: "Johnson",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20093",
    {
      n: "Kearny",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20095",
    {
      n: "Kingman",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20097",
    {
      n: "Kiowa",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20099",
    {
      n: "Labette",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20101",
    {
      n: "Lane",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20103",
    {
      n: "Leavenworth",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20105",
    {
      n: "Lincoln",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20107",
    {
      n: "Linn",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20109",
    {
      n: "Logan",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20111",
    {
      n: "Lyon",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20113",
    {
      n: "McPherson",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20115",
    {
      n: "Marion",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20117",
    {
      n: "Marshall",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20119",
    {
      n: "Meade",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20121",
    {
      n: "Miami",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20123",
    {
      n: "Mitchell",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20125",
    {
      n: "Montgomery",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20127",
    {
      n: "Morris",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20129",
    {
      n: "Morton",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20131",
    {
      n: "Nemaha",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20133",
    {
      n: "Neosho",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20135",
    {
      n: "Ness",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20137",
    {
      n: "Norton",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20139",
    {
      n: "Osage",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20141",
    {
      n: "Osborne",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20143",
    {
      n: "Ottawa",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20145",
    {
      n: "Pawnee",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20147",
    {
      n: "Phillips",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20149",
    {
      n: "Pottawatomie",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20151",
    {
      n: "Pratt",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20153",
    {
      n: "Rawlins",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20155",
    {
      n: "Reno",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20157",
    {
      n: "Republic",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20159",
    {
      n: "Rice",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20161",
    {
      n: "Riley",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20163",
    {
      n: "Rooks",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20165",
    {
      n: "Rush",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20167",
    {
      n: "Russell",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20169",
    {
      n: "Saline",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20171",
    {
      n: "Scott",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20173",
    {
      n: "Sedgwick",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20175",
    {
      n: "Seward",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20177",
    {
      n: "Shawnee",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20179",
    {
      n: "Sheridan",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20181",
    {
      n: "Sherman",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20183",
    {
      n: "Smith",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20185",
    {
      n: "Stafford",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20187",
    {
      n: "Stanton",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20189",
    {
      n: "Stevens",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20191",
    {
      n: "Sumner",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20193",
    {
      n: "Thomas",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20195",
    {
      n: "Trego",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20197",
    {
      n: "Wabaunsee",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20199",
    {
      n: "Wallace",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20201",
    {
      n: "Washington",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20203",
    {
      n: "Wichita",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20205",
    {
      n: "Wilson",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20207",
    {
      n: "Woodson",
      s: "KS",
      c: "t"
    }
  ],
  [
    "20209",
    {
      n: "Wyandotte",
      s: "KS",
      c: "t"
    }
  ],
  [
    "21001",
    {
      n: "Adair",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21003",
    {
      n: "Allen",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21005",
    {
      n: "Anderson",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21007",
    {
      n: "Ballard",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21009",
    {
      n: "Barren",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21011",
    {
      n: "Bath",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21013",
    {
      n: "Bell",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21015",
    {
      n: "Boone",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21017",
    {
      n: "Bourbon",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21019",
    {
      n: "Boyd",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21021",
    {
      n: "Boyle",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21023",
    {
      n: "Bracken",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21025",
    {
      n: "Breathitt",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21027",
    {
      n: "Breckinridge",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21029",
    {
      n: "Bullitt",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21031",
    {
      n: "Butler",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21033",
    {
      n: "Caldwell",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21035",
    {
      n: "Calloway",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21037",
    {
      n: "Campbell",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21039",
    {
      n: "Carlisle",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21041",
    {
      n: "Carroll",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21043",
    {
      n: "Carter",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21045",
    {
      n: "Casey",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21047",
    {
      n: "Christian",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21049",
    {
      n: "Clark",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21051",
    {
      n: "Clay",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21053",
    {
      n: "Clinton",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21055",
    {
      n: "Crittenden",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21057",
    {
      n: "Cumberland",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21059",
    {
      n: "Daviess",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21061",
    {
      n: "Edmonson",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21063",
    {
      n: "Elliott",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21065",
    {
      n: "Estill",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21067",
    {
      n: "Fayette",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21069",
    {
      n: "Fleming",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21071",
    {
      n: "Floyd",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21073",
    {
      n: "Franklin",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21075",
    {
      n: "Fulton",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21077",
    {
      n: "Gallatin",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21079",
    {
      n: "Garrard",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21081",
    {
      n: "Grant",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21083",
    {
      n: "Graves",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21085",
    {
      n: "Grayson",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21087",
    {
      n: "Green",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21089",
    {
      n: "Greenup",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21091",
    {
      n: "Hancock",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21093",
    {
      n: "Hardin",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21095",
    {
      n: "Harlan",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21097",
    {
      n: "Harrison",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21099",
    {
      n: "Hart",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21101",
    {
      n: "Henderson",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21103",
    {
      n: "Henry",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21105",
    {
      n: "Hickman",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21107",
    {
      n: "Hopkins",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21109",
    {
      n: "Jackson",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21111",
    {
      n: "Jefferson",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21113",
    {
      n: "Jessamine",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21115",
    {
      n: "Johnson",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21117",
    {
      n: "Kenton",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21119",
    {
      n: "Knott",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21121",
    {
      n: "Knox",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21123",
    {
      n: "Larue",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21125",
    {
      n: "Laurel",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21127",
    {
      n: "Lawrence",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21129",
    {
      n: "Lee",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21131",
    {
      n: "Leslie",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21133",
    {
      n: "Letcher",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21135",
    {
      n: "Lewis",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21137",
    {
      n: "Lincoln",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21139",
    {
      n: "Livingston",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21141",
    {
      n: "Logan",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21143",
    {
      n: "Lyon",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21145",
    {
      n: "McCracken",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21147",
    {
      n: "McCreary",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21149",
    {
      n: "McLean",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21151",
    {
      n: "Madison",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21153",
    {
      n: "Magoffin",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21155",
    {
      n: "Marion",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21157",
    {
      n: "Marshall",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21159",
    {
      n: "Martin",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21161",
    {
      n: "Mason",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21163",
    {
      n: "Meade",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21165",
    {
      n: "Menifee",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21167",
    {
      n: "Mercer",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21169",
    {
      n: "Metcalfe",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21171",
    {
      n: "Monroe",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21173",
    {
      n: "Montgomery",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21175",
    {
      n: "Morgan",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21177",
    {
      n: "Muhlenberg",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21179",
    {
      n: "Nelson",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21181",
    {
      n: "Nicholas",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21183",
    {
      n: "Ohio",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21185",
    {
      n: "Oldham",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21187",
    {
      n: "Owen",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21189",
    {
      n: "Owsley",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21191",
    {
      n: "Pendleton",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21193",
    {
      n: "Perry",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21195",
    {
      n: "Pike",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21197",
    {
      n: "Powell",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21199",
    {
      n: "Pulaski",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21201",
    {
      n: "Robertson",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21203",
    {
      n: "Rockcastle",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21205",
    {
      n: "Rowan",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21207",
    {
      n: "Russell",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21209",
    {
      n: "Scott",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21211",
    {
      n: "Shelby",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21213",
    {
      n: "Simpson",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21215",
    {
      n: "Spencer",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21217",
    {
      n: "Taylor",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21219",
    {
      n: "Todd",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21221",
    {
      n: "Trigg",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21223",
    {
      n: "Trimble",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21225",
    {
      n: "Union",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21227",
    {
      n: "Warren",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21229",
    {
      n: "Washington",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21231",
    {
      n: "Wayne",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21233",
    {
      n: "Webster",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21235",
    {
      n: "Whitley",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21237",
    {
      n: "Wolfe",
      s: "KY",
      c: "t"
    }
  ],
  [
    "21239",
    {
      n: "Woodford",
      s: "KY",
      c: "t"
    }
  ],
  [
    "22001",
    {
      n: "Acadia",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22003",
    {
      n: "Allen",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22005",
    {
      n: "Ascension",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22007",
    {
      n: "Assumption",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22009",
    {
      n: "Avoyelles",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22011",
    {
      n: "Beauregard",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22013",
    {
      n: "Bienville",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22015",
    {
      n: "Bossier",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22017",
    {
      n: "Caddo",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22019",
    {
      n: "Calcasieu",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22021",
    {
      n: "Caldwell",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22023",
    {
      n: "Cameron",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22025",
    {
      n: "Catahoula",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22027",
    {
      n: "Claiborne",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22029",
    {
      n: "Concordia",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22031",
    {
      n: "De Soto",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22033",
    {
      n: "East Baton Rouge",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22035",
    {
      n: "East Carroll",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22037",
    {
      n: "East Feliciana",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22039",
    {
      n: "Evangeline",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22041",
    {
      n: "Franklin",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22043",
    {
      n: "Grant",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22045",
    {
      n: "Iberia",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22047",
    {
      n: "Iberville",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22049",
    {
      n: "Jackson",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22051",
    {
      n: "Jefferson",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22053",
    {
      n: "Jefferson Davis",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22055",
    {
      n: "Lafayette",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22057",
    {
      n: "Lafourche",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22059",
    {
      n: "LaSalle",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22061",
    {
      n: "Lincoln",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22063",
    {
      n: "Livingston",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22065",
    {
      n: "Madison",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22067",
    {
      n: "Morehouse",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22069",
    {
      n: "Natchitoches",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22071",
    {
      n: "Orleans",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22073",
    {
      n: "Ouachita",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22075",
    {
      n: "Plaquemines",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22077",
    {
      n: "Pointe Coupee",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22079",
    {
      n: "Rapides",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22081",
    {
      n: "Red River",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22083",
    {
      n: "Richland",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22085",
    {
      n: "Sabine",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22087",
    {
      n: "St. Bernard",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22089",
    {
      n: "St. Charles",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22091",
    {
      n: "St. Helena",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22093",
    {
      n: "St. James",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22095",
    {
      n: "St. John the Baptist",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22097",
    {
      n: "St. Landry",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22099",
    {
      n: "St. Martin",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22101",
    {
      n: "St. Mary",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22103",
    {
      n: "St. Tammany",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22105",
    {
      n: "Tangipahoa",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22107",
    {
      n: "Tensas",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22109",
    {
      n: "Terrebonne",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22111",
    {
      n: "Union",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22113",
    {
      n: "Vermilion",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22115",
    {
      n: "Vernon",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22117",
    {
      n: "Washington",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22119",
    {
      n: "Webster",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22121",
    {
      n: "West Baton Rouge",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22123",
    {
      n: "West Carroll",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22125",
    {
      n: "West Feliciana",
      s: "LA",
      c: "t"
    }
  ],
  [
    "22127",
    {
      n: "Winn",
      s: "LA",
      c: "t"
    }
  ],
  [
    "23001",
    {
      n: "Androscoggin",
      s: "ME",
      c: "t"
    }
  ],
  [
    "23003",
    {
      n: "Aroostook",
      s: "ME",
      c: "t"
    }
  ],
  [
    "23005",
    {
      n: "Cumberland",
      s: "ME",
      c: "t"
    }
  ],
  [
    "23007",
    {
      n: "Franklin",
      s: "ME",
      c: "t"
    }
  ],
  [
    "23009",
    {
      n: "Hancock",
      s: "ME",
      c: "t"
    }
  ],
  [
    "23011",
    {
      n: "Kennebec",
      s: "ME",
      c: "t"
    }
  ],
  [
    "23013",
    {
      n: "Knox",
      s: "ME",
      c: "t"
    }
  ],
  [
    "23015",
    {
      n: "Lincoln",
      s: "ME",
      c: "t"
    }
  ],
  [
    "23017",
    {
      n: "Oxford",
      s: "ME",
      c: "t"
    }
  ],
  [
    "23019",
    {
      n: "Penobscot",
      s: "ME",
      c: "t"
    }
  ],
  [
    "23021",
    {
      n: "Piscataquis",
      s: "ME",
      c: "t"
    }
  ],
  [
    "23023",
    {
      n: "Sagadahoc",
      s: "ME",
      c: "t"
    }
  ],
  [
    "23025",
    {
      n: "Somerset",
      s: "ME",
      c: "t"
    }
  ],
  [
    "23027",
    {
      n: "Waldo",
      s: "ME",
      c: "t"
    }
  ],
  [
    "23029",
    {
      n: "Washington",
      s: "ME",
      c: "t"
    }
  ],
  [
    "23031",
    {
      n: "York",
      s: "ME",
      c: "t"
    }
  ],
  [
    "24001",
    {
      n: "Allegany",
      s: "MD",
      c: "t"
    }
  ],
  [
    "24003",
    {
      n: "Anne Arundel",
      s: "MD",
      c: "t"
    }
  ],
  [
    "24005",
    {
      n: "Baltimore",
      s: "MD",
      c: "t"
    }
  ],
  [
    "24009",
    {
      n: "Calvert",
      s: "MD",
      c: "t"
    }
  ],
  [
    "24011",
    {
      n: "Caroline",
      s: "MD",
      c: "t"
    }
  ],
  [
    "24013",
    {
      n: "Carroll",
      s: "MD",
      c: "t"
    }
  ],
  [
    "24015",
    {
      n: "Cecil",
      s: "MD",
      c: "t"
    }
  ],
  [
    "24017",
    {
      n: "Charles",
      s: "MD",
      c: "t"
    }
  ],
  [
    "24019",
    {
      n: "Dorchester",
      s: "MD",
      c: "t"
    }
  ],
  [
    "24021",
    {
      n: "Frederick",
      s: "MD",
      c: "t"
    }
  ],
  [
    "24023",
    {
      n: "Garrett",
      s: "MD",
      c: "t"
    }
  ],
  [
    "24025",
    {
      n: "Harford",
      s: "MD",
      c: "t"
    }
  ],
  [
    "24027",
    {
      n: "Howard",
      s: "MD",
      c: "t"
    }
  ],
  [
    "24029",
    {
      n: "Kent",
      s: "MD",
      c: "t"
    }
  ],
  [
    "24031",
    {
      n: "Montgomery",
      s: "MD",
      c: "t"
    }
  ],
  [
    "24033",
    {
      n: "Prince George's",
      s: "MD",
      c: "t"
    }
  ],
  [
    "24035",
    {
      n: "Queen Anne's",
      s: "MD",
      c: "t"
    }
  ],
  [
    "24037",
    {
      n: "St. Mary's",
      s: "MD",
      c: "t"
    }
  ],
  [
    "24039",
    {
      n: "Somerset",
      s: "MD",
      c: "t"
    }
  ],
  [
    "24041",
    {
      n: "Talbot",
      s: "MD",
      c: "t"
    }
  ],
  [
    "24043",
    {
      n: "Washington",
      s: "MD",
      c: "t"
    }
  ],
  [
    "24045",
    {
      n: "Wicomico",
      s: "MD",
      c: "t"
    }
  ],
  [
    "24047",
    {
      n: "Worcester",
      s: "MD",
      c: "t"
    }
  ],
  [
    "24510",
    {
      n: "Baltimore",
      s: "MD",
      c: "t"
    }
  ],
  [
    "25001",
    {
      n: "Barnstable",
      s: "MA",
      c: "t"
    }
  ],
  [
    "25003",
    {
      n: "Berkshire",
      s: "MA",
      c: "t"
    }
  ],
  [
    "25005",
    {
      n: "Bristol",
      s: "MA",
      c: "t"
    }
  ],
  [
    "25007",
    {
      n: "Dukes",
      s: "MA",
      c: "t"
    }
  ],
  [
    "25009",
    {
      n: "Essex",
      s: "MA",
      c: "t"
    }
  ],
  [
    "25011",
    {
      n: "Franklin",
      s: "MA",
      c: "t"
    }
  ],
  [
    "25013",
    {
      n: "Hampden",
      s: "MA",
      c: "t"
    }
  ],
  [
    "25015",
    {
      n: "Hampshire",
      s: "MA",
      c: "t"
    }
  ],
  [
    "25017",
    {
      n: "Middlesex",
      s: "MA",
      c: "t"
    }
  ],
  [
    "25019",
    {
      n: "Nantucket",
      s: "MA",
      c: "t"
    }
  ],
  [
    "25021",
    {
      n: "Norfolk",
      s: "MA",
      c: "t"
    }
  ],
  [
    "25023",
    {
      n: "Plymouth",
      s: "MA",
      c: "t"
    }
  ],
  [
    "25025",
    {
      n: "Suffolk",
      s: "MA",
      c: "t"
    }
  ],
  [
    "25027",
    {
      n: "Worcester",
      s: "MA",
      c: "t"
    }
  ],
  [
    "26001",
    {
      n: "Alcona",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26003",
    {
      n: "Alger",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26005",
    {
      n: "Allegan",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26007",
    {
      n: "Alpena",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26009",
    {
      n: "Antrim",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26011",
    {
      n: "Arenac",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26013",
    {
      n: "Baraga",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26015",
    {
      n: "Barry",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26017",
    {
      n: "Bay",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26019",
    {
      n: "Benzie",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26021",
    {
      n: "Berrien",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26023",
    {
      n: "Branch",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26025",
    {
      n: "Calhoun",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26027",
    {
      n: "Cass",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26029",
    {
      n: "Charlevoix",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26031",
    {
      n: "Cheboygan",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26033",
    {
      n: "Chippewa",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26035",
    {
      n: "Clare",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26037",
    {
      n: "Clinton",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26039",
    {
      n: "Crawford",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26041",
    {
      n: "Delta",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26043",
    {
      n: "Dickinson",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26045",
    {
      n: "Eaton",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26047",
    {
      n: "Emmet",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26049",
    {
      n: "Genesee",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26051",
    {
      n: "Gladwin",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26053",
    {
      n: "Gogebic",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26055",
    {
      n: "Grand Traverse",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26057",
    {
      n: "Gratiot",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26059",
    {
      n: "Hillsdale",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26061",
    {
      n: "Houghton",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26063",
    {
      n: "Huron",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26065",
    {
      n: "Ingham",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26067",
    {
      n: "Ionia",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26069",
    {
      n: "Iosco",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26071",
    {
      n: "Iron",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26073",
    {
      n: "Isabella",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26075",
    {
      n: "Jackson",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26077",
    {
      n: "Kalamazoo",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26079",
    {
      n: "Kalkaska",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26081",
    {
      n: "Kent",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26083",
    {
      n: "Keweenaw",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26085",
    {
      n: "Lake",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26087",
    {
      n: "Lapeer",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26089",
    {
      n: "Leelanau",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26091",
    {
      n: "Lenawee",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26093",
    {
      n: "Livingston",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26095",
    {
      n: "Luce",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26097",
    {
      n: "Mackinac",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26099",
    {
      n: "Macomb",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26101",
    {
      n: "Manistee",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26103",
    {
      n: "Marquette",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26105",
    {
      n: "Mason",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26107",
    {
      n: "Mecosta",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26109",
    {
      n: "Menominee",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26111",
    {
      n: "Midland",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26113",
    {
      n: "Missaukee",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26115",
    {
      n: "Monroe",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26117",
    {
      n: "Montcalm",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26119",
    {
      n: "Montmorency",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26121",
    {
      n: "Muskegon",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26123",
    {
      n: "Newaygo",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26125",
    {
      n: "Oakland",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26127",
    {
      n: "Oceana",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26129",
    {
      n: "Ogemaw",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26131",
    {
      n: "Ontonagon",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26133",
    {
      n: "Osceola",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26135",
    {
      n: "Oscoda",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26137",
    {
      n: "Otsego",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26139",
    {
      n: "Ottawa",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26141",
    {
      n: "Presque Isle",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26143",
    {
      n: "Roscommon",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26145",
    {
      n: "Saginaw",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26147",
    {
      n: "St. Clair",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26149",
    {
      n: "St. Joseph",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26151",
    {
      n: "Sanilac",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26153",
    {
      n: "Schoolcraft",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26155",
    {
      n: "Shiawassee",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26157",
    {
      n: "Tuscola",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26159",
    {
      n: "Van Buren",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26161",
    {
      n: "Washtenaw",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26163",
    {
      n: "Wayne",
      s: "MI",
      c: "t"
    }
  ],
  [
    "26165",
    {
      n: "Wexford",
      s: "MI",
      c: "t"
    }
  ],
  [
    "27001",
    {
      n: "Aitkin",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27003",
    {
      n: "Anoka",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27005",
    {
      n: "Becker",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27007",
    {
      n: "Beltrami",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27009",
    {
      n: "Benton",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27011",
    {
      n: "Big Stone",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27013",
    {
      n: "Blue Earth",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27015",
    {
      n: "Brown",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27017",
    {
      n: "Carlton",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27019",
    {
      n: "Carver",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27021",
    {
      n: "Cass",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27023",
    {
      n: "Chippewa",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27025",
    {
      n: "Chisago",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27027",
    {
      n: "Clay",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27029",
    {
      n: "Clearwater",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27031",
    {
      n: "Cook",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27033",
    {
      n: "Cottonwood",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27035",
    {
      n: "Crow Wing",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27037",
    {
      n: "Dakota",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27039",
    {
      n: "Dodge",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27041",
    {
      n: "Douglas",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27043",
    {
      n: "Faribault",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27045",
    {
      n: "Fillmore",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27047",
    {
      n: "Freeborn",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27049",
    {
      n: "Goodhue",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27051",
    {
      n: "Grant",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27053",
    {
      n: "Hennepin",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27055",
    {
      n: "Houston",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27057",
    {
      n: "Hubbard",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27059",
    {
      n: "Isanti",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27061",
    {
      n: "Itasca",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27063",
    {
      n: "Jackson",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27065",
    {
      n: "Kanabec",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27067",
    {
      n: "Kandiyohi",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27069",
    {
      n: "Kittson",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27071",
    {
      n: "Koochiching",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27073",
    {
      n: "Lac qui Parle",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27075",
    {
      n: "Lake",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27077",
    {
      n: "Lake of the Woods",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27079",
    {
      n: "Le Sueur",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27081",
    {
      n: "Lincoln",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27083",
    {
      n: "Lyon",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27085",
    {
      n: "McLeod",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27087",
    {
      n: "Mahnomen",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27089",
    {
      n: "Marshall",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27091",
    {
      n: "Martin",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27093",
    {
      n: "Meeker",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27095",
    {
      n: "Mille Lacs",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27097",
    {
      n: "Morrison",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27099",
    {
      n: "Mower",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27101",
    {
      n: "Murray",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27103",
    {
      n: "Nicollet",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27105",
    {
      n: "Nobles",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27107",
    {
      n: "Norman",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27109",
    {
      n: "Olmsted",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27111",
    {
      n: "Otter Tail",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27113",
    {
      n: "Pennington",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27115",
    {
      n: "Pine",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27117",
    {
      n: "Pipestone",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27119",
    {
      n: "Polk",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27121",
    {
      n: "Pope",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27123",
    {
      n: "Ramsey",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27125",
    {
      n: "Red Lake",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27127",
    {
      n: "Redwood",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27129",
    {
      n: "Renville",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27131",
    {
      n: "Rice",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27133",
    {
      n: "Rock",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27135",
    {
      n: "Roseau",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27137",
    {
      n: "St. Louis",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27139",
    {
      n: "Scott",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27141",
    {
      n: "Sherburne",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27143",
    {
      n: "Sibley",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27145",
    {
      n: "Stearns",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27147",
    {
      n: "Steele",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27149",
    {
      n: "Stevens",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27151",
    {
      n: "Swift",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27153",
    {
      n: "Todd",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27155",
    {
      n: "Traverse",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27157",
    {
      n: "Wabasha",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27159",
    {
      n: "Wadena",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27161",
    {
      n: "Waseca",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27163",
    {
      n: "Washington",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27165",
    {
      n: "Watonwan",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27167",
    {
      n: "Wilkin",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27169",
    {
      n: "Winona",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27171",
    {
      n: "Wright",
      s: "MN",
      c: "t"
    }
  ],
  [
    "27173",
    {
      n: "Yellow Medicine",
      s: "MN",
      c: "t"
    }
  ],
  [
    "28001",
    {
      n: "Adams",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28003",
    {
      n: "Alcorn",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28005",
    {
      n: "Amite",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28007",
    {
      n: "Attala",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28009",
    {
      n: "Benton",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28011",
    {
      n: "Bolivar",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28013",
    {
      n: "Calhoun",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28015",
    {
      n: "Carroll",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28017",
    {
      n: "Chickasaw",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28019",
    {
      n: "Choctaw",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28021",
    {
      n: "Claiborne",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28023",
    {
      n: "Clarke",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28025",
    {
      n: "Clay",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28027",
    {
      n: "Coahoma",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28029",
    {
      n: "Copiah",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28031",
    {
      n: "Covington",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28033",
    {
      n: "DeSoto",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28035",
    {
      n: "Forrest",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28037",
    {
      n: "Franklin",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28039",
    {
      n: "George",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28041",
    {
      n: "Greene",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28043",
    {
      n: "Grenada",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28045",
    {
      n: "Hancock",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28047",
    {
      n: "Harrison",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28049",
    {
      n: "Hinds",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28051",
    {
      n: "Holmes",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28053",
    {
      n: "Humphreys",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28055",
    {
      n: "Issaquena",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28057",
    {
      n: "Itawamba",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28059",
    {
      n: "Jackson",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28061",
    {
      n: "Jasper",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28063",
    {
      n: "Jefferson",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28065",
    {
      n: "Jefferson Davis",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28067",
    {
      n: "Jones",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28069",
    {
      n: "Kemper",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28071",
    {
      n: "Lafayette",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28073",
    {
      n: "Lamar",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28075",
    {
      n: "Lauderdale",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28077",
    {
      n: "Lawrence",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28079",
    {
      n: "Leake",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28081",
    {
      n: "Lee",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28083",
    {
      n: "Leflore",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28085",
    {
      n: "Lincoln",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28087",
    {
      n: "Lowndes",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28089",
    {
      n: "Madison",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28091",
    {
      n: "Marion",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28093",
    {
      n: "Marshall",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28095",
    {
      n: "Monroe",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28097",
    {
      n: "Montgomery",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28099",
    {
      n: "Neshoba",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28101",
    {
      n: "Newton",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28103",
    {
      n: "Noxubee",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28105",
    {
      n: "Oktibbeha",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28107",
    {
      n: "Panola",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28109",
    {
      n: "Pearl River",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28111",
    {
      n: "Perry",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28113",
    {
      n: "Pike",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28115",
    {
      n: "Pontotoc",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28117",
    {
      n: "Prentiss",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28119",
    {
      n: "Quitman",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28121",
    {
      n: "Rankin",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28123",
    {
      n: "Scott",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28125",
    {
      n: "Sharkey",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28127",
    {
      n: "Simpson",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28129",
    {
      n: "Smith",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28131",
    {
      n: "Stone",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28133",
    {
      n: "Sunflower",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28135",
    {
      n: "Tallahatchie",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28137",
    {
      n: "Tate",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28139",
    {
      n: "Tippah",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28141",
    {
      n: "Tishomingo",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28143",
    {
      n: "Tunica",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28145",
    {
      n: "Union",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28147",
    {
      n: "Walthall",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28149",
    {
      n: "Warren",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28151",
    {
      n: "Washington",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28153",
    {
      n: "Wayne",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28155",
    {
      n: "Webster",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28157",
    {
      n: "Wilkinson",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28159",
    {
      n: "Winston",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28161",
    {
      n: "Yalobusha",
      s: "MS",
      c: "t"
    }
  ],
  [
    "28163",
    {
      n: "Yazoo",
      s: "MS",
      c: "t"
    }
  ],
  [
    "29001",
    {
      n: "Adair",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29003",
    {
      n: "Andrew",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29005",
    {
      n: "Atchison",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29007",
    {
      n: "Audrain",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29009",
    {
      n: "Barry",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29011",
    {
      n: "Barton",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29013",
    {
      n: "Bates",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29015",
    {
      n: "Benton",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29017",
    {
      n: "Bollinger",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29019",
    {
      n: "Boone",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29021",
    {
      n: "Buchanan",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29023",
    {
      n: "Butler",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29025",
    {
      n: "Caldwell",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29027",
    {
      n: "Callaway",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29029",
    {
      n: "Camden",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29031",
    {
      n: "Cape Girardeau",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29033",
    {
      n: "Carroll",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29035",
    {
      n: "Carter",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29037",
    {
      n: "Cass",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29039",
    {
      n: "Cedar",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29041",
    {
      n: "Chariton",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29043",
    {
      n: "Christian",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29045",
    {
      n: "Clark",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29047",
    {
      n: "Clay",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29049",
    {
      n: "Clinton",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29051",
    {
      n: "Cole",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29053",
    {
      n: "Cooper",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29055",
    {
      n: "Crawford",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29057",
    {
      n: "Dade",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29059",
    {
      n: "Dallas",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29061",
    {
      n: "Daviess",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29063",
    {
      n: "DeKalb",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29065",
    {
      n: "Dent",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29067",
    {
      n: "Douglas",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29069",
    {
      n: "Dunklin",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29071",
    {
      n: "Franklin",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29073",
    {
      n: "Gasconade",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29075",
    {
      n: "Gentry",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29077",
    {
      n: "Greene",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29079",
    {
      n: "Grundy",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29081",
    {
      n: "Harrison",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29083",
    {
      n: "Henry",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29085",
    {
      n: "Hickory",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29087",
    {
      n: "Holt",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29089",
    {
      n: "Howard",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29091",
    {
      n: "Howell",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29093",
    {
      n: "Iron",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29095",
    {
      n: "Jackson",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29097",
    {
      n: "Jasper",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29099",
    {
      n: "Jefferson",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29101",
    {
      n: "Johnson",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29103",
    {
      n: "Knox",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29105",
    {
      n: "Laclede",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29107",
    {
      n: "Lafayette",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29109",
    {
      n: "Lawrence",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29111",
    {
      n: "Lewis",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29113",
    {
      n: "Lincoln",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29115",
    {
      n: "Linn",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29117",
    {
      n: "Livingston",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29119",
    {
      n: "McDonald",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29121",
    {
      n: "Macon",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29123",
    {
      n: "Madison",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29125",
    {
      n: "Maries",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29127",
    {
      n: "Marion",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29129",
    {
      n: "Mercer",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29131",
    {
      n: "Miller",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29133",
    {
      n: "Mississippi",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29135",
    {
      n: "Moniteau",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29137",
    {
      n: "Monroe",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29139",
    {
      n: "Montgomery",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29141",
    {
      n: "Morgan",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29143",
    {
      n: "New Madrid",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29145",
    {
      n: "Newton",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29147",
    {
      n: "Nodaway",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29149",
    {
      n: "Oregon",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29151",
    {
      n: "Osage",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29153",
    {
      n: "Ozark",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29155",
    {
      n: "Pemiscot",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29157",
    {
      n: "Perry",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29159",
    {
      n: "Pettis",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29161",
    {
      n: "Phelps",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29163",
    {
      n: "Pike",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29165",
    {
      n: "Platte",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29167",
    {
      n: "Polk",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29169",
    {
      n: "Pulaski",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29171",
    {
      n: "Putnam",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29173",
    {
      n: "Ralls",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29175",
    {
      n: "Randolph",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29177",
    {
      n: "Ray",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29179",
    {
      n: "Reynolds",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29181",
    {
      n: "Ripley",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29183",
    {
      n: "St. Charles",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29185",
    {
      n: "St. Clair",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29186",
    {
      n: "Ste. Genevieve",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29187",
    {
      n: "St. Francois",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29189",
    {
      n: "St. Louis",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29195",
    {
      n: "Saline",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29197",
    {
      n: "Schuyler",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29199",
    {
      n: "Scotland",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29201",
    {
      n: "Scott",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29203",
    {
      n: "Shannon",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29205",
    {
      n: "Shelby",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29207",
    {
      n: "Stoddard",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29209",
    {
      n: "Stone",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29211",
    {
      n: "Sullivan",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29213",
    {
      n: "Taney",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29215",
    {
      n: "Texas",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29217",
    {
      n: "Vernon",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29219",
    {
      n: "Warren",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29221",
    {
      n: "Washington",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29223",
    {
      n: "Wayne",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29225",
    {
      n: "Webster",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29227",
    {
      n: "Worth",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29229",
    {
      n: "Wright",
      s: "MO",
      c: "t"
    }
  ],
  [
    "29510",
    {
      n: "St. Louis",
      s: "MO",
      c: "t"
    }
  ],
  [
    "30001",
    {
      n: "Beaverhead",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30003",
    {
      n: "Big Horn",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30005",
    {
      n: "Blaine",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30007",
    {
      n: "Broadwater",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30009",
    {
      n: "Carbon",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30011",
    {
      n: "Carter",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30013",
    {
      n: "Cascade",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30015",
    {
      n: "Chouteau",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30017",
    {
      n: "Custer",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30019",
    {
      n: "Daniels",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30021",
    {
      n: "Dawson",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30023",
    {
      n: "Deer Lodge",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30025",
    {
      n: "Fallon",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30027",
    {
      n: "Fergus",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30029",
    {
      n: "Flathead",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30031",
    {
      n: "Gallatin",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30033",
    {
      n: "Garfield",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30035",
    {
      n: "Glacier",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30037",
    {
      n: "Golden Valley",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30039",
    {
      n: "Granite",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30041",
    {
      n: "Hill",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30043",
    {
      n: "Jefferson",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30045",
    {
      n: "Judith Basin",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30047",
    {
      n: "Lake",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30049",
    {
      n: "Lewis and Clark",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30051",
    {
      n: "Liberty",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30053",
    {
      n: "Lincoln",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30055",
    {
      n: "McCone",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30057",
    {
      n: "Madison",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30059",
    {
      n: "Meagher",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30061",
    {
      n: "Mineral",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30063",
    {
      n: "Missoula",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30065",
    {
      n: "Musselshell",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30067",
    {
      n: "Park",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30069",
    {
      n: "Petroleum",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30071",
    {
      n: "Phillips",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30073",
    {
      n: "Pondera",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30075",
    {
      n: "Powder River",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30077",
    {
      n: "Powell",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30079",
    {
      n: "Prairie",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30081",
    {
      n: "Ravalli",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30083",
    {
      n: "Richland",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30085",
    {
      n: "Roosevelt",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30087",
    {
      n: "Rosebud",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30089",
    {
      n: "Sanders",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30091",
    {
      n: "Sheridan",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30093",
    {
      n: "Silver Bow",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30095",
    {
      n: "Stillwater",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30097",
    {
      n: "Sweet Grass",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30099",
    {
      n: "Teton",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30101",
    {
      n: "Toole",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30103",
    {
      n: "Treasure",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30105",
    {
      n: "Valley",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30107",
    {
      n: "Wheatland",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30109",
    {
      n: "Wibaux",
      s: "MT",
      c: "t"
    }
  ],
  [
    "30111",
    {
      n: "Yellowstone",
      s: "MT",
      c: "t"
    }
  ],
  [
    "31001",
    {
      n: "Adams",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31003",
    {
      n: "Antelope",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31005",
    {
      n: "Arthur",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31007",
    {
      n: "Banner",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31009",
    {
      n: "Blaine",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31011",
    {
      n: "Boone",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31013",
    {
      n: "Box Butte",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31015",
    {
      n: "Boyd",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31017",
    {
      n: "Brown",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31019",
    {
      n: "Buffalo",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31021",
    {
      n: "Burt",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31023",
    {
      n: "Butler",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31025",
    {
      n: "Cass",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31027",
    {
      n: "Cedar",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31029",
    {
      n: "Chase",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31031",
    {
      n: "Cherry",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31033",
    {
      n: "Cheyenne",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31035",
    {
      n: "Clay",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31037",
    {
      n: "Colfax",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31039",
    {
      n: "Cuming",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31041",
    {
      n: "Custer",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31043",
    {
      n: "Dakota",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31045",
    {
      n: "Dawes",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31047",
    {
      n: "Dawson",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31049",
    {
      n: "Deuel",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31051",
    {
      n: "Dixon",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31053",
    {
      n: "Dodge",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31055",
    {
      n: "Douglas",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31057",
    {
      n: "Dundy",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31059",
    {
      n: "Fillmore",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31061",
    {
      n: "Franklin",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31063",
    {
      n: "Frontier",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31065",
    {
      n: "Furnas",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31067",
    {
      n: "Gage",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31069",
    {
      n: "Garden",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31071",
    {
      n: "Garfield",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31073",
    {
      n: "Gosper",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31075",
    {
      n: "Grant",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31077",
    {
      n: "Greeley",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31079",
    {
      n: "Hall",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31081",
    {
      n: "Hamilton",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31083",
    {
      n: "Harlan",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31085",
    {
      n: "Hayes",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31087",
    {
      n: "Hitchcock",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31089",
    {
      n: "Holt",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31091",
    {
      n: "Hooker",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31093",
    {
      n: "Howard",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31095",
    {
      n: "Jefferson",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31097",
    {
      n: "Johnson",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31099",
    {
      n: "Kearney",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31101",
    {
      n: "Keith",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31103",
    {
      n: "Keya Paha",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31105",
    {
      n: "Kimball",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31107",
    {
      n: "Knox",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31109",
    {
      n: "Lancaster",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31111",
    {
      n: "Lincoln",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31113",
    {
      n: "Logan",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31115",
    {
      n: "Loup",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31117",
    {
      n: "McPherson",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31119",
    {
      n: "Madison",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31121",
    {
      n: "Merrick",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31123",
    {
      n: "Morrill",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31125",
    {
      n: "Nance",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31127",
    {
      n: "Nemaha",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31129",
    {
      n: "Nuckolls",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31131",
    {
      n: "Otoe",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31133",
    {
      n: "Pawnee",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31135",
    {
      n: "Perkins",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31137",
    {
      n: "Phelps",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31139",
    {
      n: "Pierce",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31141",
    {
      n: "Platte",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31143",
    {
      n: "Polk",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31145",
    {
      n: "Red Willow",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31147",
    {
      n: "Richardson",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31149",
    {
      n: "Rock",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31151",
    {
      n: "Saline",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31153",
    {
      n: "Sarpy",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31155",
    {
      n: "Saunders",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31157",
    {
      n: "Scotts Bluff",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31159",
    {
      n: "Seward",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31161",
    {
      n: "Sheridan",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31163",
    {
      n: "Sherman",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31165",
    {
      n: "Sioux",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31167",
    {
      n: "Stanton",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31169",
    {
      n: "Thayer",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31171",
    {
      n: "Thomas",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31173",
    {
      n: "Thurston",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31175",
    {
      n: "Valley",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31177",
    {
      n: "Washington",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31179",
    {
      n: "Wayne",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31181",
    {
      n: "Webster",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31183",
    {
      n: "Wheeler",
      s: "NE",
      c: "t"
    }
  ],
  [
    "31185",
    {
      n: "York",
      s: "NE",
      c: "t"
    }
  ],
  [
    "32001",
    {
      n: "Churchill",
      s: "NV",
      c: "t"
    }
  ],
  [
    "32003",
    {
      n: "Clark",
      s: "NV",
      c: "t"
    }
  ],
  [
    "32005",
    {
      n: "Douglas",
      s: "NV",
      c: "t"
    }
  ],
  [
    "32007",
    {
      n: "Elko",
      s: "NV",
      c: "t"
    }
  ],
  [
    "32009",
    {
      n: "Esmeralda",
      s: "NV",
      c: "t"
    }
  ],
  [
    "32011",
    {
      n: "Eureka",
      s: "NV",
      c: "t"
    }
  ],
  [
    "32013",
    {
      n: "Humboldt",
      s: "NV",
      c: "t"
    }
  ],
  [
    "32015",
    {
      n: "Lander",
      s: "NV",
      c: "t"
    }
  ],
  [
    "32017",
    {
      n: "Lincoln",
      s: "NV",
      c: "t"
    }
  ],
  [
    "32019",
    {
      n: "Lyon",
      s: "NV",
      c: "t"
    }
  ],
  [
    "32021",
    {
      n: "Mineral",
      s: "NV",
      c: "t"
    }
  ],
  [
    "32023",
    {
      n: "Nye",
      s: "NV",
      c: "t"
    }
  ],
  [
    "32027",
    {
      n: "Pershing",
      s: "NV",
      c: "t"
    }
  ],
  [
    "32029",
    {
      n: "Storey",
      s: "NV",
      c: "t"
    }
  ],
  [
    "32031",
    {
      n: "Washoe",
      s: "NV",
      c: "t"
    }
  ],
  [
    "32033",
    {
      n: "White Pine",
      s: "NV",
      c: "t"
    }
  ],
  [
    "32510",
    {
      n: "Carson City",
      s: "NV",
      c: "t"
    }
  ],
  [
    "33001",
    {
      n: "Belknap",
      s: "NH",
      c: "t"
    }
  ],
  [
    "33003",
    {
      n: "Carroll",
      s: "NH",
      c: "t"
    }
  ],
  [
    "33005",
    {
      n: "Cheshire",
      s: "NH",
      c: "t"
    }
  ],
  [
    "33007",
    {
      n: "Coos",
      s: "NH",
      c: "t"
    }
  ],
  [
    "33009",
    {
      n: "Grafton",
      s: "NH",
      c: "t"
    }
  ],
  [
    "33011",
    {
      n: "Hillsborough",
      s: "NH",
      c: "t"
    }
  ],
  [
    "33013",
    {
      n: "Merrimack",
      s: "NH",
      c: "t"
    }
  ],
  [
    "33015",
    {
      n: "Rockingham",
      s: "NH",
      c: "t"
    }
  ],
  [
    "33017",
    {
      n: "Strafford",
      s: "NH",
      c: "t"
    }
  ],
  [
    "33019",
    {
      n: "Sullivan",
      s: "NH",
      c: "t"
    }
  ],
  [
    "34001",
    {
      n: "Atlantic",
      s: "NJ",
      c: "t"
    }
  ],
  [
    "34003",
    {
      n: "Bergen",
      s: "NJ",
      c: "t"
    }
  ],
  [
    "34005",
    {
      n: "Burlington",
      s: "NJ",
      c: "t"
    }
  ],
  [
    "34007",
    {
      n: "Camden",
      s: "NJ",
      c: "t"
    }
  ],
  [
    "34009",
    {
      n: "Cape May",
      s: "NJ",
      c: "t"
    }
  ],
  [
    "34011",
    {
      n: "Cumberland",
      s: "NJ",
      c: "t"
    }
  ],
  [
    "34013",
    {
      n: "Essex",
      s: "NJ",
      c: "t"
    }
  ],
  [
    "34015",
    {
      n: "Gloucester",
      s: "NJ",
      c: "t"
    }
  ],
  [
    "34017",
    {
      n: "Hudson",
      s: "NJ",
      c: "t"
    }
  ],
  [
    "34019",
    {
      n: "Hunterdon",
      s: "NJ",
      c: "t"
    }
  ],
  [
    "34021",
    {
      n: "Mercer",
      s: "NJ",
      c: "t"
    }
  ],
  [
    "34023",
    {
      n: "Middlesex",
      s: "NJ",
      c: "t"
    }
  ],
  [
    "34025",
    {
      n: "Monmouth",
      s: "NJ",
      c: "t"
    }
  ],
  [
    "34027",
    {
      n: "Morris",
      s: "NJ",
      c: "t"
    }
  ],
  [
    "34029",
    {
      n: "Ocean",
      s: "NJ",
      c: "t"
    }
  ],
  [
    "34031",
    {
      n: "Passaic",
      s: "NJ",
      c: "t"
    }
  ],
  [
    "34033",
    {
      n: "Salem",
      s: "NJ",
      c: "t"
    }
  ],
  [
    "34035",
    {
      n: "Somerset",
      s: "NJ",
      c: "t"
    }
  ],
  [
    "34037",
    {
      n: "Sussex",
      s: "NJ",
      c: "t"
    }
  ],
  [
    "34039",
    {
      n: "Union",
      s: "NJ",
      c: "t"
    }
  ],
  [
    "34041",
    {
      n: "Warren",
      s: "NJ",
      c: "t"
    }
  ],
  [
    "35001",
    {
      n: "Bernalillo",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35003",
    {
      n: "Catron",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35005",
    {
      n: "Chaves",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35006",
    {
      n: "Cibola",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35007",
    {
      n: "Colfax",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35009",
    {
      n: "Curry",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35011",
    {
      n: "De Baca",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35013",
    {
      n: "Doña Ana",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35015",
    {
      n: "Eddy",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35017",
    {
      n: "Grant",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35019",
    {
      n: "Guadalupe",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35021",
    {
      n: "Harding",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35023",
    {
      n: "Hidalgo",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35025",
    {
      n: "Lea",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35027",
    {
      n: "Lincoln",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35028",
    {
      n: "Los Alamos",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35029",
    {
      n: "Luna",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35031",
    {
      n: "McKinley",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35033",
    {
      n: "Mora",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35035",
    {
      n: "Otero",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35037",
    {
      n: "Quay",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35039",
    {
      n: "Rio Arriba",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35041",
    {
      n: "Roosevelt",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35043",
    {
      n: "Sandoval",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35045",
    {
      n: "San Juan",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35047",
    {
      n: "San Miguel",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35049",
    {
      n: "Santa Fe",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35051",
    {
      n: "Sierra",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35053",
    {
      n: "Socorro",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35055",
    {
      n: "Taos",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35057",
    {
      n: "Torrance",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35059",
    {
      n: "Union",
      s: "NM",
      c: "t"
    }
  ],
  [
    "35061",
    {
      n: "Valencia",
      s: "NM",
      c: "t"
    }
  ],
  [
    "36001",
    {
      n: "Albany",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36003",
    {
      n: "Allegany",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36005",
    {
      n: "Bronx",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36007",
    {
      n: "Broome",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36009",
    {
      n: "Cattaraugus",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36011",
    {
      n: "Cayuga",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36013",
    {
      n: "Chautauqua",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36015",
    {
      n: "Chemung",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36017",
    {
      n: "Chenango",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36019",
    {
      n: "Clinton",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36021",
    {
      n: "Columbia",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36023",
    {
      n: "Cortland",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36025",
    {
      n: "Delaware",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36027",
    {
      n: "Dutchess",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36029",
    {
      n: "Erie",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36031",
    {
      n: "Essex",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36033",
    {
      n: "Franklin",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36035",
    {
      n: "Fulton",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36037",
    {
      n: "Genesee",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36039",
    {
      n: "Greene",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36041",
    {
      n: "Hamilton",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36043",
    {
      n: "Herkimer",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36045",
    {
      n: "Jefferson",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36047",
    {
      n: "Kings",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36049",
    {
      n: "Lewis",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36051",
    {
      n: "Livingston",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36053",
    {
      n: "Madison",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36055",
    {
      n: "Monroe",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36057",
    {
      n: "Montgomery",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36059",
    {
      n: "Nassau",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36061",
    {
      n: "New York",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36063",
    {
      n: "Niagara",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36065",
    {
      n: "Oneida",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36067",
    {
      n: "Onondaga",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36069",
    {
      n: "Ontario",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36071",
    {
      n: "Orange",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36073",
    {
      n: "Orleans",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36075",
    {
      n: "Oswego",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36077",
    {
      n: "Otsego",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36079",
    {
      n: "Putnam",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36081",
    {
      n: "Queens",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36083",
    {
      n: "Rensselaer",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36085",
    {
      n: "Richmond",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36087",
    {
      n: "Rockland",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36089",
    {
      n: "St. Lawrence",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36091",
    {
      n: "Saratoga",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36093",
    {
      n: "Schenectady",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36095",
    {
      n: "Schoharie",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36097",
    {
      n: "Schuyler",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36099",
    {
      n: "Seneca",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36101",
    {
      n: "Steuben",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36103",
    {
      n: "Suffolk",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36105",
    {
      n: "Sullivan",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36107",
    {
      n: "Tioga",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36109",
    {
      n: "Tompkins",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36111",
    {
      n: "Ulster",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36113",
    {
      n: "Warren",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36115",
    {
      n: "Washington",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36117",
    {
      n: "Wayne",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36119",
    {
      n: "Westchester",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36121",
    {
      n: "Wyoming",
      s: "NY",
      c: "t"
    }
  ],
  [
    "36123",
    {
      n: "Yates",
      s: "NY",
      c: "t"
    }
  ],
  [
    "37001",
    {
      n: "Alamance",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37003",
    {
      n: "Alexander",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37005",
    {
      n: "Alleghany",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37007",
    {
      n: "Anson",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37009",
    {
      n: "Ashe",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37011",
    {
      n: "Avery",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37013",
    {
      n: "Beaufort",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37015",
    {
      n: "Bertie",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37017",
    {
      n: "Bladen",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37019",
    {
      n: "Brunswick",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37021",
    {
      n: "Buncombe",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37023",
    {
      n: "Burke",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37025",
    {
      n: "Cabarrus",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37027",
    {
      n: "Caldwell",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37029",
    {
      n: "Camden",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37031",
    {
      n: "Carteret",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37033",
    {
      n: "Caswell",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37035",
    {
      n: "Catawba",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37037",
    {
      n: "Chatham",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37039",
    {
      n: "Cherokee",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37041",
    {
      n: "Chowan",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37043",
    {
      n: "Clay",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37045",
    {
      n: "Cleveland",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37047",
    {
      n: "Columbus",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37049",
    {
      n: "Craven",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37051",
    {
      n: "Cumberland",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37053",
    {
      n: "Currituck",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37055",
    {
      n: "Dare",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37057",
    {
      n: "Davidson",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37059",
    {
      n: "Davie",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37061",
    {
      n: "Duplin",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37063",
    {
      n: "Durham",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37065",
    {
      n: "Edgecombe",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37067",
    {
      n: "Forsyth",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37069",
    {
      n: "Franklin",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37071",
    {
      n: "Gaston",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37073",
    {
      n: "Gates",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37075",
    {
      n: "Graham",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37077",
    {
      n: "Granville",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37079",
    {
      n: "Greene",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37081",
    {
      n: "Guilford",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37083",
    {
      n: "Halifax",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37085",
    {
      n: "Harnett",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37087",
    {
      n: "Haywood",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37089",
    {
      n: "Henderson",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37091",
    {
      n: "Hertford",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37093",
    {
      n: "Hoke",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37095",
    {
      n: "Hyde",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37097",
    {
      n: "Iredell",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37099",
    {
      n: "Jackson",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37101",
    {
      n: "Johnston",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37103",
    {
      n: "Jones",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37105",
    {
      n: "Lee",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37107",
    {
      n: "Lenoir",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37109",
    {
      n: "Lincoln",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37111",
    {
      n: "McDowell",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37113",
    {
      n: "Macon",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37115",
    {
      n: "Madison",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37117",
    {
      n: "Martin",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37119",
    {
      n: "Mecklenburg",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37121",
    {
      n: "Mitchell",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37123",
    {
      n: "Montgomery",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37125",
    {
      n: "Moore",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37127",
    {
      n: "Nash",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37129",
    {
      n: "New Hanover",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37131",
    {
      n: "Northampton",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37133",
    {
      n: "Onslow",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37135",
    {
      n: "Orange",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37137",
    {
      n: "Pamlico",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37139",
    {
      n: "Pasquotank",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37141",
    {
      n: "Pender",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37143",
    {
      n: "Perquimans",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37145",
    {
      n: "Person",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37147",
    {
      n: "Pitt",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37149",
    {
      n: "Polk",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37151",
    {
      n: "Randolph",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37153",
    {
      n: "Richmond",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37155",
    {
      n: "Robeson",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37157",
    {
      n: "Rockingham",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37159",
    {
      n: "Rowan",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37161",
    {
      n: "Rutherford",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37163",
    {
      n: "Sampson",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37165",
    {
      n: "Scotland",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37167",
    {
      n: "Stanly",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37169",
    {
      n: "Stokes",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37171",
    {
      n: "Surry",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37173",
    {
      n: "Swain",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37175",
    {
      n: "Transylvania",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37177",
    {
      n: "Tyrrell",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37179",
    {
      n: "Union",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37181",
    {
      n: "Vance",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37183",
    {
      n: "Wake",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37185",
    {
      n: "Warren",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37187",
    {
      n: "Washington",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37189",
    {
      n: "Watauga",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37191",
    {
      n: "Wayne",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37193",
    {
      n: "Wilkes",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37195",
    {
      n: "Wilson",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37197",
    {
      n: "Yadkin",
      s: "NC",
      c: "t"
    }
  ],
  [
    "37199",
    {
      n: "Yancey",
      s: "NC",
      c: "t"
    }
  ],
  [
    "38001",
    {
      n: "Adams",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38003",
    {
      n: "Barnes",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38005",
    {
      n: "Benson",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38007",
    {
      n: "Billings",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38009",
    {
      n: "Bottineau",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38011",
    {
      n: "Bowman",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38013",
    {
      n: "Burke",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38015",
    {
      n: "Burleigh",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38017",
    {
      n: "Cass",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38019",
    {
      n: "Cavalier",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38021",
    {
      n: "Dickey",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38023",
    {
      n: "Divide",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38025",
    {
      n: "Dunn",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38027",
    {
      n: "Eddy",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38029",
    {
      n: "Emmons",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38031",
    {
      n: "Foster",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38033",
    {
      n: "Golden Valley",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38035",
    {
      n: "Grand Forks",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38037",
    {
      n: "Grant",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38039",
    {
      n: "Griggs",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38041",
    {
      n: "Hettinger",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38043",
    {
      n: "Kidder",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38045",
    {
      n: "LaMoure",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38047",
    {
      n: "Logan",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38049",
    {
      n: "McHenry",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38051",
    {
      n: "McIntosh",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38053",
    {
      n: "McKenzie",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38055",
    {
      n: "McLean",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38057",
    {
      n: "Mercer",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38059",
    {
      n: "Morton",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38061",
    {
      n: "Mountrail",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38063",
    {
      n: "Nelson",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38065",
    {
      n: "Oliver",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38067",
    {
      n: "Pembina",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38069",
    {
      n: "Pierce",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38071",
    {
      n: "Ramsey",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38073",
    {
      n: "Ransom",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38075",
    {
      n: "Renville",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38077",
    {
      n: "Richland",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38079",
    {
      n: "Rolette",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38081",
    {
      n: "Sargent",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38083",
    {
      n: "Sheridan",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38085",
    {
      n: "Sioux",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38087",
    {
      n: "Slope",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38089",
    {
      n: "Stark",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38091",
    {
      n: "Steele",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38093",
    {
      n: "Stutsman",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38095",
    {
      n: "Towner",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38097",
    {
      n: "Traill",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38099",
    {
      n: "Walsh",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38101",
    {
      n: "Ward",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38103",
    {
      n: "Wells",
      s: "ND",
      c: "t"
    }
  ],
  [
    "38105",
    {
      n: "Williams",
      s: "ND",
      c: "t"
    }
  ],
  [
    "39001",
    {
      n: "Adams",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39003",
    {
      n: "Allen",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39005",
    {
      n: "Ashland",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39007",
    {
      n: "Ashtabula",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39009",
    {
      n: "Athens",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39011",
    {
      n: "Auglaize",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39013",
    {
      n: "Belmont",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39015",
    {
      n: "Brown",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39017",
    {
      n: "Butler",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39019",
    {
      n: "Carroll",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39021",
    {
      n: "Champaign",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39023",
    {
      n: "Clark",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39025",
    {
      n: "Clermont",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39027",
    {
      n: "Clinton",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39029",
    {
      n: "Columbiana",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39031",
    {
      n: "Coshocton",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39033",
    {
      n: "Crawford",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39035",
    {
      n: "Cuyahoga",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39037",
    {
      n: "Darke",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39039",
    {
      n: "Defiance",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39041",
    {
      n: "Delaware",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39043",
    {
      n: "Erie",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39045",
    {
      n: "Fairfield",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39047",
    {
      n: "Fayette",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39049",
    {
      n: "Franklin",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39051",
    {
      n: "Fulton",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39053",
    {
      n: "Gallia",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39055",
    {
      n: "Geauga",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39057",
    {
      n: "Greene",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39059",
    {
      n: "Guernsey",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39061",
    {
      n: "Hamilton",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39063",
    {
      n: "Hancock",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39065",
    {
      n: "Hardin",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39067",
    {
      n: "Harrison",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39069",
    {
      n: "Henry",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39071",
    {
      n: "Highland",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39073",
    {
      n: "Hocking",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39075",
    {
      n: "Holmes",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39077",
    {
      n: "Huron",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39079",
    {
      n: "Jackson",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39081",
    {
      n: "Jefferson",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39083",
    {
      n: "Knox",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39085",
    {
      n: "Lake",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39087",
    {
      n: "Lawrence",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39089",
    {
      n: "Licking",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39091",
    {
      n: "Logan",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39093",
    {
      n: "Lorain",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39095",
    {
      n: "Lucas",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39097",
    {
      n: "Madison",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39099",
    {
      n: "Mahoning",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39101",
    {
      n: "Marion",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39103",
    {
      n: "Medina",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39105",
    {
      n: "Meigs",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39107",
    {
      n: "Mercer",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39109",
    {
      n: "Miami",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39111",
    {
      n: "Monroe",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39113",
    {
      n: "Montgomery",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39115",
    {
      n: "Morgan",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39117",
    {
      n: "Morrow",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39119",
    {
      n: "Muskingum",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39121",
    {
      n: "Noble",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39123",
    {
      n: "Ottawa",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39125",
    {
      n: "Paulding",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39127",
    {
      n: "Perry",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39129",
    {
      n: "Pickaway",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39131",
    {
      n: "Pike",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39133",
    {
      n: "Portage",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39135",
    {
      n: "Preble",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39137",
    {
      n: "Putnam",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39139",
    {
      n: "Richland",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39141",
    {
      n: "Ross",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39143",
    {
      n: "Sandusky",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39145",
    {
      n: "Scioto",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39147",
    {
      n: "Seneca",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39149",
    {
      n: "Shelby",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39151",
    {
      n: "Stark",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39153",
    {
      n: "Summit",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39155",
    {
      n: "Trumbull",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39157",
    {
      n: "Tuscarawas",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39159",
    {
      n: "Union",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39161",
    {
      n: "Van Wert",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39163",
    {
      n: "Vinton",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39165",
    {
      n: "Warren",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39167",
    {
      n: "Washington",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39169",
    {
      n: "Wayne",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39171",
    {
      n: "Williams",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39173",
    {
      n: "Wood",
      s: "OH",
      c: "t"
    }
  ],
  [
    "39175",
    {
      n: "Wyandot",
      s: "OH",
      c: "t"
    }
  ],
  [
    "40001",
    {
      n: "Adair",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40003",
    {
      n: "Alfalfa",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40005",
    {
      n: "Atoka",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40007",
    {
      n: "Beaver",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40009",
    {
      n: "Beckham",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40011",
    {
      n: "Blaine",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40013",
    {
      n: "Bryan",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40015",
    {
      n: "Caddo",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40017",
    {
      n: "Canadian",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40019",
    {
      n: "Carter",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40021",
    {
      n: "Cherokee",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40023",
    {
      n: "Choctaw",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40025",
    {
      n: "Cimarron",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40027",
    {
      n: "Cleveland",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40029",
    {
      n: "Coal",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40031",
    {
      n: "Comanche",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40033",
    {
      n: "Cotton",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40035",
    {
      n: "Craig",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40037",
    {
      n: "Creek",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40039",
    {
      n: "Custer",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40041",
    {
      n: "Delaware",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40043",
    {
      n: "Dewey",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40045",
    {
      n: "Ellis",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40047",
    {
      n: "Garfield",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40049",
    {
      n: "Garvin",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40051",
    {
      n: "Grady",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40053",
    {
      n: "Grant",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40055",
    {
      n: "Greer",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40057",
    {
      n: "Harmon",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40059",
    {
      n: "Harper",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40061",
    {
      n: "Haskell",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40063",
    {
      n: "Hughes",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40065",
    {
      n: "Jackson",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40067",
    {
      n: "Jefferson",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40069",
    {
      n: "Johnston",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40071",
    {
      n: "Kay",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40073",
    {
      n: "Kingfisher",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40075",
    {
      n: "Kiowa",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40077",
    {
      n: "Latimer",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40079",
    {
      n: "Le Flore",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40081",
    {
      n: "Lincoln",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40083",
    {
      n: "Logan",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40085",
    {
      n: "Love",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40087",
    {
      n: "McClain",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40089",
    {
      n: "McCurtain",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40091",
    {
      n: "McIntosh",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40093",
    {
      n: "Major",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40095",
    {
      n: "Marshall",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40097",
    {
      n: "Mayes",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40099",
    {
      n: "Murray",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40101",
    {
      n: "Muskogee",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40103",
    {
      n: "Noble",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40105",
    {
      n: "Nowata",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40107",
    {
      n: "Okfuskee",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40109",
    {
      n: "Oklahoma",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40111",
    {
      n: "Okmulgee",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40113",
    {
      n: "Osage",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40115",
    {
      n: "Ottawa",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40117",
    {
      n: "Pawnee",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40119",
    {
      n: "Payne",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40121",
    {
      n: "Pittsburg",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40123",
    {
      n: "Pontotoc",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40125",
    {
      n: "Pottawatomie",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40127",
    {
      n: "Pushmataha",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40129",
    {
      n: "Roger Mills",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40131",
    {
      n: "Rogers",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40133",
    {
      n: "Seminole",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40135",
    {
      n: "Sequoyah",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40137",
    {
      n: "Stephens",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40139",
    {
      n: "Texas",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40141",
    {
      n: "Tillman",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40143",
    {
      n: "Tulsa",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40145",
    {
      n: "Wagoner",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40147",
    {
      n: "Washington",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40149",
    {
      n: "Washita",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40151",
    {
      n: "Woods",
      s: "OK",
      c: "t"
    }
  ],
  [
    "40153",
    {
      n: "Woodward",
      s: "OK",
      c: "t"
    }
  ],
  [
    "41001",
    {
      n: "Baker",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41003",
    {
      n: "Benton",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41005",
    {
      n: "Clackamas",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41007",
    {
      n: "Clatsop",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41009",
    {
      n: "Columbia",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41011",
    {
      n: "Coos",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41013",
    {
      n: "Crook",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41015",
    {
      n: "Curry",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41017",
    {
      n: "Deschutes",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41019",
    {
      n: "Douglas",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41021",
    {
      n: "Gilliam",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41023",
    {
      n: "Grant",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41025",
    {
      n: "Harney",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41027",
    {
      n: "Hood River",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41029",
    {
      n: "Jackson",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41031",
    {
      n: "Jefferson",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41033",
    {
      n: "Josephine",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41035",
    {
      n: "Klamath",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41037",
    {
      n: "Lake",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41039",
    {
      n: "Lane",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41041",
    {
      n: "Lincoln",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41043",
    {
      n: "Linn",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41045",
    {
      n: "Malheur",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41047",
    {
      n: "Marion",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41049",
    {
      n: "Morrow",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41051",
    {
      n: "Multnomah",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41053",
    {
      n: "Polk",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41055",
    {
      n: "Sherman",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41057",
    {
      n: "Tillamook",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41059",
    {
      n: "Umatilla",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41061",
    {
      n: "Union",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41063",
    {
      n: "Wallowa",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41065",
    {
      n: "Wasco",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41067",
    {
      n: "Washington",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41069",
    {
      n: "Wheeler",
      s: "OR",
      c: "t"
    }
  ],
  [
    "41071",
    {
      n: "Yamhill",
      s: "OR",
      c: "t"
    }
  ],
  [
    "42001",
    {
      n: "Adams",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42003",
    {
      n: "Allegheny",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42005",
    {
      n: "Armstrong",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42007",
    {
      n: "Beaver",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42009",
    {
      n: "Bedford",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42011",
    {
      n: "Berks",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42013",
    {
      n: "Blair",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42015",
    {
      n: "Bradford",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42017",
    {
      n: "Bucks",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42019",
    {
      n: "Butler",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42021",
    {
      n: "Cambria",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42023",
    {
      n: "Cameron",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42025",
    {
      n: "Carbon",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42027",
    {
      n: "Centre",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42029",
    {
      n: "Chester",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42031",
    {
      n: "Clarion",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42033",
    {
      n: "Clearfield",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42035",
    {
      n: "Clinton",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42037",
    {
      n: "Columbia",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42039",
    {
      n: "Crawford",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42041",
    {
      n: "Cumberland",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42043",
    {
      n: "Dauphin",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42045",
    {
      n: "Delaware",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42047",
    {
      n: "Elk",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42049",
    {
      n: "Erie",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42051",
    {
      n: "Fayette",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42053",
    {
      n: "Forest",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42055",
    {
      n: "Franklin",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42057",
    {
      n: "Fulton",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42059",
    {
      n: "Greene",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42061",
    {
      n: "Huntingdon",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42063",
    {
      n: "Indiana",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42065",
    {
      n: "Jefferson",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42067",
    {
      n: "Juniata",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42069",
    {
      n: "Lackawanna",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42071",
    {
      n: "Lancaster",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42073",
    {
      n: "Lawrence",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42075",
    {
      n: "Lebanon",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42077",
    {
      n: "Lehigh",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42079",
    {
      n: "Luzerne",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42081",
    {
      n: "Lycoming",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42083",
    {
      n: "McKean",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42085",
    {
      n: "Mercer",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42087",
    {
      n: "Mifflin",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42089",
    {
      n: "Monroe",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42091",
    {
      n: "Montgomery",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42093",
    {
      n: "Montour",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42095",
    {
      n: "Northampton",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42097",
    {
      n: "Northumberland",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42099",
    {
      n: "Perry",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42101",
    {
      n: "Philadelphia",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42103",
    {
      n: "Pike",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42105",
    {
      n: "Potter",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42107",
    {
      n: "Schuylkill",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42109",
    {
      n: "Snyder",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42111",
    {
      n: "Somerset",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42113",
    {
      n: "Sullivan",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42115",
    {
      n: "Susquehanna",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42117",
    {
      n: "Tioga",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42119",
    {
      n: "Union",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42121",
    {
      n: "Venango",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42123",
    {
      n: "Warren",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42125",
    {
      n: "Washington",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42127",
    {
      n: "Wayne",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42129",
    {
      n: "Westmoreland",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42131",
    {
      n: "Wyoming",
      s: "PA",
      c: "t"
    }
  ],
  [
    "42133",
    {
      n: "York",
      s: "PA",
      c: "t"
    }
  ],
  [
    "44001",
    {
      n: "Bristol",
      s: "RI",
      c: "t"
    }
  ],
  [
    "44003",
    {
      n: "Kent",
      s: "RI",
      c: "t"
    }
  ],
  [
    "44005",
    {
      n: "Newport",
      s: "RI",
      c: "t"
    }
  ],
  [
    "44007",
    {
      n: "Providence",
      s: "RI",
      c: "t"
    }
  ],
  [
    "44009",
    {
      n: "Washington",
      s: "RI",
      c: "t"
    }
  ],
  [
    "45001",
    {
      n: "Abbeville",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45003",
    {
      n: "Aiken",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45005",
    {
      n: "Allendale",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45007",
    {
      n: "Anderson",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45009",
    {
      n: "Bamberg",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45011",
    {
      n: "Barnwell",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45013",
    {
      n: "Beaufort",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45015",
    {
      n: "Berkeley",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45017",
    {
      n: "Calhoun",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45019",
    {
      n: "Charleston",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45021",
    {
      n: "Cherokee",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45023",
    {
      n: "Chester",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45025",
    {
      n: "Chesterfield",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45027",
    {
      n: "Clarendon",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45029",
    {
      n: "Colleton",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45031",
    {
      n: "Darlington",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45033",
    {
      n: "Dillon",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45035",
    {
      n: "Dorchester",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45037",
    {
      n: "Edgefield",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45039",
    {
      n: "Fairfield",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45041",
    {
      n: "Florence",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45043",
    {
      n: "Georgetown",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45045",
    {
      n: "Greenville",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45047",
    {
      n: "Greenwood",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45049",
    {
      n: "Hampton",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45051",
    {
      n: "Horry",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45053",
    {
      n: "Jasper",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45055",
    {
      n: "Kershaw",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45057",
    {
      n: "Lancaster",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45059",
    {
      n: "Laurens",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45061",
    {
      n: "Lee",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45063",
    {
      n: "Lexington",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45065",
    {
      n: "McCormick",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45067",
    {
      n: "Marion",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45069",
    {
      n: "Marlboro",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45071",
    {
      n: "Newberry",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45073",
    {
      n: "Oconee",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45075",
    {
      n: "Orangeburg",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45077",
    {
      n: "Pickens",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45079",
    {
      n: "Richland",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45081",
    {
      n: "Saluda",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45083",
    {
      n: "Spartanburg",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45085",
    {
      n: "Sumter",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45087",
    {
      n: "Union",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45089",
    {
      n: "Williamsburg",
      s: "SC",
      c: "t"
    }
  ],
  [
    "45091",
    {
      n: "York",
      s: "SC",
      c: "t"
    }
  ],
  [
    "46003",
    {
      n: "Aurora",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46005",
    {
      n: "Beadle",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46007",
    {
      n: "Bennett",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46009",
    {
      n: "Bon Homme",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46011",
    {
      n: "Brookings",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46013",
    {
      n: "Brown",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46015",
    {
      n: "Brule",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46017",
    {
      n: "Buffalo",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46019",
    {
      n: "Butte",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46021",
    {
      n: "Campbell",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46023",
    {
      n: "Charles Mix",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46025",
    {
      n: "Clark",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46027",
    {
      n: "Clay",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46029",
    {
      n: "Codington",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46031",
    {
      n: "Corson",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46033",
    {
      n: "Custer",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46035",
    {
      n: "Davison",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46037",
    {
      n: "Day",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46039",
    {
      n: "Deuel",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46041",
    {
      n: "Dewey",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46043",
    {
      n: "Douglas",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46045",
    {
      n: "Edmunds",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46047",
    {
      n: "Fall River",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46049",
    {
      n: "Faulk",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46051",
    {
      n: "Grant",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46053",
    {
      n: "Gregory",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46055",
    {
      n: "Haakon",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46057",
    {
      n: "Hamlin",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46059",
    {
      n: "Hand",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46061",
    {
      n: "Hanson",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46063",
    {
      n: "Harding",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46065",
    {
      n: "Hughes",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46067",
    {
      n: "Hutchinson",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46069",
    {
      n: "Hyde",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46071",
    {
      n: "Jackson",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46073",
    {
      n: "Jerauld",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46075",
    {
      n: "Jones",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46077",
    {
      n: "Kingsbury",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46079",
    {
      n: "Lake",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46081",
    {
      n: "Lawrence",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46083",
    {
      n: "Lincoln",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46085",
    {
      n: "Lyman",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46087",
    {
      n: "McCook",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46089",
    {
      n: "McPherson",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46091",
    {
      n: "Marshall",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46093",
    {
      n: "Meade",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46095",
    {
      n: "Mellette",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46097",
    {
      n: "Miner",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46099",
    {
      n: "Minnehaha",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46101",
    {
      n: "Moody",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46102",
    {
      n: "Oglala Lakota",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46103",
    {
      n: "Pennington",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46105",
    {
      n: "Perkins",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46107",
    {
      n: "Potter",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46109",
    {
      n: "Roberts",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46111",
    {
      n: "Sanborn",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46115",
    {
      n: "Spink",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46117",
    {
      n: "Stanley",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46119",
    {
      n: "Sully",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46121",
    {
      n: "Todd",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46123",
    {
      n: "Tripp",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46125",
    {
      n: "Turner",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46127",
    {
      n: "Union",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46129",
    {
      n: "Walworth",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46135",
    {
      n: "Yankton",
      s: "SD",
      c: "t"
    }
  ],
  [
    "46137",
    {
      n: "Ziebach",
      s: "SD",
      c: "t"
    }
  ],
  [
    "47001",
    {
      n: "Anderson",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47003",
    {
      n: "Bedford",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47005",
    {
      n: "Benton",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47007",
    {
      n: "Bledsoe",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47009",
    {
      n: "Blount",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47011",
    {
      n: "Bradley",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47013",
    {
      n: "Campbell",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47015",
    {
      n: "Cannon",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47017",
    {
      n: "Carroll",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47019",
    {
      n: "Carter",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47021",
    {
      n: "Cheatham",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47023",
    {
      n: "Chester",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47025",
    {
      n: "Claiborne",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47027",
    {
      n: "Clay",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47029",
    {
      n: "Cocke",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47031",
    {
      n: "Coffee",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47033",
    {
      n: "Crockett",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47035",
    {
      n: "Cumberland",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47037",
    {
      n: "Davidson",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47039",
    {
      n: "Decatur",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47041",
    {
      n: "DeKalb",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47043",
    {
      n: "Dickson",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47045",
    {
      n: "Dyer",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47047",
    {
      n: "Fayette",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47049",
    {
      n: "Fentress",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47051",
    {
      n: "Franklin",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47053",
    {
      n: "Gibson",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47055",
    {
      n: "Giles",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47057",
    {
      n: "Grainger",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47059",
    {
      n: "Greene",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47061",
    {
      n: "Grundy",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47063",
    {
      n: "Hamblen",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47065",
    {
      n: "Hamilton",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47067",
    {
      n: "Hancock",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47069",
    {
      n: "Hardeman",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47071",
    {
      n: "Hardin",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47073",
    {
      n: "Hawkins",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47075",
    {
      n: "Haywood",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47077",
    {
      n: "Henderson",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47079",
    {
      n: "Henry",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47081",
    {
      n: "Hickman",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47083",
    {
      n: "Houston",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47085",
    {
      n: "Humphreys",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47087",
    {
      n: "Jackson",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47089",
    {
      n: "Jefferson",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47091",
    {
      n: "Johnson",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47093",
    {
      n: "Knox",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47095",
    {
      n: "Lake",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47097",
    {
      n: "Lauderdale",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47099",
    {
      n: "Lawrence",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47101",
    {
      n: "Lewis",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47103",
    {
      n: "Lincoln",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47105",
    {
      n: "Loudon",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47107",
    {
      n: "McMinn",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47109",
    {
      n: "McNairy",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47111",
    {
      n: "Macon",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47113",
    {
      n: "Madison",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47115",
    {
      n: "Marion",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47117",
    {
      n: "Marshall",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47119",
    {
      n: "Maury",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47121",
    {
      n: "Meigs",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47123",
    {
      n: "Monroe",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47125",
    {
      n: "Montgomery",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47127",
    {
      n: "Moore",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47129",
    {
      n: "Morgan",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47131",
    {
      n: "Obion",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47133",
    {
      n: "Overton",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47135",
    {
      n: "Perry",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47137",
    {
      n: "Pickett",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47139",
    {
      n: "Polk",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47141",
    {
      n: "Putnam",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47143",
    {
      n: "Rhea",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47145",
    {
      n: "Roane",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47147",
    {
      n: "Robertson",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47149",
    {
      n: "Rutherford",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47151",
    {
      n: "Scott",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47153",
    {
      n: "Sequatchie",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47155",
    {
      n: "Sevier",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47157",
    {
      n: "Shelby",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47159",
    {
      n: "Smith",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47161",
    {
      n: "Stewart",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47163",
    {
      n: "Sullivan",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47165",
    {
      n: "Sumner",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47167",
    {
      n: "Tipton",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47169",
    {
      n: "Trousdale",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47171",
    {
      n: "Unicoi",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47173",
    {
      n: "Union",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47175",
    {
      n: "Van Buren",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47177",
    {
      n: "Warren",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47179",
    {
      n: "Washington",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47181",
    {
      n: "Wayne",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47183",
    {
      n: "Weakley",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47185",
    {
      n: "White",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47187",
    {
      n: "Williamson",
      s: "TN",
      c: "t"
    }
  ],
  [
    "47189",
    {
      n: "Wilson",
      s: "TN",
      c: "t"
    }
  ],
  [
    "48001",
    {
      n: "Anderson",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48003",
    {
      n: "Andrews",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48005",
    {
      n: "Angelina",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48007",
    {
      n: "Aransas",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48009",
    {
      n: "Archer",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48011",
    {
      n: "Armstrong",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48013",
    {
      n: "Atascosa",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48015",
    {
      n: "Austin",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48017",
    {
      n: "Bailey",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48019",
    {
      n: "Bandera",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48021",
    {
      n: "Bastrop",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48023",
    {
      n: "Baylor",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48025",
    {
      n: "Bee",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48027",
    {
      n: "Bell",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48029",
    {
      n: "Bexar",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48031",
    {
      n: "Blanco",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48033",
    {
      n: "Borden",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48035",
    {
      n: "Bosque",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48037",
    {
      n: "Bowie",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48039",
    {
      n: "Brazoria",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48041",
    {
      n: "Brazos",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48043",
    {
      n: "Brewster",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48045",
    {
      n: "Briscoe",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48047",
    {
      n: "Brooks",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48049",
    {
      n: "Brown",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48051",
    {
      n: "Burleson",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48053",
    {
      n: "Burnet",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48055",
    {
      n: "Caldwell",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48057",
    {
      n: "Calhoun",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48059",
    {
      n: "Callahan",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48061",
    {
      n: "Cameron",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48063",
    {
      n: "Camp",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48065",
    {
      n: "Carson",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48067",
    {
      n: "Cass",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48069",
    {
      n: "Castro",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48071",
    {
      n: "Chambers",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48073",
    {
      n: "Cherokee",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48075",
    {
      n: "Childress",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48077",
    {
      n: "Clay",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48079",
    {
      n: "Cochran",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48081",
    {
      n: "Coke",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48083",
    {
      n: "Coleman",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48085",
    {
      n: "Collin",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48087",
    {
      n: "Collingsworth",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48089",
    {
      n: "Colorado",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48091",
    {
      n: "Comal",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48093",
    {
      n: "Comanche",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48095",
    {
      n: "Concho",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48097",
    {
      n: "Cooke",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48099",
    {
      n: "Coryell",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48101",
    {
      n: "Cottle",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48103",
    {
      n: "Crane",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48105",
    {
      n: "Crockett",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48107",
    {
      n: "Crosby",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48109",
    {
      n: "Culberson",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48111",
    {
      n: "Dallam",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48113",
    {
      n: "Dallas",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48115",
    {
      n: "Dawson",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48117",
    {
      n: "Deaf Smith",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48119",
    {
      n: "Delta",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48121",
    {
      n: "Denton",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48123",
    {
      n: "DeWitt",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48125",
    {
      n: "Dickens",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48127",
    {
      n: "Dimmit",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48129",
    {
      n: "Donley",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48131",
    {
      n: "Duval",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48133",
    {
      n: "Eastland",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48135",
    {
      n: "Ector",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48137",
    {
      n: "Edwards",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48139",
    {
      n: "Ellis",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48141",
    {
      n: "El Paso",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48143",
    {
      n: "Erath",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48145",
    {
      n: "Falls",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48147",
    {
      n: "Fannin",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48149",
    {
      n: "Fayette",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48151",
    {
      n: "Fisher",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48153",
    {
      n: "Floyd",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48155",
    {
      n: "Foard",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48157",
    {
      n: "Fort Bend",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48159",
    {
      n: "Franklin",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48161",
    {
      n: "Freestone",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48163",
    {
      n: "Frio",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48165",
    {
      n: "Gaines",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48167",
    {
      n: "Galveston",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48169",
    {
      n: "Garza",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48171",
    {
      n: "Gillespie",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48173",
    {
      n: "Glasscock",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48175",
    {
      n: "Goliad",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48177",
    {
      n: "Gonzales",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48179",
    {
      n: "Gray",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48181",
    {
      n: "Grayson",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48183",
    {
      n: "Gregg",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48185",
    {
      n: "Grimes",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48187",
    {
      n: "Guadalupe",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48189",
    {
      n: "Hale",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48191",
    {
      n: "Hall",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48193",
    {
      n: "Hamilton",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48195",
    {
      n: "Hansford",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48197",
    {
      n: "Hardeman",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48199",
    {
      n: "Hardin",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48201",
    {
      n: "Harris",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48203",
    {
      n: "Harrison",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48205",
    {
      n: "Hartley",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48207",
    {
      n: "Haskell",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48209",
    {
      n: "Hays",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48211",
    {
      n: "Hemphill",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48213",
    {
      n: "Henderson",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48215",
    {
      n: "Hidalgo",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48217",
    {
      n: "Hill",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48219",
    {
      n: "Hockley",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48221",
    {
      n: "Hood",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48223",
    {
      n: "Hopkins",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48225",
    {
      n: "Houston",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48227",
    {
      n: "Howard",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48229",
    {
      n: "Hudspeth",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48231",
    {
      n: "Hunt",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48233",
    {
      n: "Hutchinson",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48235",
    {
      n: "Irion",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48237",
    {
      n: "Jack",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48239",
    {
      n: "Jackson",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48241",
    {
      n: "Jasper",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48243",
    {
      n: "Jeff Davis",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48245",
    {
      n: "Jefferson",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48247",
    {
      n: "Jim Hogg",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48249",
    {
      n: "Jim Wells",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48251",
    {
      n: "Johnson",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48253",
    {
      n: "Jones",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48255",
    {
      n: "Karnes",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48257",
    {
      n: "Kaufman",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48259",
    {
      n: "Kendall",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48261",
    {
      n: "Kenedy",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48263",
    {
      n: "Kent",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48265",
    {
      n: "Kerr",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48267",
    {
      n: "Kimble",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48269",
    {
      n: "King",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48271",
    {
      n: "Kinney",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48273",
    {
      n: "Kleberg",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48275",
    {
      n: "Knox",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48277",
    {
      n: "Lamar",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48279",
    {
      n: "Lamb",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48281",
    {
      n: "Lampasas",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48283",
    {
      n: "La Salle",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48285",
    {
      n: "Lavaca",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48287",
    {
      n: "Lee",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48289",
    {
      n: "Leon",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48291",
    {
      n: "Liberty",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48293",
    {
      n: "Limestone",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48295",
    {
      n: "Lipscomb",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48297",
    {
      n: "Live Oak",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48299",
    {
      n: "Llano",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48301",
    {
      n: "Loving",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48303",
    {
      n: "Lubbock",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48305",
    {
      n: "Lynn",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48307",
    {
      n: "McCulloch",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48309",
    {
      n: "McLennan",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48311",
    {
      n: "McMullen",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48313",
    {
      n: "Madison",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48315",
    {
      n: "Marion",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48317",
    {
      n: "Martin",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48319",
    {
      n: "Mason",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48321",
    {
      n: "Matagorda",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48323",
    {
      n: "Maverick",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48325",
    {
      n: "Medina",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48327",
    {
      n: "Menard",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48329",
    {
      n: "Midland",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48331",
    {
      n: "Milam",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48333",
    {
      n: "Mills",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48335",
    {
      n: "Mitchell",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48337",
    {
      n: "Montague",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48339",
    {
      n: "Montgomery",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48341",
    {
      n: "Moore",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48343",
    {
      n: "Morris",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48345",
    {
      n: "Motley",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48347",
    {
      n: "Nacogdoches",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48349",
    {
      n: "Navarro",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48351",
    {
      n: "Newton",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48353",
    {
      n: "Nolan",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48355",
    {
      n: "Nueces",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48357",
    {
      n: "Ochiltree",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48359",
    {
      n: "Oldham",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48361",
    {
      n: "Orange",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48363",
    {
      n: "Palo Pinto",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48365",
    {
      n: "Panola",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48367",
    {
      n: "Parker",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48369",
    {
      n: "Parmer",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48371",
    {
      n: "Pecos",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48373",
    {
      n: "Polk",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48375",
    {
      n: "Potter",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48377",
    {
      n: "Presidio",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48379",
    {
      n: "Rains",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48381",
    {
      n: "Randall",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48383",
    {
      n: "Reagan",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48385",
    {
      n: "Real",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48387",
    {
      n: "Red River",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48389",
    {
      n: "Reeves",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48391",
    {
      n: "Refugio",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48393",
    {
      n: "Roberts",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48395",
    {
      n: "Robertson",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48397",
    {
      n: "Rockwall",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48399",
    {
      n: "Runnels",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48401",
    {
      n: "Rusk",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48403",
    {
      n: "Sabine",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48405",
    {
      n: "San Augustine",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48407",
    {
      n: "San Jacinto",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48409",
    {
      n: "San Patricio",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48411",
    {
      n: "San Saba",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48413",
    {
      n: "Schleicher",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48415",
    {
      n: "Scurry",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48417",
    {
      n: "Shackelford",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48419",
    {
      n: "Shelby",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48421",
    {
      n: "Sherman",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48423",
    {
      n: "Smith",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48425",
    {
      n: "Somervell",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48427",
    {
      n: "Starr",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48429",
    {
      n: "Stephens",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48431",
    {
      n: "Sterling",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48433",
    {
      n: "Stonewall",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48435",
    {
      n: "Sutton",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48437",
    {
      n: "Swisher",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48439",
    {
      n: "Tarrant",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48441",
    {
      n: "Taylor",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48443",
    {
      n: "Terrell",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48445",
    {
      n: "Terry",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48447",
    {
      n: "Throckmorton",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48449",
    {
      n: "Titus",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48451",
    {
      n: "Tom Green",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48453",
    {
      n: "Travis",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48455",
    {
      n: "Trinity",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48457",
    {
      n: "Tyler",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48459",
    {
      n: "Upshur",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48461",
    {
      n: "Upton",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48463",
    {
      n: "Uvalde",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48465",
    {
      n: "Val Verde",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48467",
    {
      n: "Van Zandt",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48469",
    {
      n: "Victoria",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48471",
    {
      n: "Walker",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48473",
    {
      n: "Waller",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48475",
    {
      n: "Ward",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48477",
    {
      n: "Washington",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48479",
    {
      n: "Webb",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48481",
    {
      n: "Wharton",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48483",
    {
      n: "Wheeler",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48485",
    {
      n: "Wichita",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48487",
    {
      n: "Wilbarger",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48489",
    {
      n: "Willacy",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48491",
    {
      n: "Williamson",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48493",
    {
      n: "Wilson",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48495",
    {
      n: "Winkler",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48497",
    {
      n: "Wise",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48499",
    {
      n: "Wood",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48501",
    {
      n: "Yoakum",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48503",
    {
      n: "Young",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48505",
    {
      n: "Zapata",
      s: "TX",
      c: "t"
    }
  ],
  [
    "48507",
    {
      n: "Zavala",
      s: "TX",
      c: "t"
    }
  ],
  [
    "49001",
    {
      n: "Beaver",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49003",
    {
      n: "Box Elder",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49005",
    {
      n: "Cache",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49007",
    {
      n: "Carbon",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49009",
    {
      n: "Daggett",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49011",
    {
      n: "Davis",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49013",
    {
      n: "Duchesne",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49015",
    {
      n: "Emery",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49017",
    {
      n: "Garfield",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49019",
    {
      n: "Grand",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49021",
    {
      n: "Iron",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49023",
    {
      n: "Juab",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49025",
    {
      n: "Kane",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49027",
    {
      n: "Millard",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49029",
    {
      n: "Morgan",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49031",
    {
      n: "Piute",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49033",
    {
      n: "Rich",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49035",
    {
      n: "Salt Lake",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49037",
    {
      n: "San Juan",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49039",
    {
      n: "Sanpete",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49041",
    {
      n: "Sevier",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49043",
    {
      n: "Summit",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49045",
    {
      n: "Tooele",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49047",
    {
      n: "Uintah",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49049",
    {
      n: "Utah",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49051",
    {
      n: "Wasatch",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49053",
    {
      n: "Washington",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49055",
    {
      n: "Wayne",
      s: "UT",
      c: "t"
    }
  ],
  [
    "49057",
    {
      n: "Weber",
      s: "UT",
      c: "t"
    }
  ],
  [
    "50001",
    {
      n: "Addison",
      s: "VT",
      c: "t"
    }
  ],
  [
    "50003",
    {
      n: "Bennington",
      s: "VT",
      c: "t"
    }
  ],
  [
    "50005",
    {
      n: "Caledonia",
      s: "VT",
      c: "t"
    }
  ],
  [
    "50007",
    {
      n: "Chittenden",
      s: "VT",
      c: "t"
    }
  ],
  [
    "50009",
    {
      n: "Essex",
      s: "VT",
      c: "t"
    }
  ],
  [
    "50011",
    {
      n: "Franklin",
      s: "VT",
      c: "t"
    }
  ],
  [
    "50013",
    {
      n: "Grand Isle",
      s: "VT",
      c: "t"
    }
  ],
  [
    "50015",
    {
      n: "Lamoille",
      s: "VT",
      c: "t"
    }
  ],
  [
    "50017",
    {
      n: "Orange",
      s: "VT",
      c: "t"
    }
  ],
  [
    "50019",
    {
      n: "Orleans",
      s: "VT",
      c: "t"
    }
  ],
  [
    "50021",
    {
      n: "Rutland",
      s: "VT",
      c: "t"
    }
  ],
  [
    "50023",
    {
      n: "Washington",
      s: "VT",
      c: "t"
    }
  ],
  [
    "50025",
    {
      n: "Windham",
      s: "VT",
      c: "t"
    }
  ],
  [
    "50027",
    {
      n: "Windsor",
      s: "VT",
      c: "t"
    }
  ],
  [
    "51001",
    {
      n: "Accomack",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51003",
    {
      n: "Albemarle",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51005",
    {
      n: "Alleghany",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51007",
    {
      n: "Amelia",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51009",
    {
      n: "Amherst",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51011",
    {
      n: "Appomattox",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51013",
    {
      n: "Arlington",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51015",
    {
      n: "Augusta",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51017",
    {
      n: "Bath",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51019",
    {
      n: "Bedford",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51021",
    {
      n: "Bland",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51023",
    {
      n: "Botetourt",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51025",
    {
      n: "Brunswick",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51027",
    {
      n: "Buchanan",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51029",
    {
      n: "Buckingham",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51031",
    {
      n: "Campbell",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51033",
    {
      n: "Caroline",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51035",
    {
      n: "Carroll",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51036",
    {
      n: "Charles City",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51037",
    {
      n: "Charlotte",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51041",
    {
      n: "Chesterfield",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51043",
    {
      n: "Clarke",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51045",
    {
      n: "Craig",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51047",
    {
      n: "Culpeper",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51049",
    {
      n: "Cumberland",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51051",
    {
      n: "Dickenson",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51053",
    {
      n: "Dinwiddie",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51057",
    {
      n: "Essex",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51059",
    {
      n: "Fairfax",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51061",
    {
      n: "Fauquier",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51063",
    {
      n: "Floyd",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51065",
    {
      n: "Fluvanna",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51067",
    {
      n: "Franklin",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51069",
    {
      n: "Frederick",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51071",
    {
      n: "Giles",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51073",
    {
      n: "Gloucester",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51075",
    {
      n: "Goochland",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51077",
    {
      n: "Grayson",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51079",
    {
      n: "Greene",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51081",
    {
      n: "Greensville",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51083",
    {
      n: "Halifax",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51085",
    {
      n: "Hanover",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51087",
    {
      n: "Henrico",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51089",
    {
      n: "Henry",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51091",
    {
      n: "Highland",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51093",
    {
      n: "Isle of Wight",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51095",
    {
      n: "James City",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51097",
    {
      n: "King and Queen",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51099",
    {
      n: "King George",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51101",
    {
      n: "King William",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51103",
    {
      n: "Lancaster",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51105",
    {
      n: "Lee",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51107",
    {
      n: "Loudoun",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51109",
    {
      n: "Louisa",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51111",
    {
      n: "Lunenburg",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51113",
    {
      n: "Madison",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51115",
    {
      n: "Mathews",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51117",
    {
      n: "Mecklenburg",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51119",
    {
      n: "Middlesex",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51121",
    {
      n: "Montgomery",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51125",
    {
      n: "Nelson",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51127",
    {
      n: "New Kent",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51131",
    {
      n: "Northampton",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51133",
    {
      n: "Northumberland",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51135",
    {
      n: "Nottoway",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51137",
    {
      n: "Orange",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51139",
    {
      n: "Page",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51141",
    {
      n: "Patrick",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51143",
    {
      n: "Pittsylvania",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51145",
    {
      n: "Powhatan",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51147",
    {
      n: "Prince Edward",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51149",
    {
      n: "Prince George",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51153",
    {
      n: "Prince William",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51155",
    {
      n: "Pulaski",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51157",
    {
      n: "Rappahannock",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51159",
    {
      n: "Richmond",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51161",
    {
      n: "Roanoke",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51163",
    {
      n: "Rockbridge",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51165",
    {
      n: "Rockingham",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51167",
    {
      n: "Russell",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51169",
    {
      n: "Scott",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51171",
    {
      n: "Shenandoah",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51173",
    {
      n: "Smyth",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51175",
    {
      n: "Southampton",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51177",
    {
      n: "Spotsylvania",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51179",
    {
      n: "Stafford",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51181",
    {
      n: "Surry",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51183",
    {
      n: "Sussex",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51185",
    {
      n: "Tazewell",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51187",
    {
      n: "Warren",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51191",
    {
      n: "Washington",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51193",
    {
      n: "Westmoreland",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51195",
    {
      n: "Wise",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51197",
    {
      n: "Wythe",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51199",
    {
      n: "York",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51510",
    {
      n: "Alexandria",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51520",
    {
      n: "Bristol",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51530",
    {
      n: "Buena Vista",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51540",
    {
      n: "Charlottesville",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51550",
    {
      n: "Chesapeake",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51570",
    {
      n: "Colonial Heights",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51580",
    {
      n: "Covington",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51590",
    {
      n: "Danville",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51595",
    {
      n: "Emporia",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51600",
    {
      n: "Fairfax",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51610",
    {
      n: "Falls Church",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51620",
    {
      n: "Franklin",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51630",
    {
      n: "Fredericksburg",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51640",
    {
      n: "Galax",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51650",
    {
      n: "Hampton",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51660",
    {
      n: "Harrisonburg",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51670",
    {
      n: "Hopewell",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51678",
    {
      n: "Lexington",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51680",
    {
      n: "Lynchburg",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51683",
    {
      n: "Manassas",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51685",
    {
      n: "Manassas Park",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51690",
    {
      n: "Martinsville",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51700",
    {
      n: "Newport News",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51710",
    {
      n: "Norfolk",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51720",
    {
      n: "Norton",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51730",
    {
      n: "Petersburg",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51735",
    {
      n: "Poquoson",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51740",
    {
      n: "Portsmouth",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51750",
    {
      n: "Radford",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51760",
    {
      n: "Richmond",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51770",
    {
      n: "Roanoke",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51775",
    {
      n: "Salem",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51790",
    {
      n: "Staunton",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51800",
    {
      n: "Suffolk",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51810",
    {
      n: "Virginia Beach",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51820",
    {
      n: "Waynesboro",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51830",
    {
      n: "Williamsburg",
      s: "VA",
      c: "t"
    }
  ],
  [
    "51840",
    {
      n: "Winchester",
      s: "VA",
      c: "t"
    }
  ],
  [
    "53001",
    {
      n: "Adams",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53003",
    {
      n: "Asotin",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53005",
    {
      n: "Benton",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53007",
    {
      n: "Chelan",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53009",
    {
      n: "Clallam",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53011",
    {
      n: "Clark",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53013",
    {
      n: "Columbia",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53015",
    {
      n: "Cowlitz",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53017",
    {
      n: "Douglas",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53019",
    {
      n: "Ferry",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53021",
    {
      n: "Franklin",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53023",
    {
      n: "Garfield",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53025",
    {
      n: "Grant",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53027",
    {
      n: "Grays Harbor",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53029",
    {
      n: "Island",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53031",
    {
      n: "Jefferson",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53033",
    {
      n: "King",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53035",
    {
      n: "Kitsap",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53037",
    {
      n: "Kittitas",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53039",
    {
      n: "Klickitat",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53041",
    {
      n: "Lewis",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53043",
    {
      n: "Lincoln",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53045",
    {
      n: "Mason",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53047",
    {
      n: "Okanogan",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53049",
    {
      n: "Pacific",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53051",
    {
      n: "Pend Oreille",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53053",
    {
      n: "Pierce",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53055",
    {
      n: "San Juan",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53057",
    {
      n: "Skagit",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53059",
    {
      n: "Skamania",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53061",
    {
      n: "Snohomish",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53063",
    {
      n: "Spokane",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53065",
    {
      n: "Stevens",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53067",
    {
      n: "Thurston",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53069",
    {
      n: "Wahkiakum",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53071",
    {
      n: "Walla Walla",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53073",
    {
      n: "Whatcom",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53075",
    {
      n: "Whitman",
      s: "WA",
      c: "t"
    }
  ],
  [
    "53077",
    {
      n: "Yakima",
      s: "WA",
      c: "t"
    }
  ],
  [
    "54001",
    {
      n: "Barbour",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54003",
    {
      n: "Berkeley",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54005",
    {
      n: "Boone",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54007",
    {
      n: "Braxton",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54009",
    {
      n: "Brooke",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54011",
    {
      n: "Cabell",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54013",
    {
      n: "Calhoun",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54015",
    {
      n: "Clay",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54017",
    {
      n: "Doddridge",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54019",
    {
      n: "Fayette",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54021",
    {
      n: "Gilmer",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54023",
    {
      n: "Grant",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54025",
    {
      n: "Greenbrier",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54027",
    {
      n: "Hampshire",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54029",
    {
      n: "Hancock",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54031",
    {
      n: "Hardy",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54033",
    {
      n: "Harrison",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54035",
    {
      n: "Jackson",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54037",
    {
      n: "Jefferson",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54039",
    {
      n: "Kanawha",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54041",
    {
      n: "Lewis",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54043",
    {
      n: "Lincoln",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54045",
    {
      n: "Logan",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54047",
    {
      n: "McDowell",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54049",
    {
      n: "Marion",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54051",
    {
      n: "Marshall",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54053",
    {
      n: "Mason",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54055",
    {
      n: "Mercer",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54057",
    {
      n: "Mineral",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54059",
    {
      n: "Mingo",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54061",
    {
      n: "Monongalia",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54063",
    {
      n: "Monroe",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54065",
    {
      n: "Morgan",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54067",
    {
      n: "Nicholas",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54069",
    {
      n: "Ohio",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54071",
    {
      n: "Pendleton",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54073",
    {
      n: "Pleasants",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54075",
    {
      n: "Pocahontas",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54077",
    {
      n: "Preston",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54079",
    {
      n: "Putnam",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54081",
    {
      n: "Raleigh",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54083",
    {
      n: "Randolph",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54085",
    {
      n: "Ritchie",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54087",
    {
      n: "Roane",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54089",
    {
      n: "Summers",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54091",
    {
      n: "Taylor",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54093",
    {
      n: "Tucker",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54095",
    {
      n: "Tyler",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54097",
    {
      n: "Upshur",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54099",
    {
      n: "Wayne",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54101",
    {
      n: "Webster",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54103",
    {
      n: "Wetzel",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54105",
    {
      n: "Wirt",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54107",
    {
      n: "Wood",
      s: "WV",
      c: "t"
    }
  ],
  [
    "54109",
    {
      n: "Wyoming",
      s: "WV",
      c: "t"
    }
  ],
  [
    "55001",
    {
      n: "Adams",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55003",
    {
      n: "Ashland",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55005",
    {
      n: "Barron",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55007",
    {
      n: "Bayfield",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55009",
    {
      n: "Brown",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55011",
    {
      n: "Buffalo",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55013",
    {
      n: "Burnett",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55015",
    {
      n: "Calumet",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55017",
    {
      n: "Chippewa",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55019",
    {
      n: "Clark",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55021",
    {
      n: "Columbia",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55023",
    {
      n: "Crawford",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55025",
    {
      n: "Dane",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55027",
    {
      n: "Dodge",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55029",
    {
      n: "Door",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55031",
    {
      n: "Douglas",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55033",
    {
      n: "Dunn",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55035",
    {
      n: "Eau Claire",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55037",
    {
      n: "Florence",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55039",
    {
      n: "Fond du Lac",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55041",
    {
      n: "Forest",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55043",
    {
      n: "Grant",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55045",
    {
      n: "Green",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55047",
    {
      n: "Green Lake",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55049",
    {
      n: "Iowa",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55051",
    {
      n: "Iron",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55053",
    {
      n: "Jackson",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55055",
    {
      n: "Jefferson",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55057",
    {
      n: "Juneau",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55059",
    {
      n: "Kenosha",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55061",
    {
      n: "Kewaunee",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55063",
    {
      n: "La Crosse",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55065",
    {
      n: "Lafayette",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55067",
    {
      n: "Langlade",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55069",
    {
      n: "Lincoln",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55071",
    {
      n: "Manitowoc",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55073",
    {
      n: "Marathon",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55075",
    {
      n: "Marinette",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55077",
    {
      n: "Marquette",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55078",
    {
      n: "Menominee",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55079",
    {
      n: "Milwaukee",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55081",
    {
      n: "Monroe",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55083",
    {
      n: "Oconto",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55085",
    {
      n: "Oneida",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55087",
    {
      n: "Outagamie",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55089",
    {
      n: "Ozaukee",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55091",
    {
      n: "Pepin",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55093",
    {
      n: "Pierce",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55095",
    {
      n: "Polk",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55097",
    {
      n: "Portage",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55099",
    {
      n: "Price",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55101",
    {
      n: "Racine",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55103",
    {
      n: "Richland",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55105",
    {
      n: "Rock",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55107",
    {
      n: "Rusk",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55109",
    {
      n: "St. Croix",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55111",
    {
      n: "Sauk",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55113",
    {
      n: "Sawyer",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55115",
    {
      n: "Shawano",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55117",
    {
      n: "Sheboygan",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55119",
    {
      n: "Taylor",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55121",
    {
      n: "Trempealeau",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55123",
    {
      n: "Vernon",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55125",
    {
      n: "Vilas",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55127",
    {
      n: "Walworth",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55129",
    {
      n: "Washburn",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55131",
    {
      n: "Washington",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55133",
    {
      n: "Waukesha",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55135",
    {
      n: "Waupaca",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55137",
    {
      n: "Waushara",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55139",
    {
      n: "Winnebago",
      s: "WI",
      c: "t"
    }
  ],
  [
    "55141",
    {
      n: "Wood",
      s: "WI",
      c: "t"
    }
  ],
  [
    "56001",
    {
      n: "Albany",
      s: "WY",
      c: "t"
    }
  ],
  [
    "56003",
    {
      n: "Big Horn",
      s: "WY",
      c: "t"
    }
  ],
  [
    "56005",
    {
      n: "Campbell",
      s: "WY",
      c: "t"
    }
  ],
  [
    "56007",
    {
      n: "Carbon",
      s: "WY",
      c: "t"
    }
  ],
  [
    "56009",
    {
      n: "Converse",
      s: "WY",
      c: "t"
    }
  ],
  [
    "56011",
    {
      n: "Crook",
      s: "WY",
      c: "t"
    }
  ],
  [
    "56013",
    {
      n: "Fremont",
      s: "WY",
      c: "t"
    }
  ],
  [
    "56015",
    {
      n: "Goshen",
      s: "WY",
      c: "t"
    }
  ],
  [
    "56017",
    {
      n: "Hot Springs",
      s: "WY",
      c: "t"
    }
  ],
  [
    "56019",
    {
      n: "Johnson",
      s: "WY",
      c: "t"
    }
  ],
  [
    "56021",
    {
      n: "Laramie",
      s: "WY",
      c: "t"
    }
  ],
  [
    "56023",
    {
      n: "Lincoln",
      s: "WY",
      c: "t"
    }
  ],
  [
    "56025",
    {
      n: "Natrona",
      s: "WY",
      c: "t"
    }
  ],
  [
    "56027",
    {
      n: "Niobrara",
      s: "WY",
      c: "t"
    }
  ],
  [
    "56029",
    {
      n: "Park",
      s: "WY",
      c: "t"
    }
  ],
  [
    "56031",
    {
      n: "Platte",
      s: "WY",
      c: "t"
    }
  ],
  [
    "56033",
    {
      n: "Sheridan",
      s: "WY",
      c: "t"
    }
  ],
  [
    "56035",
    {
      n: "Sublette",
      s: "WY",
      c: "t"
    }
  ],
  [
    "56037",
    {
      n: "Sweetwater",
      s: "WY",
      c: "t"
    }
  ],
  [
    "56039",
    {
      n: "Teton",
      s: "WY",
      c: "t"
    }
  ],
  [
    "56041",
    {
      n: "Uinta",
      s: "WY",
      c: "t"
    }
  ],
  [
    "56043",
    {
      n: "Washakie",
      s: "WY",
      c: "t"
    }
  ],
  [
    "56045",
    {
      n: "Weston",
      s: "WY",
      c: "t"
    }
  ],
  [
    "72001",
    {
      n: "Adjuntas",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72003",
    {
      n: "Aguada",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72005",
    {
      n: "Aguadilla",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72007",
    {
      n: "Aguas Buenas",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72009",
    {
      n: "Aibonito",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72011",
    {
      n: "Añasco",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72013",
    {
      n: "Arecibo",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72015",
    {
      n: "Arroyo",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72017",
    {
      n: "Barceloneta",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72019",
    {
      n: "Barranquitas",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72021",
    {
      n: "Bayamón",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72023",
    {
      n: "Cabo Rojo",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72025",
    {
      n: "Caguas",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72027",
    {
      n: "Camuy",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72029",
    {
      n: "Canóvanas",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72031",
    {
      n: "Carolina",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72033",
    {
      n: "Cataño",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72035",
    {
      n: "Cayey",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72037",
    {
      n: "Ceiba",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72039",
    {
      n: "Ciales",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72041",
    {
      n: "Cidra",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72043",
    {
      n: "Coamo",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72045",
    {
      n: "Comerío",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72047",
    {
      n: "Corozal",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72049",
    {
      n: "Culebra",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72051",
    {
      n: "Dorado",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72053",
    {
      n: "Fajardo",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72054",
    {
      n: "Florida",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72055",
    {
      n: "Guánica",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72057",
    {
      n: "Guayama",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72059",
    {
      n: "Guayanilla",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72061",
    {
      n: "Guaynabo",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72063",
    {
      n: "Gurabo",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72065",
    {
      n: "Hatillo",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72067",
    {
      n: "Hormigueros",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72069",
    {
      n: "Humacao",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72071",
    {
      n: "Isabela",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72073",
    {
      n: "Jayuya",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72075",
    {
      n: "Juana Díaz",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72077",
    {
      n: "Juncos",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72079",
    {
      n: "Lajas",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72081",
    {
      n: "Lares",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72083",
    {
      n: "Las Marías",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72085",
    {
      n: "Las Piedras",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72087",
    {
      n: "Loíza",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72089",
    {
      n: "Luquillo",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72091",
    {
      n: "Manatí",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72093",
    {
      n: "Maricao",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72095",
    {
      n: "Maunabo",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72097",
    {
      n: "Mayagüez",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72099",
    {
      n: "Moca",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72101",
    {
      n: "Morovis",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72103",
    {
      n: "Naguabo",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72105",
    {
      n: "Naranjito",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72107",
    {
      n: "Orocovis",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72109",
    {
      n: "Patillas",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72111",
    {
      n: "Peñuelas",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72113",
    {
      n: "Ponce",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72115",
    {
      n: "Quebradillas",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72117",
    {
      n: "Rincón",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72119",
    {
      n: "Río Grande",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72121",
    {
      n: "Sabana Grande",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72123",
    {
      n: "Salinas",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72125",
    {
      n: "San Germán",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72127",
    {
      n: "San Juan",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72129",
    {
      n: "San Lorenzo",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72131",
    {
      n: "San Sebastián",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72133",
    {
      n: "Santa Isabel",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72135",
    {
      n: "Toa Alta",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72137",
    {
      n: "Toa Baja",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72139",
    {
      n: "Trujillo Alto",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72141",
    {
      n: "Utuado",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72143",
    {
      n: "Vega Alta",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72145",
    {
      n: "Vega Baja",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72147",
    {
      n: "Vieques",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72149",
    {
      n: "Villalba",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72151",
    {
      n: "Yabucoa",
      s: "PR",
      c: "f"
    }
  ],
  [
    "72153",
    {
      n: "Yauco",
      s: "PR",
      c: "f"
    }
  ]
], w = [
  [
    "AL",
    "Alabama"
  ],
  [
    "AK",
    "Alaska"
  ],
  [
    "AZ",
    "Arizona"
  ],
  [
    "AR",
    "Arkansas"
  ],
  [
    "CA",
    "California"
  ],
  [
    "CO",
    "Colorado"
  ],
  [
    "CT",
    "Connecticut"
  ],
  [
    "DE",
    "Delaware"
  ],
  [
    "DC",
    "District of Columbia"
  ],
  [
    "FL",
    "Florida"
  ],
  [
    "GA",
    "Georgia"
  ],
  [
    "HI",
    "Hawaii"
  ],
  [
    "ID",
    "Idaho"
  ],
  [
    "IL",
    "Illinois"
  ],
  [
    "IN",
    "Indiana"
  ],
  [
    "IA",
    "Iowa"
  ],
  [
    "KS",
    "Kansas"
  ],
  [
    "KY",
    "Kentucky"
  ],
  [
    "LA",
    "Louisiana"
  ],
  [
    "ME",
    "Maine"
  ],
  [
    "MD",
    "Maryland"
  ],
  [
    "MA",
    "Massachusetts"
  ],
  [
    "MI",
    "Michigan"
  ],
  [
    "MN",
    "Minnesota"
  ],
  [
    "MS",
    "Mississippi"
  ],
  [
    "MO",
    "Missouri"
  ],
  [
    "MT",
    "Montana"
  ],
  [
    "NE",
    "Nebraska"
  ],
  [
    "NV",
    "Nevada"
  ],
  [
    "NH",
    "New Hampshire"
  ],
  [
    "NJ",
    "New Jersey"
  ],
  [
    "NM",
    "New Mexico"
  ],
  [
    "NY",
    "New York"
  ],
  [
    "NC",
    "North Carolina"
  ],
  [
    "ND",
    "North Dakota"
  ],
  [
    "OH",
    "Ohio"
  ],
  [
    "OK",
    "Oklahoma"
  ],
  [
    "OR",
    "Oregon"
  ],
  [
    "PA",
    "Pennsylvania"
  ],
  [
    "RI",
    "Rhode Island"
  ],
  [
    "SC",
    "South Carolina"
  ],
  [
    "SD",
    "South Dakota"
  ],
  [
    "TN",
    "Tennessee"
  ],
  [
    "TX",
    "Texas"
  ],
  [
    "UT",
    "Utah"
  ],
  [
    "VT",
    "Vermont"
  ],
  [
    "VA",
    "Virginia"
  ],
  [
    "WA",
    "Washington"
  ],
  [
    "WV",
    "West Virginia"
  ],
  [
    "WI",
    "Wisconsin"
  ],
  [
    "WY",
    "Wyoming"
  ],
  [
    "PR",
    "Puerto Rico"
  ]
], g = (a) => {
  var n;
  return a.length === 2 ? a.toUpperCase() : ((n = Y.find(
    ([s]) => s === a
  )) == null ? void 0 : n[1]) || a;
}, Y = w, p = H;
function k(a, n) {
  return a.includes(n);
}
var u, S, L, o, A, K, C, I;
const D = class {
  constructor({
    include: n,
    exclude: s,
    contiguousOnly: t,
    stateFormat: c,
    plugins: M,
    counties: O
  } = {}) {
    N(this, C);
    N(this, u, void 0);
    N(this, S, void 0);
    N(this, L, void 0);
    N(this, o, void 0);
    N(this, A, void 0);
    N(this, K, void 0);
    if (l(this, L, "FIPS"), this.counties = /* @__PURE__ */ new Map(), this.states = /* @__PURE__ */ new Map(), l(this, o, /* @__PURE__ */ new Map()), l(this, A, {}), l(this, K, {
      include: n,
      exclude: s,
      contiguousOnly: t,
      stateFormat: c,
      plugins: M
    }), O) {
      this.counties = O;
      return;
    }
    l(this, u, n ? Array.isArray(n) ? n : [n] : void 0), l(this, S, s ? Array.isArray(s) ? s : [s] : void 0), this.counties = new Map(H), this.states = new Map(w), this.counties.forEach((r, i) => {
      const h = () => {
        this.counties.set(i, {
          stateName: this.states.get(
            r.s
          ),
          stateAbbr: r.s,
          state: c === "abbr" ? r.s : this.states.get(
            r.s
          ),
          name: r.n,
          contiguous: r.c === "t"
        }), M && M.length > 0 && M.forEach((W) => {
          if (W.data) {
            const P = new Map(W.data), m = (W == null ? void 0 : W.keyMap) || null;
            this.counties.set(i, {
              ...this.counties.get(i),
              ...m ? Object.keys(m).reduce(
                (R, f) => {
                  var G;
                  if (f in m) {
                    const X = m[f], b = (G = P.get(
                      i
                    )) == null ? void 0 : G[f];
                    R[X] = b;
                  }
                  return R;
                },
                {}
              ) : P.has(i) ? P.get(i) : {}
            });
          }
        });
      }, V = () => {
        e(this, u) && !k(e(this, u), r.s) ? this.counties.delete(i) : h();
      }, B = () => {
        e(this, S) && k(e(this, S), r.s) ? this.counties.delete(i) : h();
      };
      t ? r.c === "f" ? this.counties.delete(i) : h() : e(this, u) ? V() : e(this, S) ? B() : h();
    }), M && M.length > 0 && M.forEach((r) => {
      r.methods && Object.keys(r.methods).forEach((i) => {
        var h;
        (h = r.methods) != null && h[i] && (D.prototype[i] = r.methods[i]);
      });
    }), l(this, o, this.counties);
  }
  /**
   * `in` filters the counties map by state
   *
   * @param state - a state or array of states to filter by
   * @returns - a current instance of the USCounties class
   * get results with `get` or `res` or `result` for the map
   * and not an array.
   */
  in(n) {
    let s = Array.isArray(n) ? n : [n];
    return s = s.map((t) => g(t)), T(this, C, I).call(this, (t) => k(s, t.state));
  }
  /**
   * `notIn` filters the counties map by state
   *
   * @param state - a state or array of states to filter by
   * @returns - a current instance of the USCounties class
   * get results with `get` or `res` or `result` for the map
   * and not an array.
   */
  notIn(n) {
    let s = Array.isArray(n) ? n : [n];
    return s = s.map((t) => g(t)), T(this, C, I).call(this, (t) => !k(s, t.state));
  }
  /**
   * `find` filters the counties map by name property
   * or a custom field if a `field` param is provided.
   * Exact matches only.
   *
   * @param name - the name of the county
   * @returns
   */
  find(n, s) {
    return s = s || "name", T(this, C, I).call(this, (t) => s === "state" ? t.state === g(n) : t[s] === n);
  }
  get(n) {
    return {
      ...e(this, o).get(n),
      [e(this, L)]: n
    };
  }
  set(n, s) {
    e(this, o).set(n, s);
  }
  has(n) {
    return e(this, o).has(n);
  }
  keyBy(n) {
    l(this, L, n);
    const s = /* @__PURE__ */ new Map();
    return e(this, o).forEach((t, c) => {
      s.set(t[n], {
        ...t,
        FIPS: c
      });
    }), l(this, o, s), this;
  }
  res(n) {
    return n ? [...e(this, o)].slice(0, n) : [...e(this, o)];
  }
  contains(n, s) {
    return s = s || "name", T(this, C, I).call(this, (t) => s === "state" ? t.state.includes(
      g(n)
    ) : t[s].includes(n));
  }
  where(n, s, t) {
    return T(this, C, I).call(this, (c) => {
      switch (s) {
        case "===":
          return c[n] === t;
        case "!==":
          return c[n] !== t;
        case ">":
          return c[n] > t;
        case ">=":
          return c[n] >= t;
        case "<":
          return c[n] < t;
        case "<=":
          return c[n] <= t;
        case "in":
          return Array.isArray(t) ? t.includes(
            c[n]
          ) : !1;
        case "notIn":
          return Array.isArray(t) ? !t.includes(
            c[n]
          ) : !1;
        case "contains":
          return Array.isArray(
            c[n]
          ) ? c[n].includes(t) : !1;
        case "notContains":
          return Array.isArray(
            c[n]
          ) ? !c[n].includes(t) : !1;
        case "beginsWith":
          return c[n].startsWith(t);
        case "endsWith":
          return c[n].endsWith(t);
        case "includes":
          return c[n].includes(t);
        case "notIncludes":
          return !c[n].includes(t);
        case "exists":
          return c[n] !== void 0;
        case "notExists":
          return c[n] === void 0;
        case "isTrue":
          return c[n] === !0;
        case "isFalse":
          return c[n] === !1;
        case "isTruthy":
          return !!c[n];
        case "isFalsy":
          return !c[n];
        default:
          return !1;
      }
    });
  }
  get result() {
    return e(this, o);
  }
  set result(n) {
    l(this, o, n);
  }
  get length() {
    return e(this, o).size;
  }
  reset() {
    return l(this, o, this.counties), this;
  }
  groupBy(n) {
    return e(this, o).forEach((s, t) => {
      var M, O;
      const c = s[n];
      if ((M = e(this, A)) != null && M[c] && !e(this, A)[c].has(t))
        e(this, A)[c].set(t, s);
      else if (!((O = e(this, A)) != null && O[c])) {
        const r = new D({
          ...e(this, K),
          counties: /* @__PURE__ */ new Map([[t, s]])
        });
        e(this, A)[c] = r, e(this, A)[c].set(t, s);
      }
    }), this;
  }
  get groups() {
    return e(this, A);
  }
  group(n) {
    return e(this, A)[n];
  }
  toArray() {
    return [...e(this, o)].map(([n, s]) => ({
      FIPS: n,
      ...s
    }));
  }
};
let d = D;
u = new WeakMap(), S = new WeakMap(), L = new WeakMap(), o = new WeakMap(), A = new WeakMap(), K = new WeakMap(), C = new WeakSet(), I = function(n) {
  return e(this, o).forEach((s, t) => {
    n(s) || e(this, o).delete(t);
  }), this;
};
const F = (a) => new d(a || {}), J = (a) => new d().where("name", "includes", a).toArray(), v = (a) => new d().where("name", "beginsWith", a).toArray(), U = (a) => new d().get(a), x = (a) => new d().in(a).toArray();
export {
  d as USCounties,
  F as counties,
  p as countiesdata,
  U as getCountyByFips,
  J as getCountyByNameIncludes,
  v as getCountyByNameStartsWith,
  x as getCountyByState,
  g as normalizeState,
  Y as statesdata
};
