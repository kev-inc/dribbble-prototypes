import Link from "next/link";
import { ListGroup } from "react-bootstrap";

export default function IndexPage() {
  return (
    <div className="p-4">
      <h3>Welcome to Dribbble Prototypes</h3>
      <ListGroup>
        <ListGroup.Item>
          <Link href="/booking">Booking App</Link>
          <br />
          <a href="https://dribbble.com/shots/14646942-Booking-App">
            <small>Dribbble link</small>
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link href="/subscription-manager">Subscription Manager App</Link>
          <br />
          <a href="https://dribbble.com/shots/14646957-Subscription-manager-Mobile-app">
            <small>Dribbble link</small>
          </a>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
