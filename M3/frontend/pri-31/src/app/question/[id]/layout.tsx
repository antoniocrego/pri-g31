export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{JSON.stringify(children)}</body>
    </html>
  )
}
