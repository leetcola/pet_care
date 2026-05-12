import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "泡泡尾巴宠物洗护店",
  description: "干净、温柔、可追踪的犬猫洗护体验。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
