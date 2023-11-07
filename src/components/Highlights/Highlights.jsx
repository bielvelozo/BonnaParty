'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const styleButtonsNext = {
    position: 'absolute',
    zIndex: '999',

    width: '43px',
    height: '43px',
    background: ' #FAFAFA',

    border: '1px',
    borderRadius: '100%',
    color: 'grey',
    opacity: ' 0.40',
    cursor: ' pointer',

    display: 'flex',
    paddingLeft: '7px',
    justifyContent: 'center',
    alignItems: 'center',
    margin:'0 20px',

    top: '50%',
    right: '0',
    left: '',
    transform: 'translateY(-50%)',
};

const styleImg = {
  width: '100%',
  height: 'auto',
};

const styleButtonsBack = { ...styleButtonsNext, right: '', left: '0' };

const ImageCarousel = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768); // Defina seu próprio ponto de interrupção para dispositivos móveis
    }

    handleResize(); // Verifica o tamanho da tela inicialmente

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const adjustImageSize = (imgPath) => {
    if (isMobile) {
    
    }
    return imgPath;
  };

  return (
    <div style={{ zIndex: '0', position: 'relative' }}>
      <CarouselProvider naturalSlideWidth={50} naturalSlideHeight={17.9} totalSlides={3}>
        <Slider style={{ boxShadow: 'inset 10px 10px 10px black' }}>
          <Slide index={0}>
            <Image
              src={adjustImageSize('/assets/slide1.png')}
              width={0}
              height={0}
              sizes="100vw"
              alt="BonnaParty logo"
              style={styleImg}
            />
          </Slide>
          <Slide index={1}>
            <Image
              src={adjustImageSize('/assets/slide2.png')}
              width={0}
              height={0}
              sizes="100vw"
              alt="BonnaParty logo"
              style={styleImg}
            />
          </Slide>
          <Slide index={2}>
            <Image
              src={adjustImageSize('/assets/slide3.png')}
              width={0}
              height={0}
              sizes="100vw"
              alt="BonnaParty logo"
              style={styleImg}
            />
          </Slide>
        </Slider>

        <ButtonBack style={styleButtonsBack}>
          <ArrowBackIosIcon />
        </ButtonBack>
        <ButtonNext style={styleButtonsNext}>
          <ArrowForwardIosIcon />
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
};

export default ImageCarousel;
