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

function SkiingInsurance() {
  return (
    <div>
      <Head>
        <title>Compare Off-Piste Skiing Travel Insurance quotes</title>
        <meta
          name="description"
          content="Compare Skiing insurance now for Ski Touring, Off-Piste or other Winter Sports. Instantly get quotes from specialist insurers for adventure activities."
        />
      </Head>
      <BackgroundImage className="title-image" src="/images/skiing.jpg">
        <div
          style={{ width: "100%", height: "400px", position: "relative" }}
        ></div>
      </BackgroundImage>
      <Container className="main-container text-container" size="xl">
        <Title align="center">Off-Piste Skiing Insurance</Title>
        <Text>
          Travel insurers normally provide a "Winter Sports" add-on but this
          often does not cover off-piste Skiing. This is because off-piste
          Skiing is considered to be a higher risk activity. If you are planning
          to leave the pistes, it is important to make sure that your insurance
          policy covers you. CompareAdventureInsurance can save you time by
          getting quotes from a variety of insurers that cover your activity and
          destination.
        </Text>

        <Title order={2}>Medical & Rescue Cover</Title>
        <Text>
          If you get into trouble skiing off-piste in a remote area, you will
          likely need helicopter evacuation to a hostpital. It is important to
          ensure that your policy will cover this It is important to review the
          policy carefully and make sure that it provides enough coverage for
          your needs.
        </Text>

        <Title order={2}>Different terms</Title>
        <Text>
          There are many different variations of skiing! Off-piste, backcountry,
          sidecountry, freeride, ski touring, etc. You will need to be careful
          that the particular form you are doing is covered by your insurer and
          you should check with them if you are unsure.
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

export default SkiingInsurance;
