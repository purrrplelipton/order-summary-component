import { React } from "react";
import {
  Heading,
  Text,
  Button,
  ButtonGroup,
  Grid,
  Box,
  Image,
} from "@chakra-ui/react";

import illustrationHero from "./assets/images/illustration-hero.svg";
import iconMusic from "./assets/images/icon-music.svg";
import patternBackgroundMobile from "./assets/images/pattern-background-mobile.svg";

function App() {
  return (
    <Grid
      as={"article"}
      minHeight={"100vh"}
      minWidth={"full"}
      padding={7}
      placeContent={"center"}
      backgroundColor={"blu.94"}
      color={"blu.55"}
      backgroundImage={patternBackgroundMobile}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"contain"}
      backgroundPosition={"top"}
    >
      <Grid backgroundColor={"white"} borderRadius={"2xl"} overflow={"hidden"}>
        <Box>
          <Image
            src={illustrationHero}
            alt={"an illustration of a woman listening to music with earphones"}
            objectFit={"cover"}
            width={"full"}
            height={"full"}
          />
        </Box>
        <Grid gap={6} padding={7} paddingY={8} textAlign={"center"}>
          <Heading
            as={"h1"}
            fontSize={"2xl"}
            fontWeight={"black"}
            color={"blu.23"}
          >
            Order Summary
          </Heading>
          <Text>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </Text>
          <Grid
            gridTemplateColumns={"1fr auto"}
            backgroundColor={"blu.98"}
            borderRadius={"xl"}
            padding={4}
            verticalAlign={"center"}
            fontSize={"sm"}
          >
            <Grid
              placeContent={"center"}
              gap={4}
              gridTemplateColumns={"auto 1fr"}
            >
              <Image src={iconMusic} alt={"a beamed note icon"} />
              <Grid alignContent={"center"} textAlign={"left"}>
                <Heading
                  as={"h2"}
                  fontSize={"inherit"}
                  fontWeight={"bold"}
                  color={"blu.23"}
                >
                  Annual Plan
                </Heading>
                <Text>$59.99/year</Text>
              </Grid>
            </Grid>
            <Button
              padding={0}
              borderRadius={0}
              background={"transparent"}
              color={"blu.52"}
              fontSize={"inherit"}
              textDecoration={"underline"}
              _hover={{ color: "blu.active", textDecoration: "none" }}
            >
              Change
            </Button>
          </Grid>
          <ButtonGroup
            display={"grid"}
            gap={2}
            marginInline={"auto"}
            width={"full"}
          >
            <Button
              width={"full"}
              backgroundColor={"blu.52"}
              color={"white"}
              paddingY={"1.5rem"}
              fontSize={"sm"}
              borderRadius={"xl"}
              _hover={{ backgroundColor: "blu.active" }}
            >
              Proceed to Payment
            </Button>
            <Button
              fontSize={"sm"}
              color={"blu.55"}
              background={"transparent"}
              borderRadius={0}
              _hover={{ background: "initial", color: "blu.23" }}
            >
              Cancel Order
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
