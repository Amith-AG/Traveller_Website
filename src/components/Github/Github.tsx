import { useLoaderData } from "react-router-dom";

export const Github = () => {
  const data = useLoaderData() as {
    avatar_url: string;
    name: string;
    company: string;
    html_url: string;
  };
  return (
    <div className="flex flex-col gap-2 min-h-[300px] items-center justify-center ">
      <div className="flex flex-col items-start justify-center">
        <div className="flex gap-2  border-orange-400">
          <img
            src={data.avatar_url}
            height={200}
            width={200}
            alt="amith logo"
            className="rounded-lg shadow-emerald-900"
          />
          <div className="flex flex-col items-center justify-center ">
            <p className="text-2xl font-semibold font-mono">{data.name}</p>
            <p className="text-sm">{data.company}</p>
          </div>
        </div>
        <p>
          <span className="font-semibold font-mono">Goto:</span>
          <a href={`${data.html_url}`} className="text-orange-700 underline">
            {data.html_url}
          </a>
        </p>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const getGithubData = async () => {
  const response = await fetch("https://api.github.com/users/Amith-AG");

  return response.json();
};
