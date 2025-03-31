import React from "react";
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 250px;
  height: 350px;
  background-color: #c8a2c8;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  margin: 20px;
  padding: 20px;
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const Icon = styled.span`
  font-size: 50px;
  color: #00AEF0;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #222;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  text-align: center;
`

const Container = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-wrap: wrap;
     max-width: 1200px;
     margin: auto;
     padding: 40px 0;
   `;

const PageHeader = styled.h1`
     text-align: center;
     font-size: 32px;
     font-weight: bold;
     color: #222;
     margin-bottom: 40px;
   `;


const AchievementCard = ({icon,title,description})=>{
    return (
        <CardContainer>
            <Icon>{icon}</Icon>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </CardContainer>
    )
}

const achievements = [
    {
        icon: '🚀',
        title: 'Быстрое развитие',
        description: 'Наша команда стремительно развивается и достигает новых высот.',
    },
    {
        icon: '👨‍💻',
        title: 'Профессиональная команда',
        description: 'Наши специалисты обладают высоким уровнем профессионализма и креативностью.',
    },
    {
        icon: '✅',
        title: 'Высокая эффективность',
        description: 'Мы достигаем поставленных целей с максимальной эффективностью.',
    },
    {
        icon: '🌍',
        title: 'Международное признание',
        description: 'Наш продукт получил международное признание и востребован во многих странах.',
    },
];

const AchievePage = () => {
    return (
        <Container>
            <PageHeader>Наши достижения</PageHeader>
            {achievements.map((achievement, index) => (
                <AchievementCard key={index} {...achievement} />
            ))}
        </Container>
    )
}

const AchievePage1 = () => {
    return (
        <div className="achieve-page">
            <h1>Достижения</h1>
            <p>У нас много достижений в области информационных технологий. Мы участвовали в различных проектах и конференциях.</p>
        </div>
    )
}

export default AchievePage