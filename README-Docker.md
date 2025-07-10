# Docker Deployment Guide

## Cách chạy ứng dụng bằng Docker

### 1. Yêu cầu hệ thống
- Docker Engine 20.10+
- Docker Compose 2.0+
- Port 3000 available

### 2. Build và chạy ứng dụng

#### Sử dụng Docker Compose (Khuyến nghị)
```bash
# Build và chạy container
docker-compose up -d --build

# Xem logs
docker-compose logs -f

# Dừng container
docker-compose down

# Restart container
docker-compose restart
```

#### Sử dụng Docker commands
```bash
# Build image
docker build -t cloud-vps-website .

# Chạy container
docker run -d \
  --name cloud-vps-website \
  -p 3000:3000 \
  --restart unless-stopped \
  cloud-vps-website

# Xem logs
docker logs -f cloud-vps-website

# Dừng container
docker stop cloud-vps-website
docker rm cloud-vps-website
```

### 3. Truy cập ứng dụng
- Website sẽ chạy tại: `http://your-server-ip:3000`
- Hoặc: `http://localhost:3000` nếu chạy local

### 4. Quản lý container

#### Kiểm tra trạng thái
```bash
docker-compose ps
```

#### Update ứng dụng
```bash
# Pull code mới
git pull

# Rebuild và restart
docker-compose up -d --build
```

#### Xem resource usage
```bash
docker stats cloud-vps-website
```

### 5. Troubleshooting

#### Kiểm tra logs
```bash
docker-compose logs nextjs-app
```

#### Vào trong container để debug
```bash
docker exec -it cloud-vps-website sh
```

#### Kiểm tra health check
```bash
docker inspect cloud-vps-website | grep -A 10 Health
```

### 6. Production Notes

- Container sẽ tự động restart khi server reboot
- Health check được cấu hình để monitor ứng dụng
- Sử dụng multi-stage build để optimize image size
- Non-root user để tăng security

### 7. Cấu hình Firewall (nếu cần)

```bash
# Mở port 3000
sudo ufw allow 3000

# Hoặc chỉ cho phép từ specific IP
sudo ufw allow from YOUR_IP to any port 3000
```