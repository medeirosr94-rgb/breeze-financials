// Meta Pixel tracking utilities
declare global {
  interface Window {
    fbq: any;
  }
}

export const trackEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

// Standard Facebook Pixel events for business tracking
export const MetaPixelEvents = {
  // Lead generation events
  trackLead: (value?: number) => {
    trackEvent('Lead', value ? { value, currency: 'CAD' } : undefined);
  },
  
  // Contact form submission
  trackContact: () => {
    trackEvent('Contact');
  },
  
  // Page view (already tracked automatically, but can be used for specific pages)
  trackPageView: () => {
    trackEvent('PageView');
  },
  
  // Custom events for your business
  trackAuditRequest: () => {
    trackEvent('SubmitApplication'); // Using Facebook's standard event
  },
  
  trackCalendlyClick: () => {
    trackEvent('Schedule'); // Using Facebook's standard event
  },
  
  // Track when user scrolls to specific sections
  trackSectionView: (sectionName: string) => {
    trackEvent('ViewContent', { content_name: sectionName });
  }
};