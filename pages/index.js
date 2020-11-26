import Link from "next/link";
import { ListGroup, Card, Button } from "react-bootstrap";
import MdArrowDropright from "react-ionicons/lib/MdArrowDropright";
import LogoGithub from "react-ionicons/lib/LogoGithub";

export default function IndexPage() {
  const apps = [
    {
      name: "Hotel Booking App",
      href: "/booking",
      url: "https://dribbble.com/shots/14646942-Booking-App"
    },
    {
      name: "Subscription Manager App",
      href: "/subscription-manager",
      url: "https://dribbble.com/shots/14646957-Subscription-manager-Mobile-app"
    },
    {
      name: "Medical App",
      href: "/medical",
      url: "https://dribbble.com/shots/14646783-Medical-mobile-app"
    }
  ];
  return (
    <div className="p-4">
      <h3 className="montbold">UI/UX Design Book</h3>
      <p className="montlight">
        This website hosts a collection of webpages with designs adapted from
        Dribbble.
      </p>
      {apps.map((item, index) => (
        <Card body className="my-2 shadow-sm">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6>{item.name}</h6>
              <small>
                View the original at <a href={item.url}>Dribbble</a>
              </small>
            </div>
            <div>
              <Link href={item.href}>
                <Button variant="light">
                  <MdArrowDropright style={{ opacity: 0.5 }} />
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      ))}
      <div className="text-center mt-4">
        <Link href="https://github.com/kev-inc/dribbble-prototypes">
          <Button variant="light" size="sm" style={{ opacity: 0.5 }}>
            <LogoGithub />
            <small className="montbold ml-2">View on GitHub</small>
          </Button>
        </Link>
      </div>
    </div>
  );
}
