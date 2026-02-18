import './css/style.css'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'
import Providers from '@/components/providers'

export const metadata = {
  title: 'France Experience - Стажировка, учёба, работа во Франции',
  description: 'Откройте для себя стажировку и сезонную работу во Франции с France Experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="font-inter antialiased bg-white text-gray-900 tracking-tight">
        <Providers>
          <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
            <Header />
            {children}
            <Banner />
          </div>
        </Providers>
      </body>
    </html>
  )
}
