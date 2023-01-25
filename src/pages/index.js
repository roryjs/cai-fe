import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

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
} from "@mantine/core";
import { DateRangePicker } from "@mantine/dates";
import React, { useEffect, useState } from "react";
import { listQuotes } from "../components/quotes.js";
import { countryList, insurerNames } from "../components/static.js";

const inter = Inter({ subsets: ["latin"] });

function Landing() {
  const getQuotes = true;
  // const theme = useMantineTheme();
  const [result, setResult] = useState("");
  const [progress, setProgress] = useState("");
  const [popoverResidenceOpened, setPopoverResidenceOpened] = useState(false);
  const [popoverActivityOpened, setPopoverActivityOpened] = useState(false);
  const [activityValue, setActivityValue] = useState(false);
  const [showAltitudeSelect, setShowAltitudeSelect] = useState(false);
  var isGettingQuoteVar = false;
  const [isGettingQuote, setIsGettingQuote] = useState(false);
  const [showActivityPrefs, setShowActivityPrefs] = useState("");

  const handleQuotes = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (e.target.dates != "" || !getQuotes) &&
      (e.target.age?.value != "" || !getQuotes) &&
      e.target.destination?.value != "" &&
      e.target.activity?.value != "" &&
      e.target.altitude != ""
    ) {
      if (e.target.dates) {
        var startDate = new Date(e.target.dates.value.split(" – ")[0])
          .toISOString()
          .substring(0, 10);
        var endDate = new Date(e.target.dates.value.split(" – ")[1])
          .toISOString()
          .substring(0, 10);
      }
      setResult("");
      setIsGettingQuote(true);
      isGettingQuoteVar = true;
      setProgressBar();
      if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        var preurl = "http://localhost:8080/quotes";
      } else {
        var preurl = "https://cai-be.herokuapp.com/quotes";
      }
      console.log(e.target.dates?.value);
      fetch(
        preurl +
          `?resident_country=${encodeURIComponent(
            e.target.resident_country.value.trim()
          )}&destination=${encodeURIComponent(
            e.target.destination.value.trim()
          )}&activity=${encodeURIComponent(e.target.activity.value.trim())}` +
          (e.target.altitude?.value != undefined
            ? `&altitude=${encodeURIComponent(e.target.altitude.value)}`
            : ``) +
          (e.target.dates?.value != undefined
            ? `&start_date=${encodeURIComponent(
                startDate
              )}&end_date=${encodeURIComponent(endDate)}`
            : ``) +
          (e.target.age?.value != undefined
            ? `&age=${encodeURIComponent(e.target.age.value)}`
            : ``) +
          `&guide=${encodeURIComponent(
            e.target.guide_required.value
          )}&get_premium=${encodeURIComponent(getQuotes)}`,
        {
          method: "GET",
        }
      )
        .then((r) =>
          r.json().then((data) => ({ status: r.status, body: data }))
        )
        .then((obj) => {
          var quotes = listQuotes(obj.body.quotes);
          setResult(quotes);
          isGettingQuoteVar = false;
          setIsGettingQuote(false);
          setProgress("");
          setTimeout(() => {
            const element = document.getElementById("results-anchor");
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        });
    } else {
      alert("Enter all details");
    }
  };

  const setProgressBar = () => {
    var providers = [
      "Snowcard",
      "Adventures Direct",
      "Truetraveller",
      "Campbell Irvine",
      "Dogtag",
      "Bigcat",
    ];

    providers.forEach((e, i) => {
      setTimeout(() => {
        if (isGettingQuoteVar) {
          setProgress(
            <Stack>
              <Center>
                <Text align="center">
                  <p>Getting {e} quote...</p>
                  <Progress color="red" value={(100 * i) / 6} />
                  <p>This could take up to 10 seconds</p>
                </Text>
              </Center>
            </Stack>
          );
        }
      }, (i * 10000) / 6);
    });

    setTimeout(() => {
      setProgress("");
    }, 10000);
  };

  return (
    <div>
      <Head>
        <title>
          Compare Adventure & Extreme Sports Insurers |
          CompareAdventureInsurance
        </title>
        <meta
          name="description"
          content="Compare adventure trip and extreme sports insurance now! Instantly get quotes from insurers for activities such as Trekking, Mountaineering or off-piste skiing."
        />
      </Head>
      <div
        style={{
          backgroundColor: "#fbfdff",
          width: "100%",
          height: "100%",
          zIndex: -2,
          position: "absolute",
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
              <Text align="center">Instantly get quotes from insurers:</Text>
            </Container>
            <Flex
              align="stretch"
              direction="column"
              style={{ width: "100%", maxWidth: "700px" }}
            >
              <Card
                shadow="sm"
                p="lg"
                radius="md"
                withBorder
                className="formContainer"
              >
                <form onSubmit={(e) => handleSubmit(e)}>
                  <Container style={{ marginBottom: 25 }}>
                    <Flex className="formFlex" style={{ marginBottom: 10 }}>
                      <Text className="formText">Where are you going?</Text>
                      <Select
                        classNames={{ root: "formInput" }}
                        name="destination"
                        placeholder="Destination"
                        searchable
                        nothingFound="No options"
                        data={countryList}
                      />
                    </Flex>
                    {getQuotes ? (
                      <Flex className="formFlex" style={{ marginBottom: 35 }}>
                        <Text className="formText">
                          When are you travelling?
                        </Text>
                        <DateRangePicker
                          classNames={{ root: "formInput" }}
                          name="dates"
                          placeholder="Dates"
                          minDate={new Date()}
                        />
                      </Flex>
                    ) : (
                      ""
                    )}
                    <Flex className="formFlex" style={{ marginBottom: 10 }}>
                      <Text className="formText">Where are you resident?</Text>
                      <Popover
                        width={200}
                        position="right"
                        withArrow
                        shadow="md"
                        opened={popoverResidenceOpened}
                      >
                        <Popover.Target>
                          <Select
                            onFocusCapture={() =>
                              setPopoverResidenceOpened(true)
                            }
                            onBlurCapture={() =>
                              setPopoverResidenceOpened(false)
                            }
                            classNames={{ root: "formInput" }}
                            name="resident_country"
                            placeholder="Country"
                            searchable
                            nothingFound="No options"
                            data={[
                              {
                                label:
                                  "United Kingdom of Great Britain and Northern Ireland (the)",
                                value: "GB",
                              },
                            ]}
                          />
                        </Popover.Target>
                        <Popover.Dropdown sx={{ pointerEvents: "none" }}>
                          <Text size="sm">
                            We currently only support UK residents. More coming
                            soon!
                          </Text>
                        </Popover.Dropdown>
                      </Popover>
                    </Flex>
                    {getQuotes ? (
                      <Flex className="formFlex" style={{ marginBottom: 35 }}>
                        <Text className="formText">What age are you?</Text>
                        <NumberInput
                          classNames={{ root: "formInput" }}
                          name="age"
                          placeholder="Age"
                          min={18}
                        />
                      </Flex>
                    ) : (
                      ""
                    )}
                    <Flex className="formFlex" style={{ marginBottom: 10 }}>
                      <Text className="formText">
                        What activity are you doing?
                      </Text>
                      <Popover
                        width={200}
                        position="right"
                        withArrow
                        shadow="md"
                        opened={popoverActivityOpened}
                      >
                        <Popover.Target>
                          <Select
                            onFocusCapture={() =>
                              setPopoverActivityOpened(true)
                            }
                            onBlurCapture={() =>
                              setPopoverActivityOpened(false)
                            }
                            classNames={{ root: "formInput" }}
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
                                label: "Piste skiing",
                                value: "piste_skiing",
                              },
                              {
                                label: "Mountaineering",
                                value: "mountaineering",
                              },
                              {
                                label: "Rock Climbing",
                                value: "climbing",
                              },
                              ,
                              {
                                label: "Paragliding",
                                value: "paragliding",
                              },
                              {
                                label: "Other",
                                value: "other",
                              },
                            ]}
                            value={activityValue}
                            onChange={(e) => {
                              if (
                                e.includes("trekking") ||
                                e.includes("mountaineering")
                              ) {
                                setShowActivityPrefs(true);
                                setShowAltitudeSelect(true);
                              } else if (e != "") {
                                setShowActivityPrefs(true);
                                setShowAltitudeSelect(false);
                              } else {
                                setShowActivityPrefs(false);
                                setShowAltitudeSelect(false);
                              }
                              setActivityValue(e);
                            }}
                          />
                        </Popover.Target>
                        <Popover.Dropdown sx={{ pointerEvents: "none" }}>
                          <Text size="sm">
                            We currently only support a few activities. Select
                            "Other" if not listed.
                          </Text>
                        </Popover.Dropdown>
                      </Popover>
                    </Flex>
                    {showActivityPrefs ? (
                      <Container style={{ padding: 0 }}>
                        {showAltitudeSelect ? (
                          <div style={{ position: "relative" }}>
                            <Flex
                              className="formFlex"
                              style={{ marginBottom: 10 }}
                            >
                              <Text className="formText">
                                Maximum altitude you will reach?
                              </Text>
                              <NumberInput
                                classNames={{ root: "formInput" }}
                                name="altitude"
                                placeholder="Altitude"
                                step={100}
                                min={0}
                              />
                            </Flex>
                            <Text
                              show
                              style={{
                                position: "absolute",
                                top: 6,
                                right: 30,
                                color: "#adb5bd",
                                pointerEvents: "none",
                              }}
                            >
                              metres
                            </Text>
                          </div>
                        ) : (
                          ""
                        )}
                        <Flex className="formFlex" style={{ marginBottom: 10 }}>
                          <Text className="formText">
                            Will you have a guide?
                          </Text>
                          <Select
                            classNames={{ root: "formInput" }}
                            name="guide_required"
                            placeholder="Yes/No"
                            data={["Yes", "No"]}
                          />
                        </Flex>
                      </Container>
                    ) : null}
                  </Container>

                  <Container>
                    <Flex justify="center">
                      <Button
                        color="red"
                        radius="xl"
                        size="md"
                        type="submit"
                        // loading={isGettingQuote}
                      >
                        Compare Insurers
                      </Button>
                    </Flex>
                  </Container>
                </form>
              </Card>
            </Flex>
            <Container style={{ paddingBottom: 80 }}>{progress}</Container>
            <div style={{ position: "relative" }}>
              <div
                id="results-anchor"
                style={{ position: "absolute", top: "-50px" }}
              ></div>
            </div>
            {result ? (
              <Container>
                <Text align="center" fs="italic">
                  All quotes are indicative and do not gaurantee that the
                  insurer will cover you.
                  <br /> Always confirm the insurer will cover you and the
                  activity before purchasing.
                </Text>
              </Container>
            ) : (
              ""
            )}
            <Container style={{ paddingBottom: 150 }} id="result-container">
              {result}
            </Container>
          </Flex>
        </Container>
        <Image
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
        ></Image>
      </Container>
    </div>
  );
}

export default Landing;
