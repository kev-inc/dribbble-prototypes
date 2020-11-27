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
import Link from "next/link";
import MdClose from "react-ionicons/lib/MdClose";
import MdSearch from "react-ionicons/lib/MdSearch";
import MdStar from "react-ionicons/lib/MdStar";

export default function MedicalViewPage() {
  const cats = [
    {
      name: "Stomach",
      img: "https://img.icons8.com/fluent-systems-regular/96/ffffff/stomach.png"
    },
    {
      name: "Lungs",
      img: "https://img.icons8.com/fluent-systems-regular/96/ffffff/lungs.png"
    },
    {
      name: "Kidney",
      img: "https://img.icons8.com/fluent-systems-regular/96/ffffff/kidney.png"
    },
    {
      name: "Brain",
      img: "https://img.icons8.com/ios/100/ffffff/head-with-brain.png"
    }
  ];
  const doctors = [
    {
      name: "Alex Dalvadi",
      job: "Pulmonogist",
      img:
        "https://cdn.sanity.io/images/0vv8moc6/hcplive/0ebb6a8f0c2850697532805d09d4ff10e838a74b-200x200.jpg?auto=format"
    },
    {
      name: "Darlene Robertson",
      job: "Dentist",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRIeKI1wiV7ADOFl91Ho55lGh00j6m3VHiEQ&usqp=CAU"
    },
    {
      name: "Theresa Webb",
      job: "Gastrologist",
      img:
        "https://thumbs.dreamstime.com/b/beautiful-young-female-doctor-9182291.jpg"
    }
  ];
  return (
    <div>
      <div
        className="navbar py-4 align-items-start"
        style={{ color: "#A94A48" }}
      >
        <Nav className="ml-auto d-flex align-items-center">
          <Nav.Item>
            <Link href="/medical">
              <Button variant="link">
                <MdClose color="#A94A48" />
              </Button>
            </Link>
          </Nav.Item>
        </Nav>
      </div>
      <div>
        <div
          className="px-4"
          style={{ color: "#A94A48", fontSize: "32px", width: "75%" }}
        >
          Let's find <strong>your doctor</strong>
        </div>
        <div className="px-3">
          <InputGroup className="my-3 rounded shadow">
            <FormControl
              style={{
                border: "0px",
                paddingTop: "24px",
                paddingBottom: "24px"
              }}
              placeholder="Doctor name"
            />
            <InputGroup.Append>
              <InputGroup.Text
                style={{
                  border: "0px",
                  backgroundColor: "white",
                  paddingTop: "12px",
                  paddingBottom: "12px"
                }}
              >
                <MdSearch color="#5f5197" />
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </div>
        <div
          className="d-flex justify-content-between px-4 mb-2 align-items-center"
          style={{ color: "#5f5197" }}
        >
          <h5 className="montlight">Categories</h5>
          <small>See all</small>
        </div>
        <div
          className="pl-4 mb-4"
          style={{ overflow: "auto", whiteSpace: "nowrap" }}
        >
          {cats.map((item, index) => (
            <div
              className="flex-column p-2 mr-4 d-inline-flex align-items-center justify-content-center text-white"
              style={{
                width: "84px",
                height: "84px",
                backgroundColor: "#5f5197",
                borderRadius: "12px"
              }}
            >
              <Image src={item.img} style={{ width: "32px", height: "32px" }} />
              <small>{item.name}</small>
            </div>
          ))}
        </div>
        <div
          className="d-flex justify-content-between px-4 mb-2 align-items-center"
          style={{ color: "#5f5197" }}
        >
          <h5 className="montlight">Top Doctors</h5>
          <small>See all</small>
        </div>
        <div className="px-4">
          {doctors.map((item, index) => (
            <Card
              body
              className="m-2 shadow-sm"
              style={{ borderRadius: "12px" }}
            >
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
                  <small className="text-muted">{item.job}</small>
                  <div className="montbold">{item.name}</div>
                  <div>
                    {[1, 2, 3, 4, 5].map((item, index) => (
                      <MdStar color="#f0ad4e" fontSize="12px" />
                    ))}
                  </div>
                </div>
                <Button variant="light" size="sm">
                  <Image
                    style={{ width: "16px", height: "16px" }}
                    src="https://img.icons8.com/fluent-systems-filled/96/5f5197/right.png"
                  />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
