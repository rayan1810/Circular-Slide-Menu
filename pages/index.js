import React from "react";
import {
  Box,
  Button,
  Center,
  HStack,
  Pressable,
  HamburgerIcon,
  InfoIcon,
  SunIcon,
  SearchIcon,
  CloseIcon,
  MoonIcon,
} from "native-base";
export default function App() {
  const [showMenu, setShowMenu] = React.useState(false);
  const [hideMenu, setHideMenu] = React.useState(false);
  const toggleShowMenu = () => {
    if (showMenu) {
      setShowMenu(false);
      setHideMenu(true);
    } else {
      setShowMenu(true);
      setHideMenu(false);
    }
  };
  const diameter = 400;
  return (
    <Center h="100vh" bg="coolGray.900">
      {/* <Box position="relative">
        <HStack mb="3" space="3">
          <Pressable>
            {({ isHovered }) => (
              <Box
                size={"150px"}
                shadow="5"
                postion="absolute"
                roundedTopLeft="full"
                bg="indigo.500:alpha.90"
                left={isHovered ? "-8px" : "0"}
                top={isHovered ? "-8px" : "0"}
              >
                <Center h="100%">About Me</Center>
              </Box>
            )}
          </Pressable>
          <Pressable>
            {({ isHovered }) => (
              <Box
                size={"150px"}
                shadow="5"
                postion="absolute"
                roundedTopRight="full"
                bg="secondary.500:alpha.80"
                right={isHovered ? "-8px" : "0"}
                top={isHovered ? "-8px" : "0"}
              >
                <Center h="100%">Blogs</Center>
              </Box>
            )}
          </Pressable>
        </HStack>
        <HStack space="3">
          <Pressable>
            {({ isHovered }) => (
              <Box
                size={"150px"}
                shadow="5"
                postion="absolute"
                roundedBottomLeft="full"
                bg="emerald.500:alpha.80"
                left={isHovered ? "-8px" : "0"}
                bottom={isHovered ? "-8px" : "0"}
              >
                <Center h="100%">Projects</Center>
              </Box>
            )}
          </Pressable>
          <Pressable>
            {({ isHovered }) => (
              <Box
                size={"150px"}
                shadow="5"
                postion="absolute"
                roundedBottomRight="full"
                bg="blue.500:alpha.80"
                right={isHovered ? "-8px" : "0"}
                bottom={isHovered ? "-8px" : "0"}
              >
                <Center h="100%">Socials</Center>
              </Box>
            )}
          </Pressable>
        </HStack>
      </Box> */}
      <Box
        w={`${diameter}px`}
        // bg="red.100"
        overflow="hidden"
        h={`${diameter / 2}px`}
        position={"relative"}
      >
        <Box
          roundedTop="full"
          overflow="hidden"
          nativeID={showMenu ? "menu" : hideMenu ? "menu-close" : "none"}
          bottom={`-${diameter / 2}px`}
          right={0}
          left={0}
          mx="auto"
          position={"absolute"}
          h={`${diameter}px`}
          w={`${diameter}px`}
          style={{ transform: [{ rotate: hideMenu ? "0deg" : "180deg" }] }}
        >
          <Box
            bg="coolGray.100"
            w={`${diameter}px`}
            h={`${diameter / 2}px`}
            roundedTop="full"
            overflow={"hidden"}
            flexDir={"row"}
            position={"relative"}
          >
            {/* First Box */}
            <Pressable>
              {({ isHovered }) => (
                <Box position={"absolute"}>
                  <Box
                    bg={isHovered ? "blue.400" : "blue.600"}
                    size={`${diameter / 2}px`}
                    roundedTopLeft={"full"}
                    position={"relative"}
                  >
                    <Box
                      bottom={`${diameter / 13}px`}
                      left={`${diameter / 6}px`}
                      position={"absolute"}
                    >
                      <InfoIcon size="sm" color="white" />
                    </Box>
                  </Box>
                </Box>
              )}
            </Pressable>
            {/* Second Box */}
            <Pressable>
              {({ isHovered }) => (
                <Box
                  position={"absolute"}
                  style={{
                    transform: [
                      { translateY: `-${diameter / 4 + 40}px` },
                      { rotate: "45deg" },
                      { translateX: `${diameter / 2 - 60}px` },
                    ],
                  }}
                >
                  <Box
                    bg={isHovered ? "blue.400" : "blue.500"}
                    size={`${diameter / 2}px`}
                    roundedTopLeft={"full"}
                    position={"relative"}
                  >
                    <Box
                      bottom={`${diameter / 10}px`}
                      left={`${diameter / 6}px`}
                      position={"absolute"}
                    >
                      <SunIcon size="sm" color="white" />
                    </Box>
                  </Box>
                </Box>
              )}
            </Pressable>
            {/* Third Box */}
            <Pressable>
              {({ isHovered }) => (
                <Box
                  position={"absolute"}
                  style={{
                    transform: [
                      { translateY: `0px` },
                      { translateX: `${diameter / 2}px` },
                      { rotate: "90deg" },
                    ],
                  }}
                >
                  <Box
                    bg={isHovered ? "blue.400" : "blue.600"}
                    size={`${diameter / 2}px`}
                    roundedTopLeft={"full"}
                    position={"relative"}
                  >
                    <Box
                      bottom={`${diameter / 10}px`}
                      left={`${diameter / 6}px`}
                      position={"absolute"}
                      style={{
                        transform: [{ rotate: "-90deg" }],
                      }}
                    >
                      <SearchIcon size="sm" color="white" />
                    </Box>
                  </Box>
                </Box>
              )}
            </Pressable>
            {/* Fourth Box */}
            <Pressable>
              {({ isHovered }) => (
                <Box
                  position={"absolute"}
                  style={{
                    transform: [
                      { translateY: `${diameter / 4}px` },
                      { translateX: `${diameter / 2 + 41}px` },
                      { rotate: "135deg" },
                    ],
                  }}
                >
                  <Box
                    bg={isHovered ? "blue.400" : "blue.500"}
                    size={`${diameter / 2}px`}
                    roundedTopLeft={"full"}
                    position={"relative"}
                  >
                    <Box
                      bottom={`${diameter / 10}px`}
                      left={`${diameter / 6}px`}
                      position={"absolute"}
                      style={{
                        transform: [{ rotate: "-90deg" }],
                      }}
                    >
                      <MoonIcon size="sm" color="white" />
                    </Box>
                  </Box>
                </Box>
              )}
            </Pressable>
          </Box>
        </Box>
        <Button
          p="4"
          colorScheme="blue"
          shadow={4}
          bg="blue.400"
          rounded="full"
          onPress={toggleShowMenu}
          mx="auto"
          mt="auto"
        >
          {!hideMenu ? (
            <CloseIcon color="white" size="xs" />
          ) : (
            <HamburgerIcon color="white" size="xs" />
          )}
        </Button>
      </Box>
    </Center>
  );
}
