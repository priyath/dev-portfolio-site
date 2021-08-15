import React, { useState } from 'react'
import Head from 'next/head'
import {
  Heading,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'

import Container from '../components/Container'

import { SearchIcon } from '@chakra-ui/icons'
import {getAllFilesFrontMatter} from "../lib/mdx";
import BlogPost from "../components/BlogPost";

export default function Blog({ posts }: any) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <Head>
        <title>Blog - Benjamin Carlson</title>
      </Head>
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            px={4}
          >
            <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
              Blog
            </Heading>
            {posts.map((frontMatter: any) => <BlogPost key={frontMatter.title} {...frontMatter} />)}
          </Flex>
        </Stack>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');
  return { props: { posts } };
}