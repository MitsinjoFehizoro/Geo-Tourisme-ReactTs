import { FunctionComponent, PropsWithChildren, createContext, useContext, useState } from "react"

interface month {
    value: number
    title: string
}
interface monthContext {
    months: month[]
    selectedMonth: month | null,
    setSelectedMonth: (m: month) => void
}


const MonthContext = createContext<monthContext>({
    months: [],
    selectedMonth: null,
    setSelectedMonth: () => { }
})

export const useMonth = () => {
    const { months, selectedMonth, setSelectedMonth } = useContext(MonthContext)
    const toggleSelectedMonth = (month: month) => {
        setSelectedMonth(month)
    }
    return {
        months,
        selectedMonth,
        toggleSelectedMonth
    }
}

export const MonthContextProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const months: month[] = [
        { value: 0, title: 'Janvier' },
        { value: 1, title: 'Fevrier' },
        { value: 2, title: 'Mars' },
        { value: 3, title: 'Avril' },
        { value: 4, title: 'Mai' },
        { value: 5, title: 'Juin' },
        { value: 6, title: 'Juillet' },
        { value: 7, title: 'Août' },
        { value: 8, title: 'Septembre' },
        { value: 9, title: 'Octobre' },
        { value: 10, title: 'Novembre' },
        { value: 11, title: 'Décembre' },
    ]
    const [selectedMonth, setSelectedMonth] = useState<month | null>(null)
    return (
        <MonthContext.Provider value={{ months, selectedMonth, setSelectedMonth }}>{children}</MonthContext.Provider>
    )

}