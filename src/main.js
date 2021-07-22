
export const TIMEOUT_ERROR = 'Timeout';

const DEFAULT_DURATION = 10000;

// race timeout
export default networkWrapper = async (request, duration = DEFAULT_DURATION) => {
  try {
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
