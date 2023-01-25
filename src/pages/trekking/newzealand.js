import {
  Container,
  Title,
  Card,
  Text,
  Table,
  Button,
  Image,
  BackgroundImage,
} from "@mantine/core";
import Head from "next/head";

const treks = [
  {
    name: "Milford Track",
    duration: "4 days",
    length: "53.5 km (33 mile)",
    description:
      "Located in the Fiordland region of the South Island, this 53.5 km (33 mile) trek takes four days to complete and offers stunning views of forests, waterfalls, and glacial valleys.",
  },
  {
    name: "Abel Tasman Coast Track",
    duration: "2-3 days days",
    length: "32 km (20 miles)",
    description:
      "Located in the Mount Aspiring National Park on the South Island, this trek is 32 km (20 miles) long and takes two to three days to complete. It offers beautiful views of forests, mountains, and alpine lakes.",
  },
  {
    name: "Routeburn Track",
    duration: "2-3 days",
    length: "32 km (20 miles)",
    description:
      "Located in the Mount Aspiring National Park on the South Island, this trek is 32 km (20 miles) long and takes two to three days to complete. It offers beautiful views of forests, mountains, and alpine lakes.",
  },
  {
    name: "Tongariro Northern Circuit",
    duration: "3-4 days",
    length: "43 km (27 miles)",
    description:
      "Located in the Tongariro National Park on the North Island, this trek is 43 km (27 miles) long and takes three to four days to complete. It offers stunning views of volcanoes, lakes, and forests.",
  },
  {
    name: "Heaphy Track",
    duration: "4-6 days",
    length: "78.4 km (48.8 miles)",
    description:
      "Located in the Kahurangi National Park on the South Island, this trek is 78.4 km (48.8 miles) long and takes four to six days to complete. It offers a diverse range of landscapes, including forests, mountains, and beaches.",
  },
];

const rows = treks.map((element) => (
  <tr key={element.name}>
    <td>{element.name}</td>
    <td>{element.duration}</td>
    <td>{element.length}</td>
  </tr>
));

function TrekkingNewZealand() {
  return (
    <div>
      <Head>
        <title>Trekking in Nepal | CompareAdventureInsurance</title>
      </Head>
      <BackgroundImage className="title-image" src="/images/trekking-nz.jpg">
        <div
          style={{ width: "100%", height: "400px", position: "relative" }}
        ></div>
      </BackgroundImage>
      <Container className="main-container text-container" size="xl">
        <Title align="center">Trekking in New Zealand</Title>
        <Text>
          <p>
            New Zealand is a paradise for trekkers, with its diverse landscapes
            and abundant natural beauty. From the towering peaks of the Southern
            Alps to the lush forests of the North Island, the country offers a
            wide range of trekking routes to suit all levels of ability and
            experience.
          </p>
        </Text>

        <Text>
          <Title order={2}>Treks</Title>
          <p>
            One of the most famous trekking routes in New Zealand is the Milford
            Track, located in the Fiordland region of the South Island. The 53.5
            km (33 mile) track takes four days to complete, and offers stunning
            views of forests, waterfalls, and glacial valleys. The trek can be
            challenging due to its remote location and rugged terrain, but the
            rewards are well worth the effort.
          </p>
          <p>
            Another popular trekking destination in New Zealand is the Abel
            Tasman National Park, located on the northern coast of the South
            Island. The park offers a variety of short and easy hikes, as well
            as longer multi-day treks that take in the park's beautiful beaches,
            forests, and wetlands. The park is also home to a rich diversity of
            wildlife, including seals, penguins, and native birds.
          </p>
          <p>Popular treks include:</p>
          <Table>
            <thead>
              <tr>
                <th>Trek name</th>
                <th>Min. duration</th>
                <th>Length</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
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
        <Title order={2}>Insurance</Title>
        <Text>
          <p>
            In the event of any healthcare you are trekking in New Zealand, you
            will likely need to be evacuated by helicopter to a major hospital
            and have potentially expensive repatriation. Insurance is therefore
            essential for your safety and financial security.
          </p>
          <p>
            When I first visited New Zealand, I found it difficult and time
            consuming to figure out which insurers would cover me and which was
            the cheapest. That's why I made this website! If you click the
            button below, you'll be able to instantly find out which insurers
            will cover your trek and get a quote.
          </p>
        </Text>
        <Button radius="xl" color="red" component="a" href="/">
          Compare Insurers
        </Button>
      </Container>
    </div>
  );
}

export default TrekkingNewZealand;
