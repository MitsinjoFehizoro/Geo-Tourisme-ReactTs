import { FunctionComponent, PropsWithChildren, createContext, useContext, useState } from "react"
import { dateSearch } from "../tools/type"



interface dateSearchContext {
    dateSearchs: dateSearch[]
    selectedDateSearch: dateSearch | null
    setSelectedDateSearch: (d: dateSearch) => void
}

const DateSearchContext = createContext<dateSearchContext>(
    {
        dateSearchs: [],
        selectedDateSearch: null,
        setSelectedDateSearch: () => { }
    }
)

export const useDateSearch = () => {
    const { dateSearchs, selectedDateSearch, setSelectedDateSearch } = useContext(DateSearchContext)
    const toggleDateSearch = (d: dateSearch) => {
        setSelectedDateSearch(d)
    }

    return {
        dateSearchs, selectedDateSearch, toggleDateSearch
    }
}

export const DateSearchContextProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const months = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    const funcDateSearchs = (debutYear: number, endYear: number) => {
        const customDates: dateSearch[] = []
        const now = new Date()
        for (let year = debutYear; year <= endYear; year++) {
            for (let month = 0; month < 12; month++) {
                if (month >= now.getMonth() && year >= now.getFullYear())
                    customDates.push({ monthValue: month, month: months[month], year: year })
            }
        }
        return customDates
    }
    const dateSearchs = funcDateSearchs(2024, 2025)
    const [selectedDateSearch, setSelectedDateSearch] = useState<dateSearch | null>(null)
    return (
        <DateSearchContext.Provider value={{ dateSearchs, selectedDateSearch, setSelectedDateSearch }}>{children}</DateSearchContext.Provider>
    )
}


