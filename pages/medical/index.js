import {
  Nav,
  Navbar,
  Image,
  Card,
  Button,
  InputGroup,
  FormControl,
  ListGroup,
  Form
} from "react-bootstrap";
import MdMenu from "react-ionicons/lib/MdMenu";
import MdHome from "react-ionicons/lib/MdHome";
import MdText from "react-ionicons/lib/MdText";
import MdNotificationsOutline from "react-ionicons/lib/MdNotificationsOutline";
import MdSettings from "react-ionicons/lib/MdSettings";
import MdCalendar from "react-ionicons/lib/MdCalendar";
import Link from "next/link";

export default function MedicalPage() {
  const appts = [
    {
      name: "Dr Charles Xavier",
      time: "9am",
      address: "1407 Graymalkin Lane, Salem Center",
      img: "https://cdn.images.express.co.uk/img/dynamic/36/590x/PSX-698508.jpg"
    },
    {
      name: "Dr Stephen Strange",
      time: "1pm",
      address: "177A Bleecker Street",
      img: "https://pbs.twimg.com/media/Ej0ydHQUcAIYWtY.jpg:large"
    },
    {
      name: "Dr Sheldon Cooper",
      time: "3pm",
      address: "2311 North Los Robles Avenue",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzwmXsYMeM9XosDa6oZzUTM5bpdcxenvxrVw&usqp=CAU"
    }
  ];
  return (
    <div style={{ marginBottom: "64px" }} className="px-2">
      <div
        className="navbar py-4 align-items-start"
        style={{ color: "#A94A48" }}
      >
        <Navbar.Brand className="montbold">
          <div className="montlight" style={{ fontSize: "36px" }}>
            Hello,
          </div>
          <div className="montverybold" style={{ fontSize: "36px" }}>
            Michael!
          </div>
          <div className="montlight" style={{ fontSize: "16px" }}>
            How are you today?
          </div>
        </Navbar.Brand>
        <Nav className="ml-auto d-flex align-items-center">
          <Nav.Item>
            <Image
              style={{ height: "32px", width: "32px", objectFit: "cover" }}
              src="https://www.yourtango.com/sites/default/files/image_blog/types-guys-who-stay-single-men.jpg"
              roundedCircle
            />
          </Nav.Item>
          <Nav.Item>
            <Link href="/">
              <Button variant="link">
                <MdMenu color="#A94A48" />
              </Button>
            </Link>
          </Nav.Item>
        </Nav>
      </div>

      <Card
        body
        className="m-2 text-white shadow-sm"
        style={{
          borderRadius: "16px",
          backgroundColor: "#5f5197",
          paddingBottom: "8px"
        }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <div
              className="montbold py-2"
              style={{
                color: "#eaa7a7",
                fontSize: "8px",
                letterSpacing: "1.5px"
              }}
            >
              YOUR FAMILY DOCTOR
            </div>
            <h5 className="montbold w-75">Dr. Helena Norman</h5>
            <Image
              className="my-2"
              style={{ width: "20px", height: "20px" }}
              src="https://img.icons8.com/fluent-systems-filled/96/ffffff/right.png"
            />
          </div>
          <Image
            roundedCircle
            style={{
              height: "64px",
              width: "64px",
              objectFit: "cover",
              marginLeft: "24px"
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGAmVY0MUa03zHNdikqqdyfcBF52fqOZaKpQ&usqp=CAU"
          />
        </div>
      </Card>

      <div
        className="d-flex justify-content-between mt-3 p-2 align-items-center"
        style={{ color: "#5f5197" }}
      >
        <h5>Daily Medications</h5>
        <small>See all</small>
      </div>

      <div>
        {["Atorvastatin", "Aspirine", "Ibuprofen"].map((item, index) => (
          <Card body className="m-2 shadow-sm" style={{ borderRadius: "12px" }}>
            <div className="d-flex align-items-center">
              <div className="flex-fill">
                <div className="montbold">{item}</div>
                <small className="text-muted">
                  3 pills / Take before eating
                </small>
              </div>
              <MdNotificationsOutline className="mx-2" color="#a94a48" />
              <Form.Check custom type="checkbox" id={`custom-checkbox`} />
            </div>
          </Card>
        ))}
      </div>

      <div
        className="d-flex justify-content-between mt-3 p-2 align-items-center"
        style={{ color: "#5f5197" }}
      >
        <h5>Today Appointments</h5>
        <small>See all</small>
      </div>
      <div>
        {appts.map((item, index) => (
          <Card body className="m-2 shadow-sm" style={{ borderRadius: "12px" }}>
            <div className="d-flex align-items-center">
              <Image
                roundedCircle
                style={{
                  height: "48px",
                  width: "48px",
                  objectFit: "cover",
                  marginRight: "12px"
                }}
                src={item.img}
              />
              <div className="flex-fill">
                <small className="text-muted">{item.time}</small>
                <div className="montbold">{item.name}</div>
                <small>{item.address}</small>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Navbar fixed="bottom" className="justify-content-around bg-white">
        <Button variant="link">
          <MdHome style={{ opacity: 0.6 }} />
        </Button>
        <Button variant="link">
          <MdNotificationsOutline style={{ opacity: 0.2 }} />
        </Button>
        <Link href="/medical/view">
          <Button variant="link" style={{ backgroundColor: "#5f5197" }}>
            <MdCalendar color="white" />
          </Button>
        </Link>
        <Button variant="link">
          <MdText style={{ opacity: 0.2 }} />
        </Button>
        <Button variant="link">
          <MdSettings style={{ opacity: 0.2 }} />
        </Button>
      </Navbar>
    </div>
  );
}
