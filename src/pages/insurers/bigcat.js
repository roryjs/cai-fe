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

function InsurerBigCat() {
  return (
    <div>
      <Head>
        <title>
          BigCat Travel Insurance overview | CompareAdventureInsurance
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
              src="/images/bigcat-logo.png"
              align="center"
              width={350}
            ></Image>
          </Center>
        </Title>
        <Text>
          <p>
            BigCat Travel Insurance is a UK-based insurer that specializes in
            providing travel insurance for adventure seekers and thrill-seekers.
            The company was founded in 2017 with the aim of providing affordable
            and comprehensive coverage for activities such as skydiving, bungee
            jumping, and extreme sports.
            <p></p>
            Big Cat Insurance (registration No.FRN: 745388) is an appointed
            representative of Campbell Irvine Ltd (registration No.306242) who
            is authorised and regulated by the Financial Conduct Authority.
            Claims are handled by Claims Settlement Agencies Limited (CSAL) who
            are appointed as the Third Party Administrator of claims by our
            Insurer (Allianz).
          </p>
        </Text>

        <Text>
          <Title order={2}>Reviews</Title>
          <p>
            Check out reviews of TrueTraveller on{" "}
            <Anchor href="https://www.trustpilot.com/review/bigcattravelinsurance.com">
              Trustpilot
            </Anchor>{" "}
            and
            <Anchor href="https://www.feefo.com/en-GB/reviews/big-cat">
              Feefo
            </Anchor>{" "}
            .
          </p>
          <p>
            BigCat is generally well reviewed with particular comments on their
            friendly customer support. There are some negative reviews mostly
            relating covid-related claims. Claims Settlement Agencies Limited is
            generally poorly reviewed, although they handle claims across a
            number of insurers so this may not necessarily be indicative.
          </p>
        </Text>
        <Text>
          <Title order={2}>Activites</Title>
          <p>
            TrueTraveller covers more than 144 activites, with a number of
            different add-on packs. levels.
          </p>
          <p>
            <Title order={4}>Trekking</Title>
            With their standard coverage (no add-on) they cover Trekking outside
            of Nepal up to 2,500 metres. WIth the "Activty Pack" they additional
            cover "Trekking outside of Nepal up to 4,600 metres". With the
            "Extreme Activity Pack" they additionally cover "Hiking outside of
            Nepal over 4,600 metres". There is also a "Nepal Trekking Activity
            Pack" which covers "Trekking within Nepal up to 7,000m".
          </p>
          <p>
            <Title order={4}>Mountaineering</Title>
            With their "Extreme Activity Pack Plus", Bigcat will cover
            "Mountaineering up to 6,000 metres (organised groups, using ropes
            and with guides only)".
          </p>
          <p>
            <Title order={4}>Climbing</Title>
            Bigcat covers "Rock Climbing (Single pitch only - excludes solo
            climbing/climbing without ropes)" with their "Acitivity Pack". They
            cover "Multi-pitch rock climbing (outdoor - no free climbing or solo
            climbing)" with their "Extreme Activity Pack".
          </p>
          <p>
            <Title order={4}>Skiing</Title>
            With their "Winter Sports" pack, Bigcat will cover Cat skiing, Cross
            country skiing, Off piste skiing / snowboarding, Snow skiing,
            Snowboarding and Snow mobiling. With the "Winter Sports Plus" pack,
            this can be extended to cover snow parks, ice hockey and paraskiing.
          </p>
          <p>
            <Title order={4}>Paragliding</Title>
            Bigcat covers Paragliding with their "Extreme Activity Pack". They
            do not cover Paramotoring.
          </p>
        </Text>
        <Text>
          <Title order={2}>Flexibility</Title>
          <p>
            Bigcat offers the ability to purchase cover when you are already
            travelling along with both single and multi-trip coverage. Add-ons
            include Baggage & Personal Effects, Gadgets & Valuables and both
            Excess Waiver and Car Hire Excess Waiver.
          </p>
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
            href="https://www.bigcattravelinsurance.com"
            target="_blank"
          >
            Get a quote from Bigcat Travel Insurance now!
          </Button>
        </Center>
      </Container>
    </div>
  );
}

export default InsurerBigCat;
