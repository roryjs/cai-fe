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

function InsurerCampbellIrvine() {
  return (
    <div>
      <Head>
        <title>
          Campbell Irvine Insurance overview | CompareAdventureInsurance
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
              src="/images/campbellirvine-logo.png"
              align="center"
              width={350}
            ></Image>
          </Center>
        </Title>
        <Text>
          <Text>
            TrueTraveller is a UK and Czech Republic based insurer of adventure
            sports and travel insurance that has been around since 2010. They
            cover UK and European residents up to 65 years old for single or
            annual multi-trip policies.
          </Text>
          <Text>
            Campbell Irvine Ltd (registration No.306242) is authorised and
            regulated by the Financial Conduct Authority. Claims are handled by
            Claims Settlement Agencies Limited (CSAL) who are appointed as the
            Third Party Administrator of claims by our Insurer (Allianz).
          </Text>
        </Text>

        <Text>
          <Title order={2}>Reviews</Title>
          <Text>
            Check out reviews of TrueTraveller on{" "}
            <Anchor href="https://www.google.com/maps/place/Campbell+Irvine+Ltd/@51.4977177,-0.2001463,17z/data=!4m7!3m6!1s0x48760ff21575e961:0x6c9465644021e5b5!8m2!3d51.4977273!4d-0.1979179!9m1!1b1">
              Google
            </Anchor>{" "}
            . As Big Cat Insurance is a representative of Campbell Irvine
            Direct, their reviews are indicative of Campbell Irvine:{" "}
            <Anchor href="https://www.feefo.com/en-GB/reviews/big-cat">
              Big Cat Feefo reviews
            </Anchor>{" "}
            . Claims are handled by Claims Settlement Agencies Limited, so you
            can check out their reviews on:
            <Anchor href="https://www.trustpilot.com/review/www.csal.co.uk">
              Trustpilot
            </Anchor>
          </Text>
          <Text>
            Campbell Irvine is generally well reviewed although there are a
            limited number of reviews. Claims Settlement Agencies Limited is
            generally poorly reviewed, although they handle claims across a
            number of insurers so this may not necessarily be indicative.
          </Text>
        </Text>
        <Text>
          <Title order={2}>Activites</Title>
          <Text>
            TrueTraveller covers 92 activites, with 4 different "Activity Pack"
            levels.
          </Text>
          <Text>
            <Title order={4}>Trekking</Title>
            As standard, Campbell Irvine Direct covers Trekking/Rambling/Hiking
            up to 5,000m without a guide and Trekking between 5,000m and 7,000m
            when accompanied by a qualified guide.
          </Text>
          <Text>
            <Title order={4}>Climbing</Title>
            Campbell Irvine does not cover outdoor rock climbing of any sort.
          </Text>
          <Text>
            <Title order={4}>Mountaineering</Title>
            Campbell Irvine does not cover outdoor mountaineering of any sort.
          </Text>
          <Text>
            <Title order={4}>Skiing</Title>
            As standard, Campbell Irvine only covers cross-country skiing. With
            the optional "Winter Sports Extension" they additional cover
            Downhill Skiing and Snowboarding but only cover off-pieste if you
            are with a qualified instructor or in a group of no less than three
            persons in possession of working communications or portable
            telephones.
          </Text>
          <Text>
            <Title order={4}>Paragliding</Title>
            Campbell Irvine does not cover Paragliding of any sort.
          </Text>
        </Text>
        <Text>
          <Title order={2}>Flexibility</Title>
          <Text>
            Campbell Irvine offers both Single Trip and Multi-Trip insurance
            with additional Excess Waiver and Missed Flight Connection options.
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
            href="https://www.campbellirvinedirect.com/CIDirect/"
            target="_blank"
          >
            Get a quote from Campbell Irvine now!
          </Button>
        </Center>
      </Container>
    </div>
  );
}

export default InsurerCampbellIrvine;
