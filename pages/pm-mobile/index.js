import { Nav, Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MdAdd from "react-ionicons/lib/MdAdd";
import MdMenu from "react-ionicons/lib/MdMenu";
import MdSearch from "react-ionicons/lib/MdSearch";

export default function PMMobilePage() {
  return (
    <div style={{ backgroundColor: "#f4f3fb" }}>
      <Container fluid>
        <div
          style={{
            backgroundColor: "#faf8fd",
            borderBottomLeftRadius: "24px",
            borderBottomRightRadius: "24px"
          }}
        >
          <Row>
            <Col style={{ flexGrow: "100" }}>
              <Button variant="link">
                <MdMenu />
              </Button>
            </Col>
            <Col>
              <Button variant="link">
                <MdSearch />
              </Button>
            </Col>
          </Row>

          <Row style={{ padding: "8px" }}>
            <Col style={{ flexGrow: "100" }}>
              <h3>Manage My Projects</h3>
            </Col>
            <Col>
              <Button variant="link">
                <MdAdd color="#007bff" />
              </Button>
            </Col>
          </Row>

          <Row>
            <Card
              style={{
                width: "100%",
                margin: "24px",
                backgroundColor: "#007bff",
                color: "white",
                borderRadius: "24px"
              }}
            >
              <Card.Body>
                <Card.Title>Progress Today</Card.Title>
                <Card.Text>17 / 18 tasks completed</Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </div>

        <Row>
          <Col
            style={{
              backgroundColor: "white",
              margin: "12px",
              borderRadius: "24px"
            }}
          >
            <Nav justify variant="pills" defaultActiveKey="/home">
              <Nav.Item style={{ margin: "8px" }}>
                <Nav.Link style={{ borderRadius: "24px" }} href="/home">
                  All Projects
                </Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ margin: "8px" }}>
                <Nav.Link style={{ borderRadius: "24px" }}>
                  In Progress
                </Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ margin: "8px" }}>
                <Nav.Link style={{ borderRadius: "24px" }}>Done</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>

        <Row>
          <Col></Col>

          <Col></Col>
        </Row>

        <Row>
          <Col>
            <Card style={{ borderRadius: "24px" }}>
              <Card.Body>
                <Image
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEVCZ7L///8qWKz6+vw+ZbE8Y7B5j8Ree7tKbLQvW62Jncvb4e9QcbY+ZLEyXa45YbCWp9Ds7/ZrhsDS2epXd7m3w9+Qos6drdPQ1+ni5/K/yeJkgL6Blsixvtzv8visudqjstZ7ksXH0OZohL+9yOH/Gkr+AAAD+0lEQVR4nO3dW3OqMBSG4QSCEoVExGOth9r+/9+4tdbZu7M7GqVhrZX53pveOTwDgpCEKv3VajItVSqV02V7hanLn61x3hjqDfu1TO2t2v4jbGaWepsiZGfNVTh2BfXWRKnw64uwcekcnt8zxe5TWNXUWxKtYnYW7h31dkTMzU/COtVj9JwptTqmeBr9m23VwlNvRNT8Um1SPkiVqgcqnZ9qP2Yq6i1ACCGEEEIIIYQQQmL6fBiY0NDfNVN775zNsqwoy1LV3mXnrHXWOe+LwohGF86qzWS/aptcf2vXrNvVcbtcLqZVZazM5/WmsNlgu9b3y3eNwKe9xhWjY4Duq0rakVrb2Ut+3yVWaLLN6hGeNKFxVXufJFhY2/3DPlFCN2yeAMoRmmz5jE+Q0D1wgZAoNG78JFCI0BRPfQXlCI0L+YUmWZg9fhWUJbTzDkAJQj/qAhQgNFUnoAChffo6IUToF92A7IXGdQSyF7pt6kLVFchd2H0XMhca2xnIXNj5RMpeaDv84hYh7Ppzhr/QH1IX/sZBylvY/WLIXOhfUxe6B+98m2Y9/r+SsfCBr2F+nAyN/SnOq+6MD955I2u9wMVZZhYIPFgvT3cu9EQzkDmQrc4rrsKAchdHupcQ4IfYPXg6lQaN9kpegR30kO1D7jGqVLYLEL5LXoOdBUy5yIVeJy6FCMeCzzNhQtFfwyDhQfQi7BDhQvLFIkj4mvw+fE1+H44gZB2EEPIPQgj5ByGE/IMQQv5BCCH/IISQR+ZGQUJ/6xMMg6XOwxtVAcLJ7NYnnCJ+q6UZ3jd0LUtd2CQvbGmHbnoQEg9O9SBc0g5s9CAcJS8c0o7z9yAknpkYX5gTj/PHF66TFx6JZzLEF86TF06Ix/njC9+I7x/jC6mnsccXUk+Zii5sqKe9RReST+yLLnxJ/igln9gXXUj+sDG6cEM9Rzq6kHzdWmxhTvugrQch+eUwupD63im+kH6ee2wh9b1TfCH9LPDYQvKLRXQh/cLZyMId+YkmtpD6UWJ8If3l8FR5Ix8wyv126xMU+dfwTiEzFQa3bo+4A7sL2QchhPyDEEL+QQgh/yCEkH8QQsg/CCHkH4QQ8g9CCPkHIYT8gxBC/kEIIf8ghJB/EELIPwgh5B+EEPIPQgj5ByGE/IMQQv5BCCH/IISQfxBCyD8IIeQfhBDyD0IIH4joFZl9CU2p3hMXTtWE5mDvS+gnakXznpe+hLZVOumj1Cit9J7kVTY9Ce38JNQVxTsk+xEWM30Wri3BgdqLsK53n0I9dv3vxT6Evl7ri1A3let7N8YXGrvZ6atQ633hil7/QVRcoam9LT8un/Il1PlqsSl/k3CnuMJyumyvn/IHstJMOhEjrRsAAAAASUVORK5CYII="
                  rounded
                />

                <Card.Title>Facebook Mobile UI</Card.Title>
                <Card.Text className="text-muted">
                  Design for marketplace page mobile Facebook
                </Card.Text>
              </Card.Body>
              <Card.Footer>3 Members</Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
