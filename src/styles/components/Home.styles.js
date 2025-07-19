import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  background-color: ${props => props.theme.background};
  position: relative;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
`;

export const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.primary};
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.text};
  opacity: 0.8;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Description = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  color: ${props => props.theme.text};
  opacity: 0.7;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const SocialIcon = styled.a`
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.primary};
    transform: translateY(-3px);
  }
`;

export const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const ScrollText = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.text};
  opacity: 0.7;
`;

export const ScrollIcon = styled(motion.div)`
  width: 30px;
  height: 50px;
  border: 2px solid ${props => props.theme.text};
  border-radius: 15px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    background-color: ${props => props.theme.text};
    border-radius: 50%;
  }
`; 