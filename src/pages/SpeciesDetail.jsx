import React from "react";
import { Box, Container, Heading, Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SpeciesDetail = () => {
  const navigate = useNavigate();

  return (
    <Container maxW="container.xl" py={10}>
      <Button leftIcon={<FaArrowLeft />} colorScheme="blue" onClick={() => navigate("/")}>
        Back to Search
      </Button>
      <Box w="full" py={5}>
        <Heading size="lg" mb={4}>
          Species Details
        </Heading>
        {}
      </Box>
    </Container>
  );
};

export default SpeciesDetail;
