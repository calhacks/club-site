import DefaultLayout from "./default-layout";
import { Hero } from "@/components/Hero";
import { Initiatives } from "@/components/Initiatives";
import { PhotoGallery } from "@/components/PhotoGallery";

export default function Home() {
    return (
        <DefaultLayout>
            <main>
                <Hero />
                <Initiatives />
                <PhotoGallery />
            </main>
        </DefaultLayout>
    );
}
