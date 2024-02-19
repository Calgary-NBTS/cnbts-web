import Image from "next/image";
import EnbyLogoNoBg from 'public/images/logos/EnbyLogoNoBG.png';

const HomePage = () => {
    return (
        <main className="flex flex-col items-center justify-between bg-fuschia-300">
            <div>
                <Image
                    src={EnbyLogoNoBg}
                    alt="Calgary Non-Binary and Transgender Society Logo - Trans Flag and Transgender Symbol Wrapped with Dragon"
                    width={300} 
                    height={300}
                    priority
                />
                <p className="flex items-center justify-center">Coming Soon</p>
            </div>
        </main>
    )
}
    
export default HomePage;