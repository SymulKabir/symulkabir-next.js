import { toast } from "react-toastify";

const warning = (message: string = "Something is wrong, try again later!") => {
  toast.warn(`${message}`, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export default warning;
