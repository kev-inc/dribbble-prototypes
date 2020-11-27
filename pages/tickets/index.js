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
import MdMenu from "react-ionicons/lib/MdMenu";
import MdHome from "react-ionicons/lib/MdHome";
import IosSearchOutline from "react-ionicons/lib/IosSearchOutline";
import IosTextOutline from "react-ionicons/lib/IosTextOutline";
import IosPersonOutline from "react-ionicons/lib/IosPersonOutline";

export default function TicketsIndexPage() {
  const cat = [
    {
      name: "Restaurants",
      img:
        "https://img.icons8.com/fluent-systems-regular/96/000000/restaurant.png"
    },
    {
      name: "Concerts",
      img:
        "https://img.icons8.com/fluent-systems-regular/96/000000/grand-piano.png"
    },
    {
      name: "Theatre",
      img:
        "https://img.icons8.com/fluent-systems-regular/96/000000/theatre-mask.png"
    },
    {
      name: "Cinema",
      img:
        "https://img.icons8.com/fluent-systems-regular/96/000000/documentary.png"
    }
  ];

  const tickets = [
    {
      date: "21-11-2020",
      name: "Theatre-in-Cinema Marathon HD",
      tags: ["Cinema", "Theatre"],
      img:
        "https://lh3.googleusercontent.com/proxy/IldqwqOxR1DSYJdft2qvy_Jf2CHnMTnLQczRHnZ1XJXjk9jKsT1hk6F4Nxlg7eWx-g1buodnAJvuYJ2YiEVyq1rME73EJVl0Hbs6_QJWpkTjwv-H3DIc1wc"
    },
    {
      date: "23-11-2020",
      name: "Jenna Triplow's Stand-Up Show",
      tags: ["Stand-up"],
      img:
        "https://paulgreenamyer.files.wordpress.com/2018/03/chris-rock-grid-uproxx.jpg"
    },
    {
      date: "30-11-2020",
      name: "Chocolatier's Night",
      tags: ["Food", "Chocolatier"],
      img: "https://cdn.luxuo.com/2013/01/Godiva-Factory.jpg"
    }
  ];
  return (
    <div style={{ marginBottom: "120px" }}>
      <div className="navbar text-white pt-4 pb-2">
        <Nav>
          <Nav.Item>
            <Link href="/">
              <Button variant="link">
                <MdMenu />
              </Button>
            </Link>
          </Nav.Item>
        </Nav>
      </div>

      <div className="navbar pt-2 pb-4 mx-2">
        <Navbar.Brand className="montbold" style={{ fontSize: "32px" }}>
          Explore
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Item>
            <Image
              rounded
              style={{ width: "36px", height: "36px", objectFit: "cover" }}
              src="https://img.cinemablend.com/quill/5/f/c/d/9/5/5fcd951000ebd77f17a2f0e676ee957e2cdccf37.jpg"
            />
          </Nav.Item>
        </Nav>
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
        {cat.map((item, index) => (
          <div
            className="flex-column p-4 mr-4 d-inline-flex align-items-center justify-content-center neushadows"
            style={{
              width: "96px",
              borderRadius: "16px"
            }}
          >
            <Image
              src={item.img}
              style={{
                width: "32px",
                height: "32px",
                objectFit: "cover"
              }}
            />
            <small className="text-muted">{item.name}</small>
          </div>
        ))}
      </div>

      <div>
        {tickets.map((item, index) => (
          <Link href="/tickets/view">
            <div
              className="neushadows d-flex mr-4 mb-4"
              style={{
                borderTopRightRadius: "16px",
                borderBottomRightRadius: "16px",
                overflow: "hidden"
              }}
            >
              <div className="flex-fill p-3">
                <small className="text-muted">{item.date}</small>
                <h6 className="montbold">{item.name}</h6>
                <div>
                  {item.tags.map((item2, index2) => (
                    <Badge
                      pill
                      variant="secondary"
                      className="montlight px-2 mr-2"
                    >
                      {item2}
                    </Badge>
                  ))}
                </div>
              </div>
              <Image
                src={item.img}
                style={{
                  width: "128px",
                  height: "128px",
                  objectFit: "cover",
                  borderBottomLeftRadius: "16px"
                }}
              />
            </div>
          </Link>
        ))}
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
