import { Card } from "@/components/ui/card"

const services = [
  {
    title: "OTC Trading",
    description: "Execute large trades with our personalised over-the-counter services.",
    icon: "💰",
  },
  {
    title: "Stablecoin Settlement",
    description: "Convert fiat to stablecoins and lock with speed and security for instant settlements.",
    icon: "🪙",
  },
  {
    title: "Cross-Border FX",
    description: "Seamless foreign exchange for international transactions, fast and cost-efficient.",
    icon: "✈️",
  },
]

export default function Services() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">Premium Trading Solutions</h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 bg-gray-50 border-0 hover:shadow-lg transition">
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <a href="#" className="text-primary font-semibold text-sm hover:underline flex items-center gap-2">
                LEARN MORE
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
