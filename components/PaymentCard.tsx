
import React, { useRef, useEffect } from 'react';
import { PaymentData } from '../types';

interface EditableTextProps {
  value: string;
  onChange: (newValue: string) => void;
  className?: string;
  style?: React.CSSProperties;
  tagName?: 'span' | 'div' | 'h1';
}

const EditableText: React.FC<EditableTextProps> = ({ value, onChange, className, style, tagName = 'span' }) => {
  const contentRef = useRef<HTMLElement>(null);

  const handleBlur = () => {
    if (contentRef.current) {
      let newValue = contentRef.current.innerText;
      onChange(newValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      (e.target as HTMLElement).blur();
    }
    if (e.key === ' ' && className?.includes('tracking-[0.45em]')) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (contentRef.current && contentRef.current.innerText !== value) {
      contentRef.current.innerText = value;
    }
  }, [value]);

  const Tag = tagName;

  return (
    <Tag
      ref={contentRef as any}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      className={`${className} cursor-text focus:outline-none focus:ring-1 focus:ring-black/20 px-1 rounded transition-all`}
      style={style}
    >
      {value}
    </Tag>
  );
};

// Elegant QR Code Component linked to Bank Indonesia
const LuxuryQRCode: React.FC = () => {
  const targetUrl = encodeURIComponent("https://www.bi.go.id");
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${targetUrl}&bgcolor=ffffff00&color=2d1b0d`;
  
  return (
    <div className="flex flex-col items-center gap-2 opacity-90 group-hover:opacity-100 transition-all duration-500 hover:scale-105">
      <div className="p-2 bg-white/15 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl relative overflow-hidden group/qr">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover/qr:opacity-100 transition-opacity"></div>
        <img 
          src={qrUrl} 
          alt="Payment QR Code Verified by BI" 
          className="w-20 h-20 mix-blend-multiply brightness-90 contrast-125 relative z-10"
        />
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#2d1b0d]/30 rounded-tl-lg"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#2d1b0d]/30 rounded-br-lg"></div>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-[7px] font-black text-[#2d1b0d]/60 tracking-[0.3em] uppercase">Authorized By</span>
        <span className="text-[8px] font-card font-bold text-[#2d1b0d] tracking-[0.1em]">BANK INDONESIA</span>
      </div>
    </div>
  );
};

interface PaymentCardProps {
  data: PaymentData;
  onChange: (field: keyof PaymentData, value: string) => void;
}

const PaymentCard: React.FC<PaymentCardProps> = ({ data, onChange }) => {
  const gucciPatternUrl = "https://i.pinimg.com/1200x/c4/19/06/c419067c4393752980ee0f538a5ddede.jpg";

  return (
    <div className="flex flex-col items-center justify-center p-4 select-none">
      
      {/* 1175x632 PX - EXCLUSIVE AMBER GOLD EDITION */}
      <div 
        className="card-container relative overflow-hidden transition-all duration-1000 group cursor-default"
        style={{ 
          width: '1175px', 
          height: '632px', 
          background: 'linear-gradient(135deg, #f39c12 0%, #e67e22 50%, #d35400 100%)',
          borderRadius: '0px', 
          boxShadow: '0 120px 200px -60px rgba(0,0,0,0.6), inset 0 0 100px rgba(255,255,255,0.2)',
          border: '1.2px solid rgba(255, 255, 255, 0.5)'
        }}
      >
        {/* Background Pattern Inlay */}
        <div 
          className="absolute inset-0 z-0 scale-100 transition-transform duration-[4s] group-hover:scale-105"
          style={{
            backgroundImage: `url(${gucciPatternUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(15px) brightness(0.9) sepia(0.6) saturate(2.5) hue-rotate(-5deg)', 
            opacity: 0.12
          }}
        ></div>

        <div className="absolute inset-0 z-[1] opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/brushed-alum.png)' }}></div>

        {/* TOP HEADER */}
        <div className="absolute top-10 left-16 right-16 z-20 flex justify-between items-start">
          <div className="flex flex-col gap-1 mt-4">
            <EditableText 
              value={data.greetingPartner} 
              onChange={(val) => onChange('greetingPartner', val)}
              className="text-[11px] font-black uppercase tracking-[0.9em] text-[#2d1b0d]/70"
            />
            <div className="h-[1px] w-24 bg-[#2d1b0d]/20"></div>
          </div>
          <LuxuryQRCode />
        </div>

        {/* BRANDING */}
        <div className="absolute top-[85px] left-0 w-full flex justify-center z-10 pointer-events-none">
          <h2 className="font-luxury text-[110px] font-black tracking-[0.35em] text-[#2d1b0d] opacity-[0.9] drop-shadow-[0_4px_10px_rgba(0,0,0,0.1)] leading-none">
            GUCCI
          </h2>
        </div>

        {/* DATA MODULES: IMPROVED FOR LONG TEXT */}
        <div className="absolute top-[260px] left-16 right-16 flex justify-between items-start gap-8 z-30 px-8">
          
          {/* Bank Box */}
          <div className="flex flex-col gap-3 flex-1 max-w-[450px]">
             <div className="flex items-center gap-2 px-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2d1b0d]/30"></div>
                <span className="text-[9px] font-black text-[#2d1b0d]/40 uppercase tracking-[0.5em]">BANK PENERIMA</span>
             </div>
             <div className="relative group/box overflow-hidden">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-[#2d1b0d]/20 via-white/50 to-transparent rounded-none"></div>
                <div className="relative px-6 py-5 bg-white/20 border border-white/40 rounded-none backdrop-blur-3xl text-center shadow-lg transition-transform group-hover/box:translate-y-[-2px] min-h-[90px] flex items-center justify-center">
                   <EditableText 
                     value={data.bankName} 
                     onChange={(val) => onChange('bankName', val)}
                     className="text-[28px] font-card font-black text-[#2d1b0d] tracking-[0.1em] uppercase leading-tight whitespace-normal overflow-hidden break-words w-full"
                   />
                </div>
             </div>
          </div>

          {/* Account Name Box - Now Flexible for Long Names */}
          <div className="flex flex-col gap-3 flex-1 max-w-[450px] items-end">
             <div className="flex items-center gap-2 px-1">
                <span className="text-[9px] font-black text-[#2d1b0d]/40 uppercase tracking-[0.5em]">Atas Nama</span>
                <div className="w-1.5 h-1.5 rounded-full border border-[#2d1b0d]/20"></div>
             </div>
             <div className="relative group/box overflow-hidden w-full">
                <div className="absolute -inset-[1px] bg-gradient-to-l from-[#2d1b0d]/20 via-white/50 to-transparent rounded-none"></div>
                <div className="relative px-6 py-5 bg-white/20 border border-white/40 rounded-none backdrop-blur-3xl text-center shadow-lg transition-transform group-hover/box:translate-y-[-2px] min-h-[90px] flex items-center justify-center">
                   <EditableText 
                     value={data.accountName} 
                     onChange={(val) => onChange('accountName', val)}
                     className={`font-card font-black text-[#2d1b0d] tracking-[0.1em] uppercase leading-tight whitespace-normal overflow-hidden break-words w-full ${data.accountName.length > 20 ? 'text-[22px]' : 'text-[28px]'}`}
                   />
                </div>
             </div>
          </div>
        </div>

        {/* SECURE CREDENTIALS VAULT */}
        <div className="absolute bottom-[125px] left-0 w-full z-40 flex justify-center px-16">
          <div className="w-full max-w-[650px] flex flex-col items-center py-5 px-10 bg-[#2d1b0d]/5 border border-white/50 rounded-none backdrop-blur-3xl relative overflow-hidden shadow-xl group/key">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            
            <div className="flex items-center gap-4 mb-3 opacity-50">
               <div className="flex gap-1">
                 {[1,2,3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-[#2d1b0d]"></div>)}
               </div>
               <span className="text-[8px] font-black text-[#2d1b0d] uppercase tracking-[0.8em]">NOMOR REKENING</span>
            </div>
            
            <div className="w-full flex justify-center">
              <EditableText 
                value={data.accountNumber} 
                onChange={(val) => onChange('accountNumber', val.replace(/\s/g, ''))}
                className="text-[36px] font-card font-black text-[#2d1b0d] tracking-[0.45em] leading-none text-center drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)]"
              />
            </div>
          </div>
        </div>

        {/* FOOTER BAR */}
        <div className="absolute bottom-8 left-16 right-16 z-20">
          <div className="flex items-center justify-between px-10 py-4 bg-[#2d1b0d]/10 border border-[#2d1b0d]/10 rounded-none">
             <div className="flex flex-col gap-0.5">
                <span className="text-[7px] font-black tracking-[0.6em] text-[#2d1b0d]/50 uppercase">MUSEO ARCHIVE</span>
                <span className="text-[6px] text-[#2d1b0d]/30 tracking-[0.3em] uppercase">VER: 10.0 BI-STABLE</span>
             </div>
             
             <div className="flex items-center gap-10">
                <div className="flex items-center gap-3">
                    <div className="relative flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-800 animate-ping absolute"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-800 relative shadow-lg"></div>
                    </div>
                    <span className="text-[9px] font-card text-[#2d1b0d]/80 tracking-[0.2em] uppercase italic font-black">DIAWASI OLEH BANK INDONESIA & OJK</span>
                </div>
                
                <div className="w-[1px] h-6 bg-[#2d1b0d]/15"></div>
                
                <div className="flex gap-6">
                  <div className="flex flex-col items-start min-w-[40px]">
                    <span className="text-[6px] text-[#2d1b0d]/40 uppercase tracking-[0.1em]">Keamanan</span>
                    <span className="text-[10px] font-black text-blue-900 tracking-[0.05em]">100%</span>
                  </div>
                  <div className="flex flex-col items-start min-w-[40px]">
                    <span className="text-[6px] text-[#2d1b0d]/40 uppercase tracking-[0.1em]">Verified</span>
                    <span className="text-[10px] font-black text-[#2d1b0d] tracking-[0.05em]">VIP</span>
                  </div>
                </div>
             </div>
          </div>
        </div>

        <div className="absolute inset-5 border-[1px] border-white/30 pointer-events-none rounded-none"></div>
      </div>

    </div>
  );
};

export default PaymentCard;
