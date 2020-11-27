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
import Link from "next/link";
import IosAppsOutline from "react-ionicons/lib/IosAppsOutline";
import MdOptions from "react-ionicons/lib/MdOptions";
import MdSearch from "react-ionicons/lib/MdSearch";

export default function JobIndexPage() {
  const colors = {
    darkblue: "#26577f",
    blue: "#3496ff"
  };

  const popular = [
    {
      role: "UI Designer",
      company: "Google LLC",
      img: "https://assets.stickpng.com/thumbs/5847f9cbcef1014c0b5e48c8.png"
    },
    {
      role: "UX Copywriter",
      company: "Airbnb",
      img: "https://www.pngkey.com/png/full/60-605967_airbnb-logo-png.png"
    },
    {
      role: "UI Designer",
      company: "Google LLC",
      img: "https://assets.stickpng.com/thumbs/5847f9cbcef1014c0b5e48c8.png"
    },
    {
      role: "UX Copywriter",
      company: "Airbnb",
      img: "https://www.pngkey.com/png/full/60-605967_airbnb-logo-png.png"
    }
  ];
  const suggestions = [
    {
      role: "Interaction Designer",
      company: "Invision - New York, USA",
      img: "https://cdn.worldvectorlogo.com/logos/invision.svg"
    },
    {
      role: "Sr. UI Designer",
      company: "Microsoft - Silicon Valley",
      img: "https://betanews.com/wp-content/uploads/2022/08/Microsoft-Logo1.jpg"
    },
    {
      role: "Interaction Designer",
      company: "Invision - New York, USA",
      img: "https://cdn.worldvectorlogo.com/logos/invision.svg"
    },
    {
      role: "Sr. UI Designer",
      company: "Microsoft - Silicon Valley",
      img: "https://betanews.com/wp-content/uploads/2022/08/Microsoft-Logo1.jpg"
    }
  ];
  return (
    <div>
      <div className="navbar text-white py-4">
        <Nav>
          <Nav.Item>
            <Link href="/">
              <Button
                variant="link"
                className="shadow-sm p-2"
                style={{ borderRadius: "12px" }}
              >
                <IosAppsOutline color={colors.blue} />
              </Button>
            </Link>
          </Nav.Item>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Item>
            <Image
              style={{
                width: "36px",
                height: "36px",
                objectFit: "cover",
                borderRadius: "12px"
              }}
              src="https://image.shutterstock.com/mosaic_250/2967241/666258808/stock-photo-portrait-of-young-beautiful-cute-cheerful-girl-smiling-looking-at-camera-over-white-background-666258808.jpg"
            />
          </Nav.Item>
        </Nav>
      </div>

      <div className="px-3" style={{ color: colors.darkblue }}>
        <div className="montbold" style={{ fontSize: "36px" }}>
          Hello, Emily
        </div>
        <div className="text-muted">Let's find your dream job!</div>
      </div>
      <InputGroup className="px-3 mt-3 mb-4">
        <InputGroup.Prepend>
          <InputGroup.Text
            style={{
              borderRight: "0px",
              borderTopLeftRadius: "16px",
              borderBottomLeftRadius: "16px",
              backgroundColor: "white"
            }}
          >
            <MdSearch style={{ opacity: 0.5 }} />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          style={{
            borderLeft: "0px",
            borderTopRightRadius: "16px",
            borderBottomRightRadius: "16px",
            paddingTop: "24px",
            paddingBottom: "24px",
            marginRight: "12px"
          }}
          placeholder="Search your dream job"
        />
        <InputGroup.Append>
          <InputGroup.Text
            style={{
              border: "0px",
              borderRadius: "12px",
              backgroundColor: colors.blue
            }}
          >
            <MdOptions color="#ffffff" />
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>

      <div
        className="px-3 d-flex justify-content-between align-items-center"
        style={{ color: colors.darkblue }}
      >
        <h5 className="montbold">Popular Jobs</h5>
        <small className="montbold text-muted">Show all</small>
      </div>

      <div
        className="pl-3 pb-4"
        style={{
          overflow: "auto",
          whiteSpace: "nowrap",
          paddingTop: "12px",
          paddingBottom: "12px"
        }}
      >
        {popular.map((item, index) => (
          <Link href="/job-finder/view">
            <div
              className="flex-column mr-4 d-inline-flex align-items-center justify-content-center neushadows"
              style={{
                paddingTop: "24px",
                paddingBottom: "24px",
                width: "144px",
                borderRadius: "16px",
                color: colors.darkblue
              }}
            >
              <Image
                src={item.img}
                style={{
                  width: "32px",
                  height: "32px",
                  objectFit: "cover",
                  marginTop: "24px",
                  marginBottom: "24px"
                }}
              />
              <h6 className="montbold">{item.role}</h6>
              <small className="text-muted">{item.company}</small>
            </div>
          </Link>
        ))}
      </div>

      <div
        className="px-3 d-flex justify-content-between align-items-center"
        style={{ color: colors.darkblue }}
      >
        <h5 className="montbold">Job Suggestions</h5>
        <small className="montbold text-muted">Show all</small>
      </div>
      <div className="px-3">
        {suggestions.map((item, index) => (
          <Card
            body
            className="m-2 neushadows border-0"
            style={{ borderRadius: "12px" }}
          >
            <div className="d-flex align-items-center">
              <Image
                rounded
                style={{
                  height: "42px",
                  width: "42px",
                  objectFit: "cover",
                  marginRight: "12px"
                }}
                src={item.img}
              />
              <div className="flex-fill" style={{ color: colors.darkblue }}>
                <div className="montbold">{item.role}</div>
                <small className="text-muted">{item.company}</small>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
