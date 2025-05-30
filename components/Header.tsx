"use client";

import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

const listHeader = [
  { id: 1, title: "نقشه ها", link: "/neshan/maps" },
];

export const Header = () => {
  return (
    <div className="w-full flex items-center justify-between shadow-lg h-[60px] p-4 border-b fixed top-0 z-20 bg-white dark:bg-black">
      <ModeToggle />
      <ul
        className="flex items-center justify-center gap-4"
        style={{ direction: "rtl" }}
      >
        {listHeader.map((item) => (
          <Link key={item.id} href={item.link}>
            <p>{item.title}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};
