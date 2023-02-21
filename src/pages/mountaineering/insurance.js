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
import { insurerList } from "../../components/static.js";

function MountaineeringInsurance() {
  return (
    <div>
      <Head>
        <title>Compare Mountaineering Travel Insurance quotes</title>
      </Head>
      <BackgroundImage className="title-image" src="/images/mountaineering.jpg">
        <div
          style={{ width: "100%", height: "400px", position: "relative" }}
        ></div>
      </BackgroundImage>
      <Container className="main-container text-container" size="xl">
        <Title align="center">Mountaineering Insurance</Title>
        <Text>Mountaineering insurance</Text>

        <Title order={2}>Medical & Rescue Cover</Title>
        <Text>
          If you get into trouble skiing off-piste in a remote area, you will
          likely need helicopter evacuation to a hostpital. It is important to
          ensure that your policy will cover this It is important to review the
          policy carefully and make sure that it provides enough coverage for
          your needs.
        </Text>

        <Title order={2}>Altitude limits</Title>
        <Text>
          Many Skiing insurance policies have altitude limits, which means that
          the coverage only applies up to a certain altitude. It is important to
          check with your insurer to see what the altitude limit is and to make
          sure it is suitable for your planned trek. Some insurers may offer
          additional coverage for trekkers planning to go above a certain
          altitude, so it is worth checking to see if this is an option.
        </Text>
        <Title order={2}>Insurers</Title>
        <Text>
          There are several insurance providers that offer off-piste skiing
          insurance. Here is a list of some of the most popular options:
        </Text>

        {insurerList}

        <Text>
          When looking for Skiing insurance, it is important to consider the
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

export default MountaineeringInsurance;
