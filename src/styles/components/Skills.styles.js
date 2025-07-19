import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SkillsSection = styled.section`
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

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

export const SkillCategory = styled(motion.div)`
  background-color: ${props => props.theme.cardBackground};
  border-radius: 15px;
  padding: 2rem;
  box-shadow: ${props => props.theme.shadow};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.primary};
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background-color: ${props => props.theme.primary};
    border-radius: 2px;
  }
`;

export const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
`;

export const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background-color: ${props => props.theme.background};
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.primary}11;
    transform: translateY(-2px);
  }
`;

export const SkillIcon = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.primary};
  transition: transform 0.3s ease;

  ${SkillItem}:hover & {
    transform: scale(1.1);
  }
`;

export const SkillName = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.text};
  text-align: center;
  font-weight: 500;
`; 