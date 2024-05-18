import { IoAlertCircleOutline } from "react-icons/io5";

const Alert = ({ message }) => {
  return (
    <div className="flex w-fit items-center gap-x-2 rounded-lg bg-amber-500 px-4 py-2 text-xl shadow-lg shadow-amber-500/50">
      <IoAlertCircleOutline size={32} color="white" />
      <p className="font-semibold text-white">{message}</p>
    </div>
  );
};

export default Alert;
