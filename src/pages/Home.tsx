import { ArrowRight, Search, Zap, UserCheck, Mail, Database, ShieldCheck, MapPin, Clock, User, Phone, Info, House, Briefcase, Check, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from 'motion/react';

export function Home() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // We don't prevent default here because we want the form to actually submit to formsubmit.co
    // The redirection is handled by the _next hidden input field
  };

  return (
    <>
      <section className="pt-8 pb-20 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-6">
                Buyer Intent Intelligence Platform
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
                Reach buyers the moment they search for your service.
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                Our platform identifies people actively searching online and delivers their verified email contact in real time. These are what we call <span className="text-slate-900 font-semibold">Search-Triggered Prospects</span> — buyers already looking for the services you provide.
              </p>
              <p className="text-sm text-slate-500 mb-10 italic">
                Powered by AI, big data, and a private database of 250M+ verified consumers.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="#contact" className="btn-primary flex items-center gap-2">
                  Start the Conversation
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link className="btn-secondary" to="/example-leads">
                  See Example Leads
                </Link>
              </div>
              <p className="text-slate-900 font-medium">Capture the buyers your competitors never see.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="card-premium p-8 shadow-2xl shadow-blue-100/50">
                <h3 className="text-lg font-bold text-slate-900 mb-8 flex items-center gap-2">
                  <span className="w-2 h-6 bg-brand-blue rounded-full"></span>
                  How It Works
                </h3>
                <div className="space-y-8 relative">
                  <div className="absolute left-[19px] top-2 bottom-2 w-px bg-slate-100"></div>
                  <div className="flex gap-6 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                      <Search className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Customer searches online</h4>
                      <p className="text-sm text-slate-500">A prospect searches for your specific keywords.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Intent signal detected</h4>
                      <p className="text-sm text-slate-500">Our AI identifies high-intent search behavior.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                      <UserCheck className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Identity matched</h4>
                      <p className="text-sm text-slate-500">We match the signal to our 250M+ consumer database.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Verified email delivered</h4>
                      <p className="text-sm text-slate-500">You receive the contact data in real time.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="border-y border-slate-200 bg-white py-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-3 text-slate-500">
              <div className="text-brand-blue shrink-0">
                <Database className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium leading-tight">Powered by AI & Big Data</span>
            </div>
            <div className="flex items-center gap-3 text-slate-500">
              <div className="text-brand-blue shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium leading-tight">250M+ Verified Consumer Database</span>
            </div>
            <div className="flex items-center gap-3 text-slate-500">
              <div className="text-brand-blue shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium leading-tight">Real-Time Search Detection</span>
            </div>
            <div className="flex items-center gap-3 text-slate-500">
              <div className="text-brand-blue shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium leading-tight">Nationwide & Local Targeting</span>
            </div>
          </div>
        </div>
      </div>

      <div id="how-it-works">
        <section className="py-24 bg-brand-bg">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Most businesses miss the majority of buyers searching for their services.</h2>
              <p className="text-lg text-slate-600">
                Traditional marketing relies on people finding you. But for every one person who clicks your ad or fills out your form, dozens more are searching for exactly what you offer—and you never even know they exist.
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <div className="card-premium p-12 text-center shadow-xl shadow-slate-200/50">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-8">
                  <div className="flex flex-col items-center">
                    <span className="text-5xl font-bold text-slate-900 mb-2">100</span>
                    <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">people search</span>
                  </div>
                  <ArrowRight className="w-8 h-8 text-slate-300 hidden md:block" />
                  <div className="w-px h-8 bg-slate-200 md:hidden"></div>
                  <div className="flex flex-col items-center">
                    <span className="text-5xl font-bold text-brand-blue mb-2">2–3</span>
                    <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">contact you</span>
                  </div>
                  <ArrowRight className="w-8 h-8 text-slate-300 hidden md:block" />
                  <div className="w-px h-8 bg-slate-200 md:hidden"></div>
                  <div className="flex flex-col items-center">
                    <span className="text-5xl font-bold text-slate-400 mb-2">~97</span>
                    <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">remain unseen</span>
                  </div>
                </div>
                <div className="pt-8 border-t border-slate-100">
                  <p className="text-slate-600 font-medium italic">We bridge that gap by identifying the 97% you're currently missing.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-brand-blue font-bold text-sm uppercase tracking-widest mb-4 block">The Solution</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Introducing Search-Triggered Prospects</h2>
              <div className="space-y-6 text-lg text-slate-600 mb-12">
                <p>Search-Triggered Prospects are leads generated by real-time search intent. When someone searches for a specific keyword related to your service, our platform captures that signal instantly.</p>
                <p>We don't wait for them to find your website. We find them while they are in the middle of their search journey and deliver their verified contact information directly to you.</p>
              </div>
              <Link className="btn-secondary inline-flex items-center gap-2" to="/example-leads">
                See Example Leads
              </Link>
            </div>
          </div>
        </section>
      </div>

      <section className="py-24 bg-brand-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What a lead looks like</h2>
            <p className="text-slate-600">High-fidelity data delivered in a clean, actionable format.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-premium shadow-2xl mb-12"
            >
              <div className="bg-slate-900 p-4 flex items-center justify-between rounded-t-2xl">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-slate-400 font-mono ml-4">lead_data_v2.json</span>
                </div>
                <span className="text-[10px] text-brand-blue font-mono uppercase tracking-widest">Live Signal</span>
              </div>
              <div className="p-8 grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Search className="w-3 h-3" /> Search Activity
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-slate-50">
                      <span className="text-xs text-slate-500">Search phrase</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-900">hvac repair dallas</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-slate-50">
                      <span className="text-xs text-slate-500">Time detected</span>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400"><Clock className="w-3 h-3" /></span>
                        <span className="text-sm font-semibold text-slate-900">2:14 PM today</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-slate-50">
                      <span className="text-xs text-slate-500">Location</span>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400"><MapPin className="w-3 h-3" /></span>
                        <span className="text-sm font-semibold text-slate-900">Dallas, TX</span>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-10 mb-6 flex items-center gap-2">
                    <MapPin className="w-3 h-3" /> Address
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-slate-50">
                      <span className="text-xs text-slate-500">Full Address</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-900">Dallas, TX 75201</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <User className="w-3 h-3" /> Contact Information
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-slate-50">
                      <span className="text-xs text-slate-500">Name</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-900">Jane Doe</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-slate-50">
                      <span className="text-xs text-slate-500">Email</span>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400"><Mail className="w-3 h-3" /></span>
                        <span className="text-sm font-semibold text-slate-900">jane@email.com</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-slate-50">
                      <span className="text-xs text-slate-500">Phone</span>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400"><Phone className="w-3 h-3" /></span>
                        <span className="text-sm font-semibold text-slate-900">(214) 555-0123</span>
                        <span className="text-[10px] text-slate-400 italic">*when available</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="flex gap-3">
                      <Info className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Every lead begins with real search intent, matched against our private consumer database to ensure 100% accuracy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12 px-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Basic Information</h3>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-blue rounded-full"></div> Full Name & Verified Email</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-blue rounded-full"></div> Precise Search Keyword</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-blue rounded-full"></div> Geographic Location (City/Zip)</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-blue rounded-full"></div> Real-time Timestamp</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Advanced Information</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">Our platform can append up to 50+ additional data points for deeper segmentation and personalized outreach.</p>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-blue rounded-full"></div> Homeowner Status & Property Value</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-blue rounded-full"></div> Household Income & Credit Range</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-blue rounded-full"></div> Lifestyle & Interest Segments</li>
                </ul>
              </div>
            </div>
            <div className="mt-16 text-center">
              <p className="text-[10px] text-slate-400 max-w-2xl mx-auto mb-8">
                Phone numbers are provided without warranty or guarantee of accuracy or compliance. Users are responsible for ensuring all outreach via phone complies with TCPA, DNC, and all applicable local, state, and federal regulations.
              </p>
              <a href="#contact" className="btn-primary inline-block">Start the Conversation</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Who this works for</h2>
            <p className="text-slate-600">Industries where timing and intent are everything.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-premium p-8 hover:border-brand-blue transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-brand-blue group-hover:bg-blue-50 transition-colors mb-6">
                <House className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Home Services</h3>
              <ul className="space-y-3">
                <li className="text-slate-600 text-sm flex items-center gap-2"><div className="w-1 h-1 bg-slate-300 rounded-full"></div>HVAC & Plumbing</li>
                <li className="text-slate-600 text-sm flex items-center gap-2"><div className="w-1 h-1 bg-slate-300 rounded-full"></div>Roofing & Solar</li>
                <li className="text-slate-600 text-sm flex items-center gap-2"><div className="w-1 h-1 bg-slate-300 rounded-full"></div>Landscaping</li>
                <li className="text-slate-600 text-sm flex items-center gap-2"><div className="w-1 h-1 bg-slate-300 rounded-full"></div>Pest Control</li>
              </ul>
            </div>
            <div className="card-premium p-8 hover:border-brand-blue transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-brand-blue group-hover:bg-blue-50 transition-colors mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Professional Services</h3>
              <ul className="space-y-3">
                <li className="text-slate-600 text-sm flex items-center gap-2"><div className="w-1 h-1 bg-slate-300 rounded-full"></div>Legal & Attorneys</li>
                <li className="text-slate-600 text-sm flex items-center gap-2"><div className="w-1 h-1 bg-slate-300 rounded-full"></div>Financial Planning</li>
                <li className="text-slate-600 text-sm flex items-center gap-2"><div className="w-1 h-1 bg-slate-300 rounded-full"></div>Insurance</li>
                <li className="text-slate-600 text-sm flex items-center gap-2"><div className="w-1 h-1 bg-slate-300 rounded-full"></div>Real Estate</li>
              </ul>
            </div>
            <div className="card-premium p-8 hover:border-brand-blue transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-brand-blue group-hover:bg-blue-50 transition-colors mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Local Services</h3>
              <ul className="space-y-3">
                <li className="text-slate-600 text-sm flex items-center gap-2"><div className="w-1 h-1 bg-slate-300 rounded-full"></div>Medical & Dental</li>
                <li className="text-slate-600 text-sm flex items-center gap-2"><div className="w-1 h-1 bg-slate-300 rounded-full"></div>Auto Repair</li>
                <li className="text-slate-600 text-sm flex items-center gap-2"><div className="w-1 h-1 bg-slate-300 rounded-full"></div>Home Security</li>
                <li className="text-slate-600 text-sm flex items-center gap-2"><div className="w-1 h-1 bg-slate-300 rounded-full"></div>Moving Companies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Reach buyers while they are actively searching.</h2>
            <p className="text-slate-600">Stop competing for the same stale leads as everyone else.</p>
          </div>
          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-6 text-sm font-bold text-slate-400 uppercase tracking-widest">Feature</th>
                  <th className="p-6 text-sm font-bold text-slate-400 uppercase tracking-widest">Traditional lead sources</th>
                  <th className="p-6 text-sm font-bold text-brand-blue uppercase tracking-widest bg-blue-50/50">Our platform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-6 text-sm font-bold text-slate-900">Lead Discovery</td>
                  <td className="p-6 text-sm text-slate-500">
                    <div className="flex items-center gap-2"><X className="w-4 h-4 text-red-500" />Relies on website inquiries</div>
                  </td>
                  <td className="p-6 text-sm text-slate-900 bg-blue-50/30">
                    <div className="flex items-center gap-2 font-semibold"><Check className="w-4 h-4 text-green-500" />Identifies buyers mid-search</div>
                  </td>
                </tr>
                <tr>
                  <td className="p-6 text-sm font-bold text-slate-900">Data Freshness</td>
                  <td className="p-6 text-sm text-slate-500">
                    <div className="flex items-center gap-2"><X className="w-4 h-4 text-red-500" />Purchased data</div>
                  </td>
                  <td className="p-6 text-sm text-slate-900 bg-blue-50/30">
                    <div className="flex items-center gap-2 font-semibold"><Check className="w-4 h-4 text-green-500" />Real-time signals</div>
                  </td>
                </tr>
                <tr>
                  <td className="p-6 text-sm font-bold text-slate-900">Targeting Precision</td>
                  <td className="p-6 text-sm text-slate-500">
                    <div className="flex items-center gap-2"><X className="w-4 h-4 text-red-500" />Generic leads</div>
                  </td>
                  <td className="p-6 text-sm text-slate-900 bg-blue-50/30">
                    <div className="flex items-center gap-2 font-semibold"><Check className="w-4 h-4 text-green-500" />Keyword + geo targeted</div>
                  </td>
                </tr>
                <tr>
                  <td className="p-6 text-sm font-bold text-slate-900">Verification</td>
                  <td className="p-6 text-sm text-slate-500">
                    <div className="flex items-center gap-2"><X className="w-4 h-4 text-red-500" />Stale contacts</div>
                  </td>
                  <td className="p-6 text-sm text-slate-900 bg-blue-50/30">
                    <div className="flex items-center gap-2 font-semibold"><Check className="w-4 h-4 text-green-500" />Verified in real time</div>
                  </td>
                </tr>
                <tr>
                  <td className="p-6 text-sm font-bold text-slate-900">Exclusivity</td>
                  <td className="p-6 text-sm text-slate-500">
                    <div className="flex items-center gap-2"><X className="w-4 h-4 text-red-500" />Shared leads</div>
                  </td>
                  <td className="p-6 text-sm text-slate-900 bg-blue-50/30">
                    <div className="flex items-center gap-2 font-semibold"><Check className="w-4 h-4 text-green-500" />Unique to your targeting</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How to get started</h2>
            <p className="text-slate-600">A simple, three-step process to start receiving leads.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card-premium p-8 relative">
              <span className="absolute top-6 right-8 text-6xl font-black text-slate-50 select-none">1</span>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold mb-6">1</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Tell us about your business</h3>
                <p className="text-slate-600 text-sm leading-relaxed">We identify the specific keywords and geographic areas where your buyers are searching.</p>
              </div>
            </div>
            <div className="card-premium p-8 relative">
              <span className="absolute top-6 right-8 text-6xl font-black text-slate-50 select-none">2</span>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold mb-6">2</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">We configure the platform</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Our team sets up your custom targeting parameters and connects your delivery method.</p>
              </div>
            </div>
            <div className="card-premium p-8 relative">
              <span className="absolute top-6 right-8 text-6xl font-black text-slate-50 select-none">3</span>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold mb-6">3</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Leads begin flowing</h3>
                <p className="text-slate-600 text-sm leading-relaxed">You start receiving verified Search-Triggered Prospects in real time as they search.</p>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto p-8 bg-slate-900 rounded-2xl text-white">
            <h4 className="text-lg font-bold mb-4">You remain in control</h4>
            <p className="text-slate-400 text-sm leading-relaxed">You remain in control of your targeting, your keywords, and your lead volume. Our platform is designed to be a flexible, scalable engine for your business growth.</p>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 bg-brand-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Everything you need to know about the platform.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="card-premium border-none">
                <AccordionTrigger className="px-6 py-6 hover:no-underline font-bold text-slate-900 hover:text-brand-blue transition-colors">
                  How are leads generated?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                  Leads are generated through real-time search intent detection. When a consumer searches for specific keywords related to your service, our platform identifies the signal, matches it to our database of 250M+ verified consumers, and delivers their contact information instantly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="card-premium border-none">
                <AccordionTrigger className="px-6 py-6 hover:no-underline font-bold text-slate-900 hover:text-brand-blue transition-colors">
                  Are they scraped?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                  No, our leads are not scraped. We use a proprietary opt-in database of over 250 million verified consumers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="card-premium border-none">
                <AccordionTrigger className="px-6 py-6 hover:no-underline font-bold text-slate-900 hover:text-brand-blue transition-colors">
                  Can I control the volume?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                  Yes, you can set daily, weekly, or monthly caps on the number of leads you receive to match your team's capacity.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="card-premium border-none">
                <AccordionTrigger className="px-6 py-6 hover:no-underline font-bold text-slate-900 hover:text-brand-blue transition-colors">
                  How do I manage the platform?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                  You will have access to a dedicated account manager and a dashboard where you can view your leads, adjust targeting, and monitor performance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="card-premium border-none">
                <AccordionTrigger className="px-6 py-6 hover:no-underline font-bold text-slate-900 hover:text-brand-blue transition-colors">
                  How is the data verified?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                  We verify all contact information in real-time before delivery, ensuring high deliverability rates for emails and accurate phone numbers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="card-premium border-none">
                <AccordionTrigger className="px-6 py-6 hover:no-underline font-bold text-slate-900 hover:text-brand-blue transition-colors">
                  How are leads delivered?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                  Leads can be delivered via a live-updating Google Sheet, CSV export, email notifications, or directly integrated into your CRM via API or Zapier.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="card-premium border-none">
                <AccordionTrigger className="px-6 py-6 hover:no-underline font-bold text-slate-900 hover:text-brand-blue transition-colors">
                  Who benefits most from this?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                  Businesses in high-value service industries like Home Services, Professional Services, and Local Services see the highest ROI from our platform.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="btn-primary">Start the Conversation</a>
              <Link className="btn-secondary" to="/example-leads">See Example Leads</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Reach buyers the moment they begin searching.</h2>
              <p className="text-lg text-slate-600 mb-8">Tell us about your business and your target audience. We'll show you exactly how many Search-Triggered Prospects are active in your area right now.</p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue shrink-0 font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Consultation</h4>
                    <p className="text-sm text-slate-500">We discuss your goals and target keywords.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue shrink-0 font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Custom Strategy</h4>
                    <p className="text-sm text-slate-500">We build a targeting plan for your specific market.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-premium p-8 shadow-2xl shadow-slate-200/50">
              <form action="https://formsubmit.co/contact@endlessinstantleads.com" method="POST" onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="_next" value="https://endless-instant-leads-508394260723.us-west1.run.app/thank-you" />
                <input type="hidden" name="_captcha" value="false" />
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase">Name</label>
                    <input required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all" placeholder="John Doe" type="text" name="name" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase">Email</label>
                    <input required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all" placeholder="john@example.com" type="email" name="email" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase">Business Name</label>
                    <input required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all" placeholder="Acme Corp" type="text" name="business_name" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase">Website</label>
                    <input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all" placeholder="example.com" type="text" name="website" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase">Service Type</label>
                    <select name="service_type" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all bg-white">
                      <option value="Home Services">Home Services</option>
                      <option value="Professional Services">Professional Services</option>
                      <option value="Local Services">Local Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase">Target Locations</label>
                    <input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all" placeholder="e.g. Dallas, TX" type="text" name="target_locations" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase">Message</label>
                  <textarea name="message" rows={4} className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full btn-primary py-4 flex items-center justify-center gap-2">Start the Conversation</button>
              </form>
              <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                <p className="text-sm text-slate-500">Prefer email? <a href="mailto:contact@endlessinstantleads.com" className="text-brand-blue font-medium hover:underline">contact@endlessinstantleads.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
