import { useState, useEffect } from "react";
export function useCustomhook(timer = 1000) {
    let [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, timer)
    }, []);
    return { loading, setLoading }
}