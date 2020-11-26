import Link from "next/link";
import { ListGroup } from "react-bootstrap";

export default function IndexPage() {
  const apps = [
    {
      name: "Booking App",
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
      <h3>Welcome to Dribbble Prototypes</h3>
      <ListGroup>
        {apps.map((item, index) => (
          <ListGroup.Item>
            <Link href={item.href}>{item.name}</Link>
            <br />
            <a href={item.url}>
              <small>Dribbble link</small>
            </a>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
