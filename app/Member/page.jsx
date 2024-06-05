import { getServerSession } from "next-auth"
import { options } from "../api/auth/[...nextauth]/options"
import { redirect } from "next/navigation";

const Member = async () => {
  const session  = await getServerSession(options);

  if(!session){
    redirect("/api/auth/signin?callbackUrl=/Member")
  }

  return (
   <>
    <div>Member Server Session</div>
    <p>{session?.user?.email}</p>
    <p>{session?.user?.role}</p>
    </>
  )
}

export default Member