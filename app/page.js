import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
          src="/logo.png"
          alt="A server surrounded by magic sparkles."
          width={180}
          height={38}
          priority
        />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </main>
  );
}
