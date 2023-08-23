import NavBar from "@/components/navbar/nav-bar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./context/theme-provider";
import Footer from "@/components/footer/footer";
import GotoTop from "@/components/go-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Nhà Sóc Store | Official Website",
    description: "Nhà Sóc Store chuyên cung cấp các loại Granola, Hạt Mác ca, Macca, Hạt điều, Hạnh nhân và các sản phẩm khác từ tây nguyên.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <NavBar />
                    <main>{children}</main>
                    <Footer />
                    <GotoTop />
                </ThemeProvider>
            </body>
        </html>
    );
}
