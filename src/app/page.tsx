import Image from "next/image";
import { Button } from "@/components/ui/button"
import FormGenerator from "./form-generator";
import Header from "@/components/ui/header";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
    // </div>
    <SessionProvider>
      <Header></Header>
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <FormGenerator></FormGenerator>
        </main>
    </SessionProvider>
  );
}
