import React, { useState } from "react";
import { Box, Input, Button, VStack, HStack, Text, Heading, Container, List, ListItem } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Simulate search results
    setResults([`Result for ${keyword} 1`, `Result for ${keyword} 2`, `Result for ${keyword} 3`]);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Simple ScrapeBox Clone
        </Heading>
        <Text>Enter a keyword to search:</Text>
        <HStack>
          <Input placeholder="Type keyword here..." value={keyword} onChange={(e) => setKeyword(e.target.value)} />
          <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={handleSearch}>
            Search
          </Button>
        </HStack>
        <Box w="full">
          <Heading as="h2" size="lg">
            Results:
          </Heading>
          <List spacing={3}>
            {results.map((result, index) => (
              <ListItem key={index} p={2} shadow="md" borderWidth="1px">
                {result}
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
