import React from 'react'
import { Box, Heading, Text, Button } from '@chakra-ui/react'
import DashboardContainer from './DashboardContainer'

const EmptyDash = () => {
  return (
    <>
    <DashboardContainer>

      <Box
        width='100%'
        backgroundColor='whiteAlpha.900'
        border='1px'
        borderColor='gray.100'
        p={5}
        borderRadius="md"
      >
        <Heading as='h5' size='md'>You havent added any site
        </Heading>
        <Text>Lets get started!</Text>
        <Button variant='solid' size='md' width='auto'>
          Add a site
        </Button>
      </Box>
    </DashboardContainer>
    </>
  )
}

export default EmptyDash