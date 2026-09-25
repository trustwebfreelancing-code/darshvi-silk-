import React, { useState } from 'react';
import { X, Calendar, Video, Clock, CheckCircle, Sparkles } from 'lucide-react';

interface BespokeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BespokeModal: React.FC<BespokeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Ananya Sharma',
    phone: '+91 98765 43210',
    occasion: 'Bridal Trousseau',
    preferredDate: '2026-10-15',
    notes: 'Looking for a bespoke maroon zardozi lehenga and anarkali drape.'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#231916]/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#fff8f6] rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#775a19]/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#d9c1c2]/40 bg-[#fff1ec] flex items-center justify-between">
          <div>
            <span className="font-sans text-[10px] font-bold text-[#775a19] uppercase tracking-[0.2em] block">
              Atelier Appointment
            </span>
            <h2 className="font-serif text-xl font-normal text-[#3c0311]">
              Book Bespoke Tailoring Consultation
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#fdeae3] text-[#534344]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#fdeae3] text-[#775a19] flex items-center justify-center mx-auto border border-[#fed488]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-[#3c0311]">Appointment Requested</h3>
            <p className="font-sans text-xs text-[#534344] leading-relaxed">
              Our Senior Master Cutter will confirm your private virtual consultation for <strong>{formData.preferredDate}</strong> via WhatsApp and email.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs font-sans">
            <div className="p-3 bg-[#fdeae3] rounded-lg border border-[#775a19]/30 flex items-center gap-2 text-[#775a19]">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Complimentary 1-on-1 virtual session with our Varanasi &amp; Lucknow master drapists.</span>
            </div>

            <div>
              <label className="block text-[#534344] font-bold mb-1">Your Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#fff1ec] border border-[#d9c1c2] px-3 py-2 rounded-lg focus:outline-none focus:border-[#775a19]"
              />
            </div>

            <div>
              <label className="block text-[#534344] font-bold mb-1">Phone / WhatsApp Number</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#fff1ec] border border-[#d9c1c2] px-3 py-2 rounded-lg focus:outline-none focus:border-[#775a19]"
              />
            </div>

            <div>
              <label className="block text-[#534344] font-bold mb-1">Occasion / Celebration</label>
              <select
                value={formData.occasion}
                onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                className="w-full bg-[#fff1ec] border border-[#d9c1c2] px-3 py-2 rounded-lg focus:outline-none focus:border-[#775a19]"
              >
                <option value="Bridal Trousseau">Bridal Trousseau</option>
                <option value="Festive Royal Celebration">Festive Royal Celebration</option>
                <option value="Sangeet / Mehendi Silhouette">Sangeet / Mehendi Silhouette</option>
                <option value="Heirloom Wardrobe Styling">Heirloom Wardrobe Styling</option>
              </select>
            </div>

            <div>
              <label className="block text-[#534344] font-bold mb-1">Preferred Consultation Date</label>
              <input
                type="date"
                required
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full bg-[#fff1ec] border border-[#d9c1c2] px-3 py-2 rounded-lg focus:outline-none focus:border-[#775a19]"
              />
            </div>

            <div>
              <label className="block text-[#534344] font-bold mb-1">Specific Drape / Fit Notes</label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Mention silhouette preferences, body proportion requirements..."
                className="w-full bg-[#fff1ec] border border-[#d9c1c2] px-3 py-2 rounded-lg focus:outline-none focus:border-[#775a19]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#581825] hover:bg-[#3c0311] text-white py-3 rounded-lg font-sans text-xs uppercase tracking-wider font-bold shadow-md transition-all"
            >
              Request Royal Consultation
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
