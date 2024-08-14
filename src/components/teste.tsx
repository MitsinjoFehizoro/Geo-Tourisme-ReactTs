import { useEffect } from "react"

export const Teste = () => {
    const price = 123456
    const formatPrice = (price: number) => {
        const newPrice = price.toString()
        const tab = []
        for (let i = newPrice.length; i == 0; i--) {
            console.log('okk');

        }
        return (tab)
    }
    useEffect(() => {
        console.log(formatPrice(price));

    }, [])
    return (<>
    </>)
}