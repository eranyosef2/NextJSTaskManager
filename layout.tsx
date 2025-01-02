import type { Metadata } from "next";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "./components/SessionProvider";
import { authOptions } from "./api/auth/[...nextauth]/route";
import ReduxProvider from "./components/ReduxProvider"; // Import ReduxProvider

export const metadata: Metadata = {
  title: "Task Manager App",
  description: "Manage your tasks effortlessly.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <ReduxProvider>
            <main>{children}</main>
          </ReduxProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
