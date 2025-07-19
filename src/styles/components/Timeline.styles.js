import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TimelineSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background-color: ${props => props.theme.background};
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${props => props.theme.primary};
  text-align: center;
  margin-bottom: 3rem;
`;

export const TimelineContainer = styled.div`
  position: relative;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: ${props => props.theme.primary};
    opacity: 0.3;

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

export const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  width: 50%;
  padding-right: 3rem;

  &:nth-child(even) {
    margin-left: auto;
    padding-right: 0;
    padding-left: 3rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 3rem;
    padding-right: 0;

    &:nth-child(even) {
      padding-left: 3rem;
    }
  }
`;

export const TimelineIcon = styled.div`
  position: absolute;
  top: 0;
  right: -1.5rem;
  width: 3rem;
  height: 3rem;
  background-color: ${props => props.theme.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;

  ${TimelineItem}:nth-child(even) & {
    right: auto;
    left: -1.5rem;
  }

  @media (max-width: 768px) {
    right: auto;
    left: -1.5rem;
  }
`;

export const TimelineContent = styled.div`
  background-color: ${props => props.theme.cardBackground};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: ${props => props.theme.shadow};
`;

export const TimelineDate = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: ${props => props.theme.primary};
  color: white;
  border-radius: 15px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const TimelineTitle = styled.h3`
  font-size: 1.3rem;
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

export const TimelineDescription = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.text};
  opacity: 0.8;
`; 