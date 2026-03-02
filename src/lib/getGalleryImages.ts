import fs from "fs";
import path from "path";

export function getGalleryImages() {
  const galleryPath = path.join(process.cwd(), "public/gallery");

  const files = fs.readdirSync(galleryPath);

  return files
    .filter((file) =>
      /\.(jpg|jpeg|png|webp)$/i.test(file)
    )
    .map((file) => `/gallery/${file}`);
}