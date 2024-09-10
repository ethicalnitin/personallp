import React from 'react';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa'; // For the star emoji
import logo from './lgo.jpeg'; // Replace with your actual logo file
import productImage from './3P.png'; // The correct product image (3P.png)

const LandingPage = () => {
  const telegramUrl = `https://t.me/yourTelegramLink`; // Your Telegram link for purchasing
  const proofsUrl = 'https://shorturl.at/Nsuke'; // Your provided proof link

  const handleBuyNowClick = () => {
    if (window.fbq) {
      window.fbq('track', 'Purchase');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-white text-center p-4">
      {/* Navbar / Top Section with Logo, Brand Name, WhatsApp and Telegram Icons */}
      <header className="w-full bg-white shadow-md py-4 px-6 fixed top-0 left-0 flex justify-between items-center z-10">
        <div className="flex items-center">
          {/* Logo */}
          <img
            src={logo}
            alt="Dexter Luxuries Logo"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-4" // Adjust the logo size
          />
          {/* Brand Name */}
          <h1 className="text-lg md:text-2xl font-bold text-black uppercase tracking-wide">
            Dexter Luxuries
          </h1>
        </div>
        {/* WhatsApp and Telegram Icons on the Right */}
        <div className="flex items-center space-x-4">
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-3xl hover:text-blue-600 transition duration-300"
          >
            <FaTelegram />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-24 flex flex-col justify-center items-center"> {/* pt-24 to push content below the fixed navbar */}
        
        {/* Product Title with Green Tick */}
        <h2 className="text-2xl font-bold mb-4 text-left w-full max-w-md">
          #1211 - TradingView Premium 3 Months Plan ✅
        </h2>

        {/* Product Image */}
        <img
          src={productImage}
          alt="TradingView Premium Plan"
          className="w-full max-w-xs sm:max-w-md rounded-lg shadow-md mb-4"
        />

        {/* Email Activation and Client Satisfaction */}
        <div className="text-left max-w-md mb-4">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Activate on your personal email</strong>: No need to share any credentials, keeping your account secure.</li>
            <li><strong>Quick and hassle-free activation</strong>: Get your plan activated within 10-20 minutes of purchase.</li>
          </ul>
        </div>

        {/* Star Rating */}
        <div className="flex items-center text-yellow-400 mb-6 text-left w-full max-w-md">
          <div className="flex items-center">
            <FaStar className="text-2xl" />
            <FaStar className="text-2xl" />
            <FaStar className="text-2xl" />
            <FaStar className="text-2xl" />
          </div>
          <span className="ml-2 text-black font-semibold text-lg">4.6/5</span>
        </div>

        {/* Product Description */}
        <div className="text-black text-left max-w-md space-y-6 mb-16"> {/* Added mb-16 to prevent overlap */}

          <h3 className="text-xl font-semibold">Unlock Powerful Trading Features:</h3>

          <ul className="list-disc pl-5 space-y-2">
            <li><strong>8 Charts Per Tab:</strong> View multiple assets and timeframes on one screen to track market movements effortlessly.</li>
            <li><strong>25 Indicators Per Chart:</strong> Deepen your technical analysis with up to 25 powerful, customizable indicators on each chart.</li>
            <li><strong>20K Historical Bars:</strong> Analyze up to 20,000 historical bars to track long-term price movements and trends.</li>
            <li><strong>400 Price Alerts:</strong> Set up to 400 price alerts to stay informed on critical price movements.</li>
            <li><strong>400 Technical Alerts:</strong> Create 400 technical alerts to be notified of indicator-based market events.</li>
            <li><strong>50 Parallel Chart Connections:</strong> Monitor up to 50 charts simultaneously for better market analysis.</li>
            <li><strong>No Ads:</strong> Enjoy an ad-free experience, focusing entirely on your trading.</li>
            <li><strong>Volume Profile:</strong> Analyze trading volumes at specific price levels to understand market behavior.</li>
            <li><strong>Custom Timeframes:</strong> Set up custom time intervals that align with your specific trading strategy.</li>
            <li><strong>Custom Range Bars:</strong> Analyze market trends using custom range bars for more visual insights.</li>
            <li><strong>Multiple Watchlists:</strong> Organize and track your favorite assets with multiple, customizable watchlists.</li>
            <li><strong>Bar Replay:</strong> Replay past price movements to backtest your strategies and refine your trading approach.</li>
            <li><strong>Indicators on Indicators:</strong> Stack indicators on top of each other for advanced market insights.</li>
            <li><strong>Chart Data Export:</strong> Export your chart data to CSV or other formats for further analysis outside of TradingView.</li>
            <li><strong>Intraday Renko, Kagi, Line Break, Point & Figure Charts:</strong> Use specialized chart types for unique insights into price action and market trends.</li>
            <li><strong>Charts Based on Custom Formulas:</strong> Build your own chart formulas tailored to your trading strategy.</li>
            <li><strong>Time Price Opportunity (TPO):</strong> Visualize market activity at different price levels to understand key support and resistance zones.</li>
            <li><strong>Volume Footprint:</strong> Identify where heavy trading volumes occur to gain insights into market sentiment.</li>
            <li><strong>Auto Chart Patterns:</strong> Automatically detect key chart patterns like head-and-shoulders or flags for quicker analysis.</li>
            <li><strong>Second-Based Alerts:</strong> Receive alerts based on second-level price movements for precise trading decisions.</li>
            <li><strong>Alerts That Don't Expire:</strong> Set alerts that remain active until manually turned off, ensuring you never miss a trading opportunity.</li>
            <li><strong>Publishing Invite-Only Scripts:</strong> Share your custom indicators and strategies with a select group of users.</li>
            <li><strong>Second-Based Intervals:</strong> Use second-based intervals for ultra-fast, real-time analysis during high-volatility markets.</li>
          </ul>


          {/* How to Access Section */}
          <h3 className="text-xl font-semibold">How to Access Your TradingView Premium Plan:</h3>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="space-y-2 text-left">
              <p><strong>Make your payment</strong> by clicking the "Buy Now" button below.</p>
              <p>Once your payment is complete, <strong>submit your TradingView username</strong> for verification.</p>
              <p>Our team will <strong>verify your payment</strong> and activate your subscription.</p>
              <p>You will receive an <strong>activation email within 10-20 minutes</strong> with your TradingView Premium plan access.</p>
              <p>If you need assistance, our support team is available to help you.</p>
            </div>
          </div>

          <p className="text-base leading-relaxed text-center font-semibold mt-4">
            Enjoy a seamless trading experience with TradingView Premium.
          </p>

          {/* Placeholder for Client Satisfaction/Proof */}
          <p className="text-base leading-relaxed text-center font-semibold">
            Join over 5000+ active members on Telegram we serve with trust. <a href={proofsUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Proofs And Vouches</a>
          </p>
        </div>
      </div>

      {/* Sticky Bottom Section with Price and Buy Button */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-100 py-4 flex justify-between items-center px-6 shadow-lg border-t">
        <div className="text-black font-bold text-xl">
          ₹499 <span className="text-gray-500 line-through">₹15,000</span>
        </div>
        <a
          href="https://payments.cybermafia.shop" // Redirect to the payment site
          onClick={handleBuyNowClick}
          className="bg-red-500 text-white py-3 px-6 rounded-full hover:bg-red-600 transition duration-300 shadow-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-bold">Buy Now</span>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
