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

function InsurerAdventuresDirect() {
  return (
    <div>
      <Head>
        <title>
          Adventures Direct Insurance overview | CompareAdventureInsurance
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
              src="/images/adventures-logo.jpg"
              align="center"
              width={400}
            ></Image>
          </Center>
        </Title>
        <Text>
          <Text>
            Adventures Travel Insurance (also called just "Adventures") is a
            UK-based insurer that specializes in providing travel insurance for
            adventure seekers and thrill-seekers. Adventures is arranged by P J
            Hayman & Company Limited.
          </Text>
          <Text>
            P J Hayman operates a number of different insurance products, with
            different names and websites:
            <br />
            <br />
            Longstay and Backpacker – Ideal for extended trips abroad, on a ‘Gap
            Year’ or round the world trip.
            <br />
            Euro Plus – Motor Breakdown Cover for people travelling to Europe by
            car.
            <br />
            Free Spirit – A specialist travel insurance policy for people of any
            age with existing medical conditions.
            <br />
            Cancellationplan – Specially designed to cover holidays in the UK.
            <br />
            Travel Plus – Travel insurance with ‘added value’ benefits.
            <br />
          </Text>
          <Text></Text>
        </Text>

        <Text>
          <Title order={2}>Reviews</Title>
          <Text>
            Check out reviews of Adventures Insurance on{" "}
            <Anchor href="https://uk.trustpilot.com/review/www.adventuresinsurance.co.uk">
              Trustpilot
            </Anchor>{" "}
            .
          </Text>
          <Text>
            There are a limited number of reviews for Adventures specifically,
            however, you can check the reviews for other products that P J
            Hayman operates such{" "}
            <Anchor href="https://uk.trustpilot.com/review/www.freespirittravelinsurance.com<">
              Free Spirit Travel Insurance
            </Anchor>
            .
          </Text>
        </Text>
        <Text>
          <Title order={2}>Activites</Title>
          <Text>
            Adventures Travel Insurance can cover a wide-range of activites. You
            can search for them here:{" "}
            <Anchor href="https://www.adventurescover.co.uk/activities/">
              Adventures Direct activites
            </Anchor>
            . However, for more extreme activies (such as trekking over 6000m,
            mountaineering over 4,500m, etc.), you must contact them directly on
            02392 419 093 for a "referral".
          </Text>
          <Text>
            <Title order={4}>Trekking</Title>
            Adventures Travel Insurance can cover Trekking 4000m to 6000m
            without referral.
          </Text>
          <Text>
            <Title order={4}>Mountaineering</Title>
            Adventures Travel Insurance can cover Mountaineering up to 4500m
            only without referral.
          </Text>
          <Text>
            <Title order={4}>Climbing</Title>
            Adventures Travel Insurance can cover Rock Climbing (with ropes & or
            guides or bolted) up to 4,000m only without referral.
          </Text>
          <Text>
            <Title order={4}>Skiing</Title>
            Adventures Travel Insurance can cover Skiing off-piste (not against
            local advice).
          </Text>
          <Text>
            <Title order={4}>Paragliding</Title>
            Adventures Travel Insurance can cover Paragliding in Europe only.
            They can cover Paramtoring worldwide.
          </Text>
        </Text>
        <Text>
          <Title order={2}>Flexibility</Title>
          <Text>
            Adventures Travel Insurance offers 3 levels of Policy cover, with a
            limited "Part A" policy that could be used as an add-on to other
            travel insurance as well as "Part B" and "Part C" that include
            further coverage for an increased Premium.
          </Text>
          <Text>
            Adventures Travel Insurance does not offer an option for
            "already-travelling" insurance.
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
            href="https://quote.adventurescover.co.uk/trip-details"
            target="_blank"
          >
            Get a quote from Adventures Travel Insurance now!
          </Button>
        </Center>
      </Container>
    </div>
  );
}

export default InsurerAdventuresDirect;
