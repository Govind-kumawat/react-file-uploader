import { Container, Button, Input, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
            <form >
                <VStack
                    alignItems={'stretch'}
                    w={['full', '96']}
                    m={'auto'}
                    my={'16'}
                    spacing={'8'}
                >
                    <Heading>Video Hub</Heading>
                    <Input placeholder='Name' required type='text' focusBorderColor='purple.500' />
                    <Input placeholder='Email' required type='email' focusBorderColor='purple.500' />
                    <Input placeholder='Password' required type='password' focusBorderColor='purple.500' />
                    <Button colorScheme='purple' type='submit'>
                        Sign Up
                    </Button>
                    <Button variant={'link'} alignSelf={'flex-end'}>
                        <Link to={'/login'} >Already Registered?</Link>
                    </Button>

                </VStack>
            </form>
        </Container>
    )
}

export default Signup
