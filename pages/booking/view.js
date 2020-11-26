import {
  Nav,
  Navbar,
  Image,
  Card,
  Container,
  Row,
  Col,
  Button
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MdArrowBack from "react-ionicons/lib/MdArrowBack";
import MdHeart from "react-ionicons/lib/MdHeart";
import MdStar from "react-ionicons/lib/MdStar";
import MdBookmark from "react-ionicons/lib/MdBookmark";
import Link from "next/link";

export default function ViewPage() {
  return (
    <div
      style={{
        background: `url('https://r.lvmh-static.com/uploads/2018/07/ok-site-4-2000x1100.jpg')`,
        backgroundSize: "auto 360px"
      }}
    >
      <div className="navbar text-white">
        <Nav>
          <Nav.Item>
            <Link href="/booking">
              <Button variant="link">
                <MdArrowBack color="white" />
              </Button>
            </Link>
          </Nav.Item>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Item>
            <Button variant="link">
              <MdHeart color="red" />
            </Button>
          </Nav.Item>
        </Nav>
      </div>
      <div
        style={{
          marginTop: "240px",
          padding: "12px"
        }}
      >
        {["Room", "Lobby", "Restaurant", "Spa"].map((item, index) => (
          <Button
            variant="dark"
            size="sm"
            style={{ opacity: 0.6, borderRadius: "24px", marginLeft: "12px" }}
          >
            <small>{item}</small>
          </Button>
        ))}
      </div>
      <div
        className="bg-white"
        style={{
          borderTopRightRadius: "24px",
          borderTopLeftRadius: "24px",
          padding: "12px"
        }}
      >
        <Container fluid style={{ paddingTop: "12px" }}>
          <Row>
            <Col>
              <h6 className="text-warning">
                <MdBookmark color="#f0ad4e" />
                Recommended Rooms
              </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Superior, Guest Room, 1 King, Balcony</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <MdStar color="#f0ad4e" />
              <span>4.8 | 242 Reviews</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-muted">
                A luxury resort hotel on an island in the Jumeirah Bay. Designed
                by famous Italian architects Antonio Citterio and Patricia Viel.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="light" block>
                ?
              </Button>
            </Col>
            <Col>
              <Button variant="light" block>
                ?
              </Button>
            </Col>
            <Col>
              <Button variant="light" block>
                ?
              </Button>
            </Col>
            <Col>
              <Button variant="light" block>
                ?
              </Button>
            </Col>
            <Col>
              <Button variant="light" block>
                ?
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>Wi-Fi</Col>
            <Col>Service</Col>
            <Col>Gym</Col>
            <Col>Spa</Col>
            <Col>More</Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" block style={{ borderRadius: "24px" }}>
                BOOK NOW
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
