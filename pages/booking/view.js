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
        backgroundSize: "auto 400px",
        marginBottom: "48px"
      }}
    >
      <div className="navbar text-white py-4">
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
            <Col className="d-flex align-items-center">
              <MdStar color="#f0ad4e" />
              <span className="px-2">4.8 | 242 Reviews</span>
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
            <Col className="text-center">
              <Button variant="light">?</Button>
            </Col>
            <Col className="text-center">
              <Button variant="light">?</Button>
            </Col>
            <Col className="text-center">
              <Button variant="light">?</Button>
            </Col>
            <Col className="text-center">
              <Button variant="light">?</Button>
            </Col>
            <Col className="text-center">
              <Button variant="light">?</Button>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">Wi-Fi</Col>
            <Col className="text-center">Service</Col>
            <Col className="text-center">Gym</Col>
            <Col className="text-center">Spa</Col>
            <Col className="text-center">More</Col>
          </Row>
        </Container>
      </div>

      <Navbar fixed="bottom" className="justify-content-around bg-white">
        <Button variant="primary" block>
          BOOK NOW
        </Button>
      </Navbar>
    </div>
  );
}
