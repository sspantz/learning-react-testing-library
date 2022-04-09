import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Box, Button, DialogTitle, TextField } from "@mui/material";
import { useCallback } from "react";

const SubscriptionForm = (): ReactJSXElement => {
  const onClick = useCallback(() => console.log("clicked OK"), []);
  return (
    <div>
      <Box component="form" noValidate autoComplete="off">
        <DialogTitle>Subscription</DialogTitle>
        <TextField
          id="outlined-basic"
          label="Enter an email"
          variant="outlined"
          helperText="Subscribe to our newsletter!"
        />
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={onClick}
          >
            Subscribe
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default SubscriptionForm;
