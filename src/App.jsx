import { React, Fragment } from "react";
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
import patternBackgroundDesktop from "./assets/images/pattern-background-desktop.svg";

const App = () => (
  <Fragment>
    <Grid
      as={"article"}
      minH={"100vh"}
      p={7}
      placeContent={"center"}
      bg={"blu.94"}
      color={"blu.55"}
      bgImg={{ base: patternBackgroundMobile, md: patternBackgroundDesktop }}
      bgRepeat={"no-repeat"}
      bgSize={"contain"}
      bgPos={"top"}
    >
      <Grid
        bg={"white"}
        borderRadius={"2xl"}
        overflow={"hidden"}
        maxW={"md"}
        shadow={"2xl"}
      >
        <Box>
          <Image
            src={illustrationHero}
            alt={"an illustration of a woman listening to music with earphones"}
            objectFit={"cover"}
            w={"full"}
            h={"full"}
          />
        </Box>
        <Grid
          gap={{ base: 6, md: 7 }}
          p={{ base: 7, md: 12 }}
          py={{ base: 8, md: 12 }}
          textAlign={"center"}
        >
          <Heading
            as={"h1"}
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight={"black"}
            color={"blu.23"}
          >
            Order Summary
          </Heading>
          <Text fontWeight={"medium"}>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </Text>
          <Grid
            templateColumns={"1fr auto"}
            bg={"blu.98"}
            borderRadius={"xl"}
            p={{ base: 4, md: 6 }}
            fontSize={{ base: "sm", md: "lg" }}
          >
            <Grid
              placeContent={"center"}
              gap={{ base: 4, md: 6 }}
              templateColumns={"auto 1fr"}
            >
              <Image src={iconMusic} alt={"a beamed note icon"} />
              <Grid alignContent={"center"} textAlign={"left"}>
                <Heading
                  as={"h2"}
                  fontSize={"inherit"}
                  fontWeight={"black"}
                  color={"blu.23"}
                >
                  Annual Plan
                </Heading>
                <Text>$59.99/year</Text>
              </Grid>
            </Grid>
            <Button
              p={0}
              borderRadius={0}
              background={"transparent"}
              color={"blu.52"}
              fontSize={"inherit"}
              textDecor={"underline"}
              _hover={{ color: "blu.active", textDecor: "none" }}
            >
              Change
            </Button>
          </Grid>
          <ButtonGroup
            display={"grid"}
            gap={{ base: 2, md: 5 }}
            fontSize={{ base: "sm", md: "lg" }}
          >
            <Button
              bg={"blu.52"}
              color={"white"}
              py={{ base: 6, md: 7 }}
              fontSize={"inherit"}
              borderRadius={"xl"}
              boxShadow={"2xl"}
              _hover={{ bg: "blu.active" }}
            >
              Proceed to Payment
            </Button>
            <Button
              m={"0 !important"}
              p={{ base: 6, md: 5 }}
              fontSize={"inherit"}
              color={"blu.55"}
              background={"transparent"}
              _hover={{ background: "initial", color: "blu.23" }}
            >
              Cancel Order
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Grid>
    <Box as={"footer"} pos={"absolute"} bottom={0} right={0} fontSize={"sm"}>
      <Text as={"p"}>
        Challenge by{" "}
        <Text
          as={"a"}
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          color={"blu.55"}
          _hover={{ color: "blu.23", textDecor: "underline" }}
        >
          Frontend Mentor
        </Text>
        . Coded by{" "}
        <Text
          as={"a"}
          href="https://www.frontendmentor.io/profile/purrrplelipton"
          color={"blu.55"}
          _hover={{ color: "blu.23", textDecor: "underline" }}
        >
          Toby
        </Text>
        .
      </Text>
    </Box>
  </Fragment>
);

export default App;
