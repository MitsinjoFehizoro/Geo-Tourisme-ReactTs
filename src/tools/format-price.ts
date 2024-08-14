
export const formatPrice = (price: number) => {
    const newPrice = price.toString()
    const tab = []
    for (let i = newPrice.length; i > 0; i -= 3) {
        tab.push(newPrice.substring(i, i - 3))
    }
    tab.unshift('Ariary') // inserer au debut du tableau
    const prixFormated = tab.reverse().join(' ')
    return prixFormated
}