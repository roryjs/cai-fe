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
        <meta
          name="description"
          content="Compare Mountaineering insurance now for altitudes of up to 5000m, 6000m or more in areas like Nepal or the Alps. Instantly get quotes from specialist insurers for adventure activities."
        />
      </Head>
      <BackgroundImage className="title-image" src="/images/mountaineering.jpg">
        <div
          style={{ width: "100%", height: "400px", position: "relative" }}
        ></div>
      </BackgroundImage>
      <Container className="main-container text-container" size="xl">
        <Title align="center">Mountaineering Insurance</Title>
        <Text>
          Most traditional insurers will not cover mountaineering, where it
          involves the use of ropes, ice axes or crampons. That is why you will
          likely need to take out insurance with a specialist insurer. Insurers
          will often categorise their policies by altitude, normally up to
          5000m, 6000m or more. They may also define the category based on area
          (often Nepal is considered to be a higher risk) and whether or not you
          have a guide or are on a recognised route.
        </Text>

        <Title order={2}>Medical & Rescue Cover</Title>
        <Text>
          If you get into trouble climbing in a remote area, you will likely
          need helicopter evacuation to a hostpital. It is important to ensure
          that your policy will cover this It is important to review the policy
          carefully and make sure that it provides enough coverage for your
          needs.
        </Text>

        <Title order={2}>Altitude limits</Title>
        <Text>
          Many Mountaineering insurance policies have altitude limits. If at any
          point of your expedition you exceed this altitude, your insurance may
          be invalid for the whole trip so it is important you do not exceed it.
        </Text>
        <Title order={2}>Insurers</Title>
        <Text>
          There are several insurance providers that offer Mountaineering
          insurance. Here is a list of some of the most popular options:
        </Text>

        {insurerList}

        <Text>
          When looking for Mountaineering insurance, it is important to consider
          the type of coverage that is offered, the activities that are covered
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
