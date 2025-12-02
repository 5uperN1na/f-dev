import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Friendly Dev | Welcome" },
    { name: "description", content: "Custom Web Development" },
  ];
}

export default function Home() {
   console.log('test')
  return <section>
   
    My App</section>;
}
