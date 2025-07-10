'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Users, ExternalLink, Facebook } from 'lucide-react';

export default function Profile() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Về{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              chúng tôi
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
            Đội ngũ chuyên nghiệp với kinh nghiệm trong lĩnh vực công nghệ và nghiên cứu
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden bg-gradient-to-br from-blue-50 to-white border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <img 
                    src="/anh-dai-dien.jpg" 
                    alt="Hồ Việt Anh"
                    className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white"
                  />
                </div>

                {/* Profile Information */}
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-4">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      Hồ Việt Anh
                    </h3>
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                        Chủ nhiệm
                      </Badge>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                        Technology Leader
                      </Badge>
                    </div>
                  </div>

                  {/* Organization Info */}
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 mb-6">
                    <div className="flex items-center justify-center md:justify-start space-x-3 mb-3">
                      <img 
                        src="/rtic-logo.jpg" 
                        alt="RTIC Logo"
                        className="w-10 h-10 rounded-lg object-cover shadow-sm"
                      />
                      <h4 className="text-xl font-bold text-gray-900">
                        HCM UTE Research on Technology and Innovation Club
                      </h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Câu lạc bộ nghiên cứu công nghệ và đổi mới sáng tạo tại Đại học Sư phạm Kỹ thuật TP.HCM, 
                      chuyên về phát triển các giải pháp công nghệ tiên tiến và hỗ trợ sinh viên trong lĩnh vực CNTT.
                    </p>
                  </div>

                  {/* Contact Links */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a
                      href="https://www.facebook.com/hcmute.rtic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <Facebook className="mr-2 h-5 w-5" />
                      HCM UTE RTIC
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                    <div className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-lg">
                      <User className="mr-2 h-5 w-5" />
                      Chủ nhiệm CLB
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-blue-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-blue-600">2+</div>
                    <div className="text-gray-600">Năm kinh nghiệm</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-blue-600">30+</div>
                    <div className="text-gray-600">Sinh viên hỗ trợ</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-gray-600">Hỗ trợ kỹ thuật</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}