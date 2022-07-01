import React from 'react'
import { Link } from "react-router-dom"
import { Container, Card, Row, Col, Image, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



function Students({students}) {
    return (
        <div>
            <Card className='mb-3 text-center' style={{ width: '12rem' }}>
                <Card.Header as="h5">Student</Card.Header>
                <Image 
                src={require(`./images/${students.image}`).default}
                className="card-img-top" 
                alt="student Profile Pic" 
                fluid
                />
                <Card.Body>
                    <Card.Title>
                        {students.name}
                    </Card.Title>
                    <Card.Text>
                        <p>
                            GPA: <strong>{students.gpa}</strong>
                        </p>
                    </Card.Text>
                    <Button variant="primary">Grade</Button>
                </Card.Body>
            </Card>
        </div>
    )
}



function StudentsList() {
    const cardInfo = [
        {
            image: "s1.png",
            name: "Mike",
            gpa: 3.8
        },
        {
            image: "s2.png",
            name: "Manal",
            gpa: 3.6
        },
        {
            image: "s3.png",
            name: "Moe",
            gpa: 3.2
        },
        {
            image: "s4.png",
            name: "Mary",
            gpa: 2.6
        }
    ]

    return (
        <div className='text-center'>
            <h2>Student List:</h2>
            <Link to="/test" >Go to test page</Link>
            <Container>
                <Row>
                    <Col md={3}>
                        {cardInfo.map(students =>
                        <Students students = {students}/>
                        )}
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default StudentsList
