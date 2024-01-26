import Accordion from 'react-bootstrap/Accordion';
import style from './style.module.css'
import { Container } from '@mui/material';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function BasicExample() {
  useEffect(()=>{
    AOS.init({
      duration: 2000
    })
  },[])
  return (
<Container >
    <Accordion className='w-100' id={style.mainAccordion} data-aos='fade-left'>
      <Accordion.Item eventKey="0" className='w-100'>
        <Accordion.Header className='text-white'>How are my photos handled after the training process?</Accordion.Header>
        <Accordion.Body className='text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion className='w-100' id={style.mainAccordion} data-aos='fade-right'>
      <Accordion.Item eventKey="1" className='w-100'>
        <Accordion.Header className='text-white'>Who has ownership of the ai pictures?</Accordion.Header>
        <Accordion.Body className='text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion className='w-100' id={style.mainAccordion} data-aos='fade-left'>
      <Accordion.Item eventKey="2" className='w-100'>
        <Accordion.Header className='text-white'>What type of photos are suitable for upload?</Accordion.Header>
        <Accordion.Body className='text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion className='w-100' id={style.mainAccordion} data-aos='fade-right'>
      <Accordion.Item eventKey="3" className='w-100'>
        <Accordion.Header className='text-white'>Where exactly is my data stored?</Accordion.Header>
        <Accordion.Body className='text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion className='w-100' id={style.mainAccordion} data-aos='fade-left'>
      <Accordion.Item eventKey="4" className='w-100'>
        <Accordion.Header className='text-white'>Is it possible to obtain a refund?</Accordion.Header>
        <Accordion.Body className='text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion className='w-100' id={style.mainAccordion} data-aos='fade-right'>
      <Accordion.Item eventKey="5" className='w-100'>
        <Accordion.Header className='text-white'>Which photo formats are compatible for upload?</Accordion.Header>
        <Accordion.Body className='text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion className='w-100' id={style.mainAccordion} data-aos='fade-left'>
      <Accordion.Item eventKey="6" className='w-100'>
        <Accordion.Header className='text-white'>Is the payment process secure?</Accordion.Header>
        <Accordion.Body className='text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion className='w-100' id={style.mainAccordion} data-aos='fade-right'>
      <Accordion.Item eventKey="7" className='w-100'>
        <Accordion.Header className='text-white'>Is it possible to receive an invoice?</Accordion.Header>
        <Accordion.Body className='text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
  );
}

export default BasicExample;