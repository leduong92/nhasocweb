import NavBar from "@/components/layout/navbar/nav-bar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../context/theme-provider";
import Footer from "@/components/layout/home/footer";
import GotoTop from "@/components/go-top";
import { Approvider } from "@/store/globalState";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Nhà Sóc Store | Official Website",
    description: "Nhà Sóc Store chuyên cung cấp các loại hạt dinh dưỡng, Hạt Mác ca, Macca, Hạt điều, Hạnh nhân, Granola, óc chó đỏ, óc chó vàng và các sản phẩm khác từ tây nguyên.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} `}>
                <Approvider>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                        <NavBar />
                        <main className="top-[70px] md:top-[85px] lg:top-[90px] xl:top-[100px] relative">{children}</main>
                        <Footer />
                        <GotoTop />
                    </ThemeProvider>
                </Approvider>
            </body>
        </html>
    );
}
