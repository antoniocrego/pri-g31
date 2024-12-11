import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Logo from '@/app/ui/logo';
 
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
      </body>
    </html>
  );
}
