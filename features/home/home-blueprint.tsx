import { FutureStack } from "@/features/home/future-stack";
import { Hero } from "@/features/home/hero";
import { Highlights } from "@/features/home/highlights";

export function HomeBlueprint() {
  return (
    <>
      <Hero />
      <Highlights />
      <FutureStack />
    </>
  );
}
