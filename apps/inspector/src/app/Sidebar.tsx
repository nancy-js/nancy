// "use client";
import { mainnet } from "@nancyjs/registry";

import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  RocketIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export function Sidebar() {
  return (
    <div
      className={
        "flex flex-col gap-y-4 px-4 border-r border-zinc-900 bg-zinc-900/20 py-4 overflow-y-auto overflow-x-hidden h-full w-full"
      }
    >
      {Object.entries(mainnet).map(
        ([chainId, { displayName, logo, website }]) => (
          <Link
            href={chainId}
            key={chainId}
            className={cn(
              "flex bg-zinc-900/50 p-2 rounded-md items-center gap-4",
              "group transition-transform duration-500 border border-zinc-900"
            )}
          >
            <button
              className={cn(
                "text-zinc-500 p-3 border-transparent hover:border-zinc-800 border rounded"
              )}
            >
              <StarIcon />
            </button>
            {logo.png && (
              <Image
                className=" "
                src={logo.png}
                alt="Picture of the author"
                width={25}
                height={25}
              />
            )}
            <h2 className="font-semibold text-sm overflow-hidden text-ellipsis w-full whitespace-nowrap">
              {displayName}
            </h2>
            <button
              className={cn(
                "text-xs px-3 py-3 uppercase font-bold border border-zinc-800",
                "flex gap-2",
                "text-zinc-500 duration-300 rounded transition-colors",
                "hover:border-cyan-500 hover:text-cyan-500"
              )}
            >
              <RocketIcon />
            </button>
          </Link>
        )
      )}
    </div>
  );
}
