import { Star } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Image from "next/image";

export function ProgramSection() {
    return (
        <div className="h-screen">
            <div className="flex flex-col gap-4 w-7/12">

                <h2 className="text-4xl font-semibold">Program</h2>
                <p>Discover a range of programs built for both academic improvement . Each course is crafted to be fun, practical, and teen-friendly to grow their skills.</p>
            </div>
            <div className="grid grid-cols-3 gap-8 h-full">

                <div className="flex flex-col gap-4 mt-24">
                    <Image src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" width={500} height={500} className="w-full h-96 object-cover rounded-xl" />
                    <h4 className="text-lg font-semibold">1. Teen Development Program (16+)</h4>
                    <p className="text-sm">Explore a range of programs built for both academic improvement and personal growth. Each course is crafted to be fun, practical, and teen-friendly to grow their skills.</p>
                    <Button className="w-fit">View Program Details</Button>
                </div>
                <div className="flex flex-col gap-4 mt-8">
                    <Image src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" width={500} height={500} className="w-full h-96 object-cover rounded-xl" />
                    <h4 className="text-lg font-semibold">1. Teen Development Program (16+)</h4>
                    <p className="text-sm">Explore a range of programs built for both academic improvement and personal growth. Each course is crafted to be fun, practical, and teen-friendly to grow their skills.</p>
                    <Button className="w-fit">View Program Details</Button>
                </div>
                <div className="flex flex-col gap-4 -mt-8">
                    <Image src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" width={500} height={500} className="w-full h-96 object-cover rounded-xl" />
                    <h4 className="text-lg font-semibold">1. Teen Development Program (16+)</h4>
                    <p className="text-sm">Explore a range of programs built for both academic improvement and personal growth. Each course is crafted to be fun, practical, and teen-friendly to grow their skills.</p>
                    <Button className="w-fit">View Program Details</Button>
                </div>
            </div>
            {/* <div className="flex items-center gap-4 absolute right-0">
                <p className="w-1/4 text-end">Includes 1 Free Trial Class for Select Programs</p>
                <div className="bg-lime-400 p-2 rounded-full">

                    <Star />
                </div>
            </div> */}
            

        </div>
    )
}