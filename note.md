# Hướng dẫn cài đặt và sử dụng shadcn UI.

## 1. Cài đặt và khởi tạo dự án với vite.

```
npm create vite@latest
```

Tuỳ chọn khi tạo dự án:

- Project name: Tên dự án
- Select a framework: React
- Select a variant: TypeScript+SWC

## 2. Cài đặt tailwindcss:

```
npm install -D tailwindcss postcss autoprefixer
```

Tiếp theo, tạo các file cấu hình bằng câu lệnh:

```
npx tailwindcss init -p
```

## 3. Cấu hình tailwindcss:

- Trong `tsconfig.json`, thêm vào object compilerOptions đoạn code sau:

```json
 "baseUrl": ".",
  "paths": {
    "@/*": [
      "./src/*"
    ]
  }
```

- Mục đích của đoạn cấu hình này là để từ nay thay vì chúng ta import file với đường dẫn tương đối như `../../src/pages/file_name` thì chúng ta sẽ dùng `@/pages/file_name`.

## 4. Update vite.config.ts để sử dụng typescript và tailwindcss:

- Đoạn mã này giúp sử dụng path trong ts-react mà không gặp lỗi.

```json
npm i -D @types/node
```

- Trong vite.config.ts, bổ sung đoạn code sau:

```json
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

## 5. Cấu hình tailwindcss:

```
npx shadcn-ui@latest init
```

- Bạn sẽ được hỏi một số câu hỏi, hãy trả lời theo ý muốn của bạn.

```
Would you like to use TypeScript (recommended)? no / yes
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Where is your global CSS file? › › src/index.css
Do you want to use CSS variables for colors? › no / yes
Where is your tailwind.config.js located? › tailwind.config.js
Configure the import alias for components: › @/components
Configure the import alias for utils: › @/lib/utils
Are you using React Server Components? › no / yes (no)
```

## 6. Sử dụng shadcn-ui:

- Thêm 1 component shadcn
