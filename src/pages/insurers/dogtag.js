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

function InsurerDogtag() {
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
              src="/images/dogtag-logo.png"
              align="center"
              width={400}
            ></Image>
          </Center>
        </Title>
        <Text>
          <Text>
            Dogtag is a UK-based insurer that specializes in providing travel
            insurance for extreme sports and adventure activities. The company
            was founded in 1999 with the aim of providing coverage for
            adventurers and explorers.
          </Text>
          <Text>
            One of the key features of Dogtag's insurance policies is the level
            of coverage they provide for a wide range of adventure sports and
            activities, including skiing, snowboarding, trekking,
            mountaineering, climbing, and more.
          </Text>
          <Text>Claims are managed by Dogtag themselves.</Text>
        </Text>
        <Text>
          <Title order={2}>Reviews</Title>
          <Text>
            Check out reviews of Dogtag on{" "}
            <a href="https://www.squaremouth.com/travel-insurance-providers/dogtag/reviews">
              Squaremouth
            </a>
            .
          </Text>
          <Text>Dogtag is generally well reviewed.</Text>
        </Text>
        <Text>
          <Title order={2}>Activities</Title>
          <Text>
            Dogtag covers a large number of activities with clearly defined
            definitions. You can check them all out{" "}
            <Anchor href="https://www.dogtag.co.uk/what-we-cover">
              Dogtag
            </Anchor>
            .
          </Text>
          <Text>
            <Title order={4}>Trekking</Title>
            Dogtag can cover trekking up to 7000m in altitude with their
            "Extreme" plan, and up to 4000m in altitude with their "Activity"
            plan. Their policies also cover personal accident, emergency medical
            expenses, repatriation, and more.
          </Text>
          <Text>
            <Title order={4}>Climbing</Title>
            Dogtag covers rock climbing, ice climbing, and mountaineering up to
            6,00m (they can quote for higher altitudes if you speak directly to
            them). They also offer coverage for personal accident, emergency
            medical expenses, repatriation, and more.
          </Text>
          <Text>
            <Title order={4}>Skiing and Snowboarding</Title>
            Dogtag can cover both skiing and snowboarding on-piste, or
            backcountry/off-piste skiing with/without a guide. They also offer
            coverage for personal accident, emergency medical expenses,
            repatriation, and more.
          </Text>
          <Text>
            <Title order={4}>Paragliding</Title>
            Dogtag can cover Paragliding as a pilot.
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
            href="https://www.dogtag.co.uk/quote/"
            target="_blank"
          >
            Get a quote from Dogtag now!
          </Button>
        </Center>
      </Container>
    </div>
  );
}

export default InsurerDogtag;
