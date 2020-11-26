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
import MdSearch from "react-ionicons/lib/MdSearch";
import MdMenu from "react-ionicons/lib/MdMenu";
import MdStar from "react-ionicons/lib/MdStar";
import Link from "next/link";

export default function BookingApp() {
  const data = [
    {
      name: "Bulgari Hotel & Resorts",
      location: "Jumeirah Bay Island",
      desc: "Elite resort with beach access and private pier.",
      img: "https://r.lvmh-static.com/uploads/2018/07/ok-site-4-2000x1100.jpg",
      price: 988
    },
    {
      name: "Four Seasons Resort",
      location: "Jumeirah Beach",
      desc: "Luxury beachfront resort with spa facilities.",
      img:
        "https://hotel-development.marriott.com/wp-content/uploads/2017/12/Brand_Bulgari_A_Gallery_Guestroom-Milano-Room-Partition_572x322.jpg",
      price: 420
    },
    {
      name: "Jumeirah Beach Hotel",
      location: "Jumeirah - Umm Suqeim",
      desc: "Luxury beachfront resort with spa facilities.",
      img:
        "https://media-cdn.tripadvisor.com/media/photo-s/1b/4c/a5/67/guest-room.jpg",
      price: 420
    }
  ];
  return (
    <div className="bg-primary">
      <div className="navbar text-white py-4">
        <Nav className="mr-auto">
          <Nav.Item>
            <Link href="/">
              <Button variant="link">
                <MdMenu color="white" />
              </Button>
            </Link>
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item>
            <small>Beverly Chang</small>
          </Nav.Item>
          <Nav.Item className="pl-3">
            <Image
              style={{ height: "32px", width: "32px" }}
              src="https://i.pinimg.com/originals/26/bf/5d/26bf5df9cca10e608e8211903547917d.jpg"
              roundedCircle
            />
          </Nav.Item>
        </Nav>
      </div>
      <div className="navbar text-white">
        <Navbar.Brand>Dubai, UAE</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Item>
            <Button variant="link">
              <MdSearch color="white" />
            </Button>
          </Nav.Item>
        </Nav>
      </div>

      <div
        className="bg-white"
        style={{
          borderTopRightRadius: "24px",
          borderTopLeftRadius: "24px",
          padding: "12px"
        }}
      >
        {data.map((item, index) => (
          <Link href="/booking/view">
            <Card
              style={{
                borderRadius: "24px",
                marginTop: "24px",
                marginLeft: "12px",
                marginRight: "12px",
                padding: "0px",
                overflow: "hidden"
              }}
            >
              <Container>
                <Row>
                  <Col xs={4} style={{ padding: "0px" }}>
                    <Image
                      style={{ height: "200px", objectFit: "cover" }}
                      fluid
                      src={item.img}
                    />
                  </Col>
                  <Col xs={8} className="py-2">
                    <h5 className="text-primary">{item.name}</h5>
                    <small className="text-muted">{item.location}</small>
                    <br />
                    <small>{item.desc}</small>
                    <div>
                      <MdStar color="#f0ad4e" />
                      <MdStar color="#f0ad4e" />
                      <MdStar color="#f0ad4e" />
                      <MdStar color="#f0ad4e" />
                      <MdStar color="#f7f7f7" />
                      <small className="text-warning">4.0</small>
                    </div>
                    <div>
                      <span className="text-primary">${item.price} </span>
                      <small className="text-muted">per night</small>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
