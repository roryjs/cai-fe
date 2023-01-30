import {
  Container,
  Title,
  Card,
  Text,
  Table,
  Button,
  Image,
  BackgroundImage,
  Center,
} from "@mantine/core";
import Head from "next/head";
import { insurerList } from "../../components/static.js";

const treks = [
  {
    name: "Everest Three Passes Trek",
    duration: "18 days",
    elevation: "5,535 m / 18,159 ft (Kongma La pass)",
  },
  {
    name: "Manaslu Circuit Trek",
    duration: "13 days",
    elevation: "5,106 m / 16,752 ft (Larkya La pass)",
  },
  {
    name: "Langtang Trek",
    duration: "7 days",
    elevation: "5,535 m / 18,159 ft (Kongma La pass)",
  },
  {
    name: "Upper Mustang Trek",
    duration: "12 days",
    elevation: "4130 m / 13,550 ft",
  },
  {
    name: "Everest Three Passes Trek",
    duration: "12 days",
    elevation: "3810 m / 12,500 ft",
  },
];

const trekking_peaks = [
  {
    name: "Mera Peak",
    altitude: "6,476 m (21,247 ft)",
    difficulty: "PD",
  },
  {
    name: "Island Peak (Imja Tse)",
    altitude: "6,189 m (20,305 ft)",
    difficulty: "PD+",
  },
  {
    name: "Lobuche Peak",
    altitude: "6,119 m (20,070 ft)",
    difficulty: "PD+",
  },
  {
    name: "Kyajo Ri",
    altitude: "6,186 m (20,295 ft)",
    difficulty: "D",
  },
  {
    name: "Yala Peak",
    altitude: "5,700 m (18,700 ft)",
    difficulty: "F+",
  },
  {
    name: "Pisang Peak",
    altitude: "6,091 m (19,978 ft)",
    difficulty: "PD",
  },
  {
    name: "Chulu West",
    altitude: "6,419 m (21,055 ft)",
    difficulty: "PD-",
  },
  {
    name: "Tent Peak",
    altitude: "5,663 m (18,580 ft)",
    difficulty: "F",
  },
];

const rows_treks = treks.map((element) => (
  <tr key={element.name}>
    <td>{element.name}</td>
    <td>{element.duration}</td>
    <td>{element.elevation}</td>
  </tr>
));

const rows_trekking_peaks = trekking_peaks.map((element) => (
  <tr key={element.name}>
    <td>{element.name}</td>
    <td>{element.difficulty}</td>
    <td>{element.altitude}</td>
  </tr>
));

function TrekkingNepal() {
  return (
    <div>
      <Head>
        <title>Nepal Trekking Insurance | CompareAdventureInsurance</title>
      </Head>
      <BackgroundImage className="title-image" src="/images/nepal_trekking.jpg">
        <div
          style={{ width: "100%", height: "400px", position: "relative" }}
        ></div>
      </BackgroundImage>
      <Container className="main-container text-container" size="xl">
        <Title align="center">Nepal Trekking Insurance</Title>
        <Text>
          <p>
            Nepal trekking insurance is a critical aspect of planning your trek
            in the Himalayas. While the country is known for its stunning
            natural beauty and cultural richness, the trekking routes can be
            challenging, and unexpected events can occur. Having adequate
            insurance coverage can provide peace of mind and protection for you
            and your loved ones in case of an emergency.
          </p>
        </Text>

        <Title order={2}>Medical & Rescue Cover</Title>
        <Text>
          Trekking in the Himalayas can pose significant health risks, and
          medical attention may not always be readily available. It's crucial to
          have insurance that covers medical expenses, including evacuation by
          helicopter if necessary. This can be especially important for trekkers
          who suffer from altitude sickness or other health issues while on the
          trail.
        </Text>

        <Title order={2}>Altitude Limits</Title>
        <Text>
          Many trekking routes in Nepal reach elevations above 5,000 meters,
          exposing trekkers to health risks such as altitude sickness. It's
          essential to choose an insurance policy that covers you at high
          altitudes, so you can be evacuated if necessary. Make sure to check
          the altitude limits of your policy before you start your trek.
        </Text>
        <Title order={2}>Insurers</Title>
        <Text>
          There are several insurance providers that offer trekking insurance
          for Nepal. Here is a list of some of the most popular options:
        </Text>
        <Text>
          When I first visited Nepal, I found it difficult and time consuming to
          figure out which insurers would cover me and which was the cheapest.
          That's why I made this website! If you click the button below, you'll
          be able to instantly find out which insurers will cover your trek and
          get a quote.
        </Text>
        {insurerList}

        <Center>
          <Button size="lg" radius="lg" color="red" component="a" href="/">
            Compare Insurers now!
          </Button>
        </Center>
        <br />
        <br />
        <br />
        <Text>
          <Title order={2}>Treks</Title>
          <p>
            One of the most popular trekking destinations in Nepal is the
            Annapurna region, which offers a variety of trekking routes ranging
            from easy, low-altitude hikes to challenging high-altitude
            expeditions. The Annapurna Circuit, which encircles the Annapurna
            massif, is one of the most famous trekking routes in the world, and
            offers stunning views of the Himalayan peaks, including Annapurna I,
            the tenth highest mountain in the world.
          </p>
          <p>
            Another popular trekking destination in Nepal is the Everest region,
            which is home to the world's highest peak. Trekkers can take the
            famous Everest Base Camp Trek, which takes them to the base of the
            mountain, or attempt to summit one of the many peaks in the region,
            such as Island Peak or Lobuche East.
          </p>

          <p>Some popular treks include:</p>
          <Table>
            <thead>
              <tr>
                <th>Trek name</th>
                <th>Min. duration</th>
                <th>Max. altitude</th>
              </tr>
            </thead>
            <tbody>{rows_treks}</tbody>
          </Table>
          <br />
          <br />
          <br />
          <Title>Trekking Peaks: </Title>
          <Text>
            In Nepal, there are 28 "Trekking Peaks" (which require a permit to
            climb) but this is misleading as all of them require climbing or
            mountaineering, with rope, crampons and ice axes required. However,
            the easiest ones, Island Peak and Lobuche East can be attempted with
            no prior experience with certain agencies.
          </Text>
          <Table>
            <thead>
              <tr>
                <th>Peak name</th>
                <th>Difficulty (French grade)</th>
                <th>Max. altitude</th>
              </tr>
            </thead>
            <tbody>{rows_trekking_peaks}</tbody>
          </Table>
        </Text>
        <Text>
          <Title order={2}>Trekking agencies</Title>
          <p>
            Generally, there are two types of trekking agencies; locally ran and
            operated agencies and foreign agencies. Often the foreign agencies
            will actually use local agency, while somtimes providing an
            aditional international mountain guide.
          </p>
          <p>
            The advantage of an international agency is that you can trust that
            all arrangements will be made and you will have a point of contact
            that speaks your native language. However, often you will end up
            having the exact same trekking experience as if you had gone
            directly with a local agency.
          </p>
        </Text>
      </Container>
    </div>
  );
}

export default TrekkingNepal;
