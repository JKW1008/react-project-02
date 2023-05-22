import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";

const newProduct = [
  {
    text: "팔공산 투어",
    image:
      "https://images.unsplash.com/photo-1682686581220-689c34afb6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    text: "지리산 투어",
    image:
      "https://images.unsplash.com/photo-1684516310710-463141e44242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
  },
  {
    text: "설악산 투어",
    image:
      "https://images.unsplash.com/photo-1684354059314-4c941ac2d196?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80",
  },
  {
    text: "백두산 투어",
    image:
      "https://images.unsplash.com/photo-1672421186994-380fca30960a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    text: "한라산 투어",
    image:
      "https://images.unsplash.com/photo-1684131248039-855948ffd985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    text: "금강산 투어",
    image:
      "https://images.unsplash.com/photo-1684265709063-2013faebdaeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=670&q=80",
  },
];

const dataTour = [
  {
    text: "June Events",
    image:
      "https://images.unsplash.com/photo-1682686581660-3693f0c588d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
  },
  {
    text: "July Events",
    image:
      "https://images.unsplash.com/photo-1684331441167-4aeafe9edf2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=696&q=80",
  },
  {
    text: "August Events",
    image:
      "https://images.unsplash.com/photo-1683009680116-b5c04463551d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    text: "September Events",
    image:
      "https://images.unsplash.com/photo-1684324259106-8f2b67075ee5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
  },
];

export default function Home() {
  return (
    <>
      <Layout>
        <VStack
          spacing={16}
          w={"inherit"}
          py={"140px"}
          px={4}
          alignItems={"flex-start"}
        >
          <VStack w={"full"} alignItems={"flex-start"}>
            <Text fontWeight={600} fontSize={24}>
              New Product
            </Text>
            <Grid gridTemplateColumns={"repeat(2, 1fr)"} gap={3} w={"full"}>
              {newProduct.map((product, i) => (
                <GridItem
                  key={i}
                  h={"200px"}
                  border={"1px"}
                  rounded={"md"}
                  borderColor={"gray.300"}
                  backgroundImage={`url(${product.image})`}
                  backgroundSize={"cover"}
                  backgroundPosition={"center center"}
                  position={"relative"}
                  overflow={"hidden"}
                >
                  <Box
                    position={"absolute"}
                    top={0}
                    left={0}
                    w={"full"}
                    h={"full"}
                    bgGradient="linear(to-b, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))"
                  >
                    <Text
                      color={"white"}
                      position={"absolute"}
                      w={"full"}
                      bottom={0}
                      align={"center"}
                      fontWeight={800}
                      py={4}
                    >
                      {product.text}
                    </Text>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </VStack>

          {/* Event container */}
          <VStack w={"full"} alignItems={"flex-start"}>
            <Text fontWeight={600} fontSize={24}>
              EVENT
            </Text>
            <Grid w={"full"} gap={5}>
              {dataTour.map((item, i) => (
                <GridItem
                  key={i}
                  rounded={"lg"}
                  w={"full"}
                  h={"120px"}
                  backgroundImage={`url(${item.image})`}
                  backgroundSize={"cover"}
                  backgroundPosition={"center center"}
                  position={"relative"}
                >
                  <Box
                    position={"absolute"}
                    top={0}
                    left={0}
                    w={"full"}
                    h={"full"}
                    bgGradient="linear(to-b, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.4))"
                  >
                    <Text
                      position={"absolute"}
                      top={"50%"}
                      left={"50%"}
                      transform={"translate(-50%, -50%)"}
                      fontWeight={600}
                      fontSize={24}
                      color={"black"}
                    >
                      {item.text}
                    </Text>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </VStack>
        </VStack>
      </Layout>
    </>
  );
}
