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
    title: 'InnerCalm',
    description: [
      'Built a full-featured mental wellness platform offering therapy tools,', 
      'self-help resources and live session scheduling for users and therapists.',
      'Integrated an AI-based chatbot and voice assistant using NLP ',
      'to deliver supportive, interactive conversations',
    ],
    image: '/images/innercalm.png',
    techStack: ['React.js', 'Flask', 'Python', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript', 'NLP', 'Google Gemini API', 'Google Meet API'],
    github: 'https://github.com/abhishek2004gupta/InnerCalm',
    live: null
  },
  {
    id: 2,
    title: 'Sahayak AI',
    description: [
      'It is an intelligent virtual assistant platform that enables users to chat',
      'generate AI images, and manage personalized interactions through a user-friendly interface.',
      'It features an advanced conversational chatbot (TinyLlama LLM), a Stable Diffusion', 
      'image generator, and secure user authentication with chat history powered by',
      'PostgreSQL for personalized experiences',
    ],
    image: '/images/sahayakAi.png',
    techStack: ['React.js', 'Flask', 'Python (PyTorch, PIL)', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript','Gemini API', 'Stable Diffusion', 'TinyLlama LLM'],
    github: 'https://github.com/abhishek2004gupta/Sahayak-AI.git',
    live: null
  },
  {
    id: 3,
    title: 'Food Lens',
    description: [
      'Designed an AI-powered system to assess the healthiness of food products based on ingredients and quantities',
      'Enabled product analysis via image uploads or text input, leveraging CNNs for image processing',
      'Created a custom dataset for ingredient ratings with login page and Clerk authentication',
      'Integrated web scraping and Gemini API to gather ingredient data dynamically'
    ],
    image: '/images/food-lens.png',
    techStack: ['React', 'Clerk', 'HTML', 'CSS', 'JavaScript', 'Python (TensorFlow, deep learning)', 'web scraping'],
    github: 'https://github.com/abhishek2004gupta/Food-Lens.git',
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