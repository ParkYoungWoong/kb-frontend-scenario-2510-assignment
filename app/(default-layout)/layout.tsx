import Header from '@/components/Header'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
  posterModal: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
    </>
  )
}
