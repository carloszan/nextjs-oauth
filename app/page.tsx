import SignIn from "@/app/components/signin-button";
import { SignOut } from "./components/signout-button";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  if (!session?.user)
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <SignIn />
      </div>
    );
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>{session?.user?.email}</div>
      <div>{session?.user?.id}</div>
      <div>{session?.user?.name}</div>
      <div>{session?.user?.image}</div>
      <SignOut />
    </div>
  );
}
