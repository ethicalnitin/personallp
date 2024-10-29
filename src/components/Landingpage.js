import React, { useEffect, useState } from 'react';
import { FaWhatsapp, FaTelegram, FaStar } from 'react-icons/fa';
import logo from './lgo.jpeg';
import productImage from './store.png';

const LandingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('Lifetime');
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const planDetails = {
    'Lifetime': { price: 1995, strikeThroughPrice: 14999 },
  
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
console.log('pageview capi lp done');
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
    // Browser-side pixel tracking
    if (window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: 'Telegram',
        content_category: 'Contact',
        content_type: 'button',
      });
    }

    // Server-side tracking via CAPI
    sendEventToBackend('ViewContent', {
      custom_data: {
        content_name: 'Telegram',
        content_category: 'Contact',
      }
    });

    window.open(telegramUrl, '_blank');
  };

  // Handle Buy Now button click (both browser-side and server-side)
  const handleBuyNowClick = async () => {
    // If already loading, prevent multiple clicks
    if (isLoading) return;
  
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
    try {
      await sendEventToBackend('InitiateCheckout', {
        custom_data: {
          value: planPrice,
          currency: 'INR',
          content_ids: [`plan_${selectedPlan}`],
        }
      });
  
      console.log('pageview capi lp done');
      window.location.href = `https://payments.cybermafia.shop?amount=${planPrice}`;
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false); // Reset loading state after the redirect or error
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
    <h2 className="text-2xl font-bold mb-4 text-left w-full max-w-md">#32322 - Digital Store for Online Sellers | Personal QR payment | Fully Automated - 2024✅</h2>

    <img src={productImage} alt="TradingView Premium Plan" className="w-full max-w-xs sm:max-w-md rounded-lg shadow-md mb-4" />

    <div className="flex space-x-4 mb-8">
      <button onClick={() => setSelectedPlan('Lifetime')} className={`py-2 px-4 rounded-full text-white font-semibold ${selectedPlan === 'Lifetime' ? 'bg-red-500' : 'bg-gray-400'}`}>
        Lifetime
      </button>
    </div>

    <div className="text-left max-w-md mb-4">
  <ul className=" pl-5 space-y-2">
    <li>
      <strong>Fastest selling product amongst telegram sellers and online digital sellers❤️‍🔥</strong> 
    </li>
  </ul>
</div>

<div className="bg-yellow-200 border border-yellow-500 rounded-md p-4 mb-4 animate-pulse">

  <ul className="list-disc list-inside text-left">
    <li className="font-bold">
      Accept payments on ANY QR code
    </li>
    <li className="font-bold">
      Instant Payment Notifications
    </li>
    <li className="font-bold">
      Fully Automated Workflow
    </li>
    <li className="font-bold">
      User-Friendly Interface
    </li>
    
  </ul>

</div>



<div className="bg-green-200 border border-green-500 rounded-md p-4 mb-4">
  <p className="text-center font-bold">
    Your store is now priced at just <span className="text-green-600">₹1,995</span> <span className="line-through text-red-600">₹14999</span>!
  </p>
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
  <h3 className="text-xl font-semibold"> Powerful Digital Store Features💼:</h3>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Lifetime Access:</strong> One-time purchase gives you lifetime access to the store.</li>
    <li><strong>Easy Payment Setup:</strong> Can easilly change payment details for receiving payments</li>
    <li><strong>Product Management:</strong> Effortlessly update or delete products from the store as needed.</li>
    <li><strong>Custom Telegram Notifications:</strong> Receive real-time payment updates via Telegram from a personalized bot.</li>
    <li><strong>Fully Automated Workflow:</strong> The entire purchase and payment process is automated for a smooth experience.</li>
    
    <li><strong>Perfect for Digital Product Sales:</strong> Ideal for selling digital products like subscriptions, software, e-books, and more.</li>
  </ul>
</div>


<h3 className="text-xl font-semibold text-left">How to Purchase & Full Details:</h3>
<div className="bg-gray-100 border-l-amber-950 border-l-10 border-solid p-4 rounded-md space-y-2 text-left">
  <p><strong>Step 1:</strong> Click on the "Buy Now" button to proceed to the payment page.</p>
  <p><strong>Step 2:</strong> Complete the payment using your preferred method.</p>
  <p><strong>Step 3:</strong> After payment, fill in the required details on the payment website that appears.</p>
  <p><strong>Step 4:</strong> Once you submit the details, you will be redirected to WhatsApp.</p>
  <p><strong>Step 5:</strong> Access your digital store instantly via the link provided on WhatsApp.</p>
</div>

 

  </div>

  <div className="fixed bottom-0 left-0 w-full bg-gray-100 py-4 flex justify-between items-center px-6 shadow-lg border-t">
    <div className="text-black font-bold text-xl">
      ₹{planDetails[selectedPlan].price}{' '}
      {selectedPlan === 'Lifetime' && <span className="text-red-500 font-semibold">Limited Offer</span>}
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
