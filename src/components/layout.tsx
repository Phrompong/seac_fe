"use client";
import { usePathname } from "next/navigation";
import MainMenu from "./menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (["/auth", "/home"].includes(pathname)) {
    return children;
  } else {
    return (
      <div className={["/auth"].includes(pathname) ? "" : "flex flex-cols"}>
        <MainMenu />
        <div>{children}</div>
      </div>
    );
  }
}
