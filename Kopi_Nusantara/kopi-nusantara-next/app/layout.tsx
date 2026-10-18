import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "535250062 | Kornelius Yensen Lemuel",
  description:
    "Jelajahi menu kopi pilihan Nusantara, hitung pesanan, dan nikmati cita rasa kopi asli Indonesia.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
