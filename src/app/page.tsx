import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button variant={"ghost"} size={"lg"}>
        Click Me
      </Button>
      <p className="text-emerald-50 text-8xl font-bold">Good mornig</p>
    </div>
  );
}
