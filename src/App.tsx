import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Button from "@mui/material/Button";

function App(): ReactJSXElement {
  return (
    <div>
      <Button variant="contained" color="warning">
        Hello World!
      </Button>
    </div>
  );
}

export default App;
