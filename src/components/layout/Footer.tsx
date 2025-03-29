import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-prodexa-blue text-white py-8">
      <div className="prodexa-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-opacity-80 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/logistics" className="hover:text-opacity-80 transition">
                  Logistics
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-opacity-80 transition">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/base-oil" className="hover:text-opacity-80 transition">
                  Base oil
                </Link>
              </li>
              <li>
                <Link href="/paraffin-wax" className="hover:text-opacity-80 transition">
                  Paraffin wax
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Contact Us</h3>
            <address className="not-italic">
              <p>Prodexa</p>
              <p>Nowogrodzka 50/54 / 515,</p>
              <p>00-695 Warsawa,</p>
              <p>Poland</p>
            </address>
            <div className="mt-4 space-y-2">
              <p>
                <a href="tel:+48789119755" className="hover:text-opacity-80 transition">
                +48 789 119 755
                </a>
              </p>
              <p>
                <a href="mailto:info@prodexa.pl" className="hover:text-opacity-80 transition">
                  info@prodexa.pl
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p>@prodexa.pl {new Date().getFullYear()}</p>
          <div className="mt-4 md:mt-0">
            <Link href="/contacts" className="hover:text-opacity-80 transition">
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 py-4 bg-white/10">
        <div className="prodexa-container text-sm">
          <p>
            We use cookies to provide you with the best possible service and to continuosly improve our website.
            To find out more, read our {' '}
            <Link href="/privacy-policy" className="underline hover:text-opacity-80 transition">
              privacy policy
            </Link>{' '}
            and {' '}
            <Link href="/cookie-policy" className="underline hover:text-opacity-80 transition">
              cookie policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
