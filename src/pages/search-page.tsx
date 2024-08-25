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
            <section className="min-h-[100vh]  px-4 sm:px-8 lg:px-14  bg-background" style={{ paddingTop: 40 + heightNav }}>
                {
                    stateGetDestination.isLoading ? (
                        <h1 className="w-80 h-4 bg-white animate-pulse mb-8" />
                    ) : (
                        destination && (
                            <h1 className="text-2xl text-secondary mb-8">{organisationsFilter.length} voyage(s) dispo à {destination.title} le {selectedDateSearch?.month} - {selectedDateSearch?.year} </h1>
                        )
                    )
                }
                <div className="flex flex-col justify-center">
                    <FormSearch color1="background" color2="white" />

                    <p className="my-4" />
                    {
                        stateGetDestination.isLoading ? (
                            <LoadingDestinationCard />
                        ) : (
                            destination && (
                                <DestinationCard destination={destination} />
                            )
                        )
                    }
                </div>

            </section>
            <Footer color="white" />
        </>
    )
}
export default SearchPage