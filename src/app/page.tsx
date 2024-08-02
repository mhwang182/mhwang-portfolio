import Image from "next/image";

export default function Home() {

  const HeroSection = () => {
    return (
      <div className="w-full h-screen bg-[url('../../public/cityBackground.jpeg')] flex flex-col justify-center items-center space-y-6">
        <span className="text-white text-7xl font-bold">HEY, I'M MATT HWANG!</span>
        <span className="text-white text-xl max-w-[600px] text-center">
          A Result-Oriented Web Developer building and managing Websites and
          Web Applications that leads to the success of the overall product
        </span>
      </div>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <HeroSection />
    </main>
  );
}
