import { toast } from 'react-toastify';
export const showNotification = (
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
  
    },
  });
};
