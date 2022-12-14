import {NextComponentType} from "next";
import Image from 'next/image';

const footerNavigation = {
    products: [
        { name: 'New Items', href: '#' },
    ],
    customerService: [
        { name: 'Contact', href: '#' },
        { name: 'Shipping', href: '#' },
        { name: 'Returns', href: '#' },
        { name: 'Warranty', href: '#' },
        { name: 'Secure Payments', href: '#' },
        { name: 'FAQ', href: '#' },
    ],
    company: [
        { name: 'Who we are', href: '#' },
        { name: 'Sustainability', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Terms & Conditions', href: '#' },
        { name: 'Privacy', href: '#' },
    ],
    legal: [
        { name: 'Terms of Service', href: '#' },
        { name: 'Return Policy', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Shipping Policy', href: '#' },
    ],
    bottomLinks: [
        { name: 'Accessibility', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
}

export const Footer: NextComponentType =() => {
     return(
         <>
             <footer aria-labelledby="footer-heading" className="bg-white">
                 <h2 id="footer-heading" className="sr-only">
                     Footer
                 </h2>
                 <div className="bg-calm-blue mx-auto px-4 sm:px-6 lg:px-8 dark:bg-raisin-black">
                     <div className="border-t border-gray-200">
                         <div className="pt-16 pb-20">
                                 <div className="relative h-20 w-20 m-auto">
                                     <Image
                                         src='https://imagedelivery.net/ABOKdsGnCenw7al-aeuiGQ/10b62db2-d563-45b4-0d6e-70492acab200/p'
                                         alt="Logo"
                                         layout="fill" // required
                                         objectFit="cover" // change as you like
                                     />
                                 </div>
                             <div className="mt-16 max-w-5xl mx-auto xl:grid xl:grid-cols-2 xl:gap-8">
                                 <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                                     <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                                         <div>
                                             <h3 className="text-sm font-medium text-white">Products</h3>
                                             <ul role="list" className="mt-6 space-y-6">
                                                 {footerNavigation.products.map((item) => (
                                                     <li key={item.name} className="text-sm">
                                                         <a href={item.href} className="text-gray-200 hover:text-gray-400">
                                                             {item.name}
                                                         </a>
                                                     </li>
                                                 ))}
                                             </ul>
                                         </div>
                                         <div>
                                             <h3 className="text-sm font-medium text-white">Customer Service</h3>
                                             <ul role="list" className="mt-6 space-y-6">
                                                 {footerNavigation.customerService.map((item) => (
                                                     <li key={item.name} className="text-sm">
                                                         <a href={item.href} className="text-gray-200 hover:text-gray-400">
                                                             {item.name}
                                                         </a>
                                                     </li>
                                                 ))}
                                             </ul>
                                         </div>
                                     </div>
                                     <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                                         <div>
                                             <h3 className="text-sm font-medium text-white">Company</h3>
                                             <ul role="list" className="mt-6 space-y-6">
                                                 {footerNavigation.company.map((item) => (
                                                     <li key={item.name} className="text-sm">
                                                         <a href={item.href} className="text-gray-200 hover:text-gray-400">
                                                             {item.name}
                                                         </a>
                                                     </li>
                                                 ))}
                                             </ul>
                                         </div>
                                         <div>
                                             <h3 className="text-sm font-medium text-white">Legal</h3>
                                             <ul role="list" className="mt-6 space-y-6">
                                                 {footerNavigation.legal.map((item) => (
                                                     <li key={item.name} className="text-sm">
                                                         <a href={item.href} className="text-gray-200 hover:text-gray-400">
                                                             {item.name}
                                                         </a>
                                                     </li>
                                                 ))}
                                             </ul>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>

                         <div className="flex justify-center">
                             <div className="bg-white  w-1/2 rounded-lg p-6 flex items-center sm:p-10">
                                 <div className="max-w-sm mx-auto">
                                     <h3 className="font-semibold text-calm-blue">Sign up for our newsletter</h3>
                                     <p className="mt-2 text-sm text-calm-blue">
                                         The latest news, articles, and resources, sent to your inbox weekly.
                                     </p>
                                     <form className="mt-4 sm:mt-6 sm:flex">
                                         <label htmlFor="email-address" className="sr-only">
                                             Email address
                                         </label>
                                         <input
                                             id="email-address"
                                             type="text"
                                             autoComplete="email"
                                             required
                                             className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                         />
                                         <div className="mt-3 sm:flex-shrink-0 sm:mt-0 sm:ml-4">
                                             <button
                                                 type="submit"
                                                 className="w-full bg-safety-red border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-raisin-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-500"
                                             >
                                                 Sign up
                                             </button>
                                         </div>
                                     </form>
                                 </div>
                             </div>
                         </div>
                     </div>

                     <div className="py-10 md:flex md:items-center md:justify-between">
                         <div className="text-center md:text-left">
                             <p className="text-sm text-laurel">&copy; 2021 All Rights Reserved</p>
                         </div>

                         <div className="mt-4 flex items-center justify-center md:mt-0">
                             <div className="flex space-x-8">
                                 {footerNavigation.bottomLinks.map((item) => (
                                     <a key={item.name} href={item.href} className="text-sm text-laurel hover:text-mountbatten">
                                         {item.name}
                                     </a>
                                 ))}
                             </div>
                         </div>
                     </div>
                 </div>
             </footer>
         </>
     )
}