//import * as React from "react";
// antd:
import "antd/dist/antd.css";
import {
  //Button,
  message
} from "antd";

// antd message:
const key = "updatable";

// we can have Promise message which will change to success after promise made
const openMessageBox = () => {
  message.loading({
    content: "Loading...",
    //content: content1,
    key,
    style: {
      marginTop: "10vh"
    }
  });
  setTimeout(() => {
    message.success({
      content: "Completed!",
      //content: content2,
      key,
      duration: 2,
      style: {
        marginTop: "10vh"
      }
    });
  }, 1000);
};
export default openMessageBox;

// export const MessageBox = () => {

//   return (
//     <React.Fragment>
//       <Button type="primary" onClick={openMessage}>
//         Open the message box
//       </Button>
//     </React.Fragment>
//   );
// };
