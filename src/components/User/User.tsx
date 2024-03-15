import { useParams } from "react-router-dom";

export const User = () => {
  const userId = useParams().userId || "";
  return (
    <div className="h-[300px] text-2xl flex items-center justify-center gap-2">
      <span className="font-bold ">Hello</span>
      {userId[0].toUpperCase() + userId.slice(1).toLowerCase()} !!
    </div>
  );
};
