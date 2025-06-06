import { Header } from "@/components/Header";
import React from "react";
import mapData from "@/data/maps.json";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main className="w-full flex flex-col items-end">
      <Header />
      <div className="w-full flex flex-col items-end gap-4 mt-24 px-6 pb-12">
        <ul
          className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 items-start justify-start gap-4 mt-8"
          style={{ direction: "rtl" }}
        >
          {mapData?.allMaps.map((mapData) => {
            if (mapData.type_card == "3D") {
              return (
                <li key={mapData.id} className="h-[550px] w-full">
                  <CardContainer className="inter-var h-full w-full">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border flex justify-between flex-col">
                      <div className="w-full flex flex-col items-start">
                        <CardItem
                          translateZ="50"
                          className="text-[17px] font-bold text-neutral-600 dark:text-white"
                        >
                          {mapData.title}
                        </CardItem>
                        <CardItem
                          as="p"
                          translateZ="60"
                          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                          {mapData.description}
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                          <Image
                            src={mapData.image}
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                          />
                        </CardItem>
                      </div>
                      <div className="flex justify-between items-center pt-12">
                        <CardItem
                          translateZ={20}
                          as="button"
                          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                          <Link href={`/neshan/map/${mapData.button_link}`}>
                            {mapData.button_text}
                          </Link>
                        </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </main>
  );
}