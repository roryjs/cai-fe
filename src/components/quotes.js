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
} from "@mantine/core";

import { logos, insurerNames, insurerDetails } from "./static.js";

const colourMap = {
  snowcard: "#323338",
  dogtag: "#000000",
};

export const listQuotes = (list) => {
  const listItems = list.map((quote) => (
    <Card
      shadow="sm"
      p="lg"
      radius="md"
      withBorder
      style={{
        padding: 0,
        marginBottom: 15,
        overflow: "hidden",
      }}
      key={quote.insurer}
    >
      <MediaQuery
        query="(max-width: 1000px)"
        styles={{ justifyContent: "center" }}
      >
        <Flex
          gap="md"
          justify="left"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <Image
            src={logos[quote.provider]}
            height={150}
            fit="contain"
            className="quote-image"
            style={{
              background: colourMap[quote.provider],
              borderRight: "1px solid lightgrey",
            }}
          />
          <Flex
            className="quoteText"
            direction="column"
            align="left"
            style={{
              maxWidth: 400,
              marginLeft: 20,
              textAlign: "left",
            }}
          >
            <Title order={5}>{quote.description}</Title>
            <Text>Region covered: {quote.region}</Text>
            <Anchor href={insurerDetails[quote.provider]?.read_more_page}>
              Read more about {insurerNames[quote.provider]}
            </Anchor>
          </Flex>
          <MediaQuery
            query="(min-width: 1000px)"
            styles={{
              marginLeft: "auto !important",
              marginBottom: "0 !important",
            }}
          >
            <Stack
              justify="center"
              height="110px"
              style={{
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 20,
                gap: 0,
              }}
            >
              {" "}
              {!quote.premium ? (
                ""
              ) : (
                <div>
                  <Text fz="md" align="center">
                    Premium starting from:
                  </Text>
                  <Text fw={700} style={{ fontSize: 30 }} align="center">
                    {"£" + quote.premium.toFixed(2)}
                  </Text>
                </div>
              )}
              <Button
                color="red"
                variant="filled"
                radius="md"
                size="sm"
                component="a"
                href={insurerDetails[quote.provider]?.quote_url}
                target="_blank"
              >
                Get a full quote
              </Button>
            </Stack>
          </MediaQuery>
        </Flex>
      </MediaQuery>
    </Card>
  ));

  return listItems;
};
