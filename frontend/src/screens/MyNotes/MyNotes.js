import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Badge, Button, Card, Accordion } from 'react-bootstrap';
// import { Accordion } from 'react-bootstrap-Accordion';
import MainScreen from '../../components/MainScreen';
import { Link } from 'react-router-dom';

const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  
  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {

    }
  } 

  const fetchNotes = async() => {
    const { data } = await axios.get('/api/notes')
    setNotes(data)
  }
  
  useEffect(() => {
    fetchNotes()
  }, []);
  
  return (
    <MainScreen title='Welcome back Aj..'>
      <Link to='/createnote'>
        <Button style={{ marginLeft: 10, marginBottom: 6}} size='lg'>
          Create New Note
        </Button>
      </Link>

      {
        notes.map(note => {
          return (
            <Accordion key={note._id} defaultActiveKey={["0"]}>
            <Accordion.Item eventkey="0">
              <Card key={note._id} style={{margin: 10}}>
              
                <Accordion.Button style={{marginBottom: 0, fontSize: '1rem', cursor: 'pointer'}} as={Card.Text} variant="link">
                  <Card.Header style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <span>{note.title}</span>
                    <div>
                      <Button href={`/note/${note._id}`}>Edit</Button>
                      <Button variant='danger' className='mx-2'
                        onClick={() => deleteHandler(note._id)}
                        >
                        Delete
                      </Button>
                    </div>
                  </Card.Header>
                </Accordion.Button>

                <Accordion.Collapse>
                  <Card.Body>
                    <h4>
                      <Badge variant="success">
                        Category - {note.category}
                      </Badge>
                    </h4>
                    
                    <blockquote className="blockquote mb-0">
                      <p>
                        {note.content}
                      </p>
                      <footer className="blockquote-footer">
                        Created On - date
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion.Item>
            </Accordion>
          )
        })
      }
    </MainScreen>
  )
}

export default MyNotes;