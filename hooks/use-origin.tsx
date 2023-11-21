import { useEffect,useState } from "react";

export const useOrigin = () => {
    const [mounted,seMounted] = useState(false);
    const origin = typeof window !== "undefined" && window.location.origin ? window.location.origin : ""

    useEffect(() => {
        seMounted(true);
    } ,[])

    if(!mounted){
        return "";
    }

    return origin;
}