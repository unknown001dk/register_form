import { toast } from 'react-toastify';

export const toastSuccess = async (message) => {
  toast.success(message);
};

export const toastError = async (message) => {
  toast.error(message);
};

export const toastInfo = async (message) => {
  toast.info(message);
};

export const toastWarning = async (message) => {
  toast.warning(message);
};