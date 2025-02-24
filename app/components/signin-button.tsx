import { signIn } from "@/app/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("authentik");
      }}
    >
      <button type="submit">Signin with Authentik</button>
    </form>
  );
}
