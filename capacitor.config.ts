
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.890e8835ac8248dabf2f73844c812f88',
  appName: 'octo-mimic-tradesync',
  webDir: 'dist',
  server: {
    url: 'https://890e8835-ac82-48da-bf2f-73844c812f88.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#10B981",
      showSpinner: true,
      spinnerColor: "#ffffff",
      splashFullScreen: true,
      splashImmersive: true
    }
  }
};

export default config;
