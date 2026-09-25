import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Truck, CreditCard, Banknote, Sparkles } from 'lucide-react';
import { CartItem, CheckoutDetails, PlacedOrder } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  discount: number;
  giftWrap: boolean;
  giftMessage?: string;
  onOrderComplete: (order: PlacedOrder) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  discount,
  giftWrap,
  giftMessage,
  onOrderComplete
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<CheckoutDetails>({
    fullName: 'Ananya Sharma',
    email: 'ananya.sharma@example.com',
    phone: '+91 98765 43210',
    address: 'Flat 402, Royal Residency, Defence Colony',
    apartment: 'Tower B',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110024',
    paymentMethod: 'upi',
    giftWrap,
    giftMessage
  });

  const [orderPlaced, setOrderPlaced] = useState<PlacedOrder | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = subtotal >= 5000 || subtotal === 0 ? 0 : 450;
  const total = subtotal - discount + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      const orderNum = 'DAR-' + Math.floor(100000 + Math.random() * 900000);
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + 4);

      const placed: PlacedOrder = {
        orderId: orderNum,
        items: [...cartItems],
        subtotal,
        discount,
        shipping,
        total,
        shippingDetails: formData,
        date: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }),
        estimatedDelivery: deliveryDate.toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })
      };

      setOrderPlaced(placed);
      setSubmitting(false);
      onOrderComplete(placed);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#231916]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#fff8f6] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#775a19]/30 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#d9c1c2]/40 bg-[#fff1ec] flex items-center justify-between">
          <div>
            <h2 className="font-serif text-xl font-normal text-[#3c0311]">
              {orderPlaced ? 'Order Confirmed' : 'Bespoke Checkout & Delivery'}
            </h2>
            <p className="font-sans text-[11px] text-[#775a19] uppercase tracking-wider font-semibold">
              DARSHVI Royal Atelier • White Glove Pan-India Delivery
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#fdeae3] text-[#534344]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {orderPlaced ? (
          /* Order Confirmation Screen */
          <div className="p-6 md:p-8 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#fdeae3] text-[#775a19] flex items-center justify-center mx-auto border border-[#fed488]">
              <CheckCircle className="w-9 h-9" />
            </div>

            <div>
              <span className="font-sans text-xs font-bold text-[#775a19] uppercase tracking-widest block mb-1">
                Imperial Heritage Attire
              </span>
              <h3 className="font-serif text-2xl text-[#3c0311]">
                Thank you, {orderPlaced.shippingDetails.fullName}
              </h3>
              <p className="font-sans text-xs text-[#534344] mt-1">
                Your bespoke creation order has been successfully registered with our master atelier.
              </p>
            </div>

            <div className="bg-[#fff1ec] p-4 rounded-xl border border-[#d9c1c2]/40 text-left space-y-3 font-sans text-xs">
              <div className="flex justify-between items-center border-b border-[#d9c1c2]/30 pb-2">
                <span className="text-[#867274]">Order Reference:</span>
                <span className="font-mono font-bold text-[#3c0311] text-sm">{orderPlaced.orderId}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#d9c1c2]/30 pb-2">
                <span className="text-[#867274]">Estimated Atelier Dispatch:</span>
                <span className="font-bold text-[#231916]">{orderPlaced.estimatedDelivery}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#d9c1c2]/30 pb-2">
                <span className="text-[#867274]">Payment Mode:</span>
                <span className="font-bold uppercase text-[#775a19]">{orderPlaced.shippingDetails.paymentMethod}</span>
              </div>
              <div className="flex justify-between items-center pt-1 font-bold text-[#3c0311] text-sm">
                <span>Total Amount Paid / Due:</span>
                <span className="tabular-nums">₹{orderPlaced.total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="p-3.5 bg-[#fdeae3] rounded-lg border border-[#775a19]/30 text-xs text-[#534344] flex items-center gap-2 text-left">
              <Sparkles className="w-5 h-5 text-[#775a19] shrink-0" />
              <span>
                Our concierge master tailor will reach out within 24 hours to review your drape specifications and confirm trial dates.
              </span>
            </div>

            <button
              onClick={onClose}
              className="bg-[#3c0311] text-white px-8 py-3 rounded-lg font-sans text-xs uppercase tracking-wider font-bold shadow-md hover:bg-[#581825] transition-all"
            >
              Continue Exploring Darshvi
            </button>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Delivery Details */}
            <div>
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#3c0311] mb-3 flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#775a19]" />
                1. Delivery &amp; Client Address
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-[#534344] font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#fff1ec] border border-[#d9c1c2] px-3 py-2 rounded-lg font-sans focus:outline-none focus:border-[#775a19]"
                  />
                </div>
                <div>
                  <label className="block text-[#534344] font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#fff1ec] border border-[#d9c1c2] px-3 py-2 rounded-lg font-sans focus:outline-none focus:border-[#775a19]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[#534344] font-medium mb-1">Email for Atelier Tracking</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#fff1ec] border border-[#d9c1c2] px-3 py-2 rounded-lg font-sans focus:outline-none focus:border-[#775a19]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[#534344] font-medium mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-[#fff1ec] border border-[#d9c1c2] px-3 py-2 rounded-lg font-sans focus:outline-none focus:border-[#775a19]"
                  />
                </div>
                <div>
                  <label className="block text-[#534344] font-medium mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#fff1ec] border border-[#d9c1c2] px-3 py-2 rounded-lg font-sans focus:outline-none focus:border-[#775a19]"
                  />
                </div>
                <div>
                  <label className="block text-[#534344] font-medium mb-1">Postal Code (PIN Code)</label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full bg-[#fff1ec] border border-[#d9c1c2] px-3 py-2 rounded-lg font-sans focus:outline-none focus:border-[#775a19]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="pt-4 border-t border-[#d9c1c2]/40">
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#3c0311] mb-3 flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-[#775a19]" />
                2. Select Royal Payment Method
              </h4>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <label className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                  formData.paymentMethod === 'upi' ? 'bg-[#fdeae3] border-[#775a19]' : 'bg-[#fff1ec] border-[#d9c1c2]'
                }`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                    className="text-[#581825]"
                  />
                  <div>
                    <span className="font-bold text-[#3c0311] block">Instant UPI</span>
                    <span className="text-[10px] text-[#534344]">GPay, PhonePe, Paytm</span>
                  </div>
                </label>

                <label className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                  formData.paymentMethod === 'card' ? 'bg-[#fdeae3] border-[#775a19]' : 'bg-[#fff1ec] border-[#d9c1c2]'
                }`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className="text-[#581825]"
                  />
                  <div>
                    <span className="font-bold text-[#3c0311] block">Cards</span>
                    <span className="text-[10px] text-[#534344]">Visa, Mastercard, Amex</span>
                  </div>
                </label>

                <label className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                  formData.paymentMethod === 'cod' ? 'bg-[#fdeae3] border-[#775a19]' : 'bg-[#fff1ec] border-[#d9c1c2]'
                }`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                    className="text-[#581825]"
                  />
                  <div>
                    <span className="font-bold text-[#3c0311] block flex items-center gap-1">
                      <Banknote className="w-3.5 h-3.5 text-[#775a19]" /> Cash on Delivery
                    </span>
                    <span className="text-[10px] text-[#534344]">Pay upon doorstep inspection</span>
                  </div>
                </label>

                <label className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                  formData.paymentMethod === 'netbanking' ? 'bg-[#fdeae3] border-[#775a19]' : 'bg-[#fff1ec] border-[#d9c1c2]'
                }`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="netbanking"
                    checked={formData.paymentMethod === 'netbanking'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'netbanking' })}
                    className="text-[#581825]"
                  />
                  <div>
                    <span className="font-bold text-[#3c0311] block">Net Banking</span>
                    <span className="text-[10px] text-[#534344]">HDFC, ICICI, SBI &amp; more</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Summary */}
            <div className="p-4 bg-[#fff1ec] rounded-xl border border-[#d9c1c2]/40 space-y-2 text-xs font-sans">
              <div className="flex justify-between text-[#534344]">
                <span>Items ({cartItems.length}):</span>
                <span className="tabular-nums font-bold text-[#231916]">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-700">
                  <span>Royal Discount:</span>
                  <span className="tabular-nums font-bold">-₹{discount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between text-[#534344]">
                <span>Shipping:</span>
                <span className="font-bold text-[#775a19]">
                  {shipping === 0 ? 'Complimentary' : `₹${shipping}`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#3c0311] pt-2 border-t border-[#d9c1c2]/30">
                <span>Grand Total:</span>
                <span className="tabular-nums text-base">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#581825] hover:bg-[#3c0311] text-white py-3.5 rounded-lg font-sans text-xs uppercase tracking-wider font-bold shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-70"
            >
              {submitting ? (
                <span>Registering Imperial Order...</span>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4 text-[#fed488]" />
                  <span>Confirm Order &amp; Reserve Drape • ₹{total.toLocaleString('en-IN')}</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
