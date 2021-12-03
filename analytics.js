function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return undefined;
}

let ref = getQueryVariable('ref') || getQueryVariable("from") || getQueryVariable("utm_source") || document.referrer;

if (!sessionStorage.getItem("_swa") && document.referrer.indexOf(location.protocol + "//" + location.host) !== 0) { fetch("https://counter.dev/track?" + new URLSearchParams({ referrer: ref, screen: screen.width + "x" + screen.height, user: "timekeepers", utcoffset: "6" })) }; sessionStorage.setItem("_swa", "1");