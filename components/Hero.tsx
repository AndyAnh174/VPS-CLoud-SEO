'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Cloud, Server, Shield, Zap } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Dịch vụ{' '}
              <span className="bg-gradient-to-r from-blue-200 to-blue-100 bg-clip-text text-transparent">
                Cloud, VPS, Hosting
              </span>
              <br />
              dành cho sinh viên
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-blue-100 sm:text-2xl">
              Server vật lý dùng Proxmox VE – tốc độ mạng 300Mbps – giá rẻ như cho!
            </p>
          </div>
          
          <div className={`mt-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold text-lg px-8 py-4 h-auto transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => window.open('https://facebook.com/andy.anh17405/', '_blank')}
            >
              <Zap className="mr-2 h-5 w-5" />
              Liên hệ qua Zalo hoặc Facebook
            </Button>
          </div>

          <div className={`mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-white/10 p-3 backdrop-blur-sm">
                <Cloud className="h-6 w-6 text-blue-200" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Cloud Hosting</h3>
              <p className="mt-2 text-sm text-blue-100">Đám mây ổn định</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-white/10 p-3 backdrop-blur-sm">
                <Server className="h-6 w-6 text-blue-200" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">VPS Proxmox</h3>
              <p className="mt-2 text-sm text-blue-100">Server vật lý mạnh</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-white/10 p-3 backdrop-blur-sm">
                <Shield className="h-6 w-6 text-blue-200" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Backup định kỳ</h3>
              <p className="mt-2 text-sm text-blue-100">Sao lưu tự động</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-white/10 p-3 backdrop-blur-sm">
                <Zap className="h-6 w-6 text-blue-200" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">300Mbps</h3>
              <p className="mt-2 text-sm text-blue-100">Tốc độ mạng cao</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}