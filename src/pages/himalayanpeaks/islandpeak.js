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

function TrekkingIslandPeak() {
  return (
    <div>
      <Head>
        <title>Compare Island Peak Travel Insurance</title>
      </Head>
      <BackgroundImage className="title-image" src="/images/nepal_trekking.jpg">
        <div
          style={{ width: "100%", height: "400px", position: "relative" }}
        ></div>
      </BackgroundImage>
      <Container className="main-container text-container" size="xl">
        <Title align="center">Island Peak Travel Insurance</Title>
        <Text>
          <p>
            Island Peak, also known as Imja Tse, is a popular trekking peak in
            the Khumbu region of Nepal. With an altitude of 6,189 meters (20,305
            feet), it's a challenging but achievable peak that offers stunning
            views of the surrounding mountains, including Lhotse, Nuptse, and
            Makalu.
          </p>
        </Text>
        <Title order={2}>Trekking or Climbing?</Title>
        <Text>
          Island Peak is classified by the Nepal Mountaineering Association
          (NMA) as a "Trekking peak". However, this is misleading as it requires
          more than trekking to climb! An ice axe, crampons and climbing harness
          will be required. However, certain agencies will accept those with no
          prior experience, provided they are in good physical condition, giving
          you the training required to train the tools.
        </Text>
        <Title order={2}>What insurance do I need?</Title>
        <Text>
          As Island Peak requires some climbing/mountaineering, Trekking
          insurance will not necessarily cover you. Mountaineering insurance
          which covers up to 6,189 meters should cover you. However, some
          insurers may cover Island Peak under "Trekking", which may be cheaper
          than Mountaineering. You will need to specifically check with the
          insurer that they will cover you.
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

export default TrekkingIslandPeak;
