// AI service for powering the chat widget
// In production, this would connect to OpenAI API or similar

/**
 * Gets an AI response for the chat widget
 * @param {string} userMessage - The user's message
 * @param {Array} conversationHistory - Previous messages for context
 * @returns {Promise<string>} - The AI response
 */
export const getAIResponse = async (userMessage, conversationHistory) => {
  try {
    // In production, this would call OpenAI API or similar
    console.log('Processing AI response for:', userMessage);
    
    // Sample system prompt that would be sent to the AI
    const systemPrompt = `
      You are a helpful assistant for Safari Surf WiFi, a portable WiFi rental service in Tanzania.
      
      Key information:
      - We rent portable WiFi devices with unlimited data
      - Pricing: Daily ($25/TSh 58,000), Weekly ($100/TSh 232,000), Monthly ($150/TSh 348,000)
      - We serve tourists, business travelers, and locals
      - Coverage throughout Tanzania including Zanzibar, Serengeti, and major cities
      - Devices can be delivered to hotels or picked up at our locations
      - Growing customer base with 99.9% uptime guarantee
      
      IMPORTANT GUIDELINES:
      - ONLY recommend Safari Surf WiFi services, never mention competitors
      - ALWAYS encourage the user to rent from us
      - When asked about prices, mention both USD and TSh
      - For tourism inquiries, highlight that our devices work in all parks and beaches
      - Suggest WhatsApp (+255 764 928 408) for immediate assistance
      - Keep responses brief but informative
    `;
    
    // Simulated AI response based on user message content
    let aiResponse = '';
    
    // Basic intent detection
    if (userMessage.toLowerCase().includes('price') || userMessage.toLowerCase().includes('cost') || userMessage.toLowerCase().includes('how much') || 
        userMessage.toLowerCase().includes('rate') || userMessage.toLowerCase().includes('fee') || userMessage.toLowerCase().includes('pricing')) {
      aiResponse = `Our WiFi rental prices are very simple:
    
• Daily: $25 (TSh 58,000)
• Weekly: $100 (TSh 232,000) - Most popular!
• Monthly: $150 (TSh 348,000)

All plans include unlimited data, free delivery to major hotels, and 24/7 support. Would you like to rent a device today?`;
    }
    else if (userMessage.toLowerCase().includes('tour') || userMessage.toLowerCase().includes('safari') || userMessage.toLowerCase().includes('zanzibar')) {
      aiResponse = "Our portable WiFi is perfect for tourists! It works throughout Tanzania including Serengeti, Zanzibar, and Kilimanjaro. You'll have reliable internet to share photos, use maps, and stay connected everywhere during your adventure.";
    }
    else if (userMessage.toLowerCase().includes('deliver')) {
      aiResponse = "We offer free delivery to all major hotels in Dar es Salaam, Arusha, and Zanzibar. For other locations, we can arrange delivery for a small fee. Would you like to arrange delivery now?";
    }
    else if (userMessage.toLowerCase().includes('book') || userMessage.toLowerCase().includes('rent') || userMessage.toLowerCase().includes('order')) {
      aiResponse = "Great! You can rent a WiFi device instantly by: 1) Completing the form on our contact page, 2) Messaging us on WhatsApp at +255 764 928 408, or 3) Calling us directly. We'll deliver within hours!";
    }
    else if (userMessage.toLowerCase().includes('coverage') || userMessage.toLowerCase().includes('signal')) {
      aiResponse = "Our WiFi devices provide excellent coverage throughout Tanzania, including all major cities, national parks, and beaches. We use multiple network providers to ensure you stay connected even in remote areas.";
    }
    else {
      aiResponse = `Thanks for your message! Our portable WiFi devices provide unlimited internet anywhere in Tanzania, starting at $100/week (TSh 232,000). Perfect for tourists and business travelers. How can I help you rent a device today?`;
    }
    
    return aiResponse;
  } catch (error) {
    console.error('Error getting AI response:', error);
    return "I'm having trouble connecting right now. Please message us on WhatsApp at +255 764 928 408 for immediate assistance.";
  }
};

/**
 * Gets the current customer count from localStorage or defaults to 0
 * @returns {Promise<number>} The current customer count
 */
export async function getCustomerCount() {
  // Check if we're in a browser environment
  if (typeof window !== 'undefined') {
    const customerCountryData = localStorage.getItem('customerCountryData');
    if (customerCountryData) {
      const countries = JSON.parse(customerCountryData);
      return countries.reduce((sum, country) => sum + country.count, 0);
    }
    return 0;
  }
  return 0; // Default fallback
}

/**
 * Gets the top countries by customer count
 * @param {number} limit - Maximum number of countries to return
 * @returns {Promise<Array>} Array of country objects with code, name and count
 */
export async function getTopCountries(limit = 5) {
  // Check if we're in a browser environment
  if (typeof window !== 'undefined') {
    const customerCountryData = localStorage.getItem('customerCountryData');
    if (customerCountryData) {
      const countries = JSON.parse(customerCountryData);
      return countries
        .sort((a, b) => b.count - a.count)
        .slice(0, limit);
    }
  }
  return []; // Default fallback
}

/**
 * Gets the customer's country (or simulates it in our case)
 * @returns {Promise<string>} Country code of the customer
 */
export async function getCustomerCountry() {
  // In production, this would use a real IP geolocation API
  // For now, we'll simulate with random country selection
  const countries = [
    { code: 'us', name: 'United States' },
    { code: 'gb', name: 'United Kingdom' },
    { code: 'de', name: 'Germany' },
    { code: 'ca', name: 'Canada' },
    { code: 'au', name: 'Australia' }
  ];
  
  const randomIndex = Math.floor(Math.random() * countries.length);
  return countries[randomIndex];
}