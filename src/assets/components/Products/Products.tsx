import { productsData } from '../../../data/productsdata'
const Products = () => {
  return (
    <div className="flex flex-col gap-8 px-4">
      {productsData.map((product) => (
        <div key={product.id} className="bg-base-100 rounded-lg mx-auto p-4 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            
            <div className="shrink-0">
              <img className="max-w-xs max-h-80 w-full object-cover rounded-lg" src={product.image} alt={product.title} />
            </div>

          
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl text-red-600 font-semibold">{product.title}</h2>
              </div>

              <hr className="border-t border-gray-300"/>

              <div className="flex justify-between items-center gap-6 flex-wrap">
                <span className="text-lg font-medium">وزن‌های موجود:</span>
                <div className="flex gap-3 flex-wrap">
                  {product.icons.map((icon, idx) => (
                    <img key={idx} className="w-10 h-10" src={icon} alt="#" />
                  ))}
                </div>
              </div>

              <hr className="border-t border-gray-300"/>

              <p className="text-gray-500 leading-6 text-justify">{product.description}</p>

              <hr className="border-t border-gray-300"/>

              <div className="flex justify-start">
                <button className="btn btn-lg bg-gray-50 text-gray-400 hover:bg-red-600 transition-all duration-300 font-normal text-md rounded">
                  خرید محصول
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products;

