import { useAuth } from '@/lib/auth'
import { Flex, Heading, Image, Button, Box, Text } from '@chakra-ui/react'

export default function Home() {
  const auth = useAuth()

  return (
    <>
      <Flex bg='gray.100' py={16} px={4} height='100vh'>
        <Flex
          as='main'
          direction='column'
          maxW='700px'
          margin='0 auto'
          justifyContent='center'
          alignItems='center'
        >
          <Image boxSize='70px' src='/brand.svg' alt='Brand' />
          <Heading as='h3' size='lg'>
            Feedback
          </Heading>
          <Box>
            {auth.user ? (
              <Button
                colorScheme='grey'
                variant='outline'
                onClick={() => auth.appSignOut()}
                
              >
                Sign Out
              </Button>
            ) : (
              <Button
                colorScheme='black'
                variant='outline'
                onClick={() => auth.signinWithGithub()}
                mx="auto"
              >
                Sign in
              </Button>
            )}


          </Box>
<Text fontSize='xl'>{auth?.user?.email}</Text>
        </Flex>
      </Flex>
    </>
  )
}
