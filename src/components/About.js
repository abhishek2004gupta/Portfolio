import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import {
  AboutSection,
  Container,
  ImageContainer,
  ProfileImage,
  Content,
  Title,
  Bio,
  Education,
  EducationTitle,
  EducationItem,
  School,
  Degree,
  DownloadButton
} from '../styles/components/About.styles';

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <ImageContainer
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ProfileImage src="/images/my-picture.jpg" alt="Profile" />
        </ImageContainer>
        <Content>
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Me
          </Title>
          <Bio
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Aspiring AI/ML and software developer seeking a challenging role to apply problem-solving skills, 
            full-stack expertise, and ML knowledge in building scalable, AI-driven solutions for optimized system efficiency.
          </Bio>
          <Education
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <EducationTitle>Education</EducationTitle>
            <EducationItem>
              <School>BMS College of Engineering</School>
              <Degree>B.E. in Artificial Intelligence and Machine Learning</Degree>
              <Degree>2022 - 2026 | Bangalore</Degree>
            </EducationItem>
            <EducationItem>
              <School>Shivalik Cambridge College</School>
              <Degree>Higher Secondary, Science (Grade: XII - 95.2%)</Degree>
              <Degree>Secondary, 10th board (Grade: X – 89.4%)</Degree>
              <Degree>2017 - 2022 | Agra</Degree>
            </EducationItem>
          </Education>
          <DownloadButton
            href="/abhishek-gupta.pdf"
            download="Abhishek Gupta Resume.pdf"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload />
            Download Resume
          </DownloadButton>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About; 