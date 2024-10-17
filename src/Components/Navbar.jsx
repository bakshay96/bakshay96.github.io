import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    textDecoration,
} from "@chakra-ui/react";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
//import Akshay_Bombatkar_Resume from "../Components/Akshay_Bombatkar_Resume.pdf";
import Resume from "../Components/Akshay_Bombatkar_Resume.pdf";
import Akshay_Bombatkar_Resume from "../Components/Akshay_Bombatkar_Resume.pdf";

export default function Navbar(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Box
                id="nav-menu"
                bg={useColorModeValue("gray.100", "gray.900")}
                px={4}
                style={{ position: "fixed" }}
                boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
                w="100%"
                top={0}
                zIndex="99"
            >
                <Flex
                    h={16}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    paddingLeft={["0px", "0px", "35px"]}
                    paddingRight={["0px", "0px", "35px"]}
                >
                    <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={5} alignItems={"center"}>
                        <Box fontSize={"20px"}>
                            <a href="/">Akshay </a>
                        </Box>
                    </HStack>
                    <Flex alignItems={"center"} gap="40px">
                        <HStack
                            as={"nav"}
                            spacing={4}
                            display={{ base: "none", md: "flex" }}
                            fontSize="18px"
                        >
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#skills">Skills</a>
                            <a href="#projects">Projects</a>
                            
                            <a href="#contact">Contacts</a>
                            <a
                                href={Resume}
                                target="_blank"
                                rel="noreferrer"
                                
                                onClick={() => window.open(
                                    "https://drive.google.com/file/d/1QR7UHZKO8ao8PYKv7kojVW5aWMqJI_6t/view?usp=drive_link",
                                   // "https://drive.google.com/file/d/1GOj_2HXTBDILQ1xfynzR-T8wWc0mRbkH/view?usp=drive_link",
                                    "_blank"
                                )}
                                download="Akshay-Bombatkar-Resume"
                            >
                                Resume
                            </a>
                        </HStack>
                        <Box>
                            <Button
                                aria-label="Toggle Color Mode"
                                onClick={toggleColorMode}
                                _focus={{ boxShadow: "none" }}
                                w="fit-content"
                                {...props}
                            >
                                {colorMode === "dark" ? <BsSun /> : <BsMoonStarsFill />}
                            </Button>
                        </Box>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={"full"}
                                variant={"link"}
                                cursor={"pointer"}
                                minW={0}
                            >
                                <Avatar
                                    className="home-img"
                                    size={"sm"}
                                    src={"https://avatars.githubusercontent.com/u/107979339?v=4"}
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>
                                    {" "}
                                    <a
                                        // href={Resume}
                                        // target="_blank"
                                        // rel="noreferrer"
                                        // download="https://drive.google.com/uc?export=download&id=1PGIhGNvtE9-D6BoL1_iJ74a5gQwcnLMN"
                                        // onClick={() => window.open(
                                        //     "https://drive.google.com/file/d/1GOj_2HXTBDILQ1xfynzR-T8wWc0mRbkH/view?usp=drive_link"
                                        // )}
                                        href={Resume}
                                        target="_blank"
                                        rel="noreferrer"
                                
                                        onClick={() => window.open(
                                            "https://drive.google.com/file/d/1QR7UHZKO8ao8PYKv7kojVW5aWMqJI_6t/view?usp=drive_link",
                                                //"https://drive.google.com/file/d/1GOj_2HXTBDILQ1xfynzR-T8wWc0mRbkH/view?usp=drive_link",
                                                 "_blank"
                                                 )}
                                                 download="Akshay-Bombatkar-Resume"
                                    >
                                        Resume
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a

                                    href="https://github.com/bakshay96"
                                    target="_blank"
                                    >
                                        Visit Github Account
                                    </a>
                                </MenuItem>
                                <MenuDivider />
                            </MenuList>
                            
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={6} display={{ md: "none" }} height={"70vh"} position={"fixed"}   >
                        <Stack
                            as={"nav"}
                            mt={12}
                            ml={5}
                            spacing={8}
                            alignItems="left"
                            fontSize={"20px"}
                            _hover={{color:"teal-400"}}
                        >
                            <a href="#home" onClick={onClose}>
                                Home
                            </a>
                            <a href="#about" onClick={onClose}>
                                About
                            </a>
                            <a href="#skills" onClick={onClose}>
                                Skills
                            </a>
                            <a href="#projects" onClick={onClose}>
                                Projects
                            </a>
                            <a href="#contact" onClick={onClose}>
                                Contacts
                            </a>
                            <a
                                href={Resume}
                                target="_blank"
                                rel="noreferrer"
                                onClick={() => window.open(
                                    "https://drive.google.com/file/d/1QR7UHZKO8ao8PYKv7kojVW5aWMqJI_6t/view?usp=drive_link",
                                 
                                    )}
                                    download="Akshay-Bombatkar-Resume"
                            >
                                Resume
                            </a>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}