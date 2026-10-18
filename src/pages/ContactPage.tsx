import React, { useState, useEffect } from 'react';
import { BOUTIQUE_INFO } from '../data/boutiqueData';
import { BoutiqueEnquiry } from '../../server';
import {
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  Sparkles,
  Inbox
} from 'lucide-react';

interface ContactPageProps {
  prefilledMessage?: string;
  prefilledCategory?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  prefilledMessage = '',
  prefilledCategory = 'Modest Wear Consultation',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    category: prefilledCategory || 'Modest Wear Consultation',
    message: prefilledMessage || '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    referenceId?: string;
    message: string;
    timestamp?: string;
  } | null>(null);

  // Real backend query log
  const [receivedEnquiries, setReceivedEnquiries] = useState<BoutiqueEnquiry[]>([]);
  const [showEnquiryLog, setShowEnquiryLog] = useState(false);

  useEffect(() => {
    if (prefilledMessage) {
      setFormData((prev) => ({ ...prev, message: prefilledMessage }));
    }
    if (prefilledCategory) {
      setFormData((prev) => ({ ...prev, category: prefilledCategory }));
    }
  }, [prefilledMessage, prefilledCategory]);

  const fetchEnquiries = async () => {
    try {
      const res = await fetch('/api/enquiries');
      if (res.ok) {
        const data = await res.json();
        setReceivedEnquiries(data.enquiries || []);
      }
    } catch {
      // Ignored for quiet polling
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your full name (at least 2 characters).';
    }

    const contactTrimmed = formData.contact.trim();
    if (!contactTrimmed) {
      newErrors.contact = 'Please enter your phone number or email address.';
    } else {
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactTrimmed);
      const isPhone = /^[\d+()\-\s]{7,25}$/.test(contactTrimmed);
      if (!isEmail && !isPhone) {
        newErrors.contact = 'Please provide a valid email format or phone number.';
      }
    }

    if (!formData.category) {
      newErrors.category = 'Please choose an enquiry category.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      newErrors.message = 'Please provide details for your enquiry (at least 5 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionResult(null);

    if (!validate()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Server rejected the enquiry. Please verify the fields.');
      }

      setSubmissionResult({
        success: true,
        referenceId: data.referenceId,
        message: data.message || 'Thank you! Your enquiry has been received by Jhalak Boutique.',
        timestamp: data.timestamp,
      });

      // Reset form on success
      setFormData({
        name: '',
        contact: '',
        category: 'Modest Wear Consultation',
        message: '',
      });
      setErrors({});

      // Refresh real enquiry log
      fetchEnquiries();
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred.';
      setSubmissionResult({
        success: false,
        message: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#b8734e] font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Tajpura Boutique Enquiry</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#183526] font-normal tracking-tight">
          Connect with Jhalak Boutique
        </h1>
        <p className="text-sm sm:text-base text-[#3d5246] leading-relaxed">
          We welcome questions regarding modest tailoring, everyday kurtas, or custom styling.
          Please submit your enquiry below, and we will respond to your contact details promptly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Verified Location & Boutique Details */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="bg-[#f0e9dc] border border-[#dfd4c2] p-8 rounded-xl space-y-6">
            <h2 className="font-serif text-2xl text-[#183526]">
              Boutique Location
            </h2>
            
            <div className="space-y-4 text-sm text-[#3d5246]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#b8734e] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#183526] block font-medium">Boutique Address:</strong>
                  <p className="mt-0.5">{BOUTIQUE_INFO.location.fullAddress}</p>
                </div>
              </div>

              <div className="pt-2 text-xs text-[#506357] leading-relaxed border-t border-[#dfd4c2]">
                <p>
                  <strong>Landmark:</strong> Located inside Ali Mohammad Bazaar right by Dubai Chowk in Tajpura, Lahore.
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#f9f6f0] border border-[#dfd4c2] rounded-lg text-xs text-[#506357] space-y-1.5">
              <span className="font-semibold text-[#183526] block">Verified Information Policy</span>
              <p>
                As an authentic local boutique, we only list verified information. For inquiries,
                please use the enquiry form on this page. Form messages are securely transmitted to our backend.
              </p>
            </div>
          </div>

          {/* Backend Transparency Drawer Trigger */}
          <div className="bg-[#f9f6f0] border border-[#dfd4c2] p-6 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#183526] flex items-center gap-1.5">
                <Inbox className="w-4 h-4 text-[#b8734e]" />
                Enquiry System Status
              </span>
              <span className="text-[11px] font-mono text-[#506357]">
                {receivedEnquiries.length} received
              </span>
            </div>
            <p className="text-xs text-[#506357]">
              Submitted inquiries are processed through our live Express server API (/api/enquiries).
            </p>
            <button
              type="button"
              onClick={() => {
                setShowEnquiryLog(!showEnquiryLog);
                fetchEnquiries();
              }}
              className="text-xs font-semibold text-[#b8734e] hover:text-[#183526] transition-colors cursor-pointer underline"
            >
              {showEnquiryLog ? 'Hide Enquiry Log' : 'View Submitted Enquiries'}
            </button>

            {showEnquiryLog && (
              <div className="mt-3 pt-3 border-t border-[#dfd4c2] space-y-2 max-h-56 overflow-y-auto text-xs">
                {receivedEnquiries.length === 0 ? (
                  <p className="text-[#738279] italic">No enquiries received yet. Try submitting the form!</p>
                ) : (
                  receivedEnquiries.map((enq) => (
                    <div key={enq.id} className="p-2.5 bg-[#f0e9dc] rounded border border-[#dfd4c2]/80 space-y-1">
                      <div className="flex items-center justify-between font-mono text-[10px] text-[#738279]">
                        <span>{enq.id}</span>
                        <span>{new Date(enq.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      </div>
                      <p className="font-semibold text-[#183526]">{enq.name} · <span className="text-[#b8734e]">{enq.category}</span></p>
                      <p className="text-[#506357] truncate">&quot;{enq.message}&quot;</p>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

        </div>

        {/* Right Column: Working Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-[#f9f6f0] border border-[#dfd4c2] p-8 sm:p-10 rounded-xl shadow-sm space-y-6">
            
            <div className="space-y-1">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#183526]">
                Send an Enquiry
              </h2>
              <p className="text-xs text-[#506357]">
                Fill out the form below. All required fields are validated.
              </p>
            </div>

            {/* Success / Failure Banner */}
            {submissionResult && (
              <div
                role="alert"
                className={`p-4 rounded-lg text-sm flex items-start gap-3 border ${
                  submissionResult.success
                    ? 'bg-emerald-50/80 border-emerald-300 text-emerald-900'
                    : 'bg-rose-50/80 border-rose-300 text-rose-900'
                }`}
              >
                {submissionResult.success ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-rose-700 shrink-0 mt-0.5" />
                )}
                <div className="space-y-1">
                  <p className="font-semibold">{submissionResult.message}</p>
                  {submissionResult.referenceId && (
                    <p className="text-xs font-mono">
                      Reference ID: <strong>{submissionResult.referenceId}</strong>
                    </p>
                  )}
                  {submissionResult.timestamp && (
                    <p className="text-[11px] opacity-80">
                      Logged at: {new Date(submissionResult.timestamp).toLocaleString()}
                    </p>
                  )}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              
              {/* Name Field */}
              <div className="space-y-1.5">
                <label htmlFor="customer-name" className="block text-xs font-semibold uppercase tracking-wider text-[#183526]">
                  Your Full Name <span className="text-[#b8734e]">*</span>
                </label>
                <input
                  id="customer-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  placeholder="e.g. Ayesha Khan"
                  className={`w-full px-4 py-3 bg-white border rounded text-sm text-[#183526] placeholder-[#a69c8a] focus:outline-none focus:ring-2 focus:ring-[#183526] transition-all ${
                    errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-[#dfd4c2]'
                  }`}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email or Phone Number */}
              <div className="space-y-1.5">
                <label htmlFor="customer-contact" className="block text-xs font-semibold uppercase tracking-wider text-[#183526]">
                  Email or Phone Number <span className="text-[#b8734e]">*</span>
                </label>
                <input
                  id="customer-contact"
                  type="text"
                  required
                  value={formData.contact}
                  onChange={(e) => {
                    setFormData({ ...formData, contact: e.target.value });
                    if (errors.contact) setErrors({ ...errors, contact: '' });
                  }}
                  placeholder="e.g. 0300-1234567 or ayesha@example.com"
                  className={`w-full px-4 py-3 bg-white border rounded text-sm text-[#183526] placeholder-[#a69c8a] focus:outline-none focus:ring-2 focus:ring-[#183526] transition-all ${
                    errors.contact ? 'border-rose-400 bg-rose-50/20' : 'border-[#dfd4c2]'
                  }`}
                  aria-invalid={Boolean(errors.contact)}
                  aria-describedby={errors.contact ? 'contact-error' : undefined}
                />
                <span className="text-[11px] text-[#738279] block">
                  Provide either an email or active phone number for boutique staff to follow up.
                </span>
                {errors.contact && (
                  <p id="contact-error" className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.contact}</span>
                  </p>
                )}
              </div>

              {/* Enquiry Category */}
              <div className="space-y-1.5">
                <label htmlFor="enquiry-category" className="block text-xs font-semibold uppercase tracking-wider text-[#183526]">
                  Enquiry Category <span className="text-[#b8734e]">*</span>
                </label>
                <select
                  id="enquiry-category"
                  required
                  value={formData.category}
                  onChange={(e) => {
                    setFormData({ ...formData, category: e.target.value });
                    if (errors.category) setErrors({ ...errors, category: '' });
                  }}
                  className={`w-full px-4 py-3 bg-white border rounded text-sm text-[#183526] focus:outline-none focus:ring-2 focus:ring-[#183526] transition-all cursor-pointer ${
                    errors.category ? 'border-rose-400' : 'border-[#dfd4c2]'
                  }`}
                >
                  <option value="Modest Wear Consultation">Modest Wear Consultation</option>
                  <option value="Everyday Styles Enquiry">Everyday Styles Enquiry</option>
                  <option value="Semi-Formal Design Question">Semi-Formal Design Question</option>
                  <option value="Location & Visit Information">Location &amp; Visit Information</option>
                  <option value="Bespoke Tailoring Discussion">Bespoke Tailoring Discussion</option>
                  <option value="General Question">General Question</option>
                </select>
                {errors.category && (
                  <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.category}</span>
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="customer-message" className="block text-xs font-semibold uppercase tracking-wider text-[#183526]">
                  Your Message <span className="text-[#b8734e]">*</span>
                </label>
                <textarea
                  id="customer-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  placeholder="Describe your design questions, preferred cut, occasion, or any specific boutique inquiry..."
                  className={`w-full px-4 py-3 bg-white border rounded text-sm text-[#183526] placeholder-[#a69c8a] focus:outline-none focus:ring-2 focus:ring-[#183526] transition-all ${
                    errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-[#dfd4c2]'
                  }`}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#183526] hover:bg-[#274d39] active:bg-[#10241a] rounded transition-all cursor-pointer shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#dfd4c2]" />
                      <span>Sending Enquiry to Boutique...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Boutique Enquiry</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-[#738279]">
                Your enquiry will be recorded securely in our system. We will reach out using the provided contact method.
              </p>

            </form>
          </div>
        </div>

      </div>

    </div>
  );
};
