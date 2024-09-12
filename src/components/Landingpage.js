import React, { useEffect, useState } from 'react';
import { FaWhatsapp, FaTelegram, FaStar } from 'react-icons/fa';
import logo from './lgo.jpeg';
import productImage from './3P.png';

const LandingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('3-month');
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const planDetails = {
    '3-month': { price: 495, strikeThroughPrice: 11985 },
    '6-month': { price: 995, strikeThroughPrice: 23470 },
    '12-month': { price: 1795, strikeThroughPrice: 47940 }
  };

  const whatsappUrl = `https://wa.me/9557338330`;
  const telegramUrl = `https://t.me/dextersenior`;
  const proofsUrl = 'https://shorturl.at/Nsuke';

  // Function to send events to backend for Conversion API
  const sendEventToBackend = async (eventName, additionalData = {}) => {
    const backendUrl = 'https://backend1-ztvf.onrender.com/track-event'; // Your backend URL

    const postData = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_source_url: window.location.href,
      action_source: 'website',
      user_data: {
        email: 'testuser@example.com', // Replace with real user data
        client_ip_address: await fetch('https://api64.ipify.org?format=json').then(res => res.json()).then(data => data.ip), // Fetch IP dynamically
        client_user_agent: navigator.userAgent
      },
      ...additionalData
    };

    try {
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });

      if (!response.ok) {
        console.error('Error sending event to backend:', response);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Track PageView on load (both browser-side and server-side)
  useEffect(() => {
    // Browser-side pixel tracking
    

    // Server-side tracking via CAPI
    sendEventToBackend('PageView');
  }, []);

  // Handle WhatsApp button click (both browser-side and server-side)
  const handleWhatsappClick = () => {
    // Browser-side pixel tracking
    if (window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: 'WhatsApp Contact',
        content_category: 'Contact',
        content_type: 'button',
      });
    }

    // Server-side tracking via CAPI
    sendEventToBackend('ViewContent', {
      custom_data: {
        content_name: 'WhatsApp Contact',
        content_category: 'Contact',
      }
    });

    window.open(whatsappUrl, '_blank');
  };

  // Handle Proofs button click (both browser-side and server-side)
  const handleProofsClick = () => {
    // Browser-side pixel tracking
    if (window.fbq) {
      window.fbq('trackCustom', 'ProofAndVouches', {
        action: 'Click',
      });
    }

    // Server-side tracking via CAPI
    sendEventToBackend('ProofAndVouches', {
      custom_data: {
        action: 'Click',
      }
    });

    window.open(proofsUrl, '_blank');
  };

  // Handle Telegram button click (browser only)
  const handleTelegramClick = () => {
    window.open(telegramUrl, '_blank');
  };

  // Handle Buy Now button click (both browser-side and server-side)
  const handleBuyNowClick = async () => {
    setIsLoading(true); // Set loading state to true when Buy Now is clicked
    const planPrice = planDetails[selectedPlan].price;

    // Browser-side pixel tracking
    if (window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        value: planPrice,
        currency: 'INR',
        content_ids: [`plan_${selectedPlan}`],
        content_type: 'product',
        num_items: 1,
      });
    }

    // Server-side tracking via CAPI
    sendEventToBackend('InitiateCheckout', {
      custom_data: {
        value: planPrice,
        currency: 'INR',
        content_ids: [`plan_${selectedPlan}`],
      }
    });

    // Redirect to the payment page after tracking
    try {
      const response = await fetch('https://backend1-ztvf.onrender.com/track-event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          event_name: 'InitiateCheckout',
          event_time: Math.floor(Date.now() / 1000),
          event_source_url: window.location.href,
          action_source: 'website',
          user_data: {
            email: 'testuser@example.com', // Replace with real data
            client_ip_address: await fetch('https://api64.ipify.org?format=json').then(res => res.json()).then(data => data.ip), // Fetch IP dynamically
            client_user_agent: navigator.userAgent
          },
          custom_data: {
            value: planPrice,
            currency: 'INR',
            content_ids: [`plan_${selectedPlan}`],
          }
        })
      });

      if (response.ok) {
        window.location.href = `https://payments.cybermafia.shop?amount=${planPrice}`;
      } else {
        console.error('Error sending event to backend:', response);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false); // Reset loading state after redirect or error
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-white text-center p-4">
  <header className="w-full bg-white shadow-md py-4 px-6 fixed top-0 left-0 flex justify-between items-center z-10 flex-wrap">
    <div className="flex items-center flex-shrink-0">
      <img src={logo} alt="Dexter Luxuries Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2" />
      <h1 className="text-base md:text-lg font-bold text-black uppercase tracking-wide whitespace-nowrap">
        Dexter Luxuries
      </h1>
    </div>

    <div className="flex items-center space-x-2 md:space-x-4 mt-2 md:mt-0">
      <button onClick={handleWhatsappClick} className="bg-green-500 text-white p-2 md:py-3 md:px-6 rounded-full hover:bg-green-600 transition duration-300 shadow-md">
        <FaWhatsapp />
      </button>
      <button onClick={handleTelegramClick} className="bg-blue-500 text-white p-2 md:py-3 md:px-6 rounded-full hover:bg-blue-600 transition duration-300 shadow-md">
        <FaTelegram />
      </button>
    </div>
  </header>

  <div className="pt-24 flex flex-col justify-center items-center mb-40">
    <h2 className="text-2xl font-bold mb-4 text-left w-full max-w-md">#1211 - TradingView Premium {selectedPlan.replace('-', ' ')} Plan ✅</h2>

    <img src={productImage} alt="TradingView Premium Plan" className="w-full max-w-xs sm:max-w-md rounded-lg shadow-md mb-4" />

    <div className="flex space-x-4 mb-8">
      <button onClick={() => setSelectedPlan('3-month')} className={`py-2 px-4 rounded-full text-white font-semibold ${selectedPlan === '3-month' ? 'bg-red-500' : 'bg-gray-400'}`}>
        3 Month
      </button>
      <button onClick={() => setSelectedPlan('6-month')} className={`py-2 px-4 rounded-full text-white font-semibold ${selectedPlan === '6-month' ? 'bg-red-500' : 'bg-gray-400'}`}>
        6 Month
      </button>
      <button onClick={() => setSelectedPlan('12-month')} className={`py-2 px-4 rounded-full text-white font-semibold ${selectedPlan === '12-month' ? 'bg-red-500' : 'bg-gray-400'}`}>
        12 Month
      </button>
    </div>

    <div className="text-left max-w-md mb-4">
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Activate on your personal email:</strong> No need to share any credentials, keeping your account secure.</li>
        <li><strong>Quick and hassle-free activation:</strong> Get your plan activated within 10-20 minutes of purchase.</li>
      </ul>
    </div>

    <div className="flex items-center text-yellow-400 mb-6 text-left w-full max-w-md">
      <div className="flex items-center">
        <FaStar className="text-2xl" />
        <FaStar className="text-2xl" />
        <FaStar className="text-2xl" />
        <FaStar className="text-2xl" />
      </div>
      <span className="ml-2 text-black font-semibold text-lg">4.6/5</span>
      <button onClick={handleProofsClick} className="ml-4 text-blue-500 hover:underline">
        Proofs And Vouches
      </button>
    </div>

    <div className="text-black text-left max-w-md space-y-6 mb-16">
      <h3 className="text-xl font-semibold">Unlock Powerful Trading Features📊:</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>8 Charts Per Tab:</strong> View multiple assets and timeframes on one screen.</li>
        <li><strong>25 Indicators Per Chart:</strong> Deepen your technical analysis with customizable indicators.</li>
        <li><strong>20K Historical Bars:</strong> Analyze up to 20,000 historical bars for long-term trends.</li>
        <li><strong>400 Price Alerts:</strong> Stay informed on critical price movements with up to 400 alerts.</li>
        <li><strong>400 Technical Alerts:</strong> Receive alerts for indicator-based market events.</li>
        <li><strong>No Ads:</strong> Enjoy an ad-free experience, fully focused on trading.</li>
        <li><strong>Volume Profile:</strong> Analyze trading volumes to understand market behavior.</li>
        <li><strong>Custom Timeframes:</strong> Set up time intervals that align with your trading strategy.</li>
        <li><strong>Multiple Watchlists:</strong> Organize and track your favorite assets with customizable watchlists.</li>
        <li><strong>Bar Replay:</strong> Replay past price movements to backtest strategies.</li>
        <li><strong>Indicators on Indicators:</strong> Stack indicators for advanced market insights.</li>
        <li><strong>Chart Data Export:</strong> Export your chart data to CSV for further analysis.</li>
        <li><strong>Intraday Renko, Kagi, Line Break, Point & Figure Charts:</strong> Use specialized charts for unique price action insights.</li>
        <li><strong>Custom Formulas:</strong> Build custom formulas tailored to your trading style.</li>
        <li><strong>Time Price Opportunity (TPO):</strong> Visualize market activity and key support and resistance zones.</li>
        <li><strong>Volume Footprint:</strong> Gain insights into market sentiment based on trading volumes.</li>
        <li><strong>Auto Chart Patterns:</strong> Automatically detect key chart patterns for faster analysis.</li>
        <li><strong>Second-Based Alerts:</strong> Receive alerts based on second-level price movements.</li>
        <li><strong>Alerts That Don't Expire:</strong> Set alerts that remain active until manually turned off.</li>
        <li><strong>Publishing Invite-Only Scripts:</strong> Share custom indicators with select users.</li>
        <li><strong>Second-Based Intervals:</strong> Use second-based intervals for ultra-fast analysis.</li>
      </ul>
    </div>

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
  </div>

  <div className="fixed bottom-0 left-0 w-full bg-gray-100 py-4 flex justify-between items-center px-6 shadow-lg border-t">
    <div className="text-black font-bold text-xl">
      ₹{planDetails[selectedPlan].price}{' '}
      {selectedPlan === '12-month' && <span className="text-red-500 font-semibold">Limited Offer</span>}
      <span className="text-gray-500 line-through">₹{planDetails[selectedPlan].strikeThroughPrice}</span>
    </div>
    <button
      onClick={handleBuyNowClick}
      className={`bg-red-500 text-white py-3 px-6 rounded-full transition duration-300 shadow-md cursor-pointer ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-600'}`}
      disabled={isLoading}
    >
      <span className="font-bold">{isLoading ? 'Loading...' : 'Buy Now'}</span>
    </button>
  </div>
</div>

  );
};

export default LandingPage;
