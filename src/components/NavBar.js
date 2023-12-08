import {Navbar, Container, Nav} from "react-bootstrap";
import {useState, useEffect} from "react";

export const NavBar = () => {
    const[activeLink, setActiveLink] = useState('home');
    const[scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []) 
    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return(
        <Navbar expand = "lg" className = {scrolled ? "scrolled" : ""}>
            <Container>

                <Navbar.Toggle aria-controls = "basic-navbar-nav">
                    <span className = "navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id = "basic-navbar-nav">
                    <Nav className = "me-auto">
                        <Nav.Link href = "#home" className = {activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href = "#biography" className = {activeLink === 'biography' ? 'active navbar-link': 'navbar-link'} onClick = {() => onUpdateActiveLink('biography')}>Biography</Nav.Link>
                        <Nav.Link href = "#diagnosis" className = {activeLink === 'diagnosis' ? 'active navbar-link': 'navbar-link'} onClick = {() => onUpdateActiveLink('diagnosis')}>Diagnosis</Nav.Link>
                        <Nav.Link href = "#treatment" className = {activeLink === 'treatment' ? 'active navbar-link': 'navbar-link'} onClick = {() => onUpdateActiveLink('treatment')}>Treatment</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}