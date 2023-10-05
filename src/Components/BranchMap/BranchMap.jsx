import Accra from "../Accra/Accra";
import NavBar from "../Navbar";
import Footer from "../Footer";
import Envelope from '../../assets/envelope.png'
import Time from '../../assets/time.png'
import Phone from '../../assets/telephone.png'

const BranchMap = ({}) => {
    const map = sessionStorage.getItem("map")
    const loc = sessionStorage.getItem("loc")
    return(
        <>
        <div className=" bg-white">
            <header className="map flex flex-col items-center h-[350px] bg-slate-600">
                <div className="-mt-1">
                    <NavBar />
                </div>
                <div className=" flex items-center mt-6">
                    <div className=" text-4xl text-white">{loc}</div>
                </div>
            </header>
            <div className=" flex justify-center bg-white mt-20 mb-28 ">
                <div className=" flex flex-wrap-reverse flex-col-reverse w-[85vw] md:w-full md:flex-row gap-10 mx-10">
                    <div className="b_wrapper flex h-[285px] md:h-64 pt-4 px-2 bg-slate-100">
                        <div className=" flex flex-col mt-4 ml-8">
                            <div className=" text-2xl">Accra - Ghana</div>
                            <div className=" flex flex-col gap-4 mt-8">
                                <div className=" flex items-center gap-2">
                                    <img className=" w-5 h-4" src={Envelope} alt="" />
                                    <div className=" text-[15px] text-slate-700">
                                        info@ceqaltd.com
                                    </div>
                                </div>
                                <div className=" flex gap-2 items-center">
                                    <img className=" w-3 h-4" src={Phone} alt="" />
                                    <div className=" text-base">
                                        0302753430
                                    </div>
                                </div>
                                <div className=" flex flex-wrap gap-2">
                                    <img className=" w-5 h-5" src={Time} alt=""/>
                                    <div className=" text-base mr-3">
                                        Mon-Sun: 10:00am - 12:00am
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" h-[375px] w-full md:w-full"> 
                        <iframe className=" w-full h-full" src={map} frameborder="0"></iframe>
                    </div>
                </div>
            </div>

            <div className=" ">
                <Footer />
            </div>

        </div>
        </>
    )
}

export default BranchMap;