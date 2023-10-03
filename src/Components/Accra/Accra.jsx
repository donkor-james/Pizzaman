import '../../../src/index.css'
import AccraBranch from "../../Data/Accra";
import {Link} from 'react-router-dom'
import Map from '../BranchMap/BranchMap'

const Accra = ({displayAccra, displayKumasi, displayTrucks}) => {

    const handleClick = (map) => {
        sessionStorage.setItem("map", map)
    }

    return (
        <>
                      <div className=' flex justify-center'>
                <div className='flex flex-col justify-center items-center mt-36'>
                        <div className=' text-3xl'>
                            Our Branches & Trucks
                        </div>
                    <div className='flex mt-12 text-slate-900 justify-center text-[17px] font-medium border-b-2 border-red-600 gap-5 md:px-20 min-w-[40vw]'>
                        <div className='accra_branch rounded-t-[3px] text-white px-6 py-3 hover:bg-reddish hover:text-white cursor-pointer' onClick={displayAccra}>
                            Accra
                        </div>
                        <div className='rounded-[3px] px-6 py-3 hover:bg-reddish hover:text-white cursor-pointer' onClick={displayKumasi}>
                            Kumasi
                        </div>
                        <div className='rounded-[3px] px-6 py-3 hover:bg-reddish hover:text-white cursor-pointer' onClick={displayTrucks}>
                            Trucks
                        </div>
                    </div>

                    <div className=' flex flex-wrap justify-center mt-10 gap-14'>
                        {AccraBranch.map(({id, location, map, btn}, index) => (       
                            <div id={id} className=' flex justify-center items-center bg-slate-900 w-72 h-48 border'>
                                <div className=' flex flex-col items-center text-center mt-6'>
                                    <div className=' text-2xl text-white'>
                                        {location}
                                    </div>
                                    <div className=' text-lg mt-3 w-32 border-[1.5px] rounded-sm hover:border-red-700'>
                                        <Link to='/map'>
                                            <button className=' w-full text-reddish hover:bg-reddish hover:text-white' onClick={() => handleClick(map)}>
                                                {btn}
                                            </button>
                                        </Link>
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

export default Accra;