import { toast } from 'react-toastify';
export const ShowNotification = (
  message,
  type,
  timeOut = 3000,
  position = "top-right"
) => {
  return toast(`${message}`, {
    type, // allowed types ["info","success","warning","error","default"]
    autoClose: timeOut,
    hideProgressBar: false,
    position,
    draggable: false,
    closeOnClick: false,
    onClose: () => {
    //   delete curMsgs[message];
    },
  });
  // if (curMsgs[message]) {
  //   toast.update(curMsgs[message], {
  //     type, // allowed types ["info","success","warning","error","default"]
  //     autoClose: timeOut,
  //     hideProgressBar: false,
  //     position,
  //     draggable: false,
  //     closeOnClick: false,
  //     onClose: () => {
  //       delete curMsgs[message];
  //     },
  //   });
  //   return curMsgs[message];
  // }
  // curMsgs[message] = toast(`${message}`, {
  //   type, // allowed types ["info","success","warning","error","default"]
  //   autoClose: timeOut,
  //   hideProgressBar: false,
  //   position,
  //   draggable: false,
  //   closeOnClick: false,
  //   onClose: () => {
  //     delete curMsgs[message];
  //   },
  // });
  // return curMsgs[message];
};
