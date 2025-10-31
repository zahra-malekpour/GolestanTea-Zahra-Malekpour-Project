import ImageIcon1 from '../../icons/footer-icon1.png'
import ImageIcon2 from '../../icons/footer-icon2.png'
import ImageIcon3 from '../../icons/footer-icon3.png'
import ImageIcon4 from '../../icons/footer-icon4.png'

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-300 text-right py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        <div>
          <img className="mb-8" src={ImageIcon1} alt="#" />
          <h3 className="text-white font-semibold mb-3">چای گلستان</h3>
          <ul className="space-y-1">
            <li>چای ممتاز هندوستان</li>
            <li>چای ممتاز ارل گری</li>
            <li>چای سیلان عطری</li>
            <li>چای ممتاز سیلان</li>
            <li>چای صبحانه گلستان</li>
          </ul>
        </div>
        <div>
          <img className="mb-8" src={ImageIcon2} alt="#" />
          <h3 className="text-white font-semibold mb-3">تی بگ گلستان</h3>
          <ul className="space-y-1">
            <li>تی بگ بلک لاین</li>
            <li>تی بگ ارل گری</li>
            <li>دمنوش نعناع</li>
            <li>دمنوش بابونه</li>
            <li>دمنوش چای سبز</li>
          </ul>
        </div>
        <div>
          <img className="mb-8" src={ImageIcon3} alt="#" />
          <h3 className="text-white font-semibold mb-3">ادویه گلستان</h3>
          <ul className="space-y-1">
            <li>زعفران ممتاز خراسان</li>
            <li>ادویه کاری</li>
            <li>ادویه ماست و خیار</li>
            <li>فلفل سیاه خالص</li>
            <li>زردچوبه ممتاز</li>
          </ul>
        </div>
        <div>
          <img className="mb-8" src={ImageIcon4} alt="#" />
          <h3 className="text-white font-semibold mb-3">حبوبات گلستان</h3>
          <ul className="space-y-1">
            <li>لوبیا قرمز ممتاز</li>
            <li>لوبیا چیتی گلستان</li>
            <li>عدس کانادایی</li>
            <li>نخود زودپز کرمانشاه</li>
            <li>لوبیا سفید گلستان</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
        <p>شرکت گلستان 2025. تمامی حقوق محفوظ است.</p>
      </div>
    </div>
  );
};

export default Footer;
