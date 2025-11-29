import { BadgeCheckIcon, Laptop, School } from "lucide-react";
import { Navbar } from "../custom/navbar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Image from "next/image";

export function HeroSection() {
    return (
        <div className="relative max-w-7xl mx-auto h-screen">
            <Navbar />
            <div className="grid grid-cols-2 gap-4 items-start mt-8 h-full ">

                <div className="flex flex-col gap-4 my-auto h-5/8">
                    <div className="flex">
                        <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
                            <BadgeCheckIcon size={24} />
                        </Badge>
                        <p className="text-md">Trusted by 499+parents and students</p>

                    </div>
                    <h1 className="text-6xl font-semibold">Learn Smarter with Vasters</h1>
                    <p className="text-lg">Interactive online classes via Zoom and offline sessions in Mojokerto—designed to help teens build skills, confidence, and real-world understanding.
                    </p>
                    <Button className="mt-4 w-fit">Enroll Now</Button>
                </div>
                <div className="flex items-end justify-end h-6/8" >
                    <Image src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" width={500} height={500} className="w-full h-full rounded-lg object-cover" />

                    <div className="absolute items-center gap-2 justify-end p-4">
                        <div className="grid grid-cols-2w-full gap-4">
                            <div
                                className="bg-white text-black dark:bg-blue-600 w-64 h-16 flex items-center justify-between gap-2 rounded-full p-2"
                            >
                                <div className="items-center gap-2 pl-4">

                                    <p className="text-md font-semibold">
                                        Online Classes
                                    </p>
                                    <p className="text-sm   font-light">
                                        Zoom
                                    </p>
                                </div>
                                <div className="bg-lime-400 rounded-full p-2">

                                    <Laptop size={32} />
                                </div>

                            </div>
                            <div
                                className="bg-white text-black dark:bg-blue-600 w-64 h-16 flex items-center justify-between gap-2 rounded-full p-2"
                            >
                                <div className="items-center gap-2 pl-4">

                                    <p className="text-md font-semibold">
                                        Offline Classes
                                    </p>
                                    <p className="text-sm   font-light">
                                        Mojokerto
                                    </p>
                                </div>
                                <div className="bg-blue-500 rounded-full p-2">

                                    <School size={32} color="white" />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}