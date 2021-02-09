import React from 'react'

const Footer = (props) => {
    return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-gray-900"
            : "relative") + " pb-6 bg-yellow-300"
        }
      >
        <div className="container mx-auto px-4">
          <hr className="mb-6 border-b-1 border-lime-700" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-gray-600 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://dmunro.netlify.app"
                  className="text-white hover:text-gray-400 text-sm font-semibold py-1"
                >
                  Darryl Munro
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                    href="https://dmunro.netlify.app"
                    className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                  >
                    Darryl Munro
                  </a>
                </li>
                <li>
                  <a
                    href="https://dmunro.netlify.app/about"
                    className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                  >
                    About Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer
