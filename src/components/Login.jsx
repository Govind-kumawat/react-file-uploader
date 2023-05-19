import { Container, VStack, Heading, Input, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
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
                    <Heading>Welcome Back</Heading>
                    <Input placeholder='Email' required type='email' focusBorderColor='purple.500' />
                    <Input placeholder='Password' required type='password' focusBorderColor='purple.500' />
                    <Button variant={'link'} alignSelf={'flex-end'}>
                        <Link to={'/forgetpassword'} >Forget Password?</Link>
                    </Button>
                    <Button colorScheme='purple' type='submit'>
                        Login
                    </Button>
                    <Button variant={'link'} alignSelf={'flex-end'}>
                        <Link to={'/signup'} >New User?</Link>
                    </Button>

                </VStack>
            </form>
        </Container>
    )
}

export default Login
