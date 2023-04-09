import { useEffect, useState } from "react"

const useOfflineSupport = () => {
    const [isOffline, setOffline] = useState(false)
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOffline(true)
        })
    }, [])

    return isOffline
}

export default useOfflineSupport