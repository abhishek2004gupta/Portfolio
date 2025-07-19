import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background-color: ${props => props.theme.background};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${props => props.theme.primary};
  text-align: center;
  margin-bottom: 3rem;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const ProjectCard = styled(motion.div)`
  background-color: ${props => props.theme.cardBackground};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadow};
  cursor: pointer;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProjectContent = styled.div`
  padding: 1.5rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.text};
  opacity: 0.8;
  margin-bottom: 1rem;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const TechTag = styled.span`
  font-size: 0.8rem;
  padding: 0.25rem 0.75rem;
  background-color: ${props => props.theme.primary};
  color: white;
  border-radius: 15px;
`;

export const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

export const ModalContent = styled(motion.div)`
  background-color: ${props => props.theme.background};
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
`;

export const ModalBody = styled.div`
  padding: 2rem;
`;

export const ModalTitle = styled.h2`
  font-size: 1.8rem;
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
`;

export const ModalDescription = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.text};
  opacity: 0.8;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.theme.primary};
  color: white;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const BulletPoint = styled.li`
  margin-bottom: 0.5rem;
  color: ${props => props.theme.text};
  opacity: 0.8;
  font-size: 1rem;
  line-height: 1.6;
  list-style-type: disc;
  margin-left: 1.5rem;
`; 