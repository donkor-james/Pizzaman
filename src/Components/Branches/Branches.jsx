import NavBar from "../Navbar";
import '../../../src/index.css'
import Accra from "../Accra/Accra";
import Kumasi from "../Kumasi/Kumasi";
import Trucks from "../Trucks/Trucks";
import { useState } from "react";
import Footer from "../Footer";

const Branches = () =>
{
    const [hideAccra, setHideAccra] = useState('flex');
    const [hideKumasi, setHideKumasi] = useState('hidden');
    const [hideTrucks, setHideTrucks] = useState('hidden');

    const displayAccra = () => {
        setHideAccra('flex');
        setHideKumasi('hidden');
        setHideTrucks('hidden');
    }
    const displayKumasi = () => {
        setHideAccra('hidden');
        setHideKumasi('flex');
        setHideTrucks('hidden');
    }
    const displayTrucks = () => {
        setHideAccra('hidden');
        setHideKumasi('hidden');
        setHideTrucks('flex');
    }

    return (
        <>

            <header className="branches flex flex-col h-[27rem]">
                <div>
                    <NavBar />
                </div>    
                <div className="branch_text text-center mt-14">
                    <div className=" text-4xl text-white">
                        Our Branches
                    </div>
                </div>
            </header>

            <div className="flex mb-32 justify-center">
                <div className={hideAccra}>
                    <Accra displayAccra={displayAccra} displayKumasi={displayKumasi} displayTrucks={displayTrucks}/>
                </div>
                <div className={hideKumasi}>
                    <Kumasi displayAccra={displayAccra} displayKumasi={displayKumasi} displayTrucks={displayTrucks}/>
                </div>
                <div className={hideTrucks}>
                    <Trucks displayAccra={displayAccra} displayKumasi={displayKumasi} displayTrucks={displayTrucks}/>
                </div>
            </div >

            <div>
                <Footer />
            </div>

        </>
    )
}

export default Branches;