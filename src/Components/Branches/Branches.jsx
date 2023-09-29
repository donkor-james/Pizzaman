import NavBar from "../NavBar/Navbar";
import '../../../src/index.css'
import Accra from "../Accra/Accra";
import Kumasi from "../Kumasi/Kumasi";
import Trucks from "../Trucks/Trucks";
import { useState } from "react";

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

            <header className="branches h-[27rem]">
                <div className="branch_text">
                    <div className=" text-4xl text-white">
                        Our Branches
                    </div>
                </div>
            </header>

            <div className="flex justify-center">
                <div className={hideAccra}>
                    <Accra displayAccra={displayAccra} displayKumasi={displayKumasi} displayTrucks={displayTrucks}/>
                </div>
                <div className={hideKumasi}>
                    <Kumasi displayAccra={displayAccra} displayKumasi={displayKumasi} displayTrucks={displayTrucks}/>
                </div>
                <div className={hideTrucks}>
                    <Trucks displayAccra={displayAccra} displayKumasi={displayKumasi} displayTrucks={displayTrucks}/>
                </div>
            </div>

        </>
    )
}

export default Branches;