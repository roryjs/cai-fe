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
    name: "The Inca Trail",
    duration: "4-7 days",
    elevation: "4,200 metres / 13,800 ft",
    description:
      "Located in Torres del Paine National Park in Chile, this trek takes five to six days to complete and offers stunning views of towering peaks, glaciers, and crystal-clear lakes.",
  },
  {
    name: "The W Trek",
    duration: "5-6 days",
    elevation: "850 metres / 2788 feet",
    description:
      "Located in Torres del Paine National Park in Chile, this trek takes five to six days to complete and offers stunning views of towering peaks, glaciers, and crystal-clear lakes.",
  },
  {
    name: "The Quilotoa Loop",
    duration: "3-4 days",
    elevation: " 3,914 meters / 12,841 feet",
    description:
      "This trek, located in Ecuador, takes three to four days to complete and offers beautiful views of the Andean landscape, as well as the opportunity to visit local villages and markets.",
  },
  {
    name: "The Salkantay Trek",
    duration: "5-6 days",
    elevation: "4,630 meters / 15,190 feet",
    description:
      "This trek, located in Peru, takes five to six days to complete and offers stunning views of the Andes, as well as the opportunity to visit the famous Inca ruins of Machu Picchu.",
  },
  {
    name: "The Ausangate Trek",
    duration: "5-6 days",
    elevation: "4,500 metres / 14,763 feet ",
    description:
      "This trek, located in Peru, takes five to six days to complete and offers beautiful views of the Andean landscape, including towering peaks, glaciers, and colorful lagoons.",
  },
];

const rows = treks.map((element) => (
  <tr key={element.name}>
    <td>{element.name}</td>
    <td>{element.duration}</td>
    <td>{element.elevation}</td>
  </tr>
));

function TrekkingAndes() {
  return (
    <div>
      <Head>
        <title>Andes Trekking Insurance | CompareAdventureInsurance</title>
      </Head>
      <BackgroundImage className="title-image" src="/images/trekking-andes.jpg">
        <div
          style={{ width: "100%", height: "400px", position: "relative" }}
        ></div>
      </BackgroundImage>
      <Container className="main-container text-container" size="xl">
        <Title align="center">Andes Trekking Insurance</Title>
        <Text>
          The Andes, a mountain range that runs along the western coast of South
          America, is home to some of the world's most stunning trekking
          destinations. From the mighty Aconcagua in Argentina to the surreal
          beauty of Peru's Cordillera Blanca, the Andes offer an unrivaled
          adventure experience to trekkers and mountaineers alike. However,
          before you head out on your Andean journey, it is essential to
          understand the insurance options available to protect yourself and
          your trip investment.
        </Text>

        <Title order={2}>Medical and Rescue Cover</Title>
        <Text>
          Medical and rescue cover is perhaps the most important aspect of your
          trekking insurance. In the Andes, unexpected medical emergencies can
          arise due to altitude sickness, sudden weather changes, and other
          factors. Having the right insurance cover in place can help you access
          prompt and efficient medical treatment, should the need arise. A
          comprehensive insurance policy should include coverage for medical
          evacuation, hospitalization, and emergency medical expenses incurred
          during your trek.
        </Text>

        <Text>
          When choosing an insurance policy, be sure to review the terms and
          conditions, including the level of coverage provided, exclusions, and
          any limitations. It is also essential to ensure that the policy covers
          the specific trek you plan to undertake, as well as any additional
          activities you may engage in, such as rock climbing or ice climbing.
        </Text>

        <Title order={2}>Altitude Limits</Title>
        <Text>
          Another important consideration when choosing trekking insurance is
          altitude limits. Many insurance policies have a maximum altitude
          limit, beyond which coverage may not be available. This is
          particularly important for trekkers and mountaineers who plan to
          tackle high peaks in the Andes, such as Aconcagua, which stands at
          6,962 meters (22,841 feet).
        </Text>

        <Text>
          When reviewing your insurance options, be sure to check the altitude
          limits provided and choose a policy that offers adequate coverage for
          the trek you plan to undertake. You can also consider purchasing
          additional coverage for high altitude activities if your planned trek
          exceeds the standard policy limits.
        </Text>
        <Text>
          There are several insurance providers that offer trekking insurance
          for the Andes. Here is a list of some of the most popular options:
        </Text>

        {insurerList}
        <Text>
          It can be difficult and time consuming to figure out which insurers
          would cover me and which was the cheapest. If you click the button
          below, you'll be able to instantly find out which insurers will cover
          your trek and get a quote.
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
          <Title order={2}>Treks</Title>
          <Table>
            <thead>
              <tr>
                <th>Trek name</th>
                <th>Min. duration</th>
                <th>Max. altitude</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Text>
      </Container>
    </div>
  );
}

export default TrekkingAndes;
