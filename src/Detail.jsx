import KakaoMap from "./KakaoMap";
import Layout from "./Layout";
import { Box, Image, Text, VStack } from "@chakra-ui/react";

export default function Detail() {
  return (
    <Layout canGoBack title="Detail_Page">
      <VStack py={"110px"} bg={"gray.800"} spacing={8}>
        <Box>
          <Image src="https://images.unsplash.com/photo-1685543905636-cdc396ded922?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"></Image>
        </Box>
        <VStack w={"full"} alignItems={"flex-start"} px={8} spacing={1}>
          <Text color={"white"} fontWeight={700} fontSize={20}>
            대구 스파벨리
          </Text>
          <Text color={"white"}>대구 최고의 워터파크</Text>
        </VStack>
        <Box w={"95%"} h="2px" bg={"gray.700"} />
        <VStack w={"full"} alignItems={"flex-start"} px={8} spacing={1}>
          <Text color={"white"} fontWeight={600}>
            운영시간
          </Text>
          <Text color={"white"} fontSize={14}>
            10:00 ~ 17:00
          </Text>
        </VStack>{" "}
        <VStack w={"full"} alignItems={"flex-start"} px={8} spacing={1}>
          <Text color={"white"} fontWeight={600}>
            입장 인원
          </Text>
          <Text color={"white"} fontSize={14}>
            120명
          </Text>
        </VStack>{" "}
        <VStack w={"full"} alignItems={"flex-start"} px={8} spacing={1}>
          <Text color={"white"} fontWeight={600}>
            입장 요금
          </Text>
          <Text color={"white"} fontSize={14}>
            20,000원
          </Text>
        </VStack>
        {/** 카카오 맵 불러오기 */}
        <KakaoMap />
      </VStack>
    </Layout>
  );
}
