import { AiOutlineLoading } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      <AiOutlineLoading size={42} className="animate-spin" />
        <p className="font-semibold">Loading...</p>
    </div>
  );
};

export default Loading;
