import { Box, Button, Image, Text, useColorMode } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
// import { useContext } from "react";
// import { ThemeContext } from "../ThemeContext/ThemeContextProvider";
 import bestBuy from "../Assets/bestBuy.png";
 import Bewakoof from "../Assets/Bewakoof.png";
 import Healthcart from "../Assets/Healthcart.png";
 import Eyekart from "../Assets/Eyekart.png";
 import milkify from "../Assets/home-page-1.png";
 import story from "../Assets/story.png"
// import tictactoe from "../Assets/tictactoe.png";
// import stylevibe from "../Assets/StyleVibe.png"
import "../Components/styles/Projects.css"

function Projects() {
  let projectdata = [
    {
      id: 1,
      name: "Milkify",
      img: milkify,
      type: "Individual",
      techstack: "React-js, Node-js, Express, JavaScript, MongoDB, Nodemailer, Chakra-ui, Next-Ui", 
      desc: "Milkify is a web application for Milk Collection Management. provide various functionalities for daily milk data management in the milk collection centre.. ",
      livelink: "https://milkify.netlify.app/",
      gitlink: "https://github.com/bakshay96/My-Dairy",

    },
    {
      id: 2,
      name: "Bewakoof.com Clone",
      img: Bewakoof,
      type: "Individual",
      techstack: "React-js, HTML, CSS, JavaScript", 
      desc: "Bewakoof.com Clone is a ReactJS e-commerce web application that allows you to buy shoes & clothes online with payment gateway integration. ",
      livelink: "https://bewakoofstore.netlify.app/",
      gitlink: "https://github.com/bakshay96/clone-bewakoof.com",

    },
    {
      id: 3,
      name: "Healthkart.com Clone",
      img: Healthcart,
      type: "Group",
      desc: "An E-Commerce website having the unique feature which allows the users to buy health and wellness products.",
      techstack: "React-js, Chakra-ui, CSS, Redux, Rest api",
      livelink: "https://vigor-orcin.vercel.app/",
      gitlink: "https://github.com/harry-io/healthkart.com",

    },
    {
      id: 4,
      name: "Eyekart.com Clone",
      img: Eyekart,
      type: "Group",
      desc: "Eyekart is an online retailer of eyewear that offers a wide range of glasses, contact lenses, and sunglasses for men, women, and kids.",
      techstack: "React-js, Node-js, Mongo DB, Express, Redux, Chakra-Ui",
      livelink: "https://eyekart-sachin-kesarwani.vercel.app/",
      gitlink: "https://github.com/Sachin-Kesarwani/omniscient-dust-8885",
    },
    {
      id: 5,
      name: " story-app",
      img:story,
      type: "Individual",
      desc: "A \"Collaborative Story Creator\" Web Application with a simple and intuitive interface.",
     techstack: "React-js, Node-js, Express, JavaScript, MongoDB,Tailwind-css", 
      livelink: "https://meri-kahani.netlify.app/",
      gitlink: "https://github.com/bakshay96/story-app",
    },
    // {
    //   id: 5,
    //   name: "Style Vibe",
    //  // img: stylevibe,
    //   type: "Group",
    //   desc: "Style Vibe is an e-commerce platform to buy mens and womens clothing products.",
    //   techstack: "React, Express.Js, Mongodb, Chakra-ui, Node.Js",
    //   livelink: "https://stylevibe.netlify.app/",
    //   gitlink: "https://github.com/ParbhatKataria1/Style-Fashion",
    // },
    {
      id: 6,
      name: "BestBuy.com Clone",
       img: bestBuy,
      type: "Group",
      desc: "Best buy is a E-commerce electronic website where you buy all electrics items.",
      techstack: "JavaScript, HTML, CSS",
      livelink: "https://best-buy-clone-aries.netlify.app/",
      gitlink: "https://github.com/bakshay96/clone-bestBuy.com",
    },
   
  ];

  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box
      id="projects"
      w="full"
      bg={colorMode === "dark" ? "#100a1a" : "#fbf0f0"}
      color={colorMode === "dark" ? "#d3cedb" : "#13022C"}
      p="30px 0px"
      textAlign="center"
      pt={["40px", "60px", "80px"]}
    >
     
      <Box w="85%" m="auto">
        <Text
          mb="25px"
          color={colorMode === "dark" ? "white" : "#13022C"}
          textAlign="center"
          fontWeight="400"
          fontSize={["3xl", "4xl", "5xl"]}
        >
          Projects
        </Text>
        
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
        >
          {projectdata &&
            projectdata.map((project) => {
              return (
                <Box
                  key={project.id}
                  className={
                    colorMode === "dark" ? "projectouter" : "projectouterlight"
                  }
                >
                  <Box className="project-card" id="project-card" >
                    <Image w="100%" src={project.img} alt="project-thumbnail" />
                    <Box w="100%" className="project-description">
                      <Text className="project-title" fontSize={["xl", "2xl", "2xl"]}>
                        {project.name}
                      </Text>
                      <Text fontSize={["lg", "xl", "xl"]}>
                        ( {project.type} )
                      </Text>
                      <Text fontSize={["xs", "xsm", "md"]}>{project.desc}</Text>
                      <Text className="project-tech-stack" fontSize={["sm", "md", "lg"]} fontWeight="bold">
                        Techstacks :-{project.techstack}
                      </Text>
                      <Box
                        display="flex"
                        w={["100%", "100%", "100%"]}
                        m="auto"
                        justifyContent="space-around"
                      >
                        <Button
                         className="project-deployed-link"
                          as="a"
                          target="_blank"
                          href={project.livelink}
                          _hover={{ bg: "#4E406F", color: "#ffffff" }}
                          mt="10px"
                          p={["5px 5px", "5px 5px", "10px 10px"]}
                          fontSize={["sm", "sm", "md"]}
                          bg={colorMode === "dark" ? "#C1B6DB" : "#251942"}
                          color={colorMode === "dark" ? "#13022c" : "white"}
                          border="none"
                          variant="solid"
                          leftIcon={<BiLinkExternal />}
                        >
                          Live
                        </Button>
                        <Button
                        className="project-github-link"
                          as="a"
                          target="_blank"
                          href={project.gitlink}
                          _hover={{ bg: "#4E406F", color: "#ffffff" }}
                          mt="10px"
                          p={["5px 5px", "5px 5px", "10px 10px"]}
                          fontSize={["sm", "sm", "md"]}
                          bg={colorMode === "dark" ? "#C1B6DB" : "#251942"}
                          color={colorMode === "dark" ? "#13022c" : "white"}
                          border="none"
                          variant="solid"
                          leftIcon={<BsGithub />}
                        >
                          Github
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
}

export default Projects;