import Header from '@/components/Header'
import Services from '@/components/Services'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20"> {/* Add padding top for fixed header */}
        <Services />
      </div>
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}