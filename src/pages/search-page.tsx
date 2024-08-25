import { FunctionComponent, useEffect, useState } from "react";
import NavigationBar from "../components/navigation/navigation-bar";
import FormSearch from "../components/accueil/form-search";
import { useChoiceDestination } from "../hooks/useChoiceDestination";
import DestinationCard from "../components/destination/destination-card";
import { useHeightNav } from "../hooks/useHeightNav";
import Footer from "../components/footer";
import { useGetDestinationById } from "../supabase/destinations-supabase";
import LoadingDestinationCard from "../components/destination/loading-destination-card";
import { useDateSearch } from "../hooks/useDateSearch";
import { Organisation } from "../models/organisation";
import LoadingDateDispo from "../components/destination-page/loading-date-dispo";
import DateDispoCard from "../components/destination-page/date-dispo-card";

const SearchPage: FunctionComponent = () => {
    const { destinationChoice } = useChoiceDestination()
    const { heightNav } = useHeightNav()
    const { stateGetDestination, destination, getDestination } = useGetDestinationById()
    const { selectedDateSearch } = useDateSearch()
    useEffect(() => {
        if (destinationChoice)
            getDestination(destinationChoice.id)
    }, [])

    const [organisationsFilter, setOrganisationFilter] = useState<Organisation[]>([])
    const filterDestinastion = () => {
        if (selectedDateSearch && destination) {
            if (destination.organisations.length > 0) {
                setOrganisationFilter(destination.organisations.filter(organisation => ((new Date(organisation.start).getFullYear() == selectedDateSearch.year || new Date(organisation.end).getFullYear() == selectedDateSearch.year) && (new Date(organisation.start).getMonth() == selectedDateSearch.monthValue || new Date(organisation.end).getMonth() == selectedDateSearch.monthValue))))
            }
        }
    }
    useEffect(() => {
        filterDestinastion()
    }, [destination])
    return (
        <>
            <NavigationBar />
            <section className="min-h-[100vh] px-4 sm:px-8 lg:px-14 bg-background" style={{ paddingTop: 40 + heightNav }}>
                <div className="flex justify-center md:justify-start">
                    {
                        stateGetDestination.isLoading ? (
                            <h1 className="w-80 h-5 bg-white animate-pulse mb-11" />
                        ) : (
                            destination && (
                                <h1 className="w-80 md:w-full text-2xl text-secondary mb-8 md:text-left text-center">{organisationsFilter.length} voyage(s) dispo à {destination.title} le {selectedDateSearch?.month} - {selectedDateSearch?.year} </h1>
                            )
                        )
                    }
                </div>

                <div className="w-full flex flex-wrap justify-center md:justify-between">
                    <FormSearch color1="background" color2="white" isResponsive={false} />
                    <p className="w-full h-14"/>
                    {
                        stateGetDestination.isLoading ? (
                            <LoadingDestinationCard />
                        ) : (
                            destination && (
                                <DestinationCard destination={destination} />
                            )
                        )
                    }
                    {
                        stateGetDestination.isLoading ? (
                            <>
                                <LoadingDateDispo />
                            </>

                        ) : (
                            organisationsFilter.map((organisation, index) => {
                                const color = index % 2 === 0 ? 'primary' : 'secondary';
                                return (
                                    <>
                                        <DateDispoCard key={index} organisation={organisation} scrollOrganisation={() => console.log('teste')} color={color} />
                                    </>

                                )
                            })
                        )
                    }
                </div>
            </section>
            <Footer color="white" />
        </>
    )
}
export default SearchPage