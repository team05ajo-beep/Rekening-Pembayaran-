import React from 'react';
import { PaymentData } from '../types';

interface ControlPanelProps {
  data: PaymentData;
  onChange: (field: keyof PaymentData, value: string) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ data, onChange }) => {
  return (
    <div className="bg-[#0a0a0a] p-10 border border-white/5 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="flex items-center gap-4 mb-16 relative z-10">
        <div className="w-1.5 h-8 bg-[#a50016]"></div>
        <h2 className="text-[14px] font-black text-white uppercase tracking-[0.8em]">
          EDITOR MUSEO
        </h2>
      </div>
      
      <div className="space-y-12 relative z-10">
        <div className="group">
          <label className="block text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-4 group-focus-within:text-[#c5a059] transition-colors">Bank Identity</label>
          <div className="relative">
            <select 
              value={data.bankName}
              onChange={(e) => onChange('bankName', e.target.value)}
              className="w-full bg-white/5 border border-white/10 p-5 text-[16px] font-bold text-white focus:border-[#c5a059] outline-none transition-all appearance-none rounded-none cursor-pointer"
            >
              <option value="BNI">BANK NEGARA INDONESIA (BNI)</option>
              <option value="BRI">BANK RAKYAT INDONESIA (BRI)</option>
              <option value="BCA">BANK CENTRAL ASIA (BCA)</option>
              <option value="MANDIRI">BANK MANDIRI (MANDIRI)</option>
              <option value="DANAMON">BANK DANAMON INDONESIA (DANAMON)</option>
            </select>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        <div className="group">
          <label className="block text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-4 group-focus-within:text-[#c5a059] transition-colors">Beneficiary Signature</label>
          <input 
            type="text"
            value={data.accountName}
            onChange={(e) => onChange('accountName', e.target.value)}
            className="w-full bg-white/5 border border-white/10 p-5 text-[16px] font-bold text-white focus:border-[#c5a059] outline-none transition-all rounded-none placeholder:text-white/10 uppercase tracking-widest"
            placeholder="FULL LEGAL NAME"
          />
        </div>

        <div className="group">
          <label className="block text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-4 group-focus-within:text-[#c5a059] transition-colors">Vault Key (Account No.)</label>
          <input 
            type="text"
            value={data.accountNumber}
            onChange={(e) => onChange('accountNumber', e.target.value)}
            className="w-full bg-white/5 border border-white/10 p-5 text-[16px] font-bold text-[#c5a059] focus:border-white outline-none transition-all rounded-none tabular-nums tracking-[0.2em]"
            placeholder="ACCOUNT DIGITS"
          />
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-white/5 flex justify-between items-center relative z-10">
        <div className="flex gap-1.5">
           <div className="w-1.5 h-1.5 bg-[#a50016]"></div>
           <div className="w-1.5 h-1.5 bg-[#c5a059]"></div>
           <div className="w-1.5 h-1.5 bg-white opacity-20"></div>
        </div>
        <p className="text-[9px] text-white/20 font-black uppercase tracking-[0.5em]">SYSTEM STABLE v5.0</p>
      </div>
    </div>
  );
};

export default ControlPanel;