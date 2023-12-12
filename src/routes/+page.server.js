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

async function isWebsiteOnline(url) {
  try {
    const response = await fetch(url);
    return response.ok;
  } catch (error) {
    return false;
  }
}
