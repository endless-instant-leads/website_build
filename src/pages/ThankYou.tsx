import { CircleCheckBig, Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export function ThankYou() {
  return (
    <main className="flex-grow flex items-center justify-center py-32">
      <div className="container-custom text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto card-premium p-12 shadow-2xl"
        >
          <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <CircleCheckBig className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Thank You!</h1>
          <p className="text-xl text-slate-600 mb-10">
            Your message has been received. We'll be in touch shortly to discuss how we can help you reach buyers the moment they search.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 mb-10">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Want to skip the wait?</h3>
            <p className="text-slate-600 mb-8">
              Schedule a brief 30-minute discovery call directly on our calendar to discuss your lead generation goals.
            </p>
            <a 
              href="https://calendly.com/endlessinstantleads/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary inline-flex items-center gap-2 py-4 px-8"
            >
              <Calendar className="w-5 h-5" />
              Book an Appointment on Calendly
            </a>
          </div>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-blue transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Homepage
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
