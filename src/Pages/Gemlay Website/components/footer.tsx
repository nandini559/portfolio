import React from "react";

const Footer = () => {
  return (
    <div className="bg-green-100">
      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-4 mt-4">
        {/* SERVICES */}
        <div>
          <p className="font-semibold p-2 border-b-2 mb-2">OUR SERVICES</p>
          <div className="text-xs grid gap-2 text-slate-600">
            <p>GOLD RATES</p>
            <p>DIGITAL GOLD</p>
            <p>VARIOUS PAYMENT METHOD</p>
            <p>FINANCING OPTIONS</p>
            <p>GEMLAY ASSURANCE</p>
            <p>FRANCHISE ENQUITY</p>
          </div>
        </div>

        {/* POLICIES */}
        <div>
          <p className="font-semibold p-2 border-b-2 mb-2">OUR POLICIES</p>
          <div className="text-xs grid gap-2 text-slate-600">
            <p>15 DAYS RETURNS</p>
            <p>FREE SHIPPING</p>
            <p>LIFETIME EXCHANGE POLICY</p>
            <p>RETURN AND REFUND POLICY</p>
            <p>TERMS AND CONDITIONS ON OFFERS</p>
          </div>
        </div>

        {/* JEWELLERY KNOWLEDGE */}
        <div>
          <p className="font-semibold p-2 border-b-2 mb-2">
            JEWELLERY KNOWLEDGE
          </p>
          <div className="text-xs grid gap-2 text-slate-600">
            <p>GOLD GUIDE</p>
            <p>DIAMOND GUIDE</p>
            <p>GEMSTONE GUIDE</p>
            <p>JEWELLERY GUIDE</p>
            <p>SOLITAIRE JEWELLERY GUIDE</p>
            <p>CERTIFICATION GUIDE</p>
            <p>JEWELLERY GIFTING</p>
          </div>
        </div>

        {/* ABOUT */}
        <div>
          <p className="font-semibold p-2 border-b-2 mb-2">ABOUT US</p>
          <div className="text-xs grid gap-2 text-slate-600">
            <p>OUR VISION</p>
            <p>WHY GEMLAY?</p>
            <p>BLOG</p>
            <p>OUR STORY</p>
            <p>OUR PROGRESS</p>
            <p>OUR TEAMS</p>
            <p>REVIEWS & RATINGS</p>
            <p>PRESS RELEASE</p>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <p className="font-semibold p-2 border-b-2 mb-2">CONTACT US</p>
          <div className="text-xs grid gap-2 text-slate-600">
            <p>+91 98888 98866</p>
            <p>(10am-8pm, 7 days a week)</p>
            <p>Gemlay Jewels Private Limited</p>
            <p>Unit No 15, Ground Floor, Jubilee Junction, Mohali, 160062.</p>
          </div>

          {/* Apps */}
          <div className="p-2">
            <p className="text-slate-600 text-xs mt-3">
              DOWNLOAD OUR APPLICATION
            </p>
            <div className="flex gap-2 items-center mt-2">
              <img
                src="/asset/Google_Play-Badge-Logo 1.png"
                className="h-10 w-auto"
              />
              <img
                src="/asset/Download-On-The-App-Store-PNG-Image 1.png"
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="p-2 border-b text-slate-600 text-xs">FOLLOW US</p>
            <div className="flex gap-3 mt-2">
              <img src="/asset/facebook 1.png" className="h-5 w-5" />
              <img src="/asset/instagram 1.png" className="h-5 w-5" />
              <img src="/asset/youtube 1 (1).png" className="h-5 w-5" />
              <img src="/asset/social 1.png" className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <p className="text-xs text-slate-600 font-semibold text-center p-3">
        SITE MAP | PRIVACY POLICY | TERMS AND CONDITIONS | FAQs
      </p>

      {/* Copyright */}
      <p className="text-xs text-white font-semibold text-center bg-emerald-800 p-2">
        © 2024 GEMLAY.COM. ALL RIGHTS RESERVED.
      </p>
    </div>
  );
};

export default Footer;
