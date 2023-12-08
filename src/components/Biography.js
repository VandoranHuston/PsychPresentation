import {Tab} from 'react-bootstrap'
import {Container, Row, Col} from 'react-bootstrap'
import { BiographyCard } from './BiographyCard'
import Nav from 'react-bootstrap/Nav'
import unabombChild from '../images/UnabombChild.jpeg'
import unabombCollege from '../images/UnabombCollege.jpeg'
import unabombPic from '../images/Unabomb.jpeg'

export const Biography = () => {
    const childhood = 
        {
            title: "Childhood",
            description: 'Theodore Kaczynski was born in Chicago during the year 1942.\
            He grew up in a working-class family of Polish descent. He was exceptionally gifted\
            academically with an overall IQ of 167. He skipped grades 6 and 11 and graduated high school at the age of 15.\
            Kaczynski was often described as a "loner," which he often attributes to skipping the 6th grade.\
            Following his graduation, he attended Harvard on a full-ride.'
            
        }

    const college = {
        title: "Life Prior to Unabomb",
        description: "Ted's life during college was similar to his previous academic experience with\
        very little social interaction. He did meet a psychologist named Henry Murray and participated in\
        a brutalizing psychological experiment. Kaczynski--and many others--were belitted for their personal\
        philosophical beliefs and aspirations. The participants were monitored using electrodes while hostile\
        reactions to their beliefs were continously played infront of them. Kaczynski was subjected to this torture\
        on a weekly basis for three years. Upon graduating from Harvard, Ted continued his education at Michigan and\
        earned both his master's and doctoral degrees in mathematics. He taught at UC Berkeley for a short-period\
        before resigning on June 30, 1969."
    }

    const unabomb = {
        title: "Unabomb",
        description: 'Eventually, Ted made his way to Montana where he lived a simple life,\
        residing in a cabin he built in the woods. From 1978 to 1995, Ted Kaczynski constructed\
        several bombs and mailed them to various targets through the United States Postal Service.\
        The Unabomber sent out nine pipe bombs during a seven year period, targeting airlines and\
        academic advisors. The FBI dubbed him the Unabomber because of his targets (Universities and Airlines).\
        After being spotted planting a bomb on February 20, 1987, the Unabomber took a\
        six-year break until 1993. The Unabomber released his manifesto "Industrial Society and Its Future\
        in 1995. It emphasized the idea that technology was the destruction of human freedom due to\
        its need to "regulate human behavior closely in order to function." FBI agent James R. Fitzgerald\
        used "linguistic forensics" and was able to match the linguistics of the manifesto and letters\
        written by Ted to secure a warrant for his arrest. In April of 1996, Kaczynski pled guilty to ten\
        counts of illegally transporting, mailing, and using bombs and three counts of murders. He died by suicide\
        on June 10th, 2023 while serving his four life sentences.'
    }

    return(
        <section className = "biography" id = "biography">
            <Container>
                <Row>
                    <Col>
                    <h2>Biography</h2>
                    <Tab.Container id = "biography-tabs" defaultActiveKey = "first">
                        <Nav variant = "pills" defaultActiveKey = "/home">
                            <Nav.Item>
                                <Nav.Link eventKey = "first">Childhood</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey = "second">Life Before Unabomb</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey = "third">Unabomb</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey = "first">
                                <Row>
                                    <Col xs = {12} md = {6} xl = {7}>
                                        <h1>{childhood.title}</h1>
                                        <p>{childhood.description}</p>
                                    </Col>
                                    <Col xs = {12} md = {6} xl = {5}>
                                        <img className = "unabomb-child" src = {unabombChild} alt = "Unabomb Child"/>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        <Tab.Content>
                            <Tab.Pane eventKey = "second">
                                <Row>
                                    <Col xs = {12} md = {6} xl = {7}>
                                        <h1>{college.title}</h1>
                                        <p>{college.description}</p>
                                    </Col>
                                    <Col xs = {12} md = {6} xl = {5}>
                                        <img className = "unabomb-college" src = {unabombCollege} alt = "Unabomb College"/>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        <Tab.Content>
                            <Tab.Pane eventKey = "third">
                                <Row>
                                    <Col xs = {12} md = {6} xl = {7}>
                                        <h1>{unabomb.title}</h1>
                                        <p>{unabomb.description}</p>
                                    </Col>
                                    <Col xs = {12} md = {6} xl = {5}>
                                        <img className = "unabomb-adult" src = {unabombPic} alt = "Unabomb"/>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}