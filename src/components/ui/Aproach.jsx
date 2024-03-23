import React from 'react'
import { Container } from '../styles/Container.styled'
import { Flex, FlexEven } from '../styles/Flex.styled'
import { HeroContent, HeroHeading } from '../styles/Hero.styled'
import tools from '../../assets/data/impact.json'
import { Button } from '../styles/Button.styled'
import { Card } from '../styles/Card.styled'

const Aproach = () => {
  return (
    <Container>
      <Flex>
        <HeroHeading>
            <h2>Our Aproach</h2>
        </HeroHeading>
        <HeroContent>
            <p>Potentiality aims to revolutionize the player identification and recruitment process, rectifying its fragmented nature due to a lack of unified, verified data on available players. We understand the specific data and information needs of the football industry, and we bridge the gap between these requirements and player presentations</p>
        </HeroContent>
      </Flex>
      <FlexEven >
        {tools.aproach.map((aproach)=>{
            return (
            <Card>
                <p>{aproach.price}</p>
                <h3>{aproach.title}</h3>
                <Button><a href={aproach.link}>Learn more</a></Button>
            </Card>
            )
        })}
      </FlexEven>
    </Container>
  )
}

export default Aproach
