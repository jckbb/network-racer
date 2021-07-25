// thrown error if timeout occurs
export const TIMEOUT_ERROR = 'Timeout';

// default time(ms)
const DEFAULT_DURATION = 10000;

// race timeout
export default async (request, duration = DEFAULT_DURATION) => {
  try {
    // run both request and setTimeout(), which ever finishes first is the winner
    return await Promise.race([
      request,
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error(TIMEOUT_ERROR)), duration),
      ),
    ]);
  } catch (error) {
    throw error;
  }
};
