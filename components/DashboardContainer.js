import React from 'react'
import {
  Box,
  Flex,
  Link,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Image,
  Button,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useAuth } from '@/lib/auth'
import AddSiteModal from './AddSiteModal'

const DashboardContainer = ({ children }) => {
  const { user, appSignOut } = useAuth()

  return (
    <Box height='auto'>
      <Flex flexDirection='column' height='100%'>
        <Flex
          justifyContent='space-between'
          pl={10}
          pr={10}
          opacity={1}
          height={70}
        >
          <Flex justifyContent='center' alignItems='center' gap={4}>
            <Image boxSize='30px' src='/brand.svg' alt='Brand' />
            <Link>Feedback</Link>
            <Link>Sites</Link>
          </Flex>
          <Flex flexDirection='row-reverse' alignItems='center' gap={2}>
            {/* <Link>{user?.name}</Link> */}
            {user && (
              <Button variant='ghost' mr={2} onClick={() => appSignOut()}>
                Log Out
              </Button>
            )}
            <Avatar src={user?.photoUrl} size='sm' />
          </Flex>
        </Flex>
        <Flex
          alignItems='center'
          justifyContent='center'
          height='100vh'
          p={10}
          backgroundColor='gray.50'
          opacity={1}
        >
          <Flex
            flexDirection='column'
            height='100%'
            width='100%'
            maxWidth='800px'
          >
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink>Account</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink>Sites</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>

            <Flex
              flexDirection='row'
              justifyContent='space-between'
              alignItems='center'
              width='100%'
            >
              <Heading my={2}>Sites</Heading>

              <AddSiteModal>
                Add site <AddIcon boxSize={3} ml={2} />
              </AddSiteModal>
            </Flex>
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default DashboardContainer