# 1. Cài nodejs:

- Check version:

```
npm -v
node -v
```

# 2. Một số lỗi thường gặp:

- Lỗi gõ npm -v trong powershell bị lỗi ExcutionPolicy, xử lý bằng cách nhập lệnh sau vào powershell:

```
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

- Lỗi gõ npm -v nhưng không hiện version, xử lý bằng cách cài lại nodejs từ trang chủ. -> vào thanh search gõ cmd để mở cửa sổ cmd, sau đó nhập

```
npm install -g npm
```

- Sau đó tắt terminal trong vscode và mở lại để kiểm tra lại version.

# 3. Cài đặt dự án:

```
npm create vite
```

- Có một số tùy chọn sau:
- chọn (y) để bắt đầu cài đặt.
- chọn framework là react
- chọn variant là Javascript + SWC
- Sau khi cài xong, đứng tại thư mục gốc dự án để chạy lệnh:

  ```
    npm install
    npm run dev
  ```

- Bạn sẽ thấy dự án ở: http://localhost:5173
