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

const rows = treks.map((element) => (
  <tr key={element.name}>
    <td>{element.name}</td>
    <td>{element.duration}</td>
    <td>{element.elevation}</td>
  </tr>
));

function TrekkingNepal() {
  return (
    <div>
      <Head>
        <title>Trekking in Nepal | CompareAdventureInsurance</title>
      </Head>
      <BackgroundImage className="title-image" src="/images/nepal_trekking.jpg">
        <div
          style={{ width: "100%", height: "400px", position: "relative" }}
        ></div>
      </BackgroundImage>
      <Container className="main-container text-container" size="xl">
        <Title align="center">Trekking in Nepal</Title>
        <Text>
          <p>
            Nepal is a trekker's paradise, offering some of the most
            breathtaking and challenging trekking routes in the world. From the
            lush forests and terraced fields of the lowlands, to the high peaks
            and glaciers of the Himalayas, Nepal has something to offer trekkers
            of all levels of ability and experience.
          </p>
          <p>
            Trekking in Nepal is not for the faint of heart, as the rugged
            terrain and unpredictable weather of the Himalayas can make it a
            challenging activity. However, the rewards are well worth it, as
            trekkers are rewarded with stunning views of the mountains,
            opportunities to experience the local culture and hospitality, and a
            sense of accomplishment from tackling some of the world's most
            challenging trekking routes.
          </p>
        </Text>

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
          <p>
            Note that in Nepal, there are 28 "Trekking Peaks" (which require a
            permit to climb) but this is misleading as all of them require
            climbing or mountaineering, with rope, crampons and ice axes
            required. However, the easiest ones, Island Peak and Lobuche East
            can be attempted with no prior experience with certain agencies.
          </p>
          <p>Some poular treks include:</p>
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
            In the event of any healthcare you are trekking in Nepal, you will
            likely need to be evacuated to get to good healthcare. Insurance is
            therefore essential for your safety and financial security.
          </p>
          <p>
            When I first visited Nepal, I found it difficult and time consuming
            to figure out which insurers would cover me and which was the
            cheapest. That's why I made this website! If you click the button
            below, you'll be able to instantly find out which insurers will
            cover your trek and get a quote.
          </p>
        </Text>
        <Button radius="xl" color="red" component="a" href="/">
          Compare Insurers
        </Button>
      </Container>
    </div>
  );
}

export default TrekkingNepal;
