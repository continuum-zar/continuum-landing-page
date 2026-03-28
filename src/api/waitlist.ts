import axios from 'axios';

export type WaitlistSignupResponse = {
  message: string;
};

const baseURL = import.meta.env.VITE_API_BASE_URL || '/api/v1';

const client = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});

export async function postWaitlistSignup(email: string): Promise<WaitlistSignupResponse> {
  const response = await client.post<WaitlistSignupResponse>('/auth/waitlist', { email });
  return response.data;
}
