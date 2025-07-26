import DefaultLayout from "./default-layout";
import { Hero } from "@/components/Hero";
import { Initiatives } from "@/components/Initiatives";
import { InTheNews } from "@/components/InTheNews";
import { PhotoGallery } from "@/components/PhotoGallery";

export default function Home() {
    return (
        <DefaultLayout>
            <main>
                <Hero />
                <Initiatives />
                <InTheNews />
                <PhotoGallery />
            </main>
        </DefaultLayout>
    );
}
