import React from 'react'
import { Box, Heading, Text, Button } from '@chakra-ui/react'
import DashboardContainer from './DashboardContainer'

const FreePlanEmptyDash = () => {
  return (
    <>
    <DashboardContainer>

      <Box
        width='100%'
        backgroundColor='whiteAlpha.900'
        border='1px'
        borderColor='gray.200'
        p={5}
      >
        <Heading as='h5' size='md'>
          Get instant feedback to your site
        </Heading>
        <Text>Join us!</Text>
        <Button variant='solid' size='md' width='auto'>
          Upgrade now
        </Button>
      </Box>
    </DashboardContainer>
    </>
  )
}

export default FreePlanEmptyDash
