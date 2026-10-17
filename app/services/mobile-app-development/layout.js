import React from 'react';
import './mobile-page.css';

export const metadata = {
  title: 'Custom Mobile App Development | iOS & Android Enterprise Solutions',
  description: 'Enterprise iOS and Android mobile app development. React Native, pure native Swift & Kotlin apps with offline-first SQLite sync and biometric security.',
  keywords: [
    'mobile app development dubai',
    'enterprise mobile app development',
    'react native development uae',
    'ios app development',
    'android app development',
    'offline first mobile app',
    'custom business mobile apps'
  ],
  alternates: {
    canonical: 'https://valtixsolutions.com/services/mobile-app-development'
  },
  openGraph: {
    title: 'Custom Mobile App Development | iOS & Android Enterprise Solutions',
    description: 'Enterprise iOS and Android mobile app development. React Native, pure native Swift & Kotlin apps with offline-first SQLite sync and biometric security.',
    url: 'https://valtixsolutions.com/services/mobile-app-development',
    siteName: 'Valtix',
    type: 'website'
  }
};

export default function MobileAppLayout({ children }) {
  return children;
}
