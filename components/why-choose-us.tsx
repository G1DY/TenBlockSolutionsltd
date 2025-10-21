export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 border-4 border-white rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Why choose us</h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src="/trading-dashboard-mobile-phone-financial-app.jpg" alt="Trading Dashboard" className="w-full h-full object-cover" />
          </div>

          {/* Right: Features */}
          <div className="space-y-8">
            <div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Deep Liquidity</h3>
                  <p className="text-white/80 leading-relaxed">
                    Access extensive global markets with high-volume capacity, delivering tight spreads, rapid
                    execution, and reliable pricing for trades of any size.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Trusted Expertise</h3>
                  <p className="text-white/80 leading-relaxed">
                    Work with a dedicated team experienced in OTC trading and global FX, providing expert guidance and
                    reliable support for every transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
