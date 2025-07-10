import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cloud, VPS, Hosting cho sinh viên | Rẻ - Ổn định - Có backup',
  description: 'Dịch vụ thuê Cloud, VPS, Hosting cho sinh viên: Miễn phí 3 tháng với cấu hình mạnh mẽ. Có gói dùng lâu dài, sao lưu định kỳ, tốc độ mạng 300Mbps.',
  keywords: 'cloud hosting, vps hosting, hosting sinh viên, server rẻ, proxmox, backup',
  authors: [{ name: 'Cloud VPS Student Service' }],
  creator: 'Cloud VPS Student Service',
  publisher: 'Cloud VPS Student Service',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Cloud, VPS, Hosting cho sinh viên | Rẻ - Ổn định - Có backup',
    description: 'Dịch vụ thuê Cloud, VPS, Hosting cho sinh viên: Miễn phí 3 tháng với cấu hình mạnh mẽ. Có gói dùng lâu dài, sao lưu định kỳ, tốc độ mạng 300Mbps.',
    url: 'https://your-domain.com',
    siteName: 'Cloud VPS Student Service',
    images: [
      {
        url: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Cloud VPS Hosting Service',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud, VPS, Hosting cho sinh viên | Rẻ - Ổn định - Có backup',
    description: 'Dịch vụ thuê Cloud, VPS, Hosting cho sinh viên: Miễn phí 3 tháng với cấu hình mạnh mẽ. Có gói dùng lâu dài, sao lưu định kỳ, tốc độ mạng 300Mbps.',
    images: ['https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1200'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  );
}