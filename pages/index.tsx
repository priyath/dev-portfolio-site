import type { NextPage } from 'next';
import Head from 'next/head';
import DarkModeSwitch from "../components/DarkModeSwitch";
import Container from "../components/Container";
import {Flex, Heading, Text, Stack, useColorMode} from "@chakra-ui/react";

const Home: NextPage = () => {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <Container>
      <Head>
        <title>Home - Priyath Gregory</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}>Hi, Im Benjamin Carlson</Heading>
          <Text color={colorSecondary[colorMode]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante nunc, finibus sit amet purus quis, congue vulputate ipsum. Phasellus lobortis bibendum orci, quis imperdiet lectus imperdiet porttitor.</Text>
        </Flex>
      </Stack>
    </Container>
  );
}

export default Home
