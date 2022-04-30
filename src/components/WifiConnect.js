import * as React from "react";
import Box from "@mui/material/Box";
// Modal:
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// Popup Dialog:
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 380,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  alignItems: "center",
  justifyContent: "center"
};

const WifiConnect = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <Box>
        <Button onClick={handleOpen}>Get WIFI code</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              🍩Scan me to connect to WIFI
            </Typography>
            {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
            <Box
              component="img"
              sx={{
                m: "auto",
                p: "auto",
                height: "100%",
                width: "100%"
              }}
              alt="ScanMe🍩"
              src="https://i.ibb.co/PZHsy3N/ENTYKEY-qrcode.png"
            />
            {/* <img alt='ScanMe' src="https://i.ibb.co/PZHsy3N/ENTYKEY-qrcode.png" /> */}
          </Box>
        </Modal>
      </Box>
    </React.Fragment>
  );
};
export default WifiConnect;
