"use client";
import Script from "next/script";

const Calcom = () => {
  return (
    <Script type="text/javascript" id="calcom">
      {`
        (function (C, A, L) {
          let p = function (a, ar) { a.q.push(ar); };
          let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar); return; } p(cal, ar); }; })(window, "https://booking.zoodoodalat.com/embed/embed.js", "init");
          Cal("init", "tham-quan-vuon-thu-zoodoo", {origin:"https://booking.zoodoodalat.com"});
          Cal.ns["tham-quan-vuon-thu-zoodoo"]("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
      `}
    </Script>
  );
};

export default Calcom;
