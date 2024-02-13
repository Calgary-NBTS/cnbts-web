import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Image
          src="/BlackLogo.jpeg"
          alt="Calgary Non-Binary and Transgender Society Logo - Trans Flag and Transgender Symbol Wrapped with Dragon"
          width={1000} 
          height={1000}
          />
          <p className="flex items-center justify-center">Coming Soon</p>
        </div>
    </main>
  );
}
