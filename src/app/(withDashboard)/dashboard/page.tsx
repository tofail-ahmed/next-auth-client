import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  // console.log(session);

  return (
    <div>
      {
        session?.user &&
        <>
        <h1 className="text-4xl text-center mt-10">
        Welcome <span className="text-cyan-500">{session?.user?.name}</span>
      </h1>
      <h1 className="text-xl text-center mt-10">
        Eamil: <span className="text-cyan-500">{session?.user?.email}</span>
      </h1>
      <Image
        className="rounded-full  border-zinc-500 border-spacing-4 border-4 m-2 mx-auto"
        src={session?.user?.image}
        alt="img"
        width={100}
        height={100}
      /></>
      }
    </div>
  );
};

export default DashboardPage;
