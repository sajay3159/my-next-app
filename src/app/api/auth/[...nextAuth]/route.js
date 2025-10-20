import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: "Ov231l0u4xk3D0FERD",
      clientSecret: "38b7bf3bb7c6cee37b4747a12018d197793c",
    }),
  ],
});

export { handler as GET, handler as POST };
