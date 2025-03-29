import Link from 'next/link'
import ProductContactForm from '@/components/forms/ProductContactForm'

export default function BaseOilPage() {
  return (
    <>
      <section className="bg-himbalt-blue text-white py-16">
        <div className="himbalt-container">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-himbalt-light-blue">Always in</span> stock
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium">Always on stock</h2>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="himbalt-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SN 150 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="text-xl font-semibold border-b border-himbalt-blue inline-block pb-2 mb-4">SN 150</h3>
              <p className="mb-2">See spec. I / spec. II</p>
              <button className="mt-4 inline-flex items-center text-himbalt-blue hover:underline font-medium">
                Get a price
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* SN 500 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="text-xl font-semibold border-b border-himbalt-blue inline-block pb-2 mb-4">SN 500</h3>
              <p className="mb-2">See spec. I / spec. II</p>
              <button className="mt-4 inline-flex items-center text-himbalt-blue hover:underline font-medium">
                Get a price
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* SN 900 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="text-xl font-semibold border-b border-himbalt-blue inline-block pb-2 mb-4">SN 900</h3>
              <p className="mb-2">Viscosity index, min: 87</p>
              <p className="mb-2">Color ASTM, max: 5,5</p>
              <button className="mt-4 inline-flex items-center text-himbalt-blue hover:underline font-medium">
                Get a price
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* BS */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="text-xl font-semibold border-b border-himbalt-blue inline-block pb-2 mb-4">BS</h3>
              <p className="mb-2">Viscosity index, min: 90</p>
              <p className="mb-2">Color ASTM, max: 5,5</p>
              <button className="mt-4 inline-flex items-center text-himbalt-blue hover:underline font-medium">
                Get a price
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* BS 150 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="text-xl font-semibold border-b border-himbalt-blue inline-block pb-2 mb-4">BS 150</h3>
              <p className="mb-2">Viscosity index, min: 88</p>
              <p className="mb-2">Color ASTM, max: 6,0</p>
              <button className="mt-4 inline-flex items-center text-himbalt-blue hover:underline font-medium">
                Get a price
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="himbalt-container">
          <h2 className="text-3xl font-bold mb-12">Base oil by four groups</h2>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-himbalt-dark-blue">Group I</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {['SN 80', 'SN 150 (spec.I)', 'SN 250', 'SN 350', 'SN 400', 'SN 500 (spec.I)',
                'SN 500 (spec.II)', 'SN 600', 'SN 650', 'SN 900 (spec.)', 'SN 1200', 'BS (spec.)', 'BS 150 (spec.)'].map((item) => (
                <div key={item} className="bg-white py-3 px-4 rounded-md shadow-sm hover:shadow-md transition">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-himbalt-dark-blue">Group II</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['HVI-5', 'HVI-6', 'HVI-7'].map((item) => (
                <div key={item} className="bg-white py-3 px-4 rounded-md shadow-sm hover:shadow-md transition">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-himbalt-dark-blue">Group III</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['2 cst', '4 cst', '6 cst', '8 cst'].map((item) => (
                <div key={item} className="bg-white py-3 px-4 rounded-md shadow-sm hover:shadow-md transition">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-himbalt-dark-blue">Group IV</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {['PAO 2', 'PAO 4', 'PAO 6', 'PAO 8', 'PAO 10', 'PAO 12', 'PAO 20'].map((item) => (
                <div key={item} className="bg-white py-3 px-4 rounded-md shadow-sm hover:shadow-md transition">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-himbalt-dark-blue">Other products</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['AK-15 (Lubrication oil)', 'Cylinder Oil Grade 11', 'Transformer Oil Grade T-1500',
                'Turbine Oil T-22', 'Turbine Oil T-30', 'Turbine Oil T-46'].map((item) => (
                <div key={item} className="bg-white py-3 px-4 rounded-md shadow-sm hover:shadow-md transition">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-himbalt-blue text-white">
        <div className="himbalt-container">
          <ProductContactForm productType="Base Oil" />
        </div>
      </section>
    </>
  )
}
