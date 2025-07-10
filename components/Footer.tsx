import { Cloud, Facebook, MessageCircle, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-blue-600 p-2">
                <Cloud className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Cloud VPS Service</span>
            </div>
            <p className="mt-4 text-gray-300 max-w-md">
              Dịch vụ Cloud, VPS, Hosting dành cho sinh viên với giá cả phải chăng, 
              cấu hình mạnh mẽ và hỗ trợ 24/7.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://facebook.com/andy.anh17405/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://zalo.me/0949000030"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Dịch vụ</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Gói Sinh Viên</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Gói Cá Nhân</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">VPS Proxmox</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Backup Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Zalo: 0949000030</li>
              <li>Facebook: Cloud VPS Service</li>
              <li>Email: hovietanh@andyanh.id.vn</li>
              <li>Hỗ trợ: 24/7</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>© 2024 Cloud VPS Service. Made with AndyAnh174</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for students in HCMUTE</span>
          </p>
        </div>
      </div>
    </footer>
  );
}