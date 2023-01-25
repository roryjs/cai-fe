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
        <title>Trekking in the Andes | CompareAdventureInsurance</title>
      </Head>
      <BackgroundImage className="title-image" src="/images/trekking-andes.jpg">
        <div
          style={{ width: "100%", height: "400px", position: "relative" }}
        ></div>
      </BackgroundImage>
      <Container className="main-container text-container" size="xl">
        <Title align="center">Trekking in the Andes</Title>
        <Text>
          <p>
            The Andes mountain range, which runs along the western coast of
            South America, offers some of the most stunning and challenging
            trekking routes in the world. From the towering peaks and glacial
            valleys of Patagonia, to the lush forests and towering waterfalls of
            the Amazon Basin, the Andes provide a wealth of opportunities for
            trekkers of all levels of ability and experience. One of the most
            famous trekking routes in the Andes is the Inca Trail, which leads
            to the ancient Inca city of Machu Picchu in Peru. The trail, which
            passes through the Andean mountains and passes by several Inca
            ruins, offers breathtaking views of the surrounding landscape and a
            glimpse into the history and culture of the region. The trek
            typically takes four days to complete, and can be challenging due to
            the high altitude and rugged terrain.
          </p>
          <p>
            Another popular trekking destination in the Andes is Patagonia,
            which is home to some of the highest and most rugged peaks in the
            range. Trekkers can explore the stunning landscapes of Torres del
            Paine National Park in Chile, which offers a variety of trekking
            routes ranging from easy, day hikes to challenging multi-day
            expeditions. The park is famous for its towering peaks, glaciers,
            and crystal-clear lakes, and provides a unique opportunity to see
            some of the most beautiful and unspoiled scenery in the world.
          </p>
        </Text>

        <Text>
          <Title order={2}>Treks</Title>
          <p>
            Note that in Nepal, there are 28 "Trekking Peaks" (which require a
            permit to climb) but this is very misleading as all of these require
            climbing or mountaineering, with rope, crampons and ice axes
            required. Popular treks include:
          </p>
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
            In the event of any health issues while you are trekking in the
            Andes, you will likely need to be evacuated to get to good
            healthcare. Insurance is therefore essential for your safety and
            financial security.
          </p>
          <p>
            It can be difficult and time consuming to figure out which insurers
            would cover me and which was the cheapest. That's why I made this
            website! If you click the button below, you'll be able to instantly
            find out which insurers will cover your trek and get a quote.
          </p>
        </Text>
        <Button radius="xl" color="red" component="a" href="/">
          Compare Insurers
        </Button>
      </Container>
    </div>
  );
}

export default TrekkingAndes;
