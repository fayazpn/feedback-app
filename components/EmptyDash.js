import React from 'react'
import { Flex, Heading, Text, Button } from '@chakra-ui/react'

const EmptyDash = () => {
  return (
    <>
      <Flex
        width='100%'
        backgroundColor='whiteAlpha.900'
        border='1px'
        borderColor='gray.100'
        px={5}
        py={20}
        borderRadius='md'
        justifyContent='center'
        alignItems='center'
        direction='column'
        gap={2}
      >
        <Heading as='h5' size='md'>
          You havent added any site
        </Heading>
        <Text>Lets get started!</Text>
        <Button variant='solid' size='md' width='auto'>
          Add a site
        </Button>
      </Flex>
    </>
  )
}

export default EmptyDash