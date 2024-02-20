import { Container, Row, Col } from "react-bootstrap"
import ImagemFundo from "./img/imagemReal.png" 
function Imagem() {
    return (
    <Container mt-6>
        <Row>
            Olá
            <Col>
                <img src={ImagemFundo} className="medina"></img>
            </Col>
        </Row>
    </Container>
    )

    
}
export default Imagem;