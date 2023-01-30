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

function TrekkingInsurance() {
  return (
    <div>
      <Head>
        <title>Trekking Insurance | CompareAdventureInsurance</title>
      </Head>
      <BackgroundImage className="title-image" src="/images/nepal_trekking.jpg">
        <div
          style={{ width: "100%", height: "400px", position: "relative" }}
        ></div>
      </BackgroundImage>
      <Container className="main-container text-container" size="xl">
        <Title align="center">Trekking Insurance</Title>
        <Text>
          Trekking insurance is a type of travel insurance that is specifically
          designed for individuals who are planning to go on a trekking or
          hiking trip. It is important to have this type of insurance as it can
          provide coverage for a variety of potential risks and hazards that may
          be encountered while trekking, such as accidents, injuries, and
          illnesses.
        </Text>

        <Title order={2}>Medical & Rescue Cover</Title>
        <Text>
          One important aspect of trekking insurance is coverage for emergency
          medical expenses. This can include coverage for medical treatment,
          hospitalization, and transportation in the event of an accident or
          illness. It is also important to note that some policies may cover the
          cost of rescue and evacuation in case of an emergency. This can
          include coverage for helicopter rescue and transportation to a
          hospital. It is important to review the policy carefully and make sure
          that it provides enough coverage for your needs.
        </Text>

        <Title order={2}>Altitude limits</Title>
        <Text>
          Many trekking insurance policies have altitude limits, which means
          that the coverage only applies up to a certain altitude. It is
          important to check with your insurer to see what the altitude limit is
          and to make sure it is suitable for your planned trek. Some insurers
          may offer additional coverage for trekkers planning to go above a
          certain altitude, so it is worth checking to see if this is an option.
        </Text>

        <Title order={2}>Trekking in Nepal</Title>
        <Text>
          If you are planning to trek in Nepal, it is important to make sure
          that your trekking insurance policy covers trekking in Nepal
          specifically. Some policies may have exclusions or limitations for
          certain countries, so it is important to check with your insurer to
          make sure that your policy covers trekking in Nepal. It is also
          important to note that some trekking routes in Nepal require a TIMS
          card (Trekkers’ Information Management System) and some policies may
          not cover the cost of the TIMS card.
        </Text>

        <Title order={2}>Insurers</Title>
        <Text>
          When looking for trekking insurance, it is important to shop around
          and compare different policies and insurers. Some popular trekking
          insurers include World Nomads, True Traveller, and Trekcover. It is
          also worth checking with your travel insurance provider to see if they
          offer trekking insurance as an add-on to their standard travel
          insurance policy.
        </Text>

        <Text>
          When looking for trekking insurance, it is important to consider the
          type of coverage that is offered, the activities that are covered
          under the policy, and the limits of the coverage.
          CompareAdventureInsurance can save you time by getting quotes from a
          variety of insurers that cover your activity and destination. Click
          below to compare now!
        </Text>
        <Button radius="xl" color="red" component="a" href="/">
          Compare Insurers
        </Button>
      </Container>
    </div>
  );
}

export default TrekkingInsurance;
