import {
  Nav,
  Navbar,
  Image,
  Card,
  Button,
  InputGroup,
  FormControl,
  ListGroup
} from "react-bootstrap";
import MdNotificationsOutline from "react-ionicons/lib/MdNotificationsOutline";
import MdSearch from "react-ionicons/lib/MdSearch";
import MdHome from "react-ionicons/lib/MdHome";
import MdSettings from "react-ionicons/lib/MdSettings";
import MdStats from "react-ionicons/lib/MdStats";
import Link from "next/link";

export default function SubscriptionHome() {
  const cards = [
    {
      name: "Dropbox",
      price: 8,
      img: "https://img.icons8.com/fluent-systems-filled/96/000000/dropbox.png"
    },
    {
      name: "Shazam",
      price: 7,
      img: "https://img.icons8.com/fluent-systems-filled/96/000000/shazam.png"
    },
    {
      name: "Spotify",
      price: 5,
      img: "https://img.icons8.com/fluent-systems-filled/96/000000/spotify.png"
    }
  ];
  return (
    <div style={{ backgroundColor: "#0f1630", marginBottom: "48px" }}>
      <div className="navbar text-white py-4">
        <Navbar.Brand className="montbold">Schedule</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Item>
            <Link href="/">
              <Button variant="link">
                <MdNotificationsOutline color="white" />
              </Button>
            </Link>
          </Nav.Item>
        </Nav>
      </div>

      <div style={{ overflow: "auto", whiteSpace: "nowrap" }}>
        {cards.map((item, index) => (
          <Card
            body
            style={{
              margin: "12px",
              width: "140px",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.1)",
              color: "white",
              display: "inline-block"
            }}
          >
            <Image
              src={item.img}
              style={{
                height: "48px",
                width: "48px",
                padding: "8px",
                backgroundColor: "#a7fff0"
              }}
              rounded
            />
            <h6 className="py-1">{item.name}</h6>
            <span className="montbold" style={{ fontSize: "20px" }}>
              ${item.price}.00
            </span>
            <br />
            <span style={{ fontSize: "12px" }}>/month</span>
          </Card>
        ))}
      </div>

      <div
        className="bg-white"
        style={{
          borderTopRightRadius: "24px",
          borderTopLeftRadius: "24px",
          padding: "24px"
        }}
      >
        <h3 className="montbold">Recent</h3>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text
              style={{
                border: "0px",
                borderTopLeftRadius: "12px",
                borderBottomLeftRadius: "12px",
                paddingTop: "12px",
                paddingBottom: "12px"
              }}
            >
              <MdSearch />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            style={{
              border: "0px",
              backgroundColor: "#e9ecef",
              borderTopRightRadius: "12px",
              borderBottomRightRadius: "12px",
              paddingTop: "24px",
              paddingBottom: "24px"
            }}
            placeholder="Search for..."
          />
        </InputGroup>

        <ListGroup variant="flush">
          {cards.map((item, index) => (
            <ListGroup.Item
              className="d-flex align-items-center"
              style={{ alignItems: "center" }}
            >
              <Image
                rounded
                src={item.img}
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#a7fff0",
                  padding: "8px"
                }}
              />
              <div className="mr-auto ml-2" style={{ display: "inline-block" }}>
                <h5>{item.name}</h5>
                <h6 className="montlight">${item.price}/Month</h6>
              </div>
              <div
                className="text-center bg-light px-2"
                style={{ display: "inline-block", borderRadius: "4px" }}
              >
                <strong>2</strong>
                <br />
                <small>Dec</small>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <Navbar fixed="bottom" className="justify-content-around bg-white">
        <Button variant="link">
          <MdHome style={{ opacity: 0.6 }} />
        </Button>
        <Button variant="link">
          <Link href="/subscription-manager/view">
            <MdStats style={{ opacity: 0.2 }} />
          </Link>
        </Button>
        <Button variant="link">
          <MdSettings style={{ opacity: 0.2 }} />
        </Button>
      </Navbar>
    </div>
  );
}
