import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";

export default function Profile() {
  return (
    <Layout>
      <VStack
        as={"form"}
        bg={"black"}
        minH={"100vh"}
        py={"140px"}
        w={"full"}
        px={4}
        spacing={6}
      >
        <VStack spacing={6}>
          <Avatar
            src="https://images.unsplash.com/photo-1509847950535-14e861e5191b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=692&q=80"
            size={"xl"}
            color={"black"}
            bg={"white"}
            name="OffSet"
          />
          <VStack spacing={0} color={"#eee"}>
            <Text fontSize={20} fontWeight={600}>
              OFFSET
            </Text>
            <Text fontSize={14}>Rapper, Artist</Text>
          </VStack>
          <HStack w={"80%"} color={"#eee"}>
            <Box
              border={"1px"}
              rounded={"xl"}
              px={"20px"}
              py={"1"}
              w={"140px"}
              align={"center"}
              fontWeight={600}
              fontSize={14}
              textTransform={"uppercase"}
            >
              Contact
            </Box>
            <Box
              border={"1px"}
              rounded={"xl"}
              px={"20px"}
              py={"1"}
              w={"140px"}
              align={"center"}
              fontWeight={600}
              fontSize={14}
              textTransform={"uppercase"}
            >
              Follow
            </Box>
          </HStack>
        </VStack>
      </VStack>
    </Layout>
  );
}
