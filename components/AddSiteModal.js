import React from 'react'
import {
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Button,
  ModalFooter,
  useDisclosure,
  useToast
} from '@chakra-ui/react'
import { useForm } from "react-hook-form";
import { addSite } from '@/lib/db'
import { useAuth } from '@/lib/auth'
import { useSWRConfig } from '@/node_modules/swr/core/dist/index'

const AddSiteModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const toast = useToast()
  const auth = useAuth()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { mutate } = useSWRConfig()
  
  const onSubmit = ({name, url}) => {
    const newSite = {
      authorId: auth.user?.uid,
      createdAt: new Date().toISOString(),
      name,
      url
    }

    addSite(newSite)
    toast({
      title: 'Site Added',
      description: "We've added the site",
      status: 'success',
      duration: 4000,
      isClosable: true,
    })
    mutate('/api/sites', async data => {
      console.log([...data.sites, newSite], 'dataa')
      return {sites:[...data.sites, newSite]}

    }, { revalidate: false })
    onClose()
  };

  console.log(watch("siteUrl")); // watch input value by passing the name of it
  return (
    <>
      <Button
        backgroundColor='gray.900'
        color='white'
        fontWeight='medium'
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)',
        }}
        onClick={onOpen}
      >
        {children}
      </Button>
     
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Add your site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Site Name</FormLabel>
              <Input ref={initialRef} placeholder='Site Name' {...register("name", { required: true })} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Site URL</FormLabel>
              <Input placeholder='https://example.com' {...register("url", { required: true })}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              backgroundColor='gray.900'
              color='white'
              fontWeight='medium'
              _hover={{ bg: 'gray.700' }}
              _active={{
                bg: 'gray.800',
                transform: 'scale(0.95)',
              }}
              mr={3}
              type="submit"
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    </>
  )
}

export default AddSiteModal
