import { MapPin, Users, Activity, Building, CreditCard, Briefcase } from "lucide-react";

export default function Footer() {
  const stats = [
    { label: "Газар нутаг", value: "1,250 км²", icon: <MapPin className="w-10 h-10 text-blue-600 mx-auto" /> },
    { label: "Хүн ам", value: "15,340", icon: <Users className="w-10 h-10 text-blue-600 mx-auto" /> },
    { label: "Мал сүрэг", value: "58,000", icon: <Activity className="w-10 h-10 text-blue-600 mx-auto" /> },
    { label: "ААН-ийн тоо", value: "320", icon: <Building className="w-10 h-10 text-blue-600 mx-auto" /> },
    { label: "Төвлөрүүлсэн татвар", value: "120 сая ₮", icon: <CreditCard className="w-10 h-10 text-blue-600 mx-auto" /> },
    { label: "Хөдөлмөр эрхлэлт", value: "8,500 хүн", icon: <Briefcase className="w-10 h-10 text-blue-600 mx-auto" /> },
  ];

  return (
    <footer className="bg-[#111828] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Statistics with Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div>{stat.icon}</div>
              <p className="text-2xl sm:text-3xl font-bold text-white mt-2">{stat.value}</p>
              <p className="text-gray-400 mt-1 text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Divider after statistics */}
        <div className="border-t border-gray-900 mb-12"></div>

        {/* Top 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold mb-6 tracking-wide">Company</h3>
            <ul className="space-y-3">
              <li>
                <a className="hover:text-indigo-400 transition-colors duration-300" href="#">About Us</a>
              </li>
              <li>
                <a className="hover:text-indigo-400 transition-colors duration-300" href="#">Careers</a>
              </li>
              <li>
                <a className="hover:text-indigo-400 transition-colors duration-300" href="#">Press</a>
              </li>
              <li>
                <a className="hover:text-indigo-400 transition-colors duration-300" href="#">Blog</a>
              </li>
            </ul>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-bold mb-6 tracking-wide">Services</h3>
            <ul className="space-y-3">
              <li>
                <a className="hover:text-indigo-400 transition-colors duration-300" href="#">Web Design</a>
              </li>
              <li>
                <a className="hover:text-indigo-400 transition-colors duration-300" href="#">Development</a>
              </li>
              <li>
                <a className="hover:text-indigo-400 transition-colors duration-300" href="#">Marketing</a>
              </li>
              <li>
                <a className="hover:text-indigo-400 transition-colors duration-300" href="#">Consulting</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-bold mb-6 tracking-wide">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>123 Main Street</li>
              <li>City, Country 12345</li>
              <li>Email: info@example.com</li>
              <li>Phone: +1 (234) 567-890</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-900 mt-12"></div>

        {/* Bottom Section */}
        <div className="mt-6 text-center text-gray-400 text-sm">
          &copy; 2026 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
