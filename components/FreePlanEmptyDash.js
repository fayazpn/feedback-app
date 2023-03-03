import React from 'react'
import { Flex, Heading, Text, Button } from '@chakra-ui/react'
import DashboardContainer from './DashboardContainer'

const FreePlanEmptyDash = () => {
  return (
    <>
    <DashboardContainer>

      <Flex
        width='100%'
        backgroundColor='whiteAlpha.900'
        border='1px'
        borderColor='gray.200'
        px={5}
        py={20}
        borderRadius="md"
        justifyContent="center"
        alignItems="center"
        direction="column"
        gap={2}
      >
        <Heading as='h5' size='md'>
          Get instant feedback to your site
        </Heading>
        <Text>Join us!</Text>
        <Button variant='solid' size='md' width='auto'>
          Upgrade now
        </Button>
      </Flex>
    </DashboardContainer>
    </>
  )
}

export default FreePlanEmptyDash
