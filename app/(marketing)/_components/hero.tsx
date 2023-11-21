import Image from "next/image"


const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center gap-20 ">
                <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]">
                    <Image
                        src="/document.svg"
                        fill
                        className="object-contain"
                        alt="document-reading"
                    />
                </div>
                <div className="relative h-[300px] w-[300px] hidden md:block">
                    <Image
                        src="/reading.svg"
                        fill
                        className="object-contain dark:hidden"
                        alt="document-reading"
                    />
                    <Image
                        src="/reading-dark.svg"
                        fill
                        className="object-contain hidden dark:block"
                        alt="document-reading"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero