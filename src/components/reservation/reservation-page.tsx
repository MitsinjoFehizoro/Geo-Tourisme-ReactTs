import { FunctionComponent, PropsWithChildren, useEffect } from "react";
import NavigationBar from "../navigation/navigation-bar";
import { useGetReservations } from "../../supabase/reservations-supabase";
import { useAuth } from "../../hooks/useAuth";
import EditParticipantModal from "../modal/edit-participant-modal";
import { ModalContextProvider, useModal } from "../../hooks/useModal";
import { useLink } from "../../hooks/useLink";
import Footer from "../footer";
import LeftReservationCard from "./left-reservation-card";
import RightReservationCard from "./right-reservation-card";

const ReservationPage: FunctionComponent = () => {
    const { toggleLinkActif } = useLink()
    const { isAuth } = useAuth()
    const { stateGetReservations, reservations, getReservations } = useGetReservations()
    useEffect(() => {
        toggleLinkActif('reservation')
        getReservations()
    }, [isAuth])


    return (
        <ModalContextProvider>
            <EditParticipantModal />
            <ContainerReservationPage>
                <NavigationBar />
                <section className="w-full min-h-[100vh] pt-32 pb-16 px-4 bg-background flex flex-wrap flex-row justify-evenly relative">
                    <LeftReservationCard stateGetReservations={stateGetReservations} reservations={reservations} />
                    <RightReservationCard stateGetReservations={stateGetReservations} reservations={reservations} />
                </section>
                <Footer color="white" />
            </ContainerReservationPage>
        </ModalContextProvider>
    )
}
export default ReservationPage

const ContainerReservationPage: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const { isShowModal } = useModal()
    return (
        <>
            {
                isShowModal ? (
                    <section className="blur-sm h-[100vh] overflow-hidden">{children}</section>
                ) : (
                    <section>{children}</section>
                )
            }
        </>
    )
}

