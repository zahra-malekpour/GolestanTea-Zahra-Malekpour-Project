import Image from '../../Images/logo-fr.png'
const Header = () => {
    return ( 
        <div className="navbar bg-black text-[#A6A6A6] flex-col lg:flex-row justify-center items-center lg:gap-4 py-2 px-4 z-10 fixed">
            <img alt="گلستان لوگو" src={Image} />
            <ul className="menu hidden md:flex md:menu-horizontal items-center ml-4">
                <li className="lg:border-l lg:border-[#A6A6A6] h-7 mx-2"><a className="text-gray-400 hover:text-white text-base font-medium" href='#'>صفحه اصلی</a></li>
                <li className="lg:border-l lg:border-[#A6A6A6] h-7 relative group group-hover:text-white"><a className="text-[#A6A6A6] hover:text-white text-base font-medium" href='#'>شرکت گلستان</a>
                  <ul className="absolute top-full right-0 hidden group-hover:flex flex-col bg-black my-2 px-2">
                    <li className="text-gray-400 my-2 hover:text-white text-base font-medium">معرفی شرکت</li>
                    <li className="text-gray-400 my-2 hover:text-white text-base font-medium">تاریخچه گلستان</li>
                    <li className="text-gray-400 my-2 hover:text-white text-base font-medium">اخبار و اطلاعیه ها</li>
                    <li className="text-gray-400 my-2 hover:text-white text-base font-medium">مسئولیت های اجتماعی</li>
                    <li className="text-gray-400 my-2 hover:text-white text-base font-medium">سازمان فروش</li>
                    <li className="text-gray-400 my-2 hover:text-white text-base font-medium">سازمان توزیع</li>
                    <li className="text-gray-400 my-2 hover:text-white text-base font-medium">برندها</li>
                  </ul>
                </li>
                <li className="lg:border-l lg:border-[#A6A6A6] h-7 mx-2"><a className="text-[#A6A6A6] hover:text-white text-base font-medium" href='#'>محصولات</a></li>
                <li className="lg:border-l lg:border-[#A6A6A6] h-7"><a className="text-[#A6A6A6] hover:text-white text-base font-medium" href='#'>وبلاگ</a></li>
                <li className="lg:border-l lg:border-[#A6A6A6] h-7 mx-2"><a className="text-[#A6A6A6] hover:text-white text-base font-medium" href='#'>قرعه کشی</a></li>
                <li className="lg:border-l lg:border-[#A6A6A6] h-7"><a className="text-[#A6A6A6] hover:text-white text-base font-medium" href='#'>استخدام</a></li>
                <li className="lg:border-l lg:border-[#A6A6A6] h-7 mx-2"><a className="text-[#A6A6A6] hover:text-white text-base font-medium" href='#'>تماس با ما</a></li>
                <li><a className="text-[#A6A6A6] hover:text-white text-base font-medium" href='#'>EN</a></li>
            </ul>
        </div> 
    );
}
 
export default Header;

