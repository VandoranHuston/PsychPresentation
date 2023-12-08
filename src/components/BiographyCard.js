import {Col} from "react-bootstrap"

export const BiographyCard = ({title, description}) => {
    return(
        <Col sm = {6} md = {4}>
            <div className = "bio-text">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </Col>
    )
}