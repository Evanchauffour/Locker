import Header from "@/components/Header";
import React from "react";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex flex-col gap-10 h-screen pb-10">
        <Header />
        <main className="flex-1 overflow-hidden mx-24">{children}</main>
      </div>
  );
}
