// document.cookie = "TestCookieThirdParty=1001";
var name = 'TestCookieThirdParty', value = '23423', ttl = 23424, path = '/', domain = '.github.com', secure;
document.cookie = name + "=" + escape(value) +
			(ttl ? "; expires=" + new Date(+new Date()+(ttl*1000)).toUTCString() : "") +
			(path   ? "; path=" + path : "") +
			(domain ? "; domain=" + domain : "") +
			(secure ? "; secure" : "")
