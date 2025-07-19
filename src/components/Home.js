import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import {
  HomeSection,
  Content,
  Title,
  Subtitle,
  Description,
  SocialLinks,
  SocialIcon,
  ScrollIndicator,
  ScrollText,
  ScrollIcon
} from '../styles/components/Home.styles';

const Home = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HomeSection id="home">
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm Abhishek Gupta
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          AI/ML & Full Stack Developer
        </Subtitle>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I create innovative solutions combining AI/ML expertise with full-stack development.
          Passionate about building scalable, AI-driven applications.
        </Description>
        <SocialLinks
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <SocialIcon href="https://github.com/abhishek2004gupta" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com/in/abhishek-gupta2004" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href="https://leetcode.com/u/abhishek_gupta04/" target="_blank" rel="noopener noreferrer">
            <FaCode />
          </SocialIcon>
        </SocialLinks>
      </Content>
      <ScrollIndicator
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ScrollText>Scroll Down</ScrollText>
        <ScrollIcon
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      </ScrollIndicator>
    </HomeSection>
  );
};

export default Home; 