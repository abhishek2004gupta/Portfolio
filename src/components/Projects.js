import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import {
  ProjectsSection,
  Container,
  Title,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  TechStack,
  TechTag,
  Modal,
  ModalContent,
  CloseButton,
  ModalImage,
  ModalBody,
  ModalTitle,
  ModalDescription,
  ProjectLinks,
  ProjectLink,
  BulletPoint
} from '../styles/components/Projects.styles';

const projects = [
  {
    id: 1,
    title: 'Food Lens',
    description: [
      'Designed an AI-powered system to assess the healthiness of food products based on ingredients and quantities',
      'Enabled product analysis via image uploads or text input, leveraging CNNs for image processing',
      'Created a custom dataset for ingredient ratings with login page and Clerk authentication',
      'Integrated web scraping and Gemini API to gather ingredient data dynamically'
    ],
    image: '/images/food-lens.png',
    techStack: ['Python', 'TensorFlow', 'Keras', 'React', 'Clerk', 'Deep Learning', 'Web Scraping'],
    github: 'https://github.com/abhishek2004gupta/Food-Lens.git',
    live: null
  },
  {
    id: 2,
    title: 'InnerCalm',
    description: [
      'Developed a full-fledged mental health support website with integrated tools and resources',
      'Created an AI-powered chat and voice assistant bot for emotional support',
      'Built a scalable, responsive frontend using React and robust backend with Flask',
      'Applied Natural Language Processing (NLP) techniques to enhance conversational capabilities'
    ],
    image: '/images/innercalm.png',
    techStack: ['React', 'Flask', 'Python', 'NLP', 'PostgreSQL', 'Gemini API'],
    github: 'https://github.com/abhishek2004gupta/InnerCalm',
    live: null
  },
  {
    id: 3,
    title: 'Gemini-Clone',
    description: [
      'Created a prompt-generation system mimicking Gemini assistant functionality',
      'Integrated Google APIs for dynamic data fetching',
      'Implemented a responsive user interface with modern design',
      'Built a robust development environment using npm and modular JavaScript'
    ],
    image: '/images/gemini-clone.png',
    techStack: ['JavaScript', 'React', 'Google API', 'npm'],
    github: 'https://github.com/abhishek2004gupta/Gemini-Clone',
    live: null
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleLiveDemoClick = (e) => {
    e.preventDefault();
    setShowComingSoon(true);
    setTimeout(() => setShowComingSoon(false), 2000);
  };

  return (
    <ProjectsSection id="projects">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projects
        </Title>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -5 }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>
                  {project.description[0]}
                </ProjectDescription>
                <TechStack>
                  {project.techStack.map(tech => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechStack>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>

        <AnimatePresence>
          {selectedProject && (
            <Modal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <ModalContent
                onClick={e => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <CloseButton onClick={() => setSelectedProject(null)}>
                  <FaTimes />
                </CloseButton>
                <ModalImage src={selectedProject.image} alt={selectedProject.title} />
                <ModalBody>
                  <ModalTitle>{selectedProject.title}</ModalTitle>
                  <ModalDescription>
                    {selectedProject.description.map((point, index) => (
                      <BulletPoint key={index}>{point}</BulletPoint>
                    ))}
                  </ModalDescription>
                  <TechStack>
                    {selectedProject.techStack.map(tech => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </TechStack>
                  <ProjectLinks>
                    <ProjectLink href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                      View Code
                    </ProjectLink>
                    <ProjectLink href="#" onClick={handleLiveDemoClick}>
                      <FaExternalLinkAlt />
                      Live Demo
                    </ProjectLink>
                  </ProjectLinks>
                </ModalBody>
              </ModalContent>
            </Modal>
          )}
          {showComingSoon && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                background: '#4CAF50',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                zIndex: 2000
              }}
            >
              Live Demo Coming Soon!
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 