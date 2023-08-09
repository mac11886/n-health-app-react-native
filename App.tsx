import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome5,
  Foundation,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  AspectRatio,
  Box,
  Center,
  Heading,
  HStack,
  NativeBaseProvider,
  Stack,
  VStack,
} from "native-base";
import * as React from "react";
import { ImageBackground, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
function HomeScreen() {
  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require("/Users/x10/Documents/expo/n-health-01/assets/wave.png")}
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <View style={{ marginLeft: 40, marginVertical: 14 }}>
          <HStack textAlign={"center"} alignItems={"center"}>
            <FontAwesome5 name="gg-circle" size={36} color="darkblue" />
            <VStack marginLeft={2}>
              <Text style={{ color: "white", fontSize: 16 }}>
                Welcome to Beta Test , Mac
              </Text>
              <Text
                style={{ color: "white", fontSize: 24, fontWeight: "bold" }}
              >
                Health Portal
              </Text>
            </VStack>
          </HStack>
        </View>
        <ComponentHome topicEn="Appointment" topicTh="การนัดหมาย" />
        <ComponentHome topicEn="Lab Catalog" topicTh="สินค้าและบริการ" />
        <ComponentHome topicEn="Promotion" topicTh="โปรโมชั่น" />
        <ComponentHome
          topicEn="Laboratory report"
          topicTh="รายงานผลการตรวจวิเคราะห์"
        />
      </ImageBackground>
    </NativeBaseProvider>
  );
}

type HomeProps = {
  topicEn: string;
  topicTh: string;
};
const ComponentHome = ({ topicEn, topicTh }: HomeProps) => {
  return (
    <Box alignItems="center" margin={2}>
      <Box
        shadow={{}}
        maxW="md"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        marginX={2}
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "white",
        }}
        _web={{
          shadow: 10,
          borderWidth: 2,
        }}
        _light={{
          backgroundColor: "white",
        }}
      >
        <HStack
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            // shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
            width: "100%",
            height: 130,
          }}
        >
          <VStack flex={1} style={{ paddingTop: 20, paddingLeft: 25 }}>
            <Text
              style={{
                fontWeight: "bold",
                color: "darkblue",
                fontSize: 18,
              }}
            >
              {topicEn}
            </Text>
            <Text>{topicTh}</Text>
          </VStack>

          <VStack style={{ flex: 1 }}>
            <ImageBackground
              source={{
                uri: "https://demigos.com/media/cache/61/e8/61e8be99d482c40c4f294b577a7d2e92.jpg",
              }}
              alt="image"
              style={{
                width: "100%",
                height: "100%",
                flex: 1,
                borderRadius: 10,
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0.5, y: 0 }}
                colors={["#fff", "#ffffffad", "#fff0"]}
                style={{
                  height: "100%",
                  width: "100%",
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                }}
              ></LinearGradient>
            </ImageBackground>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};
const Example = () => {
  return (
    <Box alignItems="center">
      <Box
        shadow={{}}
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 10,
          borderWidth: 2,
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <ImageBackground
              source={{
                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg="violet.500"
            _dark={{
              bg: "violet.400",
            }}
            _text={{
              color: "warmGray.50",
              fontWeight: "700",
              fontSize: "xs",
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5"
          >
            PHOTOS
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              The Garden City
            </Heading>
            <Text>1231</Text>
            {/* <Text fontSize="10px" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              The Silicon Valley of India.
            </Text> */}
          </Stack>
          {/* <Text fontWeight="400">
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry. The city is also known for its parks and nightlife.
          </Text> */}
          <Text>2323333</Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              {/* <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                6 mins ago
              </Text> */}
              <Text>3333333333333</Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
};
function ReportScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <NativeBaseProvider>
        <Example />
      </NativeBaseProvider>
    </View>
  );
}

function AppointmentScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Appointment!</Text>
    </View>
  );
}
function CouponScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Coupon!</Text>
    </View>
  );
}

function MoreScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>More!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return <Entypo name="home" color={color} size={size} />;
          } else if (route.name === "Report") {
            return <Foundation name="page-pdf" size={24} color={color} />;
          } else if (route.name === "Appointment") {
            return <AntDesign name="calendar" color={color} size={24} />;
          } else if (route.name === "Coupon") {
            return <Feather name="credit-card" color={color} size={24} />;
          } else if (route.name === "More") {
            return <Feather name="more-vertical" color={color} size={24} />;
          }
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Report" component={ReportScreen} />
      <Tab.Screen name="Appointment" component={AppointmentScreen} />
      <Tab.Screen name="Coupon" component={CouponScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
