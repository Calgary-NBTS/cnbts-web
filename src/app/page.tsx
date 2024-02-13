import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div>
        <Image
          src="/BlackLogo.jpeg"
          alt="Calgary Non-Binary and Transgender Society Logo - Trans Flag and Transgender Symbol Wrapped with Dragon"
          width={800} 
          height={800}
          />
          <p className="flex items-center justify-center">Coming Soon</p>
        </div>
    </main>
  );
}
