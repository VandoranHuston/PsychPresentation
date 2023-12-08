import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import antipsychotic from '../images/antipsychotics.png'
import therapy from '../images/Psychotherapy.webp'
import token from '../images/TokenEcon.webp'
import milieu from '../images/milieu.png'

export const Treatment = () =>{
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    return(
        <section className = "treatment" id = "treatment">
            <Container>
                <Row>
                    <Col>
                    <div className = "treatment-box">
                        <h2>
                            Treatment
                        </h2>
                        <p>Treatment Options</p>
                        <Carousel responsive={responsive} infinite = {true} className = "treatment-slider">
                            <div className="item">
                                <img src = {antipsychotic} alt="Image"/>
                                <h5>Antipsychotics</h5>
                            </div>
                            <div className="item">
                                <img src = {therapy} alt="Image"/>
                                <h5>Psychotherapy</h5>
                            </div>
                            <div className="item">
                                <img src = {milieu} alt="Image"/>
                                <h5>Milieu Therapy</h5>
                            </div>
                            <div className="item">
                                <img src = {token} alt="Image"/>
                                <h5>Token Economy Program</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}