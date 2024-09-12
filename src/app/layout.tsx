import "./globals.css";
import ThemeToggle from "@/components/themeToggle";



export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className="bg-white text-black dark:bg-gray-900 dark:text-white">
        <ThemeToggle/>
        {children}
        </body>
        </html>
    );
}
