import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export function AboutSection() {
    return (
        <div className=" grid grid-cols-12 h-screen">
            <div className="flex flex-col gap-4 col-span-6">

                <h2 className="text-4xl font-semibold">Why Choose Casters?</h2>
                <p> At Vasters, we combine engaging teaching methods, structured curriculum paths, and supportive mentors to help every learner grow with confidence—whether online or in our Mojokerto classroom.</p>
                <div className="w-6/8">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>1. Experienced Mentors</AccordionTrigger>
                            <AccordionContent>
                                Learn directly from skilled instructors who understand how teenagers learn best.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>2. Interactive & Fun Learning</AccordionTrigger>
                            <AccordionContent>
                                Interactive and fun learning methods keep students engaged and motivated.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>3. Clear, Structured Curriculum</AccordionTrigger>
                            <AccordionContent>
                                Clear, structured curriculum paths help students progress at their own pace.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>4. Flexible & Easy to Join</AccordionTrigger>
                            <AccordionContent>
                                Flexible and easy to join classes make it simple for students to start learning.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div className="col-span-7">

            </div>
        </div>

    )
}