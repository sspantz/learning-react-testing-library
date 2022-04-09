import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Button from "@mui/material/Button";
import SubscriptionForm from "./components/SubscriptionForm";

function App(): ReactJSXElement {
  return (
    <div>
      <Button variant="contained" color="warning">
        Hello World!
      </Button>
      <SubscriptionForm />
    </div>
  );
}

export default App;
