import Header from "@/components/Header";
import React from "react";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex flex-col min-h-screen mx-24 mt-4">
        <Header />
        <main className="flex-1">{children}</main>
      </div>
  );
}
