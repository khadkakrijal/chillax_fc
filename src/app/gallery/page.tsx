import path from "path";
import fs from "fs/promises";
import { BackgroundBeams } from "@/Components/aceternity/BackgroundBeams";
import { Spotlight } from "@/Components/aceternity/Spotlight";
import GalleryGrid from "@/Components/gallery/Gallerygrid";

async function getGalleryImagesFromPublic() {
  const galleryDir = path.join(process.cwd(), "public", "gallery");

  let files: string[] = [];
  try {
    files = await fs.readdir(galleryDir);
  } catch (e) {
    // folder missing or not readable
    return [];
  }

  const allowed = /\.(png|jpe?g|webp|gif|avif)$/i;

  return files
    .filter((f) => allowed.test(f))
    .sort((a, b) => a.localeCompare(b))
    .map((f) => `/gallery/${f}`);
}

export default async function GalleryPage() {
  const images = await getGalleryImagesFromPublic();

  return (
    <div className="min-h-screen relative overflow-hidden text-white pt-10">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-[2px] opacity-40"
        style={{ backgroundImage: "url('/photo_1.jpeg')" }}
      />
      <div className="absolute inset-0 bg-black/75" />

      {/* Aceternity effects */}
      <BackgroundBeams />
      <Spotlight
        className="absolute -top-40 -left-48 h-[650px] w-[650px]"
        fill="white"
      />
      <Spotlight
        className="absolute -bottom-52 right-0 h-[650px] w-[650px]"
        fill="white"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-16">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">
            Chillax FC
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold">Gallery</h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Match moments, team memories, and our journey in Darwin.
          </p>
        </div>

        <GalleryGrid images={images} />

        {images.length === 0 && (
          <div className="mt-10 text-center text-white/70">
            No images found in{" "}
            <span className="font-semibold">/public/gallery</span>.
          </div>
        )}
      </div>
    </div>
  );
}
