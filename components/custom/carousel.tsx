import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

export function CarouselOrientation() {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      orientation="horizontal"
      className="w-full max-w-7xl mx-auto"
    >
      <CarouselContent className="-mt-1 ">
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/3">
            <div className="">
              <div className="grid grid-cols-2 bg-zinc-100 rounded-2xl h-96">
                <div className="flex flex-col items-between justify-between bg-blue-700 rounded-2xl">
                  <div className="m-4 flex flex-row gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <p className="text-white text-lg font-semibold">
                        Rafli Nur.
                      </p>
                      <p className="text-white text-md font-normal">16 y.o</p>
                    </div>
                  </div>
                  <div className="m-4 flex flex-row gap-2 items-center">
                    <svg
                      width="50%"
                      height="50%"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 0C25.3043 4.00466e-07 30.3919 2.10669 34.1426 5.85742C34.8157 6.53058 35.4354 7.24719 36 8H20C16.8174 8 13.7651 9.26421 11.5146 11.5146C9.26421 13.7651 8 16.8174 8 20H20L36.9102 9.31934C38.1656 11.3074 39.0611 13.5027 39.5547 15.8027L32 20H40L39.9941 20.4971C39.8669 25.6213 37.776 30.5092 34.1426 34.1426C30.3919 37.8933 25.3043 40 20 40C14.6957 40 9.60815 37.8933 5.85742 34.1426C5.18426 33.4694 4.56459 32.7528 4 32H20C23.1826 32 26.2349 30.7358 28.4854 28.4854C30.5952 26.3755 31.8383 23.5608 31.9854 20.5947L32 20H20L3.08984 30.6787C1.83452 28.6906 0.941002 26.4951 0.447266 24.1953L8 20H0C8.00931e-07 14.6957 2.1067 9.60815 5.85742 5.85742C9.60815 2.1067 14.6957 -5.79361e-10 20 0Z"
                        fill="#ffffff"
                      ></path>
                    </svg>
                    <p className="text-white text-lg font-medium ">
                      SMA Antonius
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-between justify-between rounded-2xl">
                  <div className="m-3">
                    <img src="" alt="" />
                    <p className="text-xl">
                      "The Online classes felt surprisingly engaging, and the
                      mentors explained everything clearly with real examples.
                    </p>
                  </div>
                  <div className="flex flex-row gap-2 m-2">
                    <Star fill="orange" color="orange" />
                    <p>5.0</p>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
