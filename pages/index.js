import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <h3>Welcome to Dribbble Prototypes</h3>
      <ol>
        <li>
          <Link href="/booking">Booking App</Link>
        </li>

        <li>
          <Link href="/subscription-manager">Subscription Manager App</Link>
        </li>
      </ol>
    </div>
  );
}
