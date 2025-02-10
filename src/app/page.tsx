'use client'
import Header from '../app/components/Header'
import AnimatedSection from '../app/components/AnimatedSection'
import { motion } from 'framer-motion'
import { CheckIcon, SparklesIcon, CurrencyDollarIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      <Header />

      <main className="container mx-auto px-6">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-8"
          >
            Welcome to Lando
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Peruse a landing page with cool animations, modern aesthetics and non functional buttons.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Get Started
          </motion.button>
        </section>

        {/* Features Section */}
        <AnimatedSection className="py-20" id="features">
          <h2 className="text-4xl font-bold text-center mb-16">Features</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: SparklesIcon, title: "Animations", description: "They're here and they're pretty neat" },
              { icon: GlobeAltIcon, title: "Global", description: "You can run this code anywhere in the world believe it or not" },
              { icon: CurrencyDollarIcon, title: "Affordable", description: "It's literally free, doesn't get more affordable than that" },
            ].map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <Icon className="h-12 w-12 text-purple-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Pricing Section */}
        <AnimatedSection className="py-20 bg-white/50 backdrop-blur-sm" id="pricing">
          <h2 className="text-4xl font-bold text-center mb-16">Pricing</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { tier: "Starter", price: "0", features: ["Basic features", "Basic stuff", "What do you expect", "It's free"] },
              { tier: "Pro", price: "99", features: ["Advanced features", "Unlimited internet", "10 pet lions", "Turkey sandwich"] },
              { tier: "Enterprise", price: "Custom", features: ["Custom solutions", "Custom team", "Custom costume", "Custom sandwich"] },
            ].map((plan, i) => (
              <motion.div
                key={plan.tier}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-gradient-to-b from-purple-50 to-white rounded-2xl shadow-lg border border-purple-100"
              >
                <h3 className="text-2xl font-bold mb-4">{plan.tier}</h3>
                <div className="text-4xl font-bold mb-8">
                  ${plan.price}<span className="text-lg text-gray-500">/mo</span>
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors">
                  Choose Plan
                </button>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection className='py-20 text-center ' id='about'>
          <h2 className="text-4xl font-bold mb-8" >About</h2>
          <p className='text-xl mx-8 md:mx-16 lg:mx-24 xl:mx-48'>
            This is a template for a responsive landing page with some of the typical sections most people expect out of a business with an online front.
            The design is simple and clean, the code itself allows for easy and quick modification.
            More sections with unique animations will be added in the future.
          </p>
          
        </AnimatedSection>
      
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Lando</h4>
              <p className="text-gray-400">Landing on pages since 2025</p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Product</h5>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Company</h5>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Newsletter</h5>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg bg-gray-800 text-white flex-1"
                />
                <button className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Lando. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}