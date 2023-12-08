import {Container, Row, Col} from "react-bootstrap"
import {useState, useEffect} from "react"
import homeImage from '../images/UnabombSketch.jpg'

export const Home = () => {
    return (
    <section className = "home" id = "home">
            <Container>
                <Row className = "align-items-center">
                    <Col xs = {12} md = {6} xl = {7}>
                        <h1>Ted Kaczynski</h1>
                        <span className = "header">Unabomb: A Psychological Breakdown</span>
                    </Col>
                    <Col xs = {12} md = {6} xl = {5}>
                        <img src = {homeImage} alt = "Home Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}  