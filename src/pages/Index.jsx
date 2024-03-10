import React, { useState } from "react";
import { Box, Container, Heading, Input, Select, Button, VStack, HStack, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  // Placeholder function to simulate data fetching
  const fetchData = (species, country) => {
    console.log(`Fetching data for ${species} in ${country}`);
    // Here you would typically make an API call to your backend to fetch the data
  };

  // Placeholder for species and country state using imported useState hook
  const [species, setSpecies] = useState("");
  const [country, setCountry] = useState("");

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading>Diatoms Database Platform</Heading>

        <Box w="full">
          <Heading size="md" mb={4}>
            Search Diatoms
          </Heading>
          <HStack>
            <Input placeholder="Enter species name" value={species} onChange={(e) => setSpecies(e.target.value)} />
            <Select placeholder="Select country" value={country} onChange={(e) => setCountry(e.target.value)}>
              {/* Add your country options here */}
              <option value="Argentina">Argentina</option>
              <option value="Brazil">Brazil</option>
              <option value="Chile">Chile</option>
            </Select>
            <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={() => fetchData(species, country)}>
              Search
            </Button>
          </HStack>
        </Box>

        {/* Placeholder for search results */}
        <Box w="full" overflowX="auto">
          <Heading size="md" mb={4}>
            Results
          </Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Species</Th>
                <Th>Waterbody Type</Th>
                <Th>Temperature</Th>
                <Th>Conductivity</Th>
                <Th>Nutrients</Th>
                <Th>Ecological Optimal</Th>
                <Th>Ecological Range</Th>
              </Tr>
            </Thead>
            <Tbody>
              {}
              <Tr>
                <Td>
                  <Button variant="link" onClick={() => navigate(`/species/nitzschia-palea`)}>
                    Nitzschia palea
                  </Button>
                </Td>
                <Td>Lake</Td>
                <Td>20°C</Td>
                <Td>200 µS/cm</Td>
                <Td>0.5 mg/L</Td>
                <Td>18-22°C</Td>
                <Td>15-25°C</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
