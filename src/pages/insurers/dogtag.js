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
  Anchor,
} from "@mantine/core";
import Head from "next/head";

function InsurerSnowcard() {
  return (
    <div>
      <Head>
        <title>Dogtag Insurance overview | CompareAdventureInsurance</title>
      </Head>
      <BackgroundImage className="title-image" src="/images/nepal_trekking.jpg">
        <div
          style={{ width: "100%", height: "400px", position: "relative" }}
        ></div>
      </BackgroundImage>
      <Container className="main-container text-container" size="xl">
        <Title align="center">
          <Center>
            <Image
              src="/images/truetraveller-logo.svg"
              align="center"
              width={400}
            ></Image>
          </Center>
        </Title>
        <Text>
          <Text>
            Snowcard is a UK-based insurer that specializes in providing travel
            insurance for winter and extreme sports. The company was founded in
            1991 with the aim of providing coverage
            <Text></Text>
            One of the key features of Snowcard's insurance policies is the
            level of coverage they provide for winter sports activities. The
            company offers comprehensive coverage for a wide range of
            activities, including skiing, snowboarding, ice skating, and ice
            climbing.
          </Text>
          <Text>Claims are managed by Mayday Claims.</Text>
        </Text>

        <Text>
          <Title order={2}>Reviews</Title>
          <Text>
            Check out reviews of Snowcard on{" "}
            <a href="https://www.trustpilot.com/review/snowcard.co.uk">
              Trustpilot
            </a>
            .
          </Text>
          <Text>Snowcard is generally well reviewed.</Text>
        </Text>
        <Text>
          <Title order={2}>Activites</Title>
          <Text>
            Snowcard covers a large number of activites with clearly defined
            defitions. You can check them all out{" "}
            <Anchor href="https://www.snowcard.co.uk/activities-covered">
              Snowcard
            </Anchor>
            .
          </Text>
          <Text>
            <Title order={4}>Trekking</Title>
            Snowcard can cover Trekking upto 4000m in the greater ranges (e.g.
            Nepal, South America) with their "Adventure Plus" plan and Trekking
            upto 6000m in the greater ranges (eg, Everest base camp, Inca Trail,
            Kilimanjaro) with their "Max Adventure" plan.
          </Text>
          <Text>
            <Title order={4}>Climbing</Title>
            Snowcard can cover Sport climbing (involving permanent fixed
            anchors) with their "Adventure Plus" plan and Multi pitch rock
            climbing (where leader placed protection is involved) with their
            "Max Adventure" plan. They cover Ice climbing with their "Extreme
            Adventure" plan.
          </Text>
          <Text>
            <Title order={4}>Mountaineering</Title>
            Snowcard can cover Trekking peaks upto 7000m (as designated in the
            Himalaya, e.g. Island Peak, Mera Peak etc) with their "Extreme
            Adventure" plan and Mountaineering upto 7000m (professional guided
            trips only, please submit itinerary prior to departure for
            agreement) with their "Extreme Adventure" plan.
          </Text>
          <Text>
            <Title order={4}>Skiing</Title>
            Snowcard can cover Skiing - on and off piste with or without a guide
            with their "Adventure Plus" pack. They can additionall cover Ski
            touring (ascending using skins) - back country skiing or
            snowboarding, skidoo, snowcat or helicopter skiing with their "Max
            Adventure" plan. They can also cover a wive variety of other types
            of snow sports.
          </Text>
          <Text>
            <Title order={4}>Paragliding</Title>
            Snowcard does not cover Paragliding or any other aerial sports.
          </Text>
        </Text>
        <Text>
          <Title order={2}>Flexibility</Title>
          Snowcard offers Single trip and Annual multi-trip plans along with
          Couple, Family and Group options. You can also choose the precise
          cover limit.
          <Text></Text>
        </Text>
        <br />
        <Text italic="true" weight="700">
          All information provided is indicative and may be out of date - you
          should always check with the insurer that they will cover your
          activity.
        </Text>
        <Center>
          <Button
            size="xl"
            radius="xl"
            color="red"
            component="a"
            href="https://www.snowcard.co.uk"
            target="_blank"
          >
            Get a quote from Snowcard now!
          </Button>
        </Center>
      </Container>
    </div>
  );
}

export default InsurerSnowcard;
