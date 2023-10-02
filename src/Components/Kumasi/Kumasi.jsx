import '../../../src/index.css'
import KumasiBranch from "../../Data/Kumasi";

const Kumasi = ({displayAccra, displayKumasi, displayTrucks}) => {


    return (
        <>
            <div className=' flex justify-center'>
                <div className='flex flex-col justify-center items-center mt-36'>
                        <div className=' text-3xl'>
                            Our Branches & Trucks
                        </div>
                    <div className='flex mt-12 text-slate-900 justify-center text-[17px] font-medium border-b-2 border-red-600 gap-5 md:px-20 min-w-[40vw]'>
                        <div className='rounded-t-[3px] text-slate-900 px-6 py-3 hover:bg-reddish hover:text-white cursor-pointer' onClick={displayAccra}>
                            Accra
                        </div>
                        <div className='kumasi rounded-t-[3px] px-6 py-3 hover:bg-reddish hover:text-white cursor-pointer' onClick={displayKumasi}>
                            Kumasi
                        </div>
                        <div className='rounded-t-[3px] px-6 py-3 hover:bg-reddish hover:text-white cursor-pointer' onClick={displayTrucks}>
                            Trucks
                        </div>
                    </div>

                    <div className=' flex flex-wrap justify-center mt-10 gap-14'>
                        {KumasiBranch.map((kumasi) => (       
                            <div id={kumasi.id} className=' flex justify-center items-center bg-slate-900 w-72 h-48 border'>
                                <div className=' flex flex-col items-center text-center mt-6'>
                                    <div className=' text-2xl text-white'>
                                        {kumasi.location}
                                    </div>
                                    <div className=' text-lg mt-3 w-32 border-[1.5px] rounded-sm hover:border-red-700'>
                                        <a className=' w-full' href={kumasi.map} id={kumasi.id} target='_blank'>
                                            <button className=' w-full text-reddish  hover:bg-reddish hover:text-white'>
                                                {kumasi.btn}
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Kumasi;