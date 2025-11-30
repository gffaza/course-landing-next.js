import { Book, Hand, Pen } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";

export function ProcessSection() {
    return (
        <div className="flex flex-col gap-16">
            <div className="flex justify-between items-center">
                <h2 className="text-4xl font-semibold max-w-md">Simple Enrollement Process</h2>
                <div className="flex flex-col gap-4 max-w-xl">
                    <p>Choose your program, complete your registration, and step into a learning journey that’s interactive, flexible, and tailored to your goals.</p>
                    <Button className="w-fit">Get Started</Button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <Card>
                    <CardHeader>
                        <div className="bg-blue-500 rounded-full p-3 w-fit ">

                            <Hand size={24} />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-semibold">1. Choose Your Program</h2>
                            <p className="text-md font-light">Pick a class based on your goals and interests.</p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <div className="bg-blue-500 rounded-full p-3 w-fit ">

                            <Pen size={24} />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-semibold">2. Register & Make Payment</h2>
                            <p className="text-md font-light">Pay easily using bank transfer, e-wallet, or virtual account.</p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <div className="bg-blue-500 rounded-full p-3 w-fit ">

                            <Book size={24} />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-semibold">3. Start Learning</h2>
                            <p className="text-md font-light">Join via Zoom or attend offline classes at our Mojokerto location.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}