import Accra from "../Accra/Accra";
import Footer from "../Footer";

const BranchMap = ({}) => {
    const map = sessionStorage.getItem("map")
    return(
        <>
        <div className=" bg-white">
            <header className=" flex justify-center h-56 border-4 bg-slate-600">
                <div className=" flex items-center">
                    <div className=" text-3xl">Branch</div>
                </div>
            </header>
            <div className=" bg-white mb-24">
                <div className=" flex h-44 mt-32">
                    <div className="b_wrapper w-full h-56 pt-4 bg-slate-100">
                        <div className=" flex flex-col mt-2 ml-8 border-2">
                            <div className=" text-2xl mt-2">Accra - Ghana</div>
                            <div className=" flex flex-col gap-2 mt-4">
                                <div>
                                    <img src="" alt="" />
                                    <div className=" text-[15px] text-slate-700">
                                        info@ceqaltd.com
                                    </div>
                                </div>
                                <div>
                                    <img src="" alt="" />
                                    <div className=" text-base">
                                        0302753430
                                    </div>
                                </div>
                                <div>
                                    <img src="" alt=""/>
                                    <div className=" text-base">
                                        Mon-Sun: 10:00am - 12:00am(Mid-night)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <iframe className=" h-80 w-64" height={500} src={map} frameborder="0"></iframe>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
        </>
    )
}

export default BranchMap;