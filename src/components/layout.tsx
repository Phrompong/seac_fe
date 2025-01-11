"use client";
import { usePathname } from "next/navigation";
import MainMenu from "./menu";
import { Layout, Menu, theme } from "antd";

export default function LayoutMain({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (["/auth", "/home"].includes(pathname)) {
    return children;
  } else {
    return (
      <div className="grid grid-cols-[auto,1fr]">
        <MainMenu />
        <div className="flex-grow w-auto p-5">{children}</div>
      </div>
    );
  }
}
