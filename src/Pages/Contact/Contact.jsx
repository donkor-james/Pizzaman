
const Contact = () => {
    return(
        <>
            <div className="mt-32">
                <div className="flex flex-col items-center">
                    <div>
                        <div className=" text-2xl">
                            SEND US A MESSAGE
                        </div>
                    </div>

                    <div className=" mt-8">
                        <div className="flex flex-col md:flex-row w-full justify-center">
                            <div className=" mr-7 w-full">
                                <label className="text-xl" htmlFor="name">Name *</label>
                                <div className=" bg-white flex rounded-md items-center md:w-[26vw]  h-10 mt-2 border-2">
                                    <input className=" w-full ml-2 outline-none" type="text" id="name" required/>
                                </div>
                            </div>
                            <div className=" md:mt-0 mt-4">
                                <label className=" text-xl" htmlFor="email">Email *</label>
                                <div className=" flex bg-white rounded-md items-center md:w-[26vw] h-10 mt-2 border-2">
                                    <input className=" w-full ml-2 outline-none" type="text" id="email" required/>
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col mt-6">
                            <label className=" text-xl" htmlFor="msg">Message</label>
                            <textarea className=" md:w-full w-[73vw] mt-3 border-2 outline-none p-2" name="" id="" cols="50" rows="9"></textarea>
                        </div>
                    </div>

                    <div className=" mt-7 mb-4">
                        <input className=" w-36 md:w-[14vw] h-10 text-white rounded-md bg-reddish" type="submit" value="Submit" />
                    </div>

                </div>
            </div>

            <div className=" mt-16 bg-slate-50 pt-12">
                <div className=" mx-28">
                    <div className=" flex flex-wrap md:gap-4 gap-5 md:justify-between">
                        <div className=" mb-2">
                            <div className=" text-2xl">Address</div>
                            <div className=" mt-2">Citizen kofi building, Labone</div>
                            <div >
                                Accra GHANA
                            </div>
                        </div>

                        <div className="">
                            <div className=" text-2xl">Call-Us</div>
                            <div className=" mt-2"> 055 281 8221 / 055 281 8211</div>

                        </div>

                        <div className="">
                            <div className=" text-2xl">Email</div>
                            <div className=" mt-2"> info@ceqaltd.com</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Contact;