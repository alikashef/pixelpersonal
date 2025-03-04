"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { AnimatedTooltip } from "@/components/animated-tooltip";
import BookSlider from "@/components/book-slider";
import { ParallaxScroll } from "@/components/parallax-scroll";

import AboutMe from "@/components/aboutme";
import Experience from "@/components/my-experiance";
import { CARDS, images, people } from "@/data/globalData";

import { CardStack } from "@/components/card-stack";
import LocationCard from "@/components/map";
import Skills from "@/components/Skills";
import SocialIconsGrid from "@/components/SocialIconsGrid";
import Stack from "@/components/stacks";

export default function Home() {
  return (
    <main className="container mx-auto pt-10 px-4">
      <div className="flex flex-col md:flex-row md:gap-2">
        {/* Left Section*/}
        <section className="w-full md:w-3/4 flex flex-col ">
          {/* About Me و Experience */}
          <div className="flex flex-col md:flex-row gap-2 items-stretch h-full">
            {/* AboutMe - Left */}
            <div className="w-full md:w-2/3 h-full">
              <AboutMe />
            </div>

            {/* Experience - Right */}
            <div className="w-full md:w-1/3 h-full">
              <Experience />
            </div>
          </div>

          {/* What They Say & My Works */}
          <div className="flex flex-col md:flex-row gap-2 pt-2">
            {/* What They Say - Left */}
            <div className="bg-card p-5 h-[300px] w-full md:w-1/3 overflow-hidden rounded-xl">
              <Badge className="mb-8" variant="secondary">
                What They Say
              </Badge>
              <div className="flex items-center justify-center">
                <CardStack items={CARDS} />
              </div>
            </div>

            {/* My Works - Right */}
            <div className="bg-card p-5 w-full md:w-2/3 h-[300px] overflow-hidden rounded-xl">
              <div className="flex justify-between items-center my-auto pb-2">
                <Badge variant="secondary">My Works</Badge>
                <Button className="text-sm" variant="link" size="sm">
                  Show More
                </Button>
              </div>

              <ParallaxScroll images={images} />
            </div>
          </div>

          {/* What I’m Reading & Skills */}
          <div className="flex flex-col md:flex-row gap-2 pt-2">
            {/* What I’m Reading */}
            <div className="bg-card p-5 w-full md:w-1/4 rounded-xl flex flex-col">
              <Badge className="mb-4" variant="secondary">
                What I’m Reading
              </Badge>

              <BookSlider />
            </div>

            {/* Skills */}
            <div className="w-full md:w-3/4 flex flex-col bg-card  rounded-xl">
              <Skills />
            </div>
          </div>
        </section>

        {/*Right Section*/}
        <aside className="w-full md:w-1/4 flex flex-col">
          <SocialIconsGrid />
          <LocationCard />
          <Stack />
          <div className="bg-card rounded-2xl p-4">
            <Badge className="mb-4" variant="secondary">
              My Team
            </Badge>
            <div className="flex h-[8rem] items-center justify-center">
              <AnimatedTooltip items={people} />
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
