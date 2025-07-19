import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background-color: ${props => props.theme.background};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const ImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: ${props => props.theme.shadow};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
`;

export const Bio = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.theme.text};
  opacity: 0.8;
`;

export const Education = styled(motion.div)`
  margin-top: 1rem;
`;

export const EducationTitle = styled.h3`
  font-size: 1.3rem;
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

export const EducationItem = styled.div`
  margin-bottom: 1rem;
`;

export const School = styled.h4`
  font-size: 1.1rem;
  color: ${props => props.theme.primary};
  margin-bottom: 0.25rem;
`;

export const Degree = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.text};
  opacity: 0.8;
`;

export const DownloadButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.theme.primary};
  color: white;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  width: fit-content;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`; 