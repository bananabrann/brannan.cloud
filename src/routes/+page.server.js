export function load({ params }) {
  return {
    streamed:{
      isChatOnline: new Promise((fulfill) => {
        setTimeout(() => {
          fulfill(false);
        }, 3000)
      }),
    },
    isTvOnline: false
  };
}
