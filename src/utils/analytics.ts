import { logEvent } from 'firebase/analytics';
import { analytics } from '../config/firebase';

export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  try {
    logEvent(analytics, eventName, eventParams);
  } catch (error) {
    console.error('Analytics error:', error);
  }
};

export const trackPageView = (pageName: string) => {
  trackEvent('page_view', { page_name: pageName });
};

export const trackVideoPlay = (videoId: string, videoTitle: string) => {
  trackEvent('video_play', {
    video_id: videoId,
    video_title: videoTitle
  });
};

export const trackSearch = (searchTerm: string, resultsCount: number) => {
  trackEvent('search', {
    search_term: searchTerm,
    results_count: resultsCount
  });
};

export const trackShare = (contentType: 'lesson' | 'blog', contentId: string) => {
  trackEvent('share', {
    content_type: contentType,
    content_id: contentId
  });
};