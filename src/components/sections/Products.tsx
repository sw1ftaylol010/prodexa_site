import Link from 'next/link'

const Products = () => {
  return (
    <section className="py-20 bg-white">
      <div className="himbalt-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-himbalt-dark-text">Our products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group">
            <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3] bg-himbalt-light-blue">
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-semibold text-white">Base oil</h3>
              </div>
              <Link href="/base-oil" className="absolute inset-0">
                <span className="sr-only">Base oil</span>
              </Link>
            </div>
            <Link
              href="/base-oil"
              className="inline-flex items-center text-himbalt-blue font-medium hover:underline"
            >
              View products
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="group">
            <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3] bg-himbalt-light-blue">
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-semibold text-white">Paraffin wax</h3>
              </div>
              <Link href="/paraffin-wax" className="absolute inset-0">
                <span className="sr-only">Paraffin wax</span>
              </Link>
            </div>
            <Link
              href="/paraffin-wax"
              className="inline-flex items-center text-himbalt-blue font-medium hover:underline"
            >
              View products
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
