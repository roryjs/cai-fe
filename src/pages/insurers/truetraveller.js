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

function InsurerTrueTraveller() {
  return (
    <div>
      <Head>
        <title>
          TrueTraveller Insurance overview | CompareAdventureInsurance
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
              src="/images/truetraveller-logo.svg"
              align="center"
              width={500}
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
          <Text></Text>
        </Text>

        <Text>
          <Title order={2}>Reviews</Title>
          <Text>
            Check out reviews of TrueTraveller on{" "}
            <Anchor href="https://www.trustpilot.com/review/www.truetraveller.com">
              Trustpilot
            </Anchor>{" "}
            and{" "}
            <Anchor href="https://www.reviews.co.uk/company-reviews/store/true-traveller-insurance">
              Reviews.io
            </Anchor>
            .
          </Text>
          <Text>
            TrueTraveller is generally well reviewed with particular comments on
            their fast response times. TrueTraveller does not use a third-party
            to manage claims.
          </Text>
        </Text>
        <Text>
          <Title order={2}>Flexibility</Title>
          <Title order={4}>Already travelling</Title>
          <Text>
            TrueTraveller offers the option to take out insurance after you have
            left home already. There is a waiting period of 48 hours before the
            insurance is valid.
          </Text>
          <Title order={4}>Top-up insurance</Title>
          <Text>
            TrueTraveller does not offer dedicated "Top-up insurance" which you
            could use in addition to another policy. For their standard single
            trip policies, the policy "starts when you leave your home to
            commence your trip" and therefore you may not be covered if the
            dates selected do not cover the start of your trip. However, you
            could use the "Already Travelling" policy and buy the insurance
            after the start of your triptrip to only include the dates of your
            activity. Truetraveller offer a "True Value" package without extras
            such as travel delay compensation which could be used.
          </Text>

          <Text>
            TrueTraveller also offers a number of additional services and
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
            TrueTraveller covers 92 activites, with 4 different "Activity Pack"
            levels.
          </Text>
          <Text>
            <Title order={4}>Trekking</Title>
            With their Extreme Pack, they cover Trekking at any altitude. Note
            that their definition of Trekking can extend to some specific easy
            Mountaineering peaks (which involve crampons and ice axe) such as
            Island and Mera Peak, Lobuche East, Kyajo Ri, Stok Kangri, Kang
            Yatse II, Mount Toubkal and Nirekha Peak. You can confirm which
            specific peaks are covered by seraching for them the search box on
            the Policy options page or by calling them.
          </Text>
          <Text>
            <Title order={4}>Mountaineering</Title>
            TrueTraveller can cover technical mountaineering up to 6,000m. They
            do not require a guide. They do not cover free mountaineering,
            climbing in remote of inaccessible regions, exploratory expeditions
            or new routes.
          </Text>
          <Text>
            <Title order={4}>Climbing</Title>
            TrueTraveller covers Rock Climbing (outdoor/traditional/sport
            climbing/bolted/aid climbing - with the exception of soloing. They
            can also seperately cover Ice Climbing and Sea Cliff climbing. A
            guide is not required.
          </Text>
          <Text>
            <Title order={4}>Skiing</Title>
            TrueTraveller can cover backcountry/off-piste skiing/snowboard
            (outside of the resort boundary) and limited use of snow/terrain
            parks (beginner/intermediate only, no jumps aerials or acrobatics)
            with their "Winter Sports" pack. They do not require a guide.
          </Text>
          <Text>
            <Title order={4}>Paragliding</Title>
            TrueTraveller can covers paragliding. They do not cover
            Paramotoring.
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
            href="https://www.truetraveller.com"
            target="_blank"
          >
            Get a quote from Truetraveller now!
          </Button>
        </Center>
      </Container>
    </div>
  );
}

export default InsurerTrueTraveller;
