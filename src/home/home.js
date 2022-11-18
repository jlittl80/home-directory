import './home.css';
import jsonData from '../resources/data.json';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const loadData = () => JSON.parse(JSON.stringify(jsonData));

function Home() {
    const data = loadData();
    console.log(data);

    return (
        <div className="Home">
            <Container fluid>
                <Row style={{ paddingTop: "10px" }}>
                    {data.map((element) => {
                        return (
                            <Col xs={6} md={6} lg={4} xl={2} xxl={2}>
                                <Card style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                                    <Card.Img variant="top" src={element.icon} style={{ padding: "20px" }} />
                                    <Card.Body>
                                        <Card.Title>{element.title}</Card.Title>
                                        <Card.Text>
                                            {element.urls.map((url) => {
                                                return (
                                                    <div>
                                                        <a href={url.url} target="_blank" rel="noopener noreferrer">
                                                            {url.title}
                                                        </a>
                                                    </div>
                                                )
                                            })}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default Home;

/*
return (
<div className="Home">
<Container fluid>
<Row style={{paddingTop: "10px"}}>
{data.map((element) => {
return (
<Col xs={6} md={6} lg={4} xl={2} xxl={2}>
<Card style={{backgroundColor: "rgba(0,0,0,0.5)"}}>
<Card.Img variant="top" src={element.icon} style={{padding:"20px"}}/>
<Card.Body>
<Card.Title>{element.title}</Card.Title>
<Card.Text>
{element.urls.map((url) => {
return (
<div>
<a href={url.url} target="_blank" rel="noopener noreferrer">
{url.title}
</a>
</div>
)
})}
</Card.Text>
</Card.Body>
</Card>
</Col>
)
})}
</Row>
</Container>
</div>
);
*/