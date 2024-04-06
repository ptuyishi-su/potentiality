import React from 'react'
import { Container } from '../styles/Container.styled'
import { Flex, FlexClient } from '../styles/Flex.styled'
import { HeroHeading, HeroImage } from '../styles/Hero.styled'
import { Card, LongCard, ClientDiv } from '../styles/Card.styled'
import StoryData from '../../assets/data/impact.json'
import { Link } from 'react-router-dom'
import heroImage from '../../assets/images/heroimg.png'


const ClientStory = () => {
  return (
    <Container>
        <HeroHeading>
            <h2>Client Stories</h2>
        </HeroHeading>
        <Flex>
            {StoryData?.stories?.map(item =>(
                <FlexClient>
                    <h3>{item.title}</h3>
                    <LongCard key={item.id}>
                        <Link>+</Link>
                    </LongCard>
                </FlexClient>
            ))}
            
        </Flex>
    </Container>
  )
}

export default ClientStory
