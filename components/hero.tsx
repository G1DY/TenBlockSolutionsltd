import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=600&width=1200&query=modern%20office%20buildings%20financial%20district)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-2xl">
          {/* Subtitle */}
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-6">
            Innovative Financial Solutions
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Trusted Partner for OTC and Cross-Border FX.
          </h1>

          {/* CTA Button */}
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-base font-semibold">
            CONTACT US
          </Button>
        </div>
      </div>

      {/* WhatsApp Widget */}
      <div className="fixed bottom-8 right-8 z-40">
        <button className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg transition">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.335 1.236-3.356 2.258-1.688 1.694-2.637 3.957-2.637 6.383 0 1.564.32 3.085.94 4.516l-.999 3.648 3.742-.981c1.305.756 2.814 1.176 4.514 1.176h.003c5.369 0 9.73-4.355 9.73-9.724 0-2.592-.981-5.023-2.763-6.851-1.782-1.828-4.149-2.833-6.666-2.833z" />
          </svg>
        </button>
      </div>
    </section>
  )
}
