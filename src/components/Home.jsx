import { Box, Image, Heading, Container, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    p: '4',
    transform: 'translate(-50% ,-50%)',
    textTransform: 'Uppercase',
    size: '4xl'
}

const Home = () => {
    return (
        <Box>
            <MyCarousel />

            <Container minH={'100vh'} p={'16'} maxW={'container.xl'}>
                <Heading w={'fit-content'} textTransform={'uppercase'} py={'4'} m={'auto'} borderBottom={'2px solid'}>Services</Heading>
                <Stack
                    h={'full'}
                    p={'4'}
                    alignItems={'center'}
                    direction={['column', 'row']}
                >

                    <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
                    <Text letterSpacing={'widest'} p={['4', '16']} lineHeight={'190%'} textAlign={'center'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eveniet ipsam dignissimos soluta, culpa, dolor cum maiores similique quod consequuntur doloribus, tempore molestiae natus atque ullam eaque corporis? Molestias delectus quisquam optio aperiam ad voluptas suscipit tenetur similique. Voluptatum quidem quo, temporibus ullam reiciendis ea, placeat aut, laborum molestiae quos voluptates aliquid laudantium et consequatur nemo? Cupiditate quam fuga, veritatis perspiciatis quidem velit deleniti!
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
}

const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showArrows={false} showThumbs={false} showStatus={false}>
        <Box w={'full'} h={'100vh'}>
            <Image src={img1} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Watch the Future</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img2} />
            <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>Future is Gaming</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img3} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Gaming on Console</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img4} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Night Life is Cool</Heading>
        </Box>
    </Carousel>
);

export default Home
