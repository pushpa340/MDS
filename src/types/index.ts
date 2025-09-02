export interface UserProfile {
  uid: string;
  email: string;
  name: string;
  role: 'admin' | 'client';
}

export interface Testimonial {
  id: string;
  name: string;
  photoUrl: string;
  message: string;
  data_ai_hint?: string;
}

export interface JobOpening {
  id: string;
  title: string;
  location: string;
  description: string;
}

export interface JobApplication {
    id?: string;
    jobId: string;
    jobTitle: string;
    name: string;
    email: string;
    linkedin: string;
    resumeUrl: string;
}
