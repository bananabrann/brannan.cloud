export function load({ params }) {
  return {
    streamed: {
      isChatOnline: new Promise((fulfill) => {
        fulfill(isWebsiteOnline("http://20.64.87.75/"));
      }),
      isTvOnline: new Promise((fulfill) => {
        fulfill(isWebsiteOnline("https://tv.brannan.cloud"));
      })
    },
    isTvOnline: false
  };
}

export async function isWebsiteOnline(url) {
  try {
    const response = await Promise.race([
      fetch(url),
      new Promise((_, reject) => setTimeout(() => reject(new Error("Request timeout")), 5000))
    ]);

    if (response.status >= 200 && response.status < 300) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    // The most likely reason for an error is a connection timeout, in which case we want
    // to return false.
    return false;
  }
}
