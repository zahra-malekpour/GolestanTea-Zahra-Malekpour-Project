import Image from '../../Images/banner.png'
import './banner.css'
const Banner = () => {
    return ( 
        <div className="flex flex-col-reverse pb-20 pt-40 md:flex-row justify-center items-center gap-40 bg-gray-200 ">
            <div className="textgoesleft">
                <p className="text-3xl text-red-600 mb-5">چای گلستان</p>
                <p className="text-xl">سابقه ای به قدمت یک عمر</p>
            </div>
            <div>
                <img className="w-80 h-80 banner-image mt-15" src={Image} alt="چای گلستان" />
            </div>
        </div>
     );
}
 
export default Banner;