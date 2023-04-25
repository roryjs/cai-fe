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

const rows_trekking_peaks = trekking_peaks.map((element) => (
  <tr key={element.name}>
    <td>{element.name}</td>
    <td>{element.difficulty}</td>
    <td>{element.altitude}</td>
  </tr>
));

function TrekkingYalaPeak() {
  return (
    <div>
      <Head>
        <title>Compare Yala Peak Travel Insurance</title>
      </Head>
      <BackgroundImage className="title-image" src="/images/nepal_trekking.jpg">
        <div
          style={{ width: "100%", height: "400px", position: "relative" }}
        ></div>
      </BackgroundImage>
      <Container className="main-container text-container" size="xl">
        <Title align="center">Yala Peak Travel Insurance</Title>
        <Text>
          <p>
            Yala Peak is a popular trekking peak in Langtang region of Nepal,
            standing at an altitude of 5,520 meters (18,110 feet). It offers
            stunning views of the surrounding Himalayan mountains, including
            Langtang Lirung, Dorje Lakpa, and Shishapangma.
          </p>
        </Text>
        <Title order={2}>Trekking or Climbing?</Title>
        <Text>
          Yala Peak is classified as a "Trekking peak" by the Nepal
          Mountaineering Association (NMA), and it is considered a relatively
          easy climb for those with basic mountaineering skills and experience.
          However, you will still need to use climbing equipment like crampons,
          an ice axe, and a climbing harness to reach the summit.
        </Text>
        <Title order={2}>What insurance do I need?</Title>
        <Text>
          Since Yala Peak involves some climbing and mountaineering, standard
          trekking insurance may not provide sufficient coverage. It's
          recommended that you obtain mountaineering insurance that covers up to
          5,520 meters to ensure you are fully covered. Some insurers may offer
          coverage for Yala Peak under "Trekking" insurance, which could be less
          expensive than mountaineering insurance. However, it's crucial to
          confirm with the insurer that you are fully covered before purchasing
          any policy.
        </Text>
        <Title order={2}>Medical & Rescue Cover</Title>
        <Text>
          Trekking at high altitudes can be dangerous, and it's essential to
          have insurance that covers medical and rescue expenses in case of an
          emergency. Make sure that your insurance policy covers you up to the
          your maximum altitude (the cover will not be valid for any altitude,
          if you go above the maximum limit), and that it includes helicopter
          evacuation if necessary.
        </Text>
        <Title order={2}>Insurers</Title>
        <Text>
          There are several insurance providers that offer trekking insurance
          for Nepal. Here is a list of some of the most popular options:
        </Text>

        {insurerList}
        <Text>
          Click the button below to find out which insurers will you cover you:
        </Text>
        <Center>
          <Button size="lg" radius="lg" color="red" component="a" href="/">
            Compare Insurers now!
          </Button>
        </Center>
        <br />
        <br />
        <br />
        <Text>
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

export default TrekkingYalaPeak;
