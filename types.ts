
export interface PaymentData {
  // Core Data
  bankName: string;
  accountName: string;
  accountNumber: string;
  amount: string;
  
  // Header / Greeting
  greetingLabel: string;
  greetingPartner: string;
  headerTitle: string;
  
  // Trust Section
  trustMessage: string;
  
  // Labels
  labelNominal: string;
  labelAtasNama: string;
  labelRekening: string;
  
  // Ad Section
  adSlogan: string;
  advisoryTitle: string;
  advisoryPoints: string;
  advisoryClosing: string;
  
  // Instructions
  instruction1Title: string;
  instruction1Body: string;
  instruction2Title: string;
  instruction2Body: string;
  
  // Footer
  footerStatus: string;
  footerCopyright: string;

  // CUSTOMIZATION FEATURES
  theme: {
    primary: string;    // The Gold color
    accent: string;     // The Red color
    background: string; // Dashboard main bg
    cardBg: string;     // Internal card bg
    glowColor: string;  // Ambient lighting color
    textColor: string;  // Text color (dark for light themes)
    surfaceStyle: 'solid' | 'grain' | 'silk'; // Surface texture
  };
  images: {
    promoBanner: string;
    ad1: string;
    ad2: string;
    ad3: string;
    ad4: string;
  };
}

export enum BankType {
  BNI = 'BNI',
  BRI = 'BRI',
  BCA = 'BCA',
  MANDIRI = 'MANDIRI'
}
