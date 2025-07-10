'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Facebook, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Liên hệ{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              với chúng tôi
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
            Hỗ trợ 24/7 qua Zalo và Facebook. Phản hồi nhanh chóng trong vòng 5 phút!
          </p>
        </div>

        <div className="mt-16">
          <Card className="mx-auto max-w-4xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-8">
              <CardTitle className="text-3xl font-bold">
                Kết nối ngay với chúng tôi
              </CardTitle>
              <CardDescription className="text-blue-100 text-lg mt-2">
                Chọn phương thức liên hệ phù hợp với bạn
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Zalo Contact */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="rounded-full bg-blue-100 p-3">
                      <MessageCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Zalo</h3>
                      <p className="text-gray-600">Liên hệ trực tiếp qua Zalo</p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 border border-blue-200">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <span className="text-2xl font-bold text-blue-600">0949000030</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Nhắn tin hoặc gọi điện trực tiếp
                    </p>
                  </div>
                  <Button
                    className={`w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 h-auto transition-all duration-300 ${
                      hoveredButton === 'zalo' ? 'scale-105 shadow-lg' : ''
                    }`}
                    onMouseEnter={() => setHoveredButton('zalo')}
                    onMouseLeave={() => setHoveredButton(null)}
                    onClick={() => window.open('https://zalo.me/0949000030', '_blank')}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Liên hệ qua Zalo
                  </Button>
                </div>

                {/* Facebook Contact */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="rounded-full bg-blue-100 p-3">
                      <Facebook className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Facebook</h3>
                      <p className="text-gray-600">Messenger hoặc comment</p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 border border-blue-200">
                    <div className="flex items-center space-x-2">
                      <Facebook className="h-5 w-5 text-blue-600" />
                      <span className="text-lg font-bold text-blue-600">Cloud VPS Service</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Fanpage chính thức của dịch vụ
                    </p>
                  </div>
                  <Button
                    className={`w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-4 h-auto transition-all duration-300 ${
                      hoveredButton === 'facebook' ? 'scale-105 shadow-lg' : ''
                    }`}
                    onMouseEnter={() => setHoveredButton('facebook')}
                    onMouseLeave={() => setHoveredButton(null)}
                    onClick={() => window.open('https://www.facebook.com/andy.anh17405/', '_blank')}
                  >
                    <Facebook className="mr-2 h-5 w-5" />
                    Liên hệ qua Facebook
                  </Button>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="h-3 w-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-blue-700 font-semibold">Đang online</span>
                </div>
                <div className="text-center">
                  <p className="text-gray-700 font-medium">
                    ⚡ Phản hồi trong vòng 5 phút
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Hỗ trợ 24/7 - Tư vấn miễn phí
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}