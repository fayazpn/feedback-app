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
} from '@chakra-ui/react'
// import { CopyIcon } from '@chakra-ui/icons'

const DashboardContainer = ({children}) => {
  return (
    <Box height="auto">
      <Flex flexDirection="column" height="100%">
        <Flex
          justifyContent="space-between"
          pl={10}
          pr={10}
          opacity={1}
          height={70}
        >
          <Flex justifyContent="center" alignItems="center" gap={4}>
            {/* <CopyIcon /> */}
            <Link>Link text</Link>
            <Link>Link text</Link>
          </Flex>
          <Flex flexDirection="row-reverse" alignItems="center" gap={5}>
            <Link>Account</Link>
            <Avatar />
          </Flex>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          height="100%"
          p={10}
          backgroundColor="gray.200"
          opacity={1}
        >
          <Flex
            
            flexDirection="column"
            height="100%"
            width="100%"
            maxWidth="800px"
          >
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink>Account</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink>Sites</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading>Sites</Heading>
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default DashboardContainer