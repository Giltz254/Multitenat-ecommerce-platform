import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8 w-full px-20">
      <Button variant={"elevated"} size={"lg"}>
        Click Me
      </Button>
      <Input placeholder="Get in touch with me" />
      <Progress value={60}/>
      <Textarea />
      <p className="text-emerald-700 text-xl font-bold">Good mornig</p>
    </div>
  );
}
