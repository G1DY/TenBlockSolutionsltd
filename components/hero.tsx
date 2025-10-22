import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200&query=modern%20office%20buildings%20financial%20district')] bg-cover bg-center opacity-40" />

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

import { MessageCircle } from "lucide-react";

      {/* WhatsApp Widget */}
      <div className="fixed bottom-8 right-8 z-40">
        <button className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg transition">
          <MessageCircle className="w-7 h-7" />
        </button>
      </div>
    </section>
  )
}
