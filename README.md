# 🚀 Cloud VPS Service - Landing Page

Trang web giới thiệu dịch vụ Cloud, VPS, Hosting dành cho sinh viên với giá cả phải chăng và cấu hình mạnh mẽ.

![Next.js](https://img.shields.io/badge/Next.js-13.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker)

## 📋 Mục lục

- [Tổng quan](#-tổng-quan)
- [Tính năng](#-tính-năng)
- [Công nghệ sử dụng](#-công-nghệ-sử-dụng)
- [Cài đặt](#-cài-đặt)
- [Sử dụng](#-sử-dụng)
- [Docker Deployment](#-docker-deployment)
- [Cấu trúc dự án](#-cấu-trúc-dự-án)
- [SEO & Performance](#-seo--performance)
- [Đóng góp](#-đóng-góp)
- [Liên hệ](#-liên-hệ)

## 🎯 Tổng quan

Website landing page hiện đại được xây dựng bằng **Next.js 13** với **App Router**, **TypeScript**, và **TailwindCSS**. Dự án tập trung vào việc cung cấp dịch vụ hosting giá rẻ cho sinh viên Việt Nam.

### 🎨 Demo
- **Live Demo**: [Đang cập nhật]
- **Screenshots**: [Xem trong thư mục `/screenshots`]

## ✨ Tính năng

### 🏠 Giao diện người dùng
- ✅ **Responsive Design** - Tối ưu cho mọi thiết bị
- ✅ **Modern UI/UX** - Thiết kế hiện đại với Tailwind CSS
- ✅ **Smooth Animations** - Hiệu ứng mượt mà với Framer Motion
- ✅ **Dark/Light Mode** - Hỗ trợ chế độ sáng/tối
- ✅ **Interactive Components** - Các component tương tác cao

### 📱 Các trang chính
- **Hero Section** - Giới thiệu dịch vụ chính
- **Services** - Chi tiết các gói dịch vụ
- **Profile** - Thông tin về đội ngũ
- **Contact** - Thông tin liên hệ
- **Footer** - Thông tin bổ sung

### 🔧 Tính năng kỹ thuật
- ✅ **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- ✅ **Performance** - Tối ưu tốc độ tải trang
- ✅ **TypeScript** - Type safety cho toàn bộ dự án
- ✅ **Component-based** - Kiến trúc component tái sử dụng
- ✅ **Docker Ready** - Sẵn sàng deploy với Docker

## 🛠 Công nghệ sử dụng

### Frontend Framework
- **[Next.js 13](https://nextjs.org/)** - React framework với App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 18](https://reactjs.org/)** - UI library

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable components
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://autoprefixer.github.io/)** - CSS vendor prefixes

### Deployment
- **[Docker](https://www.docker.com/)** - Containerization
- **[Docker Compose](https://docs.docker.com/compose/)** - Multi-container orchestration

## 🚀 Cài đặt

### Yêu cầu hệ thống
- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 hoặc **yarn** >= 1.22.0
- **Git**

### Cài đặt local

1. **Clone repository**
```bash
git clone https://github.com/your-username/cloud-vps-service.git
cd cloud-vps-service
```

2. **Cài đặt dependencies**
```bash
npm install
# hoặc
yarn install
```

3. **Chạy development server**
```bash
npm run dev
# hoặc
yarn dev
```

4. **Mở trình duyệt**
```
http://localhost:3000
```

### Environment Variables
Tạo file `.env.local` (nếu cần):
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 💻 Sử dụng

### Development Commands
```bash
# Chạy development server
npm run dev

# Build production
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Type check
npm run type-check
```

### Customization

#### 🎨 Thay đổi màu sắc
Chỉnh sửa file `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        900: '#1e3a8a',
      }
    }
  }
}
```

#### 📝 Cập nhật nội dung
- **Hero Section**: `components/Hero.tsx`
- **Services**: `components/Services.tsx`
- **Contact Info**: `components/Contact.tsx`
- **Profile**: `components/Profile.tsx`

#### 🔧 SEO Settings
Chỉnh sửa `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your Description',
  // ...
}
```

## 🐳 Docker Deployment

### Quick Start
```bash
# Build và chạy với Docker Compose
docker-compose up -d --build

# Xem logs
docker-compose logs -f

# Dừng services
docker-compose down
```

### Manual Docker Commands
```bash
# Build image
docker build -t cloud-vps-website .

# Run container
docker run -d \
  --name cloud-vps-website \
  -p 3000:3000 \
  --restart unless-stopped \
  cloud-vps-website
```

### Production Deployment
1. **Chuẩn bị server**
```bash
# Cài đặt Docker & Docker Compose
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Clone project
git clone https://github.com/your-username/cloud-vps-service.git
cd cloud-vps-service
```

2. **Deploy**
```bash
# Build và chạy
docker-compose up -d --build

# Kiểm tra status
docker-compose ps
```

3. **Cấu hình firewall** (nếu cần)
```bash
sudo ufw allow 3000
```

## 📁 Cấu trúc dự án

```
cloud-vps-service/
├── 📁 app/                    # Next.js App Router
│   ├── 📄 layout.tsx         # Root layout với metadata
│   ├── 📄 page.tsx           # Homepage
│   └── 📄 globals.css        # Global styles
├── 📁 components/             # React components
│   ├── 📁 ui/                # shadcn/ui components
│   ├── 📄 Hero.tsx           # Hero section
│   ├── 📄 Services.tsx       # Services section
│   ├── 📄 Profile.tsx        # Profile section
│   ├── 📄 Contact.tsx        # Contact section
│   └── 📄 Footer.tsx         # Footer component
├── 📁 lib/                   # Utility functions
│   └── 📄 utils.ts           # Common utilities
├── 📁 public/                # Static assets
├── 📄 Dockerfile             # Docker configuration
├── 📄 docker-compose.yml     # Docker Compose setup
├── 📄 next.config.js         # Next.js configuration
├── 📄 tailwind.config.ts     # Tailwind CSS config
├── 📄 tsconfig.json          # TypeScript config
├── 📄 package.json           # Dependencies
└── 📄 README.md              # Documentation
```

## 🔍 SEO & Performance

### SEO Features
- ✅ **Meta Tags** - Title, description, keywords
- ✅ **Open Graph** - Facebook, LinkedIn sharing
- ✅ **Twitter Cards** - Twitter sharing optimization
- ✅ **Structured Data** - Schema.org markup
- ✅ **Sitemap** - XML sitemap generation
- ✅ **Robots.txt** - Search engine crawling rules

### Performance Optimizations
- ✅ **Image Optimization** - Next.js Image component
- ✅ **Code Splitting** - Automatic code splitting
- ✅ **Static Generation** - Pre-rendered pages
- ✅ **Bundle Analysis** - Webpack bundle analyzer
- ✅ **Compression** - Gzip compression

### Lighthouse Scores
- 🟢 **Performance**: 95+
- 🟢 **Accessibility**: 100
- 🟢 **Best Practices**: 100
- 🟢 **SEO**: 100

## 🤝 Đóng góp

Chúng tôi hoan nghênh mọi đóng góp! Vui lòng đọc [CONTRIBUTING.md](CONTRIBUTING.md) để biết thêm chi tiết.

### Quy trình đóng góp
1. **Fork** repository
2. **Tạo branch** cho feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to branch (`git push origin feature/AmazingFeature`)
5. **Tạo Pull Request**

### Code Style
- Sử dụng **TypeScript** cho type safety
- Follow **ESLint** và **Prettier** rules
- Viết **meaningful commit messages**
- Thêm **comments** cho logic phức tạp

## 📞 Liên hệ

### 👨‍💻 Tác giả
**Hồ Việt Anh**
- 🏢 Chủ nhiệm HCM UTE Research on Technology and Innovation Club
- 📧 Email: [hovietanh@andyanh.id.vn]
- 🌐 Facebook: [HCM UTE RTIC]([https://www.facebook.com/hcmute.rtic](https://www.facebook.com/andy.anh17405/))
- 💼 LinkedIn: [Your LinkedIn Profile]

### 🏢 Tổ chức
**HCM UTE Research on Technology and Innovation Club**
- 🌐 Website: [Club Website]
- 📧 Email: [rtic@hcmute.fit]
- 📱 Facebook: [https://www.facebook.com/hcmute.rtic](https://www.facebook.com/hcmute.rtic)

### 💬 Hỗ trợ dịch vụ
- 📱 **Zalo**: 0949000030
- 📘 **Facebook**: Cloud VPS Service
- ⏰ **Hỗ trợ**: 24/7
- ⚡ **Phản hồi**: Trong vòng 5 phút

## 📄 License

Dự án này được phân phối dưới giấy phép **MIT License**. Xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) - Amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Lucide](https://lucide.dev/) - Beautiful icon library
- [Vercel](https://vercel.com/) - Deployment platform

---

<div align="center">
  <p>Made with ❤️ by <strong>Hồ Việt Anh</strong></p>
  <p>© 2024 Cloud VPS Service. All rights reserved.</p>
</div>
