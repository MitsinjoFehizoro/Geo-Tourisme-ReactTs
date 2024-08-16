import { FunctionComponent, PropsWithChildren, useEffect } from "react";
import NavigationBar from "../components/navigation-bar";
import LeftReservationCard from "../components/card/left-reservation-card";
import RightReservationCard from "../components/card/right-reservation-card";
import { useGetReservations } from "../supabase/reservations-supabase";
import { useAuth } from "../hooks/useAuth";
import EditParticipantModal from "../components/modal/edit-participant-modal";
import { ModalContextProvider, useModal } from "../hooks/useModal";
import { useLink } from "../hooks/useLink";

const ReservationPage: FunctionComponent = () => {
    const { toggleLinkActif } = useLink()
    const { isShowModal } = useModal()
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
                    <section className="w-full min-h-[100vh] pt-32 pb-16 bg-background flex flex-row justify-evenly relative">
                        <LeftReservationCard stateGetReservations={stateGetReservations} reservations={reservations} />
                        <RightReservationCard stateGetReservations={stateGetReservations} reservations={reservations} />
                    </section>
                    <footer className="w-full pt-7 pb-5 flex flex-row items-center justify-around  bg-white shadow">
                        <p className="text-sm text-secondary"><i className="fa fa-copyright mr-2"></i>{isShowModal} Powered by MitsinjoFehizoro - 2024</p>
                    </footer>
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

