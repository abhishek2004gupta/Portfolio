import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa';
import {
  TimelineSection,
  Container,
  Title,
  TimelineContainer,
  TimelineItem,
  TimelineIcon,
  TimelineContent,
  TimelineDate,
  TimelineTitle,
  TimelineDescription
} from '../styles/components/Timeline.styles';

const timelineData = [
  {
    id: 1,
    icon: <FaGraduationCap />,
    date: '2022 - 2026',
    title: 'B.E. in Artificial Intelligence and Machine Learning',
    description: 'BMS College of Engineering (Affiliated to VTU University), Bangalore (Agg. 9.04 CGPA)',
    type: 'education'
  },
  {
    id: 2,
    icon: <FaGraduationCap />,
    date: '2017 - 2022',
    title: 'Shivalik Cambridge College, Agra',
    description: 'Higher Secondary, Science (Grade: XII - 95.2%) | Secondary, 10th board (Grade: X – 89.4%)',
    type: 'education'
  },
  {
    id: 3,
    icon: <FaBriefcase />,
    date: '10/2023 - 10/2024',
    title: 'Director – Innovation & Business Administration',
    description: 'Institution\'s Innovation Council (IIC), BMSCE, Bangalore',
    type: 'experience'
  },
  {
    id: 4,
    icon: <FaBriefcase />,
    date: '03/2024 - 06/2024',
    title: 'Research and Development Manager',
    description: 'TruBuddies (Mental Health Startup), Bangalore',
    type: 'experience'
  },
  {
    id: 5,
    icon: <FaAward />,
    date: '2024',
    title: 'Cisco Forecast League',
    description: 'Secured 5th place, showcasing expertise in data-driven forecasting and analytical problem-solving',
    type: 'achievement'
  },
  {
    id: 6,
    icon: <FaAward />,
    date: '2024',
    title: 'International Robotics Competition (IRC)',
    description: 'Achieved 3rd place (Bronze Medal) at state level and 15th rank nationally by Avishkaar',
    type: 'achievement'
  }
];

const Timeline = () => {
  return (
    <TimelineSection id="timeline">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Education & Experience
        </Title>
        <TimelineContainer>
          {timelineData.map((item, index) => (
            <TimelineItem
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TimelineIcon>{item.icon}</TimelineIcon>
              <TimelineContent>
                <TimelineDate>{item.date}</TimelineDate>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineDescription>{item.description}</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </Container>
    </TimelineSection>
  );
};

export default Timeline; 