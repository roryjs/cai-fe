import Head from "next/head";
import { Inter } from "@next/font/google";

import {
  Text,
  Container,
  Anchor,
  MediaQuery,
  Button,
  Select,
  NumberInput,
  SimpleGrid,
  Grid,
  Center,
  Flex,
  Card,
  Image,
  Stack,
  Group,
  Title,
  Loader,
  MultiSelect,
  Progress,
  Popover,
  BackgroundImage,
} from "@mantine/core";

import React, { useEffect, useState } from "react";
import { insurerTable } from "@/components/insurertable";
const inter = Inter({ subsets: ["latin"] });

function Landing() {
  const [activity, setActivity] = useState("trekking");
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <div>
      <Head>
        <title>
          Compare Adventure & Extreme Sports Travel Insurance quotes
        </title>
        <meta
          name="description"
          content="Instantly find specialist insurers for activities such as Trekking, Mountaineering or off-piste skiing for certain altitudes and areas such as Nepal or the Alps."
        />
      </Head>
      <div
        style={{
          backgroundImage: "url('/images/background.jpg')",
          width: "100%",
          height: "100%",
          position: "fixed",
          backgroundSize: "cover",
          zIndex: -1000,
        }}
      ></div>
      <Container id="landing" className="main-container" size="lg">
        <Container style={{ zIndex: 1 }}>
          <Flex
            direction={"column"}
            align="center"
            gap="xl"
            style={{ marginBottom: 40 }}
          >
            <Container>
              <Title order={1} align="center" style={{}}>
                Need insurance for your next{" "}
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(rgb(238 134 165) 25%, rgb(233 15 42) 100%)",
                    color: "transparent",
                    backgroundClip: "text",
                    "-webkit-background-clip": "text",
                  }}
                >
                  adventure
                </span>
                ?
              </Title>
              <Text align="center">
                Compare insurers for trekking, off-piste skiing, mountaineering
                and more:
              </Text>
            </Container>
            <Flex align="stretch" direction="column" style={{ width: "100%" }}>
              <Card
                shadow="sm"
                p="lg"
                radius="md"
                withBorder
                className="formContainer"
              >
                <Flex className="formFlex" style={{ marginBottom: 10 }}>
                  <Center>
                    <Text className="formText">Select your activity:</Text>
                  </Center>

                  <Select
                    name="activity"
                    placeholder="Activity"
                    searchable
                    nothingFound="No options"
                    data={[
                      {
                        label: "Trekking",
                        value: "trekking",
                      },
                      {
                        label: "Backcountry/off-piste skiing",
                        value: "backcountry_skiing",
                      },
                      {
                        label: "Mountaineering",
                        value: "mountaineering",
                      },
                      {
                        label: "Rock Climbing",
                        value: "rock_climbing",
                      },
                      {
                        label: "Paragliding",
                        value: "paragliding",
                      },
                    ]}
                    value={activity}
                    onChange={(value) => setActivity(value)}
                  />
                </Flex>
                <br />
                {hydrated ? insurerTable(activity) : ""}
                <br />
                <br />
                <Text align="center" fw={700} fz="lg" color="black">
                  These insurers may be able to help you. <br />
                  It is important that you check with the insurer that they will
                  cover you and the activity you are doing before purchase.
                  <br />
                  <br />
                  This page was last updated in April 2023. We do not guarantee
                  that this information is accurate and this information does
                  not constitute advice.
                </Text>
                <br />
              </Card>
            </Flex>
          </Flex>
        </Container>

        {/* <Image
            src="/images/climbing_vector_small.svg"
            style={{
              width: "600px",
              height: "auto",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "scaleX(-1)",
              pointerEvents: "none",
              zIndex: -1,
            }}
          ></Image> */}
      </Container>
    </div>
  );
}

export default Landing;
