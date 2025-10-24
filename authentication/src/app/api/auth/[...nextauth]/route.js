import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'Ov23lio3Jm0lK7A3natx',
            clientSecret: '9c20d11b9cde279f8720a433662bb4828103a972',
            authorization: { params: { prompt: "consent" } } //login, consent, none
        })
        
    ]
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };