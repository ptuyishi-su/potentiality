import React from 'react'
import { Container } from '../styles/Container.styled'
import { Flex } from '../styles/Flex.styled'
import { HeroContent, HeroHeading } from '../styles/Hero.styled'
import { Button } from '../styles/Button.styled'
import { Banner } from '../styles/Banner.styled'
const OrganizationSection = () => {
  return (
    <>
      <Container>
        <Flex>
            <HeroHeading>
                <span>Streamline</span>
                <h2>
                    Streamline the recruitment process and find the right athletes with ease.
                </h2>
            </HeroHeading>
            <HeroContent>
                <h3>Organization Integration</h3>
                <p>
                Our network provides colleges with powerful tools to efficiently identify and connect with talented athletes, making the recruitment process more efficient and effective. With our streamlined platform, colleges can easily search for athletes based on specific criteria, view their profiles, and communicate directly with them. This saves time and resources, allowing colleges to focus on finding the best fit for their programs.
                </p>
                <Button bg="secondary">Explore all Integrattion</Button>
            </HeroContent>
        </Flex>
      </Container>
    </>
  )
}

export default OrganizationSection
