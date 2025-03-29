import ContactForm from '@/components/forms/ContactForm';

export default function ContactsPage() {
  return (
    <>
      <section className="bg-prodexa-blue text-white py-16">
        <div className="prodexa-container">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Contact information
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="prodexa-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6 text-prodexa-dark-text">
                  Get in touch
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-xl font-medium">+48 789 119 755</p>
                  </div>
                  <div>
                    <p className="text-lg">
                    Nowogrodzka 50/54 / 515, 00-695 Warsaw, Poland
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-medium">info@prodexa.pl</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Department of Base oil</h3>
                  <p className="mb-2">+48 789 119 755</p>
                  <p>info@prodexa.pl</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Department of Wax</h3>
                  <p className="mb-2">+48 789 119 755</p>
                  <p>info@prodexa.pl</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Department of Logistics</h3>
                  <p className="mb-2">+48 789 119 755</p>
                  <p>info@prodexa.pl</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Department of Petrochemicals</h3>
                  <p className="mb-2">+48 789 119 755</p>
                  <p>info@prodexa.pl</p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="prodexa-container">
          <div className="aspect-[16/9] w-full rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <p className="text-gray-700">Map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}