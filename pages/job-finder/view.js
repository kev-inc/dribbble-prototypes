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
import IosArrowBack from "react-ionicons/lib/IosArrowBack";
import MdShare from "react-ionicons/lib/MdShare";
import MdPin from "react-ionicons/lib/MdPin";

export default function JobViewPage() {
  const colors = {
    pink: "#f2d5db",
    darkblue: "#26577f",
    blue: "#3496ff"
  };
  return (
    <div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "160px",
          backgroundColor: colors.pink,
          borderBottomLeftRadius: "36px",
          borderBottomRightRadius: "36px",
          zIndex: -1
        }}
      ></div>
      <div className="navbar text-white py-4">
        <Nav>
          <Nav.Item>
            <Link href="/job-finder">
              <Button
                variant="light"
                className="p-2"
                style={{ borderRadius: "12px" }}
              >
                <IosArrowBack color={colors.pink} />
              </Button>
            </Link>
          </Nav.Item>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Item>
            <Button
              variant="light"
              className="p-2"
              style={{ borderRadius: "12px" }}
            >
              <MdShare color={colors.pink} />
            </Button>
          </Nav.Item>
        </Nav>
      </div>

      <div>
        <div
          className="text-center"
          style={{
            color: colors.darkblue
          }}
        >
          <Image
            className="bg-light mb-3"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "16px",
              padding: "24px",
              marginTop: "20px"
            }}
            src="https://assets.stickpng.com/thumbs/5847f9cbcef1014c0b5e48c8.png"
          />
          <h5 className="montbold">Interaction Designer</h5>
          <div>
            <small className="text-muted">Google LCC - Fulltime</small>
          </div>
          <div>
            <MdPin color={colors.blue} />
            <small className="text-muted ml-1">Washington</small>
          </div>
          <Navbar
            className="justify-content-around bg-white neushadows mx-4 my-3"
            style={{ borderRadius: "24px" }}
          >
            <Button
              variant="light text-primary"
              style={{ borderRadius: "24px" }}
            >
              <small className="montbold">Description</small>
            </Button>
            <Button variant="link" disabled>
              <small className="montbold">Company</small>
            </Button>
            <Button variant="link" disabled>
              <small className="montbold">Reviews</small>
            </Button>
          </Navbar>
        </div>
        <div className="px-4">
          <h5 className="montbold py-2" style={{ color: colors.darkblue }}>
            Overview
          </h5>
          <small className="text-muted">
            We believe that design and you will be critical to the company's
            success. You will work with our founders and our early customers to
            help... <span className="text-primary">Read more</span>
          </small>

          <h5 className="montbold mt-4 py-2" style={{ color: colors.darkblue }}>
            Minimum Qualifications
          </h5>
          <ul className="mb-3">
            <li>
              <small className="text-muted">
                5+ years working as a interaction manager.
              </small>
            </li>
            <li>
              <small className="text-muted">
                Bachelor's degree in design or equivalent practical experience
              </small>
            </li>
            <li>
              <small className="text-muted">
                Experience designing across multiple platforms.
              </small>
            </li>
            <li>
              <small className="text-muted">
                Experience using prototyping tools.
              </small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
