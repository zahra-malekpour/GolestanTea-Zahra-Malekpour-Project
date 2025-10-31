
import Image1 from '../assets/Images/sobhanetea.png'
import Image2 from '../assets/Images/Darjeelingtea.jpg'
import Image3 from '../assets/Images/greentea.jpg'
import Image4 from '../assets/Images/blacktea.png'
import Image5 from '../assets/Images/lemontea.jpg'
import Image6 from '../assets/Images/silantea.png'


import Icon1 from '../assets/Images/icon1.png'
import Icon2 from '../assets/Images/icon2.png'
import Icon3 from '../assets/Images/icon3.png'


export interface Product {
  id: number
  title: string
  image: string
  icon: string
  icons: string[]
  description: string
}
export const productsData:Product[] = [
  {
    id: 1,
    title: "چای صبحانه گلستان",
    image: Image1,
    icon: Icon2,
    icons: [Icon1, Icon2],
    description: "چای صبحانه گلستان، دستچینی از بهترین چای کله مورچه ای، باغات هندوستان می باشد. با عطر و رنگ کاملاً طبیعی و به دلیل سرعت زیاد دم کشیدن مناسب جهت استفاده در صبح می باشد. چای صبحانه با رنگ دهی بالا مقرون بصرفه است. زمان دم کشیدن این چای 3 تا 4 دقیقه می باشد.",
  },
  {
    id: 2,
    title: "چای دارجلينگ (توقف تولید)",
    image: Image2,
    icon: Icon2,
    icons: [Icon1, Icon2],
    description: "چای دارجلينگ دستچينی از بهترين و مرغوب ترين برگ های چای منطقه دارجلينگ در شمال هندوستان و كوهپايه های هيماليا مي باشد. اين چای يكی از ارزشمندترين چای های جهان و دارای عطر و طعمی منحصربه فرد است.",
  },
  {
    id: 3,
    title: "چای سبز خالص",
    image: Image3,
    icon: Icon2,
    icons: [Icon1, Icon2],
    description: "چای سبز گلستان سرشار از ترکیبات آنتی اکسیدان (ترکیبات ضد سرطان) و ویتامینهای K, C, B1, B2, A می باشد و دارای خواص درمانی کاهش ابتلا به سرطان، شادابی پوست و مو، تراکم استخوان، سلامتی دهان و دندان و کاهش وزن است.",
  },
  {
    id: 4,
    title: "چای ارل گری (معطر)",
    image: Image4,
    icon: Icon1,
    icons: [Icon1, Icon2, Icon3],
    description: "چای ارل گری گلستان، ترکیبی است از انواع چای باروتی سیلان که با عصاره برگاموت معطر شده است. زمان دم کشیدن این چای 7 تا 8 دقیقه می باشد.",
  },
  {
    id: 5,
    title: "چای سبز لیمویی",
    image: Image5,
    icon: Icon2,
    icons: [Icon1, Icon2],
    description: "چای سبز به دلیل ویژگی های منحصر به فردش از شهرت فراوانی برخوردار است. چای سبز لیمو گلستان لیمو یک نوشیدنی سالم و طبیعی را برای شما به ارمغان می آورد. لذت نوشیدن این چای سالم و طبیعی را تجربه کنید.",
  },
  {
    id: 6,
    title: "چای سیلان طلایی",
    image: Image6,
    icon: Icon2,
    icons: [Icon1, Icon2],
    description: "گلستان با دستچینی از جوانترین برگهای چای رشد یافته در کوهپایه ها و دشت های سریلانکا یکی از بهترین نوشیدنی های چای را با عنوان چای سیلان طلایی به بازار عرضه کرده است. زمان دم کشیدن این چای 7 تا 8 دقیقه می باشد.",
  },
]