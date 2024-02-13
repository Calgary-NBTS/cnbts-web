import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Calgary Non-Binary and Transgender Society',
  description: 'Calgary Non-Binary and Transgender Societies official homepage'
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
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
