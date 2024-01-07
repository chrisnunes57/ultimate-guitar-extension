function listener(details) {
    let filter = browser.webRequest.filterResponseData(details.requestId);
    let decoder = new TextDecoder("utf-8");
    let encoder = new TextEncoder();
  
    filter.ondata = event => {
      let str = decoder.decode(event.data, {stream: true});
      // Change blocked: true to blocked: false
      str = str.replace(/blocked&quot;:true/g, 'blocked&quot;:false');
      filter.write(encoder.encode(str));
      filter.disconnect();
    }
  
    return {};
  }
  
  browser.webRequest.onBeforeRequest.addListener(
    listener,
    {urls: ["https://*.ultimate-guitar.com/*"], types: ["main_frame"]},
    ["blocking"]
  );