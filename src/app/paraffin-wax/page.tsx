import Link from 'next/link';
import ProductContactForm from '@/components/forms/ProductContactForm';

export default function ParaffinWaxPage() {
  return (
    <>
      <section className="bg-prodexa-blue text-white py-16">
        <div className="prodexa-container">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Paraffin wax
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium">
            Premium quality for various applications
          </h2>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="prodexa-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-prodexa-dark-text">
                High-quality paraffin wax
              </h2>
              <p className="text-lg mb-6 text-gray-700">
                Prodexa offers premium quality paraffin wax suitable for various industrial applications.
                Our paraffin wax meets international quality standards and specifications.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                We supply paraffin wax in various forms and melting points to accommodate different customer needs.
              </p>
              <div className="mt-8">
                <button className="inline-flex items-center bg-prodexa-blue text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition">
                  Get a price
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Product Specifications</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="font-medium">Melting points:</span>
                  <span>42-70°C</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Oil content:</span>
                  <span>0.5-3.0%</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Color:</span>
                  <span>White to light yellow</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Forms:</span>
                  <span>Slabs, granules, liquid</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Packaging:</span>
                  <span>25kg bags, bulk packaging</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="prodexa-container">
          <h2 className="text-3xl font-bold mb-12 text-center">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 mb-4 text-prodexa-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Candle Making</h3>
              <p className="text-gray-700">
                Our paraffin wax is ideal for producing high-quality candles with excellent burning properties.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 mb-4 text-prodexa-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Cosmetics Industry</h3>
              <p className="text-gray-700">
                Used in various cosmetic products including creams, lipsticks, and other personal care items.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 mb-4 text-prodexa-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Food Industry</h3>
              <p className="text-gray-700">
                Food-grade paraffin wax for coating cheeses, fruits, and other food products.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 mb-4 text-prodexa-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Rubber & Tire Industry</h3>
              <p className="text-gray-700">
                Used as a processing aid and releasing agent in rubber manufacturing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 mb-4 text-prodexa-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
               </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Packaging Industry</h3>
              <p className="text-gray-700">
                Used for coating packaging materials to improve moisture resistance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 mb-4 text-prodexa-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17A3 3 0 015 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                  <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Other Applications</h3>
              <p className="text-gray-700">
                Textiles, paper coating, polishes, adhesives, and many other industrial applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-prodexa-blue text-white">
        <div className="prodexa-container">
          <ProductContactForm productType="Paraffin Wax" />
        </div>
      </section>
    </>
  );
}