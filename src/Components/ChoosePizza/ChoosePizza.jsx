// import PizzaImg from 'Pizzaman\src\assets\WIZ_7528-Edit.jpg'
import pizza from '../../assets/Pizza2.png'
import ChickenPizza from '../../assets/ChickenPizza.jpg'
import SellersData from '../../Data/Sellers';



const ChoosePizza = () =>
{
    return (
        <>
            <div className=''>
                <div className="flex flex-col mx-10 mb-10 pizza-wrapper justify-center">
                    <div className='text-center text-2xl font-bold'>Choose from Pizza </div>
                    <div className='flex flex-row flex-wrap gap-8 justify-center items-center mx-6 mt-14 mb-20'>
                        {
                            SellersData.map((sell) => (
                                <div className='flex flex-col justify-center items-center'>
                                    <div className=''>
                                        <img className='w-52 h-36' src={sell.img} alt="" />
                                    </div>
                                    <div>
                                        <div className='text-xl'>{sell.title}</div>
                                        <div className='text-lg text-center text-red-600 font-semibold'>{sell.price}</div>
                                    </div>

                                </div>
                            )
                                
                            )

                            

                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default ChoosePizza;