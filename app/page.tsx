import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutServices from '@/components/AboutServices'
import WhyUsTemp from '@/components/WhyUsTemp'
import Zones from '@/components/Zones'
import PartnersCarousel from '@/components/PartnersCarousel'
import ContactNew from '@/components/ContactNew'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutServices />
      <WhyUsTemp />
      <Zones />
      <PartnersCarousel />
      <ContactNew />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
