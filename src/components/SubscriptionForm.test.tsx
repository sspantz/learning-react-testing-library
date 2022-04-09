import { render, screen } from "@testing-library/react";
import SubscriptionForm from "./SubscriptionForm";

describe(`Subscription Form Test`, () => {
  it(`should Subscription Form correctly rendered`, () => {
    render(<SubscriptionForm />);
    screen.getByText(/Subscription/i);
  });

});
