import {
  Nav,
  Navbar,
  Image,
  Card,
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  ListGroup
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import MdArrowBack from "react-ionicons/lib/MdArrowBack";
import MdCalendar from "react-ionicons/lib/MdCalendar";

export default function SMViewPage() {
  return (
    <div style={{ backgroundColor: "#0f1630", marginBottom: "48px" }}>
      <div className="navbar text-white py-4">
        <Nav className="mr-auto">
          <Nav.Item>
            <Link href="/subscription-manager">
              <Button variant="link">
                <MdArrowBack color="white" />
              </Button>
            </Link>
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item>
            <Button variant="link">
              <MdCalendar color="white" />
            </Button>
          </Nav.Item>
        </Nav>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center text-white mb-4">
        <Image
          rounded
          style={{
            width: "64px",
            height: "64px",
            backgroundColor: "#a7fff0",
            padding: "8px"
          }}
          src="https://img.icons8.com/fluent-systems-filled/96/000000/dropbox.png"
        />
        <h3>Dropbox</h3>
        <div
          style={{
            borderRadius: "12px",
            backgroundColor: "rgb(255,255,255,0.1)",
            paddingTop: "4px",
            paddingBottom: "4px",
            paddingLeft: "24px",
            paddingRight: "24px"
          }}
        >
          4 December
        </div>
      </div>

      <div
        className="bg-white"
        style={{
          borderTopRightRadius: "24px",
          borderTopLeftRadius: "24px",
          padding: "24px"
        }}
      >
        <h3>History</h3>
        <ListGroup variant="flush">
          {["November", "October", "September"].map((item, index) => (
            <ListGroup.Item className="d-flex align-items-center">
              <Image
                className="bg-light"
                rounded
                src="https://img.icons8.com/fluent-systems-filled/96/000000/bar-chart.png"
                style={{
                  width: "48px",
                  height: "48px",
                  // backgroundColor: "#a7fff0",
                  padding: "8px"
                }}
              />
              <div className="mr-auto ml-2" style={{ display: "inline-block" }}>
                <h5>Dropbox</h5>
                <h6>4 {item} 2020</h6>
              </div>
              <strong>$8</strong>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}
