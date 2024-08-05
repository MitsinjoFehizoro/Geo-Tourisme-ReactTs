import { FunctionComponent } from "react"
import { program } from "../../tools/type"
import { formatDateComplet } from "../../tools/format-date"

type Props = {
    program: program
}
const DetailProgamCard: FunctionComponent<Props> = ({ program }) => {
    return (
        <div className="mb-6">
            <div className="relative w-full h-96" >
                <img src={program.galerie} className="w-full h-full" alt="" />
                <div className="absolute z-0 w-full left-0 bottom-0 svg-contain">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill='#F14902' d="M0,0L34.3,26.7C68.6,53,137,107,206,133.3C274.3,160,343,160,411,133.3C480,107,549,53,617,48C685.7,43,754,85,823,96C891.4,107,960,85,1029,106.7C1097.1,128,1166,192,1234,186.7C1302.9,181,1371,107,1406,69.3L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                    </svg>
                    <svg className="absolute top-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill='#fff' d="M0,0L34.3,26.7C68.6,53,137,107,206,133.3C274.3,160,343,160,411,133.3C480,107,549,53,617,48C685.7,43,754,85,823,96C891.4,107,960,85,1029,106.7C1097.1,128,1166,192,1234,186.7C1302.9,181,1371,107,1406,69.3L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                    </svg>
                    <div className="absolute w-full px-4 bottom-[-2em]">
                        <p className="text-xs">{formatDateComplet(program.date)}</p>
                        <h1 className="uppercase text-lg text-secondary mb-2">{program.title}</h1>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white px-4 pt-7 pb-4">{program.description}</div>
        </div>
    )
}

export default DetailProgamCard