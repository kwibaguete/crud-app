import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import { BackgroundPattern } from "./ui/background-pattern";
import Link from "next/link";


const Hero06 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <BackgroundPattern />

      <div className="relative z-10 text-center max-w-2xl">
        <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none">
          Just released v1.0.0
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Maintain a Personal Inventory!
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          Stay organized by keeping track of all the things you own in one place.
          No more losing things and forgetting about the things you own :)
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base">
            <Link className="flex items-center gap-2" href="/my-invytori">
              Get Started <ArrowUpRight className="!h-5 !w-5" />
            </Link>
          </Button>
          
        </div>
      </div>
    </div>
  );
};

export default Hero06;
