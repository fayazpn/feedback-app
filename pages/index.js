import { useAuth } from '@/lib/auth'
import Link from 'next/link'
import {
  Flex,
  Heading,
  Image,
  Button,
  Box,
  Text,
  ButtonGroup,
} from '@chakra-ui/react'

export default function Home() {
  const auth = useAuth()

  return (
    <>
      <Flex bg='gray.50' py={16} px={4} height='100vh'>
        <Flex
          as='main'
          direction='column'
          maxW='700px'
          margin='0 auto'
          justifyContent='center'
          alignItems='center'
        >
          <Image boxSize='70px' src='/brand.svg' alt='Brand' mb='2' />
          <Heading as='h3' size='lg' my="4">
            Feedback
            <Link href='/dashboard'>Dashboard</Link>
          </Heading>
          <Box>
            {auth.user ? (
              <ButtonGroup gap='2'>
                <Button colorScheme='grey' variant='outline'>
                  <Link href='/dashboard'>View Dashboard</Link>
                </Button>
                <Button
                  colorScheme='grey'
                  variant='outline'
                  onClick={() => auth.appSignOut()}
                >
                  Sign Out
                </Button>
              </ButtonGroup>
            ) : (
              <Button
                colorScheme='black'
                variant='outline'
                onClick={() => auth.signinWithGithub()}
                mx='auto'
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
