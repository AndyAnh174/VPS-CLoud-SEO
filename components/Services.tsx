'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { GraduationCap, User, Cpu, HardDrive, Database, Clock, Shield, Plus } from 'lucide-react';

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Gói dịch vụ{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              phù hợp
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
            Lựa chọn gói dịch vụ phù hợp với nhu cầu và ngân sách của bạn
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Student Package */}
          <Card 
            className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
              hoveredCard === 'student' ? 'scale-105 shadow-2xl' : ''
            }`}
            onMouseEnter={() => setHoveredCard('student')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-blue-500/10"></div>
            <CardHeader className="relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-blue-100 p-2">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      Gói Sinh Viên
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Miễn phí 3 tháng đầu
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  MIỄN PHÍ
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="relative space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Cpu className="h-5 w-5 text-blue-600" />
                  <span className="text-lg font-medium">1 vCPU</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Database className="h-5 w-5 text-blue-600" />
                  <span className="text-lg font-medium">2GB RAM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <HardDrive className="h-5 w-5 text-blue-600" />
                  <span className="text-lg font-medium">50GB lưu trữ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-lg font-medium">Sau 3 tháng sẽ xóa toàn bộ dữ liệu</span>
                </div>
              </div>
              
              <Separator />
              
              <div className="rounded-lg bg-blue-50 p-4">
                <p className="text-sm text-blue-800 font-medium">
                  ✨ Dành cho sinh viên thuê đồ án
                </p>
                <p className="text-sm text-blue-600 mt-1">
                  Hoàn hảo cho các dự án học tập và thử nghiệm
                </p>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 transition-all duration-300">
                Đăng ký ngay
              </Button>
            </CardContent>
          </Card>

          {/* Personal Package */}
          <Card 
            className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
              hoveredCard === 'personal' ? 'scale-105 shadow-2xl' : ''
            }`}
            onMouseEnter={() => setHoveredCard('personal')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-blue-500/10"></div>
            <CardHeader className="relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-blue-100 p-2">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      Gói Cá Nhân
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Dùng lâu dài, có backup
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  PHỔ BIẾN
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="relative space-y-6">
              <div className="rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 p-4 border border-blue-200">
                <h4 className="font-bold text-lg text-gray-900 mb-3">Gói cơ bản</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Cpu className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">1 vCPU</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Database className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">2GB RAM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <HardDrive className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">30GB lưu trữ</span>
                  </div>
                </div>
                <div className="mt-3 text-2xl font-bold text-blue-700">
                  50.000đ<span className="text-sm font-normal text-gray-600">/tháng</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-lg text-gray-900">Có thể nâng cấp:</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Plus className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">+1GB RAM</span>
                    </div>
                    <span className="font-bold text-blue-600">20.000đ/tháng</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Plus className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">+1 vCPU</span>
                    </div>
                    <span className="font-bold text-blue-600">20.000đ/tháng</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Plus className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">+10GB lưu trữ</span>
                    </div>
                    <span className="font-bold text-blue-600">30.000đ/tháng</span>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg bg-blue-50 p-4">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">
                    Hỗ trợ sao lưu định kỳ hàng tháng
                  </span>
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 transition-all duration-300">
                Chọn gói này
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}