import { Slide, toast } from 'react-toastify';

export const toastSuccess = async (message) => {
  toast.success(message, {
    transition: Slide,
    position: "top-center"
  });
};

export const toastError = async (message) => {
  toast.error(message, {
    transition: Slide,
    position: "top-center"
  });
};

export const toastInfo = async (message) => {
  toast.info(message, {
    transition: Slide,
    position: "top-center"
  });
};

export const toastWarning = async (message) => {
  toast.warning(message, {
    transition: Slide,
    position: "top-center"
  });
};