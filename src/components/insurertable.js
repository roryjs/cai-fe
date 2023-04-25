import {
  Tabs,
  Table,
  Button,
  Image,
  Flex,
  Select,
  Text,
  Anchor,
} from "@mantine/core";
import { logos } from "./static.js";

export const insurerDetails = [
  {
    id: "adventures_direct",
    name: "Adventures Direct",
    quote_url: "https://quote.adventurescover.co.uk/trip-details",
    read_more_page: "/insurers/adventuresdirect",
    claims: "P J Hayman & Co Ltd",
    underwriter: "Lloyd’s",
    reviews: "https://uk.trustpilot.com/review/www.adventuresinsurance.co.uk",
    residents: "UK only",
    trekking: {
      limit: "6,000m",
      info: "",
    },
    backcountry_skiing: {
      limit: "No limit",
      info: "Can be unguided.",
    },
    mountaineering: {
      limit: "4,500m",
      info: "",
    },
    rock_climbing: {
      limit: "4,000m",
      info: "Rock Climbing (with ropes &/or guides or bolted)",
    },
    paragliding: {
      limit: "No limit",
      paragliding_info: "Europe only.",
    },
  },
  {
    id: "bigcat",
    name: "Big Cat",
    quote_url: "https://www.bigcattravelinsurance.com",
    read_more_page: "/insurers/bigcat",
    claims: "Claims Settlement Agencies",
    underwriter: "AWP P&C S.A.",
    reviews: "https://www.trustpilot.com/review/bigcattravelinsurance.com",
    residents: "UK only",
    trekking: {
      limit: "7,000m in Nepal, no limit in other countries",
      info: "",
    },
    backcountry_skiing: {
      limit: "No limit",
      info: "Can be unguided.",
    },
    mountaineering: {
      limit: "6,000m",
      info: "",
    },
    rock_climbing: {
      limit: "No limit",
      info: "no solo climbing/climbing without ropes",
    },
    paragliding: {
      limit: "No limit",
      paragliding_info: "",
    },
  },
  {
    id: "bmc",
    name: "BMC",
    quote_url: "https://www.thebmc.co.uk/modules/insurance/quote.aspx",
    read_more_page: "/insurers/bmc",
    claims: "BMC",
    underwriter: "Antares Syndicate 1274 at Lloyd's",
    residents: "UK only",
    trekking: {
      limit: "No limit",
      info: "",
    },
    backcountry_skiing: {
      limit: "No limit",
      info: "Will not cover: Competitive winter sports, Extreme skiing (unless agreed in writing), ski-jumping, paraskiing and kite-skiing or Freestyle (eg: aerials, big air, halfpipe, ski-cross and slopestyle).",
    },
    mountaineering: {
      limit: "No limit",
      info: "",
    },
    rock_climbing: {
      limit: "No limit",
      info: "Excludes climbs with crevassed approaches or descents, Big Walling, & snow/ice/ sea cliff climbing. Includes: Bouldering, Sport climbing, Via ferrata, Trad climbing, Multi-pitch & Indoor walls.",
    },
  },
  {
    id: "campbell_irvine",
    name: "Campbell Irvine",
    quote_url: "https://www.campbellirvinedirect.com/CIDirect/",
    read_more_page: "/insurers/campbellirvine",
    claims: "Claims Settlement Agencies",
    underwriter: "AWP P&C S.A.",
    residents: "UK only",
    trekking: {
      limit: "7,000m",
      info: "Only guided and on recognised routes",
    },
    backcountry_skiing: {
      limit: "No limit",
      info: "Only if with a qualified instructor or in a group of not less than 3 persons in possession of working communications or portable telephones.",
    },
  },
  {
    id: "dogtag",
    name: "Dogtag",
    quote_url: "https://www.dogtag.co.uk/quote/",
    read_more_page: "/insurers/dogtag",
    claims: "TAURUS Insurance Services",
    underwriter: "Collinson Group Ltd",
    residents: "UK only",
    reviews:
      "https://www.squaremouth.com/travel-insurance-providers/dogtag/reviews",
    trekking: {
      limit: "No limit",
      info: "",
    },
    backcountry_skiing: {
      limit: "No limit",
      info: "Can be unguided.",
    },
    mountaineering: {
      limit: "6,000m",
      info: "Can quote for higher altitudes if you speak directly to them.",
    },
    rock_climbing: {
      limit: "6,000m",
      info: "",
    },
    paragliding: {
      limit: "No limit",
      info: "",
    },
  },
  {
    id: "snowcard",
    name: "Snowcard",
    quote_url: "https://www.snowcard.co.uk",
    read_more_page: "/insurers/snowcard",
    claims: "Allianz Assistance",
    underwriter: "AWP P&C S.A.",
    residents: "UK only",
    trekking: {
      limit: "6,000m",
      info: "Additionally can cover Himalayan trekking peaks up to 7,000m.",
    },
    backcountry_skiing: {
      limit: "No limit",
      info: "Can be unguided.",
    },
    mountaineering: {
      limit: "7,000m",
      info: "Professional guided trips only, itinerary must be submitted prior to departure for agreement.",
    },
    rock_climbing: {
      limit: "No limit",
      info: "Where leader placed protection is involved",
    },
  },
  {
    id: "sportscover_direct",
    name: "SportsCover Direct",
    quote_url: "https://www.sportscoverdirect.com",
    read_more_page: "/insurers/sportscoverdirect",
    claims: "Global Response",
    underwriter: "Catlin Insurance Company (UK) Ltd (AXA Group)",
    residents: "UK only",
    trekking: {
      limit: "7,000m",
      info: "For non-technical ascents where there is no intention to use climbing equipment except in an emergency.",
    },
    backcountry_skiing: {
      limit: "No limit",
      info: "Off-piste activities will only be covered if the insured is accompanied, and has followed local advice and information provided by the resort authorities.",
    },
    mountaineering: {
      limit: "4,000m outside of Europe, no limit in Europe",
      info: "",
    },
    rock_climbing: {
      limit: "No limit",
      info: "Excludes climbs with crevassed approaches or descents, Big Walling, & snow/ice/ sea cliff climbing. Includes: Bouldering, Sport climbing, Via ferrata, Trad climbing, Multi-pitch & Indoor walls.",
    },
  },
  {
    id: "truetraveller",
    name: "TrueTraveller",
    quote_url: "https://www.truetraveller.com/",
    read_more_page: "/insurers/truetraveller",
    claims: "In-house",
    underwriter: "Inter Partner Assistance S.A. (AXA Group).",
    residents: "UK and Europe",
    trekking: {
      limit: "No limit",
      info: "Can include some Himalayan Trekking Peaks such as Island Peak, Mera Peak and Kyajo Ri.",
    },
    backcountry_skiing: {
      limit: "No limit",
      info: "Can be unguided. No cover for any competition, free-style skiing/snowboarding, ski/snowboard jumping, ski-flying, ski/snowboard acrobatics, ski/snowboard stunting, or ski racing or national squad training, the use of skeletons.",
    },
    mountaineering: {
      limit: "6,000m",
      info: "Can quote for higher altitudes if you speak directly to them. Some Himalayan Trekking Peaks might be included under Trekking: such as Island Peak, Mera Peak and Kyajo Ri.",
    },
    rock_climbing: {
      limit: "6,000m",
      info: "",
    },
  },
];

export const insurerTable = (activity) => {
  var insurerDetailsRan = insurerDetails.sort((a, b) => 0.5 - Math.random());
  return (
    <ul>
      <Table striped>
        <thead>
          <tr>
            <th>Insurer</th>
            <th></th>
            <th>Altitude limit</th>
            <th>Cover information</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Object.values(insurerDetailsRan).map((element) =>
            element[activity] ? (
              <tr key={element[0]}>
                <td>
                  <Image
                    src={logos[element.id]}
                    width={100}
                    height={100}
                    fit="contain"
                  ></Image>
                </td>
                <td>
                  <Anchor href={element.read_more_page}>{element.name}</Anchor>
                </td>

                <td>{element[activity].limit}</td>
                <td>{element[activity].info}</td>
                <td>
                  <Button
                    size="md"
                    color="red"
                    component="a"
                    href={element.read_more_page}
                  >
                    Get a quote
                  </Button>
                </td>
              </tr>
            ) : null
          )}
        </tbody>
      </Table>
    </ul>
  );
};

function randomizeList(list2) {
  for (var i = list2.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = list2[i];
    list2[i] = list2[j];
    list2[j] = temp;
  }
}
