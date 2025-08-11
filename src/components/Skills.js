import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaBrain, FaTools, FaReact, FaNodeJs, FaPython, FaJava, FaTextHeight } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiMongodb, SiPostgresql, SiMysql, SiFlask, SiStreamlit, SiOpencv, SiScikitlearn, SiPandas, SiNumpy, SiGit, SiGithub, SiPostman, SiPowerbi, SiTableau, SiUbuntu, SiLinux, SiVisualstudiocode, SiPycharm } from 'react-icons/si';
import {
  SkillsSection,
  Container,
  Title,
  SkillsGrid,
  SkillCategory,
  CategoryTitle,
  SkillsList,
  SkillItem,
  SkillIcon,
  SkillName
} from '../styles/components/Skills.styles';

const skillCategories = [
  {
    title: 'Programming & Development',
    skills: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'Python', icon: <FaPython /> },
      // { name: 'C', icon: <FaCode /> },
      { name: 'JavaScript', icon: <FaCode /> },
      { name: 'HTML', icon: <FaCode /> },
      { name: 'CSS', icon: <FaCode /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <FaNodeJs /> },
      { name: 'React.js', icon: <FaReact /> }
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> }
    ]
  },
  {
    title: 'Machine Learning & Deep Learning',
    skills: [
      { name: 'Supervised Learning', icon: <FaBrain /> },
      { name: 'Unsupervised Learning', icon: <FaBrain /> },
      { name: 'Neural Networks', icon: <FaBrain /> },
      { name: 'CNN', icon: <FaBrain /> },
      { name: 'RNN', icon: <FaBrain /> }
    ]
  },
  {
    title: 'Frameworks and Libraries',
    skills: [
      { name: 'Flask', icon: <SiFlask /> },
      { name: 'Streamlit', icon: <SiStreamlit /> },
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      // { name: 'Keras', icon: <SiTensorflow /> },
      { name: 'OpenCV', icon: <SiOpencv /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn /> },
      { name: 'NLTK', icon: <FaTextHeight /> },
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'Numpy', icon: <SiNumpy /> }
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'Power BI', icon: <SiPowerbi /> },
      { name: 'Tableau', icon: <SiTableau /> },
      // { name: 'Ubuntu', icon: <SiUbuntu /> },
      // { name: 'Linux', icon: <SiLinux /> },
      { name: 'VS Code', icon: <SiVisualstudiocode /> },
      { name: 'PyCharm', icon: <SiPycharm /> }
    ]
  }
];

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills
        </Title>
        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CategoryTitle>{category.title}</CategoryTitle>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <SkillIcon>{skill.icon}</SkillIcon>
                    <SkillName>{skill.name}</SkillName>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 