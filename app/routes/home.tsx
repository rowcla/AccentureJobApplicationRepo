import { HomePage } from "~/Pages/HomePage/HomePage";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Products" },
  ];
}

export default function Home() {
  return <HomePage />;
}
