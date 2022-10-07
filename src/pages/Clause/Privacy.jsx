import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Privacy = ({ show, setShow }) => {
  const handleClose = () => {
    setShow(false);
  };

  return (
    <Dialog
      open={show}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"清水河畔隐私条款"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
            您使用清水河畔服务，即表示您信赖我们对您的信息的处理方式。我们深知这项责任事关重大，因此一直致力于保护您的信息，并让您拥有控制权。
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          我知道了
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Privacy;
