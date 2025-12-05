import type { Route } from "./+types/index";
import Hero from "~/components/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Friendly Dev | Welcome" },
    { name: "description", content: "Custom Web Development" },
  ];
}

export default function Home() {
  return (
    <section>
      <Hero  name='Paula'/>
    </section>
  );
}
