import React from "react";
import AdbRoundedIcon from "@mui/icons-material/AdbRounded";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col space-y-4">
            <AdbRoundedIcon />
          </div>
          {/* Column 2 */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-bold">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Services
                </a>
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p>
              IIIT Kota
              <br />
              Kota, Rajasthan, 325003
              <br />
              Phone: 123-456-7890
              <br />
              Email:hunger@gmail.com
            </p>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-6 flex flex-col items-center">
          <p>&copy; 2024 Hunger. All rights reserved.</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-300 hover:text-gray-400 transition duration-300 ease-in-out"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.25 4H3.75C2.23122 4 1 5.23122 1 6.75V17.25C1 18.7688 2.23122 20 3.75 20H12.9275V15.25H10.585V12.25H12.9275V10.2225C12.9275 7.2675 14.8122 6.1875 16.795 6.1875C17.8537 6.1875 18.6725 6.2575 18.9225 6.2875V8.5275H17.0225C15.46 8.5275 15 9.3275 15 10.2225V12.25H18.7975L18.3125 15.25H15V20H20.25C21.7688 20 23 18.7688 23 17.25V6.75C23 5.23122 21.7688 4 20.25 4Z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-400 transition duration-300 ease-in-out"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-11h-7v1h7v-1zm-3.5 4a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-400 transition duration-300 ease-in-out"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM8.5 8h7v1h-7v-1zm0 2h7v1h-7v-1zm7 7H9v-3c0-1.232.201-2.349.563-3.374C10.496 11.202 11.614 10.5 13 10.5c1.385 0 2.504.702 3.437 1.126C16.799 12.651 17 13.768 17 15v3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
