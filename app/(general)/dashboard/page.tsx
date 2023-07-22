import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const page = async () => {
  const session = await getServerSession(authOptions);

  return (
    <section className="container">
      <p className="font-semibold">Welcome, </p>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
};
export default page;
