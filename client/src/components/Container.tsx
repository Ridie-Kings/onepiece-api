import { Navbar } from "./Navbar";
import React from "react";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <Navbar />
      <main
        className={`w-full h-full flex-1 overflow-x-hidden relative flex flex-col justify-center items-center bg-yellow-950 px-4  ${className}`}
      >
        {children}
      </main>
    </>
  );
};
