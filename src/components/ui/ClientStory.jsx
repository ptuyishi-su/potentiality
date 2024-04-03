import React from 'react'
import { Container } from '../styles/Container.styled'
import { Flex } from '../styles/Flex.styled'
import { HeroHeading, HeroImage } from '../styles/Hero.styled'
import { Card } from '../styles/Card.styled'
import StoryData from '../../assets/data/impact.json'

const ClientStory = () => {
  return (
    <Container>
        <HeroHeading>
            <h2>Client Stories</h2>
        </HeroHeading>
        <Flex>
            {StoryData?.stories?.map(item =>(
                <Card key={item.id}>
                    <h3>{item.title}</h3>
                    <img src={item.src}  alt={item.alt}  height={100}/>
                    <p>{item.Content}</p>
                </Card>
            ))}
            
        </Flex>
    </Container>
  )
}

export default ClientStory
