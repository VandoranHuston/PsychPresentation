import {Tab} from 'react-bootstrap'
import {Container, Row, Col} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'

export const Diagnosis = () =>{
    const diag = {
        title: "Schizophrenia",
        symptoms: ["Delusions: \n\
                    Ted had two main delusional thoughts: Believing society was being controlled by \
                    modern technology (his manifesto) and that his parents' extreme psychological verbal \
                    abuse was the reason for his dysfunction in life, particularly with establishing \
                    a relationship with a woman.", 
                    "Withdrawal (Negative Symptom): \n\
                    Ted was fairly withdrawn from society. He resided in his cabin in the woods \
                    and only left to send out bombs or do tasks for money. He also held little contact \
                    with his family. His brother, David, would occasionally receive letters from Kaczynski.", 
                    "Unpredictable Agitation (Grossly Disorganized Symptom): \n\
                    An example of this occurred during Ted's time at the University of Michigan. \
                    In 1966, he experienced sexual fantasies about being a woman and decided to undergo a gender \
                    transition. He arranged to meet with a psychiatrist to discuss this, but changed his mind \
                    in the waiting room and did not discuss it with the psychiatrist. Afterward, he felt intense \
                    rage and considered killing the psychiatrist and others he hated. "]
    }

    const causes = {
        title: "Causes",
        cause: ["Biological: \n\
                Problems with brain chemicals such as dopamine and glutamate may contribute to the disorder in \
                addition to differences in brain structure and central nervous systems. Brains of schizophrenia \
                patients were examined and their brain cell organization was shown to be more random. 'Nests' have \
                have also been found in the mesolimbic areas—the central nervous system circuit involving dopaminergic inputs—of the brain.",
                "Genetics: \n\
                Genetics is crucial in  the development of this disorder. People with twins that are diagnosed have \
                a 50% chance of developing it and parents/siblings create a 10% chance.", 
                "Possibly developed before birth: \n\
                studies have shown that fetuses during flu seasons are at increased risk \
                of schizophrenia. Kaczynski was born in May, so it is possible that his mother \
                may have had the flu in the months leading up to his birth.", 
                "Possible influenced by 'mind-altering' drugs (unlikely): \n\
                During the Unabomber's time at Harvard, he participated in Professor Henry Murray's \
                psychological experiments. Murray began supervising research around psychedlic drugs \
                during Kaczynski's participation in the experiment. It is possible he was exposed \
                to these drugs for up to two years, which could have influenced the development \
                of schizophrenia; however, there is no evidence to prove this and it is highly unlikely."]
    }

    return(
        <section className = "diagnosis" id = "diagnosis">
            <Container>
                <Row>
                    <Col>
                    <h2>Diagnosis and Etiology</h2>
                    <Tab.Container id = "diagnosis-tabs" defaultActiveKey = "first">
                        <Nav variant = "pills" defaultActiveKey = "/home">
                            <Nav.Item>
                                <Nav.Link eventKey = "first">Diagnosis</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey = "second">Causes</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey = "first">
                                <Row>
                                        <h1>{diag.title}</h1>
                                        <ul>
                                            <li>{diag.symptoms[0]}</li>
                                            <li>{diag.symptoms[1]}</li>
                                            <li>{diag.symptoms[2]}</li>
                                        </ul>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        <Tab.Content>
                            <Tab.Pane eventKey = "second">
                                <Row>
                                        <h1>{causes.title}</h1>
                                        <ul>
                                            <li>{causes.cause[0]}</li>
                                            <li>{causes.cause[1]}</li>
                                            <li>{causes.cause[2]}</li>
                                            <li>{causes.cause[3]}</li>
                                        </ul>
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