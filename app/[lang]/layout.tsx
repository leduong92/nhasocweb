import NavBar from "@/components/layout/navbar/nav-bar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Approvider } from "@/store/globalState";
import { Locale, i18n } from "@/i18n.config";
import { ThemeProvider } from "@/context/theme-provider";

import "./globals.css";
import GotoTop from "@/components/go-top";
import Footer from "@/components/layout/home/footer";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = process.env.NEXT_PUBLIC_URL
    ? `${process.env.NEXT_PUBLIC_URL}`
    : 'http://localhost:3000';

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: "Nhà Sóc Store | Official Website",
    description: "Nhà Sóc Store chuyên cung cấp các loại hạt dinh dưỡng, Hạt Mác ca, Macca, Hạt điều, Hạnh nhân, Granola, óc chó đỏ, óc chó vàng và các sản phẩm khác từ tây nguyên.",
    robots: {
        follow: true,
        index: true
    },
};

export async function generateStaticParams() {
    return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { lang: Locale }
}) {
    return (
        <html lang={params.lang} suppressHydrationWarning>
            <body className={`${inter.className} `}>
                <Approvider>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                        <NavBar lang={params.lang} />
                        <main className="top-[70px] md:top-[85px] lg:top-[90px] xl:top-[100px] relative">{children}</main>
                        <Footer lang={params.lang} />
                        <GotoTop />
                    </ThemeProvider>
                </Approvider>
            </body>
        </html>
    );
}
