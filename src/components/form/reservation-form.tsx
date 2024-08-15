import { FunctionComponent } from "react";
import StandardCard from "../card/standard-card";
import CustomButton from "../custom-button";
import { i_reservation } from "../../styles/base/tailwind";
import { stateSupabase } from "../../tools/type";

type Props = {
    nbLocaux: number,
    setNbLocaux: (n: number) => void,
    nbStranger: number,
    setNbStranger: (n: number) => void,
    handleSubmit: () => void,
    stateSupabase: stateSupabase,
    buttonText: string
}
const ReservationForm: FunctionComponent<Props> = ({ nbLocaux, setNbLocaux, nbStranger, setNbStranger, handleSubmit, stateSupabase, buttonText }) => {

    return (
        <div className="my-2 ">
            <div className="flex flex-row items-center justify-between mb-2 rounded border-[1px] border-background overflow-hidden">
                <i onClick={() => setNbLocaux(nbLocaux > 0 ? nbLocaux - 1 : 0)} className={`fa fa-minus ${i_reservation}`}></i>
                <p className="text-sm mt-1 pb-[1px]">{nbLocaux} participants locaux</p>
                <i onClick={() => setNbLocaux(nbLocaux + 1)} className={`fa fa-plus ${i_reservation}`}></i>
            </div>
            <div className="flex flex-row items-center justify-between mb-2 rounded border-[1px] border-background overflow-hidden">
                <i onClick={() => setNbStranger(nbStranger > 0 ? nbStranger - 1 : 0)} className={`fa fa-minus ${i_reservation}`}></i>
                <p className="text-sm mt-1  pb-[1px]">{nbStranger} participants etrangers</p>
                <i onClick={() => setNbStranger(nbStranger + 1)} className={`fa fa-plus ${i_reservation}`}></i>
            </div>
            <div onClick={handleSubmit}>
                <CustomButton text={buttonText} isLoading={stateSupabase.isLoading} />
            </div>
        </div>
    )
}
export default ReservationForm