import { HomePage } from "~/Pages/HomePage/HomePage";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Accenture Application" },
  ];
}

export default function Home() {
  return <HomePage />;
}
