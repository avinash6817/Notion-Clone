import { Poppins } from "next/font/google"
import Image from "next/image"

import { cn } from "@/lib/utils"

const font = Poppins({
    subsets:["latin"],
    weight:["400","600"]
})  

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
        <Image
            src="/notion-logo.svg"
            height="25"
            width="25"
            alt="Logo"
            className="dark:hidden"
        />
        <Image
            src="/notion-logo-dark.svg"
            height="25"
            width="25"
            alt="Logo"
            className="hidden dark:block"
        />
        <p className={cn("font-semibold",font.className)}>
            !Notion
        </p>
    </div>
  )
}

export default Logo