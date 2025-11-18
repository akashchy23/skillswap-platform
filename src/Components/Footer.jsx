import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
       <footer className="bg-gray-900 text-gray-200 py-10">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                    <p>Email: akashchypyc2@gmail.com</p>
                    <p>Phone: +880 1613 733631</p>
                    <p>Address: Chittagong, Bangladesh</p>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                    <div className="flex space-x-4 text-2xl">
                       <a  href="https://www.facebook.com/" target="_blank"><FaFacebook /></a>
                       <a  href="https://www.youtube.com/" target="_blank"><FaYoutube /></a>
                       <a  href="https://x.com/" target="_blank"><FaTwitter /></a>
                       <a  href="https://www.instagram.com/" target="_blank"><FaInstagramSquare /></a>
                    </div>
                </div>

                {/* Policy Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Legal</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/terms-of-service" className="hover:text-white">Terms of Service</a>
                        </li>
                        <li>
                            <a href="/faq" className="hover:text-white">FAQ</a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="text-center text-gray-500 mt-10">
                &copy; {new Date().getFullYear()} SkillSwap. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
