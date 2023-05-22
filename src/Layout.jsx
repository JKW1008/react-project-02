import { Box, VStack, HStack, Text } from "@chakra-ui/react";
import { FaCcVisa, FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosContact } from "react-icons/io";
import Home from "./Home";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <Box w="full" display="flex" justifyContent={"center"}>
        <VStack w={"sm"}>
          {/* Header */}
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            w={"inherit"}
            height={"120px"}
            bg={"black"}
            position={"fixed"}
            top={0}
            zIndex={9}
          >
            <FaCcVisa size={"120px"} color="blue" />
          </Box>

          {/* Main */}
          {children}

          {/* Footer */}
          <Box
            w={"inherit"}
            height={"120px"}
            bg={"black"}
            position={"fixed"}
            bottom={0}
          >
            <HStack
              h={"inherit"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Link to={"/"}>
                <VStack w={"full"}>
                  <FaHome size={"30px"} color="gray" />
                  <Text>Home</Text>
                </VStack>
              </Link>
              <Link to={"/profile"}>
                <VStack w={"full"}>
                  <CgProfile size={"30px"} color="#eee" />
                  <Text>Profile</Text>
                </VStack>
              </Link>
              <Link to={"/contact"}>
                <VStack w={"full"}>
                  <IoIosContact size={"30px"} color="black" />
                  <Text>Contact</Text>
                </VStack>
              </Link>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
}
