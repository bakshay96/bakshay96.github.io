import { Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import {
    SiCodesandbox,
    SiGithub,
    SiHackerrank,
    SiLeetcode,
    SiLinkedin,
} from "react-icons/si";

const Footer = () => {
    return (
        <>
            <Flex
                borderTop={"1px solid gray"}
                width="100%"
                gap={4}
                padding={3}
                justifyContent="center"
                textColor={"white.400"}
                direction={["column", "column", "row"]}
                alignItems="center"
            >
                <Text> Copyrights © Rights Reserved By Akshay Bombatkar</Text>
                <Spacer />
                <Flex gap={12}>
                    <a href="https://github.com/bakshay96">
                        {" "}
                        <SiGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/akshayb-profile">
                        {" "}
                        <SiLinkedin size={20} />
                    </a>
                   
                    <a href="#">
                        {" "}
                        <SiHackerrank size={20} />
                    </a>
                    <a href="#/">
                        {" "}
                        <SiLeetcode size={20} />
                    </a>

                    <a href="https://codesandbox.io/u/AkshayBombatkar">
                        {" "}
                        <SiCodesandbox size={20} />
                    </a>
                </Flex>
                    <a href="#">UI inspiration credit-Vivek</a>
            </Flex>
        </>
    );
};

export default Footer;