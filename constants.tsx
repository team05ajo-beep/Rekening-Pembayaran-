
import { PaymentData } from './types';

export const BANK_LOGOS: Record<string, string> = {
  BNI: 'https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/2560px-BNI_logo.svg.png',
  BRI: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/BRI_Logo.svg/1200px-BRI_Logo.svg.png',
  BCA: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1200px-Bank_Central_Asia.svg.png',
  MANDIRI: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/1200px-Bank_Mandiri_logo_2016.svg.png'
};

export const THEME_PRESETS: {
  name: string;
  theme: PaymentData['theme'];
}[] = [
  {
    name: 'Obsidian VIP',
    theme: {
      primary: '#c5a059', // Gold
      accent: '#ffffff',
      background: '#0a0a0a',
      cardBg: '#111111',
      glowColor: '#1a1a1a',
      textColor: '#ffffff',
      surfaceStyle: 'solid'
    }
  },
  {
    name: 'Brushed Silver',
    theme: {
      primary: '#1a1a1a',
      accent: '#000000',
      background: '#d1d5db',
      cardBg: '#e5e7eb',
      glowColor: '#ffffff',
      textColor: '#111111',
      surfaceStyle: 'silk'
    }
  },
  {
    name: 'Royal Ancora',
    theme: {
      primary: '#ffffff',
      accent: '#c5a059',
      background: '#4a080e',
      cardBg: '#620d15',
      glowColor: '#a50016',
      textColor: '#ffffff',
      surfaceStyle: 'silk'
    }
  },
  {
    name: 'Emerald Gold',
    theme: {
      primary: '#c5a059',
      accent: '#ffffff',
      background: '#042115',
      cardBg: '#062c1d',
      glowColor: '#00ff7f',
      textColor: '#ffffff',
      surfaceStyle: 'grain'
    }
  }
];

export const INITIAL_DATA: PaymentData = {
  bankName: 'BRI',
  accountName: 'WANDANA',
  accountNumber: '335301013871503', 
  amount: 'Rp 1.699.000',
  greetingLabel: 'OFFICIAL PARTNER',
  greetingPartner: 'GUCCI PRIVATE SETTLEMENT',
  headerTitle: 'PEMBAYARAN',
  trustMessage: 'Transaksi ini diproses secara aman dan diawasi langsung oleh Bank Indonesia serta Otoritas Jasa Keuangan (OJK)',
  labelNominal: 'Nominal Transfer',
  labelAtasNama: 'Penerima',
  labelRekening: 'Nomor Rekening',
  adSlogan: 'MUSEO GUCCI BUSINESS PROGRAM',
  advisoryTitle: 'Pemberitahuan Keamanan Penting:',
  advisoryPoints: '• Transaksi hanya melalui nomor rekening yang tertera di aplikasi ini.\n• Kami tidak pernah meminta kode OTP atau password akun Anda.\n• Pastikan nominal transfer sesuai untuk verifikasi otomatis.',
  advisoryClosing: 'Keamanan data dan dana Anda adalah prioritas utama kami.',
  instruction1Title: 'Langkah Pembayaran',
  instruction1Body: 'Lakukan transfer sesuai nominal yang tertera. Sistem akan melakukan validasi otomatis dalam 1-5 menit.',
  instruction2Title: 'Ketentuan Verifikasi',
  instruction2Body: 'Gunakan metode transfer VIP untuk proses instan.',
  footerStatus: 'Authenticated by BI & OJK',
  footerCopyright: '© 2025 Guccio Gucci S.p.A. Authorized Merchant #BI-OJK-99238',
  theme: THEME_PRESETS[0].theme,
  images: {
    promoBanner: '', ad1: '', ad2: '', ad3: '', ad4: ''
  }
};
