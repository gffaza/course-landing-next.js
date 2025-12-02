import { CarouselOrientation } from "../custom/carousel";

export function TestimonialSection() {
  return (
    <div className="flex flex-col mt-16 gap-16">
      <div className="flex flex-col justify-center items-center">
        <p>Testimonials</p>
        <h2 className="text-4xl font-semibold">What Students & Parents Say</h2>
      </div>
      <div className="w-full">
        <CarouselOrientation />
      </div>
    </div>
  );
}
