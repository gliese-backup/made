"use client";
import { Button, HeroUIProvider } from "@heroui/react";

export default function Home() {
  return (
    <HeroUIProvider>
      <div className="min-h-screen flex justify-center items-center flex-col gap-2">
        <h1 className="text-7xl">Hello Hero UI</h1>
        <Button variant="faded">Hey there</Button>
      </div>
    </HeroUIProvider>
  );
}
