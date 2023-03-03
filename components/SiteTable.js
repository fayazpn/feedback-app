import React from 'react'
import { Box, Link } from '@chakra-ui/react'
import { Table, Td, Th, Tr } from './Table'
import { parseISO, format } from 'date-fns'

const SiteTable = ({ sites }) => {
  return (
    <Box overflowX='auto'>
      <Table w='full'>
        <thead>
          <Tr bg="gray.100">
            <Th>Name</Th>
            <Th>Site Link</Th>
            <Th>Feedback Link</Th>
            <Th>Date Added</Th>
            <Th width='50px'>{''}</Th>
          </Tr>
        </thead>
        <tbody>
          {sites.map((site) => (
            <Tr bg="white" key={site.id}>
              <Td fontWeight="medium">{site.name}</Td>
              <Td>{site.url}</Td>
              <Td>
                <Link>View Feedbacks</Link>
              </Td>
              <Td>{format(parseISO(site.createdAt), 'PPpp')}</Td>
              <Td></Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Box>
  )
}

export default SiteTable
