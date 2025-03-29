import Link from 'next/link'

const ContactCTA = () => {
  return (
    <section className="py-20 bg-himbalt-blue text-white">
      <div className="himbalt-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get in touch with our team
          </h2>
          <p className="text-xl mb-10 text-white/80">
            Have questions about our products or services? Our team is ready to help!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contacts"
              className="bg-white text-himbalt-blue px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition"
            >
              Contact Us
            </Link>
            <a
              href="tel:+48789119755"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition"
            >
              +372 583 55 777
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
