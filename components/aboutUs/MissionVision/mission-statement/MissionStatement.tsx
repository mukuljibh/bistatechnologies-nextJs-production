import { missionStatement } from "../config/MissionVisionconfig"

export default function MissionStatement() {
    return (
        <div className="lg:flex gap-16 lg:mx-24 mx-5 lg:space-y-0 space-y-10 my-20 justify-evenly  ">
            {missionStatement.map((item, index) => {
                return (
                    <div key={index} className="bg-white shadow-2xl transition-all ease-linear lg:w-1/2 hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-2xl px-5 py-10">
                        <h1 className="text-2xl font-semibold">{item.heading}</h1>
                        <p className="text-justify " >
                            {item.description}
                        </p>
                    </div >
                )
            })}
        </div>

    )
}