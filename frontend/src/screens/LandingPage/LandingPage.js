import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className='main'>
        <Container>
            <Row >
                <div className='intro-text'>
                    <div>
                        <h1 className='title'>NoteZipper</h1>
                        <p className='subtitle'>One Safe place for all yours notes.</p>
                    </div>
                    <div className='buttoncontainer'>
                        <Link to='/login' >
                            <Button size='lg' className='landingbutton'>Login</Button>
                        </Link>
                        <Link to='/register'>
                            <Button size='lg' className='landingbutton' variant='outline-primary'>Sign Up</Button>
                        </Link>
                    </div>

                </div>

            </Row>
        </Container>
    </div>
  )
}

export default LandingPage