import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Logo from '@/app/ui/logo';
import Link from 'next/link';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Stack Overflow Search Engine</title>
      </head>
      <body className={`${inter.className} antialiased`}>
        <main className="flex min-h-screen flex-col p-6">
          <div className="flex h-20 shrink-0 items-center justify-center rounded-lg bg-orange-200 p-4 md:h-52">
            <a href={'/'}>
              <Logo />
            </a>
          </div>
          {children}
        </main>
        <footer className="flex p-4 bg-orange-200">
          <div className="flex justify-between w-full">
            <span>Group 31, December 2024</span>
            <span><Link href="/">Home</Link></span>
            <span><Link href="/about">About</Link></span>
          </div>
        </footer>
      </body>
    </html>
  );
}
