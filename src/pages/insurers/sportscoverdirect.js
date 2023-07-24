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

function InsurerSportsCoverDirect() {
  return (
    <div>
      <Head>
        <title>
          SportsCover Direct Insurance overview | CompareAdventureInsurance
        </title>
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
              src="/images/sportscover-logo.svg"
              align="center"
              width={500}
            ></Image>
          </Center>
        </Title>

        <Text>
          <Text>
            SportsCover direct is a UK based insurer of adventure sports and
            travel insurance that has been around since 2002. They cover UK
            residents up to 74 years old for single, top-up or annual multi-trip
            policies.
          </Text>
          <Text></Text>
        </Text>

        <Text>
          <Title order={2}>Reviews</Title>
          <Text>
            Check out reviews of SportsCover direct on{" "}
            <Anchor href="https://uk.trustpilot.com/review/www.sportscoverdirect.com">
              Trustpilot
            </Anchor>{" "}
            and{" "}
            <Anchor href="https://www.feefo.com/en-GB/reviews/sportscover-direct">
              Feefo
            </Anchor>
            .
          </Text>
          <Text>
            SportsCover direct is generally well reviewed with particular
            comments on their phone advisors. SportsCover use the third-part
            "Roger Rich & co" to manage claims.
          </Text>
        </Text>
        <Text>
          <Title order={2}>Flexibility</Title>
          <Title order={4}>Top-up insurance</Title>
          <Text>
            SportsCover direct offers a dedicated "Top-up insurance policy" for
            those who already have travel insurance but want to add adventure
            sports cover to cover that activity only.
          </Text>

          <Text>
            SportsCover direct also offers a number of additional services and
            benefits that can be added to their insurance policies. These
            include 24/7 emergency assistance, access to a global network of
            medical providers, and coverage for lost or stolen luggage. The
            company also offers a range of optional extras, such as travel delay
            insurance and trip cancellation insurance.
          </Text>
        </Text>
        <Text>
          <Title order={2}>Activites</Title>
          <Text>
            SportsCover direct covers 500+ activites, with 7 different "Sports
            groups".
          </Text>
          <Text>
            <Title order={4}>Trekking</Title>
            SportsCover Direct covers Trekking up to 7,000m (23,000ft) with
            options spread across the 8 different "Sports groups" depending on
            the maximum altitude and whether the trek is in Nepal or not.
          </Text>
          <Text>
            <Title order={4}>Mountaineering</Title>
            SportsCover Direct covers Mountaineering (with ropes &/or guides) in
            their "sports group" 7.
          </Text>
          <Text>
            <Title order={4}>Climbing</Title>
            SportsCover direct covers Rock/Multi-pitch climbing in their "sports
            group" 4 with Ice Climbing and sea cliff climbing in their "sports
            group" 7.
          </Text>
          <Text>
            <Title order={4}>Skiing</Title>
            SportsCover direct covers off-piste/backcountry skiing in their
            "sports group" 5.
          </Text>
          <Text>
            <Title order={4}>Paragliding</Title>
            SportsCover direct does not cover Paragliding without an instructor.
            It does cover Paragliding with an instructor in their "sports group"
            7.
          </Text>
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
            href="https://www.sportscoverdirect.com"
            target="_blank"
          >
            Get a quote from SportsCover direct now!
          </Button>
        </Center>
      </Container>
    </div>
  );
}

export default InsurerSportsCoverDirect;
