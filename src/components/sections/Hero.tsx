const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-himbalt-blue to-himbalt-dark-blue text-white py-20 md:py-32">
      <div className="himbalt-container">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            More than 30 years of effective operations in the petroleum products market
          </h1>
          <div className="w-20 h-1 bg-white mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-md">
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Registration of products</h3>
              <p className="text-white/80">Registration of refined products, petrochemicals and chemicals imported to EU</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-md">
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Transshipment solutions</h3>
              <p className="text-white/80">Transshipment solutions at Baltic and Black Sea terminals</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-md">
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Major contracts</h3>
              <p className="text-white/80">Contracts with major lubricant producers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
