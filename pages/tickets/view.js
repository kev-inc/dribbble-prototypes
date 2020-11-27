import {
  Nav,
  Navbar,
  Image,
  Card,
  Button,
  InputGroup,
  FormControl,
  ListGroup,
  Badge
} from "react-bootstrap";
import Link from "next/link";
import MdArrowBack from "react-ionicons/lib/MdArrowBack";
import MdHeart from "react-ionicons/lib/MdHeart";
import MdHome from "react-ionicons/lib/MdHome";
import IosSearchOutline from "react-ionicons/lib/IosSearchOutline";
import IosTextOutline from "react-ionicons/lib/IosTextOutline";
import IosPersonOutline from "react-ionicons/lib/IosPersonOutline";

export default function TicketViewPage() {
  return (
    <div style={{ marginBottom: "120px" }}>
      <Image
        style={{
          width: "100%",
          objectFit: "cover",
          position: "absolute",
          zIndex: -1,
          borderBottomLeftRadius: "48px"
        }}
        src="https://lh3.googleusercontent.com/proxy/IldqwqOxR1DSYJdft2qvy_Jf2CHnMTnLQczRHnZ1XJXjk9jKsT1hk6F4Nxlg7eWx-g1buodnAJvuYJ2YiEVyq1rME73EJVl0Hbs6_QJWpkTjwv-H3DIc1wc"
      />
      <div className="navbar text-white pt-4 pb-2">
        <Nav>
          <Nav.Item>
            <Link href="/tickets">
              <Button
                variant="link"
                style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
              >
                <MdArrowBack />
              </Button>
            </Link>
          </Nav.Item>
        </Nav>
      </div>

      <div
        className="px-3 d-flex flex-row-reverse"
        style={{ paddingTop: "160px" }}
      >
        <Button
          variant="link"
          style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
        >
          <MdHeart />
        </Button>
      </div>
      <div className="px-3" style={{ paddingTop: "48px" }}>
        <h3 className="montbold">Theatre-in-Cinema Marathon HD</h3>
        <div className="d-flex py-2">
          <Badge className="p-2 mr-3 montlight" variant="light">
            21-11-2020 20:00
          </Badge>
          <Badge pill className="p-2 mr-3 montlight" variant="success">
            Cinema
          </Badge>
          <Badge pill className="p-2 mr-3 montlight" variant="danger">
            Theatre
          </Badge>
        </div>
        <Button
          className="my-2 py-2"
          variant="dark"
          block
          style={{ borderRadius: "16px" }}
        >
          Book tickets
        </Button>
        <p className="text-muted py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eros
          erat, aliquam vel placerat vel, malesuada sed eros. Nullam varius at
          nulla facilisis suscipit. Praesent dictum commodo mi, at vestibulum mi
          maximus quis. Nam scelerisque quam sed neque dictum, non viverra felis
          auctor. Cras tempor eget odio id sodales. Mauris nec sodales felis, ac
          ultricies ipsum. Sed leo turpis, egestas ac nisi id, faucibus aliquet
          libero. Donec ex sem, vestibulum sed faucibus a, consectetur in augue.
          Integer vestibulum semper elit. In egestas enim magna, sed vulputate
          tellus malesuada at. Donec viverra ac quam a egestas. Nunc sit amet
          tempus arcu.
        </p>
      </div>
      <Navbar
        fixed="bottom"
        className="py-4 justify-content-around bg-dark"
        style={{ borderTopLeftRadius: "32px", borderTopRightRadius: "32px" }}
      >
        <Button variant="link">
          <MdHome color="white" />
        </Button>
        <Button variant="link">
          <IosSearchOutline color="white" />
        </Button>
        <Button variant="link">
          <IosTextOutline color="white" />
        </Button>
        <Button variant="link">
          <IosPersonOutline color="white" />
        </Button>
      </Navbar>
    </div>
  );
}
