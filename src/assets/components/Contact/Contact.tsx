import Icon1 from '../../icons/aparat.svg'
import Icon2 from '../../icons/facebook.svg'
import Icon3 from '../../icons/telegram.svg'
import Icon4 from '../../icons/whatsapp.svg'

const Contact = () => {
  return (
    <div>
        <div className="flex bg-gray-300 gap-10 justify-center p-10">
            <a href="#" target="_blank" rel="">
                <img src={Icon1} alt="Instagram" className="w-8 h-8 hover:scale-110 transition-transform duration-200"/>
            </a>

            <a href="#" target="_blank" rel="">
                <img src={Icon2} alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition-transform duration-200"/>
            </a>

            <a href="#" target="_blank" rel="">
                <img src={Icon3} alt="Facebook" className="w-8 h-8 hover:scale-110 transition-transform duration-200"/>
            </a>

            <a href="#" target="_blank" rel="">
                <img src={Icon4} alt="Facebook" className="w-8 h-8 hover:scale-110 transition-transform duration-200"/>
            </a>

        </div>
        <div className="block bg-red-600 w-full h-10"></div>
    </div>
  );
};

export default Contact;