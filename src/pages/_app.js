import "@/styles/App.scss";
import "@/styles/Landing.scss";
import "@/styles/TextPages.scss";
import {
  MantineProvider,
  Text,
  AppShell,
  BackgroundImage,
  Header,
  Center,
  Group,
  Title,
  Footer,
  Container,
  Menu,
  Button,
} from "@mantine/core";
import Link from "next/link";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DM1Z1CD3FG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-DM1Z1CD3FG');
        `}
        </Script>
      </Head>
      <AppShell
        padding={0}
        header={
          <Header style={{ backgroundColor: "rgb(255,255,255,0.94)" }}>
            <Container
              fluid
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Group position="center" style={{ gap: 0 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  width="48"
                  style={{ transform: "scale(0.75)", fill: "rgb(48 55 166)" }}
                >
                  <path d="m2 36 12-16 9.75 13H40L28 17.05l-6.25 8.3-1.9-2.5L28 12l18 24Zm25.5-3ZM8 33h12l-6-8Zm0 0h12Z" />
                </svg>
                <Title
                  order={3}
                  style={{
                    letterSpacing: -1,
                  }}
                  component={Link}
                  href="/"
                >
                  Compare
                  <span
                    style={{
                      backgroundImage:
                        "linear-gradient(rgb(112, 153, 218), rgb(39, 44, 124))",
                      color: "transparent",
                      backgroundClip: "text",
                      "-webkit-background-clip": "text",
                    }}
                  >
                    Adventure
                  </span>
                  Insurance
                </Title>
              </Group>
              <Group spacing={5}>
                <Menu trigger="hover" exitTransitionDuration={0}>
                  <Menu.Target>
                    <a className="menu-link">
                      <Center>
                        <span>Insurers</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-chevron-down"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M6 9l6 6l6 -6" />
                        </svg>
                      </Center>
                    </a>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item
                      component={Link}
                      href="/insurers/adventuresdirect"
                    >
                      Adventures Direct
                    </Menu.Item>
                    <Menu.Item component={Link} href="/insurers/bigcat">
                      Big Cat
                    </Menu.Item>
                    <Menu.Item component={Link} href="/insurers/campbellirvine">
                      Campbell Irvine
                    </Menu.Item>
                    <Menu.Item component={Link} href="/insurers/dogtag">
                      Dogtag
                    </Menu.Item>
                    <Menu.Item component={Link} href="/insurers/snowcard">
                      Snowcard
                    </Menu.Item>
                    <Menu.Item
                      component={Link}
                      href="/insurers/sportscoverdirect"
                    >
                      SportsCover direct
                    </Menu.Item>
                    <Menu.Item component={Link} href="/insurers/truetraveller">
                      TrueTraveller
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
                <Menu trigger="hover" exitTransitionDuration={0}>
                  <Menu.Target>
                    <a className="menu-link">
                      <Center>
                        <span>Trekking Insurance</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-chevron-down"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M6 9l6 6l6 -6" />
                        </svg>
                      </Center>
                    </a>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item component={Link} href="/trekking/insurance">
                      Trekking Insurance
                    </Menu.Item>
                    <Menu.Item component={Link} href="/trekking/andes">
                      Andes
                    </Menu.Item>
                    <Menu.Item component={Link} href="/trekking/nepal">
                      Nepal
                    </Menu.Item>
                    <Menu.Item component={Link} href="/trekking/newzealand">
                      New Zealand
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
                <Menu trigger="hover" exitTransitionDuration={0}>
                  <Menu.Target>
                    <a className="menu-link">
                      <Center>
                        <span>Himalayan Peaks</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-chevron-down"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M6 9l6 6l6 -6" />
                        </svg>
                      </Center>
                    </a>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item component={Link} href="/himalayanpeaks/merapeak">
                      Mera Peak
                    </Menu.Item>

                    <Menu.Item
                      component={Link}
                      href="/himalayanpeaks/islandpeak"
                    >
                      Island Peak
                    </Menu.Item>

                    <Menu.Item
                      component={Link}
                      href="/himalayanpeaks/lobuchepeak"
                    >
                      Lobuche Peak
                    </Menu.Item>

                    <Menu.Item component={Link} href="/himalayanpeaks/kyajori">
                      Kyajo Ri
                    </Menu.Item>

                    <Menu.Item component={Link} href="/himalayanpeaks/yalapeak">
                      Yala Peak
                    </Menu.Item>

                    <Menu.Item
                      component={Link}
                      href="/himalayanpeaks/pisangpeak"
                    >
                      Pisang Peak
                    </Menu.Item>

                    <Menu.Item
                      component={Link}
                      href="/himalayanpeaks/chuluwest"
                    >
                      Chulu West
                    </Menu.Item>

                    <Menu.Item component={Link} href="/himalayanpeaks/tentpeak">
                      Tent Peak
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
                <Menu>
                  <Link className="menu-link" href="/mountaineering/insurance">
                    Mountaineering Insurance
                  </Link>
                  <Link className="menu-link" href="/skiing/insurance">
                    Skiing Insurance
                  </Link>
                  <Button
                    radius="xl"
                    sx={{ height: 30 }}
                    component={Link}
                    href="/"
                  >
                    Compare insurers
                  </Button>
                </Menu>
              </Group>
            </Container>
          </Header>
        }
        style={{ position: "relative" }}
      >
        <Component {...pageProps} />
        <Footer
          style={{
            position: "absolute",
            bottom: 0,
            color: "#575757",
          }}
        >
          <Text align="center">
            Rysa Limited Trading as CompareAdventureInsurance.com. We do not
            offer advice. All information shown is indicative and should be
            confirmed with the insurer before purchase.
          </Text>
        </Footer>
      </AppShell>
    </MantineProvider>
  );
}
