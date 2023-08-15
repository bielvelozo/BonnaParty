'use client'

import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const styleButtonsNext = {
    position: 'absolute',
    zIndex: '999',
    width: '43px',
    height: '43px',
    background:' #FAFAFA',
    border: '1px',
    borderRadius: '100%',
    color: 'grey',
    opacity:' 0.40',
    cursor:' pointer',
    display: 'flex',
    paddingLeft: '7px',
    justifyContent: 'center',
    alignItems: 'center',      
    
    top:' 50%',
    right: '0',
    left:'',
    transform: 'translateY(-50%)',
}

const styleButtonsBack = {...styleButtonsNext ,right:'', left: '0'}

export default function ImageCarousel(props) {



    return (
        <div
            style={{
                width:'100vw',
                backgroundColor: 'red',
                position: 'absolute',
                top: '0',
                right: '0',
                zIndex:'-1'
            }}
        >
            <CarouselProvider
                naturalSlideWidth={50}
                naturalSlideHeight={17.9}
                totalSlides={3}

            >

                <Slider>
                    <Slide index={0}><img src="/assets/slide1.png" style={{ width: '100vw' }} /></Slide>
                    <Slide index={1}>I am the second Slide.</Slide>
                    <Slide index={2}>I am the third Slide.</Slide>
                </Slider>

                <ButtonBack style={styleButtonsBack}><ArrowBackIosIcon></ArrowBackIosIcon></ButtonBack>
                <ButtonNext style={styleButtonsNext}><ArrowForwardIosIcon></ArrowForwardIosIcon></ButtonNext>
            </CarouselProvider>
        </div>
    )
}