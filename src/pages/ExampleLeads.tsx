import { Terminal, Search, ShieldCheck, User, House, DollarSign, Heart, Check, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export function ExampleLeads() {
  const terminalLogs = [
    { time: '1:22 PM', text: '"solar installers phoenix"' },
    { time: '3:41 PM', text: '"emergency plumber phoenix"' },
    { time: '2:14 PM', text: '"hvac repair dallas"' },
    { time: '10:08 AM', text: '"debt consolidation atlanta"' },
    { time: '4:55 PM', text: '"personal injury lawyer miami"' },
    { time: '11:30 AM', text: '"roofing contractor denver"' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Example Leads</h1>
          <p className="text-xl text-slate-600">See the depth and precision of the data our platform delivers in real time.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="card-premium bg-slate-900 border-slate-800 shadow-2xl sticky top-32">
              <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-brand-blue" />
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Live Search Activity</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                </div>
              </div>
              <div className="p-6 font-mono text-xs space-y-4 h-[400px] overflow-hidden relative">
                {terminalLogs.map((log, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.15 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-brand-blue shrink-0">[{log.time}]</span>
                    <span className="text-slate-300">signal_detected:</span>
                    <span className="text-green-400">{log.text}</span>
                  </motion.div>
                ))}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center">
                  <Search className="w-4 h-4" />
                </div>
                Basic Lead Structure
              </h2>
              <div className="card-premium p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-slate-50">
                      <span className="text-xs text-slate-500">Search Phrase</span>
                      <span className="text-sm font-semibold text-slate-900">hvac repair dallas</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-slate-50">
                      <span className="text-xs text-slate-500">Time Detected</span>
                      <span className="text-sm font-semibold text-slate-900">2:14 PM today</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-slate-50">
                      <span className="text-xs text-slate-500">Location</span>
                      <span className="text-sm font-semibold text-slate-900">Dallas, TX</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-slate-50">
                      <span className="text-xs text-slate-500">Name</span>
                      <span className="text-sm font-semibold text-slate-900">Jane Doe</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-slate-50">
                      <span className="text-xs text-slate-500">Email</span>
                      <span className="text-sm font-semibold text-slate-900">jane@email.com</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-slate-50">
                      <span className="text-xs text-slate-500">Address</span>
                      <span className="text-sm font-semibold text-slate-900">Dallas, TX 75201</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                Advanced Data Interface
              </h2>
              <div className="card-premium overflow-hidden">
                <div className="bg-slate-50 p-4 border-b border-slate-200 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Premium Data Append</span>
                  <span className="px-2 py-0.5 rounded bg-blue-100 text-brand-blue text-[9px] font-bold uppercase">50+ Data Points</span>
                </div>
                <div className="p-8 grid md:grid-cols-2 gap-x-12 gap-y-10">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <User className="w-4 h-4" /> Demographic
                    </h4>
                    <ul className="space-y-2">
                      <li className="text-xs text-slate-600 flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> Age: 42</li>
                      <li className="text-xs text-slate-600 flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> Gender: Female</li>
                      <li className="text-xs text-slate-600 flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> Marital Status: Married</li>
                      <li className="text-xs text-slate-600 flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> Education: Graduate</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <House className="w-4 h-4" /> Property
                    </h4>
                    <ul className="space-y-2">
                      <li className="text-xs text-slate-600 flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> Homeowner: Yes</li>
                      <li className="text-xs text-slate-600 flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> Property Value: $450k - $500k</li>
                      <li className="text-xs text-slate-600 flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> Length of Residence: 8 years</li>
                      <li className="text-xs text-slate-600 flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> Square Footage: 2,400</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <DollarSign className="w-4 h-4" /> Financial
                    </h4>
                    <ul className="space-y-2">
                      <li className="text-xs text-slate-600 flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> HH Income: $125k+</li>
                      <li className="text-xs text-slate-600 flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> Credit Range: 720-760</li>
                      <li className="text-xs text-slate-600 flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> Net Worth: $500k+</li>
                      <li className="text-xs text-slate-600 flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> Investment Interest: High</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Heart className="w-4 h-4" /> Lifestyle
                    </h4>
                    <ul className="space-y-2">
                      <li className="text-xs text-slate-600 flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> Interests: Home Improvement</li>
                      <li className="text-xs text-slate-600 flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> Shopping: Premium Brands</li>
                      <li className="text-xs text-slate-600 flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> Travel: Domestic/Intl</li>
                      <li className="text-xs text-slate-600 flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> Pet Owner: Yes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-blue" /> Compliance & Verification
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                All leads are matched against our proprietary opt-in database. We verify email deliverability in real-time before delivery to ensure your outreach hits the inbox. Our data sourcing complies with all major privacy regulations.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                Real-Time Delivery
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="card-premium p-6">
                  <h4 className="font-bold text-slate-900 mb-2">Shared Lead Sheet</h4>
                  <p className="text-xs text-slate-500 mb-4">A live-updating Google Sheet or CSV export for your team.</p>
                  <div className="space-y-2">
                    <div className="h-2 bg-slate-100 rounded w-full"></div>
                    <div className="h-2 bg-slate-100 rounded w-full"></div>
                    <div className="h-2 bg-slate-100 rounded w-full"></div>
                  </div>
                </div>
                <div className="card-premium p-6">
                  <h4 className="font-bold text-slate-900 mb-2">Email Notification</h4>
                  <p className="text-xs text-slate-500 mb-4">Instant alerts the moment a lead is detected.</p>
                  <div className="border border-slate-100 rounded-lg p-3 bg-slate-50">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 rounded-full bg-brand-blue"></div>
                      <div className="h-2 bg-slate-200 rounded w-20"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded w-full mb-1"></div>
                    <div className="h-2 bg-slate-200 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Ready to see your own leads?</h2>
          <Link to="/#contact" className="btn-primary inline-block">Start the Conversation</Link>
        </div>
      </div>
    </section>
  );
}
