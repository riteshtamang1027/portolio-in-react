import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

export default function Admin_route({ children }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
