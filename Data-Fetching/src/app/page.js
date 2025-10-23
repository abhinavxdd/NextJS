import Image from "next/image";
// import darkSouls from "../../public/ds.avif"

export default function Home() {
  return (
    <div>
      {/* Image component from Next.js */}
      {/* You can give Loader too */}
      <Image src={"https://images.pexels.com/photos/9935714/pexels-photo-9935714.jpeg"} alt="Pexels-Image" width={500} height={250} />
    </div>
  );
}
