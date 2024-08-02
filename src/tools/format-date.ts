import { format } from "date-fns"
import { fr } from "date-fns/locale"

export const formatDateSimple = (date: Date) => {
    const formattedDate = format(date, "dd/MM/yy", { locale: fr });
    return formattedDate
}
export const formatDateLong = (date: Date) => {
    const formattedDate = format(date, "EEEE, dd MMMM yyyy", { locale: fr });
    return formattedDate
}