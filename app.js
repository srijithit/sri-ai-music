/*
   SRI AI Music - Application Engine & State Controller
   Robust Single Page Application (SPA) manager for 15 screens, mock audio engine,
   AI DJ chat, smart playlist builder, lyrics translator, and accessibility toggles.
*/

// --- DATA SEEDS ---
const SUPPORTED_LANGUAGES = [
  { name: 'English', local: 'English' },
  { name: 'Hindi', local: 'हिन्दी' },
  { name: 'Telugu', local: 'తెలుగు' },
  { name: 'Tamil', local: 'தமிழ்' },
  { name: 'Kannada', local: 'ಕನ್ನಡ' },
  { name: 'Malayalam', local: 'മലയാളം' },
  { name: 'Marathi', local: 'मराठी' },
  { name: 'Gujarati', local: 'ગુજરાતી' },
  { name: 'Punjabi', local: 'ਪੰਜਾਬੀ' },
  { name: 'Bengali', local: 'বাংলা' },
  { name: 'Odia', local: 'ଓଡ଼ିଆ' },
  { name: 'Urdu', local: 'اردو' },
  { name: 'Assamese', local: 'অসমীয়া' },
  { name: 'Konkani', local: 'कोंकणी' },
  { name: 'Sanskrit', local: 'संस्कृतम्' }
];

const ONBOARD_GENRES = ['Classical', 'Bollywood', 'Indie Folk', 'Synthwave', 'Ghazals', 'Electronic', 'Sufi', 'Rap & Drill', 'Carnatic Devotional', 'Lo-Fi Lounge'];
const ONBOARD_ARTISTS = [
  { name: 'A.R. Rahman', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80' },
  { name: 'Sidhu Moose Wala', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80' },
  { name: 'Diljit Dosanjh', img: 'https://images.unsplash.com/photo-1620122303020-43ec4b6cf7f8?auto=format&fit=crop&w=150&q=80' },
  { name: 'Shreya Ghoshal', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80' },
  { name: 'Sid Sriram', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80' },
  { name: 'Prateek Kuhad', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80' }
];

const TRACK_LIBRARY = [
  {
    id: 1,
    title: 'Monsoon Bhairav',
    artist: 'Classical AI Ensemble',
    album: 'Raagas of India Vol. 4',
    artwork: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=400&q=80',
    duration: 225, // seconds
    aiText: 'Bhairav raaga triggers relaxation response, synced to 72 BPM to lower heart rates.',
    lyrics: [
      { text: 'Soft rain falls on the temple steps', trans: 'मंदिर की सीढ़ियों पर हल्की बारिश गिरती है' },
      { text: 'The tanpura strings echo in the silent dawn', trans: 'शांत भोर में तानपूरा के स्वर गूंजते हैं' },
      { text: 'Connecting the mind back to its source', trans: 'मन को उसके मूल स्रोत से जोड़ना' },
      { text: 'Every sound is a prayer in the monsoon wind', trans: 'मानसूनी हवा में हर ध्वनि एक प्रार्थना है' }
    ]
  },
  {
    id: 2,
    title: 'Monsoon Bhairav (Strings)',
    artist: 'L. Subramaniam x Tabla Beats',
    album: 'Seasonal Ragas',
    artwork: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=400&q=80',
    duration: 288,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    aiText: 'A monsoon-inspired raga with live string orchestration and AI-generated tabla, 95 BPM, transporting listeners to rain-soaked evenings in Kerala.',
    lyrics: [
      { text: 'Cruising through the Western Ghats at dusk', trans: 'धूल भरे रास्तों से होकर पश्चिमी घाटों की सैर' },
      { text: 'Green hills rise into the misty sky', trans: 'हरे पहाड़ धुंधले आसमान में उठते हैं' },
      { text: 'Chasing the light that never fades', trans: 'उस प्रकाश का पीछा करना जो कभी फीका नहीं पड़ता' }
    ]
  },
  {
    id: 4,
    title: 'Sufi Nights (Electronic Remix)',
    artist: 'Nusrat Fateh Ali Khan x Producer JAI',
    album: 'Qawwali Modernized',
    artwork: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=400&q=80',
    duration: 256,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    aiText: 'Timeless Sufi qawwali poetry layered with modern electronic production. 85 BPM, perfect for evening introspection and spiritual journeys.',
    lyrics: [
      { text: 'Inside this clay vessel are gardens and forests', trans: 'इस माटी के घट के भीतर बाग और बगीचे हैं' },
      { text: 'And inside it is the creator of the world', trans: 'और इसके भीतर ही सृष्टि का कर्ता है' },
      { text: 'Listen to the unstruck sound of the cosmos', trans: 'ब्रह्मांड की अनहद नाद सुनो' }
    ]
  },
  {
    id: 1,
    title: 'Raga Yaman (AI Synth)',
    artist: 'Anoushka Shankar x AI',
    album: 'Digital Ragas Collection',
    artwork: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80',
    duration: 312,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    aiText: 'Traditional Raga Yaman reimagined with modern AI synthesis and live sitar sampling, 120 BPM, ideal for focused work and meditation.',
    lyrics: [
      { text: 'Folk beats colliding with modern streets', trans: 'आधुनिक गलियों से टकराती लोक धुनें' },
      { text: 'We write our destiny with our own hands', trans: 'हम अपनी तकदीर अपने हाथों से लिखते हैं' },
      { text: 'No boundaries can hold our spirits back', trans: 'कोई भी सीमा हमारी आत्मा को पीछे नहीं रोक सकती' }
    ]
  },
  {
    id: 5,
    title: 'Sanskrit Meditation',
    artist: 'Vedic Chants x 432Hz Science',
    album: 'Sanskrit Meditations',
    artwork: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=400&q=80',
    duration: 310,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    aiText: 'Sanskrit chants layered with low frequency drone (432Hz harmonic tuning) for focus.',
    lyrics: [
      { text: 'Shantam shivam advaitam', trans: 'शांतम शिवम अद्वैतम (शांति, कल्याण और अद्वैत)' },
      { text: 'Pure consciousness radiating through space', trans: 'अंतरिक्ष के माध्यम से विकीर्ण शुद्ध चेतना' },
      { text: 'Transcending all dualities of life', trans: 'जीवन के सभी द्वंद्वों से परे जाना' }
    ]
  },
  {
    id: 6,
    title: 'Singappenney (AI Reverb)',
    artist: 'A.R. Rahman x AI Chorus',
    album: 'Tamil Resiliency Pack',
    artwork: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80',
    duration: 210,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    aiText: 'Empowering Tamil percussion drums integrated with motivational tempo ranges to stimulate endorphins.',
    lyrics: [
      { text: 'Singappenney ezhundhu vaa', trans: 'शेरनी, उठो और आगे बढ़ो (Lioness, rise and step forward)' },
      { text: 'Unakkana paadhaiyai nee uruvaakku', trans: 'अपनी राह खुद बनाओ (Create your own path)' },
      { text: 'Unakkul irukkum sakthiyai ari', trans: 'अपने भीतर की शक्ति को पहचानो (Realize the power within you)' }
    ]
  },
  {
    id: 7,
    title: 'Kurukku Siruthavale (Lo-Fi)',
    artist: 'Hariharan x Mahalakshmi',
    album: 'Tamil Lo-Fi Classics',
    artwork: 'https://images.unsplash.com/photo-1487180142328-054b783fc471?auto=format&fit=crop&w=400&q=80',
    duration: 240,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    aiText: 'Traditional Tamil flute scales layered with modern lo-fi vinyl hiss for deep evening relaxation.',
    lyrics: [
      { text: 'Kurukku siruthavale enna kolliponaal', trans: 'पतली कमर वाली लड़की मुझे मार गई (The girl with the slender waist stole my soul)' },
      { text: 'En nenjil un ninaivu eppodhum irukkum', trans: 'मेरे दिल में तुम्हारी याद हमेशा रहेगी (Your memory will stay in my heart forever)' }
    ]
  },
  {
    id: 3,
    title: 'Amritsar Drill',
    artist: 'Punjabi MC x Trap Foundation',
    album: 'Bhangra Beats Vol.3',
    artwork: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80',
    duration: 198,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    aiText: 'High-energy Punjabi drums fused with 138 BPM drill beats for cardio workouts and adrenaline.',
    lyrics: [
      { text: 'Amritsar veere vee', trans: 'अमृतसर के भाई (Brothers of Amritsar)' },
      { text: 'Dhol baaje ri dhol baaje', trans: 'ढोल बजता है (Drums beat on)' },
      { text: 'Bhangra dance kare', trans: 'भांग्रा नाचो (Dance the bhangra)' }
    ]
  },
  {
    id: 8,
    title: 'Pooja Thala',
    artist: 'A. Thyagaraja x Modern Strings',
    album: 'Classical Meets Devotion',
    artwork: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80',
    duration: 195,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    aiText: 'Carnatic classical devotion in Tamil, perfect for morning meditation with traditional Veena composition.',
    lyrics: [
      { text: 'Pooja thala valinaai', trans: 'पूजा को ही मूल मानो (Worship is the foundation)' },
      { text: 'Shankara thanimai nila', trans: 'शंकर की शक्ति के बिना कुछ नहीं (Without Shiva\'s power, nothing exists)' },
      { text: 'Thirumagal arulinum', trans: 'देवी का आशीर्वाद सदा मिलता रहे (May the goddess\'s blessings flow forever)' }
    ]
  },
  {
    id: 9,
    title: 'Kadhal Poovinile (Digital Mix)',
    artist: 'Ilaiyaraaja x Sid Sriram',
    album: 'Tamil Love Synthwave',
    artwork: 'https://images.unsplash.com/photo-1445039076565-d26e75ad52da?auto=format&fit=crop&w=400&q=80',
    duration: 205,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    aiText: 'Retro synthwave meets Tamil romantic poetry with 80s nostalgia and modern production at 95 BPM.',
    lyrics: [
      { text: 'Kadhal poovinile manjolai', trans: 'प्रेम के फूल में मधु है (Love\'s flower holds nectar)' },
      { text: 'Unnai adithu vittai en thalaivan', trans: 'मैंने तुम्हें अपने दिल में बसा लिया (I\'ve enshrined you in my heart)' },
      { text: 'Varai nammalai eruppadhai', trans: 'हम साथ हैं हमेशा (We are forever together)' }
    ]
  },
  {
    id: 10,
    title: 'Kaveri Mulla',
    artist: 'Susheela Raman x AI Tabla',
    album: 'Rivers of Tamil Nadu',
    artwork: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=400&q=80',
    duration: 220,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    aiText: 'Celebrates the sacred Kaveri river with traditional Tamil folk rhythms and contemporary tabla patterns.',
    lyrics: [
      { text: 'Kaveri mulla valam thazha', trans: 'कावेरी नदी की घाटी (Kaveri river valley flows)' },
      { text: 'Mun vaalkai veru vittai', trans: 'यह हमारे पूर्वजों की जीवन रेखा है (It\'s the lifeline of our ancestors)' },
      { text: 'En nattil ennangal vaalkai', trans: 'हमारे देश की सांस्कृतिक धरोहर (Our cultural legacy flows)' }
    ]
  },
  {
    id: 11,
    title: 'Margazhi Mazhai',
    artist: 'K. Unnikrishnan x Composers AI',
    album: 'Winter Rains of Tamil Land',
    artwork: 'https://images.unsplash.com/photo-1487415380519-e21cc028cb29?auto=format&fit=crop&w=400&q=80',
    duration: 185,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    aiText: 'Celebrate the Tamil harvest month of Margazhi with raindrop percussion and 70 BPM meditative flows.',
    lyrics: [
      { text: 'Margazhi mazhai vandhu sollum', trans: 'मार्गशीर्ष की बारिश आती है (December rains arrive)' },
      { text: 'Kanam vallarkai ennai ketta', trans: 'फसलें लहराती हैं (Crops dance in the fields)' },
      { text: 'Thirunaal nenjila vaalkai', trans: 'त्योहार हमारे दिलों में रहते हैं (Festivals live in our hearts)' }
    ]
  },
  {
    id: 12,
    title: 'Oruvan Oruvan (Unity Anthem)',
    artist: 'TamilNadu United Music',
    album: 'Modern Tamil Pride',
    artwork: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80',
    duration: 198,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    aiText: 'Uplifting Tamil anthem about unity and pride, blending traditional instruments with trap beats at 130 BPM.',
    lyrics: [
      { text: 'Oruvan oruvan naama vaalkai', trans: 'एक-एक करके हम जीवन जीते हैं (Together we live stronger)' },
      { text: 'Mannargal mayilai nila', trans: 'हमारी मातृभूमि गौरव की भूमि है (Our motherland is glorious)' },
      { text: 'Thamizh pozhilai naalai maranjaam', trans: 'तमिल भाषा हमारी शक्ति है (Tamil is our strength)' }
    ]
  }
];

const NOTIFICATIONS_SEED = [
  { type: 'friend', text: 'Friend Match: Srijith matched 98% with Aravind on new Sufi releases.' },
  { type: 'concert', text: 'Concert Alert: A.R. Rahman performing live in Pune - 2.5 miles from you!' },
  { type: 'release', text: 'New Release: Maati Folk Collective dropped a Goa Chill Sitar track.' },
  { type: 'offer', text: 'AI Special: Upgrade to Ultra HiFi today and get a custom Sound Capsule.' }
];

// --- STATE MANAGEMENT ---
let appState = {
  currentTrackIndex: 0,
  isPlaying: false,
  currentTime: 0,
  volume: 70, // 0 to 100
  activeScreen: 'screen-home',
  selectedLanguages: ['Hindi', 'English'],
  selectedGenres: ['Bollywood', 'Classical'],
  selectedArtists: ['A.R. Rahman'],
  selectedGoals: ['focus'],
  playbackInterval: null,
  customPlaylists: [
    { title: 'My Sanskrit Chants', tracksCount: 5, bg: 'linear-gradient(135deg, #1e1b4b, #311042)' }
  ],
  aiChatHistory: [
    { sender: 'assistant', text: 'Hello! I am your SRI Sound Mind AI. How can I personalize your soundscape today?' }
  ]
};

// --- INITIALIZER ---
window.addEventListener('DOMContentLoaded', () => {
  setupSplash();
  setupNavigation();
  setupOnboarding();
  setupLogin();
  setupMainGrids();
  setupSearchEngine();
  setupAudioPlayer();
  setupAiAssistant();
  setupSettings();
  setupNotifications();
});

// 1. SPLASH SCREEN
function setupSplash() {
  const splash = document.getElementById('splash-screen');
  setTimeout(() => {
    splash.style.opacity = '0';
    setTimeout(() => {
      splash.style.display = 'none';
    }, 800);
  }, 2600); // 2.6 seconds load
}

// 2. VIEW NAVIGATION & SPA CORE
function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item, #sidebar-premium-btn, #header-notification-btn, #header-profile-badge');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const targetScreen = item.getAttribute('data-target');
      if (targetScreen) {
        switchScreen(targetScreen);
        
        // Remove active from nav links
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        // Highlight active if clicked standard nav
        if (item.classList.contains('nav-item')) {
          item.classList.add('active');
        }
      }
    });
  });

  // Mobile Nav Tab click listeners
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
  mobileNavItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetScreen = item.getAttribute('data-target');
      if (targetScreen) {
        switchScreen(targetScreen);
        
        mobileNavItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        // Synchronize sidebar nav active indicators
        document.querySelectorAll('.nav-item').forEach(nav => {
          if (nav.getAttribute('data-target') === targetScreen) {
            nav.classList.add('active');
          } else {
            nav.classList.remove('active');
          }
        });
      }
    });
  });

  // AI Panel Toggle (Right side panel)
  const aiToggle = document.getElementById('header-ai-toggle');
  const closePanelBtn = document.getElementById('btn-close-ai-panel');
  const shell = document.getElementById('app-shell');
  
  aiToggle.addEventListener('click', () => {
    shell.classList.toggle('panel-collapsed');
  });

  closePanelBtn.addEventListener('click', () => {
    shell.classList.add('panel-collapsed');
  });
}

function switchScreen(screenId) {
  document.querySelectorAll('.app-screen').forEach(screen => {
    screen.classList.remove('active');
  });
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
    appState.activeScreen = screenId;
    
    // Auto-scroll main window back to top on switch
    document.querySelector('.main-content').scrollTop = 0;
  }
}

// 3. ONBOARDINGPersonalization Setup
function setupOnboarding() {
  // Inject Languages
  const langGrid = document.getElementById('language-selection-grid');
  SUPPORTED_LANGUAGES.forEach(lang => {
    const card = document.createElement('div');
    card.className = `select-card ${appState.selectedLanguages.includes(lang.name) ? 'selected' : ''}`;
    card.setAttribute('data-val', lang.name);
    card.innerHTML = `
      <div style="font-weight:700; font-size:15px; margin-bottom:4px;">${lang.local}</div>
      <div style="font-size:11px; color:var(--text-secondary);">${lang.name}</div>
    `;
    card.addEventListener('click', () => {
      card.classList.toggle('selected');
    });
    langGrid.appendChild(card);
  });

  // Inject Genres
  const genreGrid = document.getElementById('genre-selection-grid');
  ONBOARD_GENRES.forEach(genre => {
    const card = document.createElement('div');
    card.className = `select-card ${appState.selectedGenres.includes(genre) ? 'selected' : ''}`;
    card.setAttribute('data-val', genre);
    card.innerHTML = `<span>${genre}</span>`;
    card.addEventListener('click', () => {
      card.classList.toggle('selected');
    });
    genreGrid.appendChild(card);
  });

  // Inject Artists
  const artistGrid = document.getElementById('artist-selection-grid');
  ONBOARD_ARTISTS.forEach(artist => {
    const card = document.createElement('div');
    card.className = `select-card ${appState.selectedArtists.includes(artist.name) ? 'selected' : ''}`;
    card.setAttribute('data-val', artist.name);
    card.innerHTML = `
      <img src="${artist.img}" alt="${artist.name}" style="width:50px; height:50px; border-radius:50%; object-fit:cover; margin-bottom:8px;">
      <div style="font-size:13px; font-weight:600;">${artist.name}</div>
    `;
    card.addEventListener('click', () => {
      card.classList.toggle('selected');
    });
    artistGrid.appendChild(card);
  });

  // Goal cards listener
  document.querySelectorAll('#goals-selection-grid .select-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('selected');
    });
  });

  // Wizard Steps Toggle Logic
  document.getElementById('onboard-lang-next').addEventListener('click', () => {
    toggleWizardStep('onboard-step-languages', 'onboard-step-genres');
  });
  document.getElementById('onboard-genre-back').addEventListener('click', () => {
    toggleWizardStep('onboard-step-genres', 'onboard-step-languages');
  });
  document.getElementById('onboard-genre-next').addEventListener('click', () => {
    toggleWizardStep('onboard-step-genres', 'onboard-step-artists');
  });
  document.getElementById('onboard-artist-back').addEventListener('click', () => {
    toggleWizardStep('onboard-step-artists', 'onboard-step-genres');
  });
  document.getElementById('onboard-artist-next').addEventListener('click', () => {
    toggleWizardStep('onboard-step-artists', 'onboard-step-goals');
  });
  document.getElementById('onboard-goals-back').addEventListener('click', () => {
    toggleWizardStep('onboard-step-goals', 'onboard-step-artists');
  });

  document.getElementById('onboard-goals-finish').addEventListener('click', () => {
    // Gather selections
    appState.selectedLanguages = Array.from(document.querySelectorAll('#language-selection-grid .select-card.selected')).map(c => c.getAttribute('data-val'));
    appState.selectedGenres = Array.from(document.querySelectorAll('#genre-selection-grid .select-card.selected')).map(c => c.getAttribute('data-val'));
    appState.selectedArtists = Array.from(document.querySelectorAll('#artist-selection-grid .select-card.selected')).map(c => c.getAttribute('data-val'));
    
    // Update user profile display
    document.getElementById('profile-display-name').innerText = "Srijith (AI Custom)";
    
    // Redirect to home
    switchScreen('screen-home');
    alert("SRI AI customized matching model compiled successfully. Instant weights applied to home feed!");
  });
}

function toggleWizardStep(hideId, showId) {
  document.getElementById(hideId).classList.remove('active');
  document.getElementById(showId).classList.add('active');
}

// 4. LOGIN HANDLERS
function setupLogin() {
  const bypassLogin = () => {
    switchScreen('screen-home');
  };
  document.getElementById('login-guest-btn').addEventListener('click', bypassLogin);
  document.getElementById('login-google-btn').addEventListener('click', bypassLogin);
  document.getElementById('login-apple-btn').addEventListener('click', bypassLogin);
  document.getElementById('login-phone-btn').addEventListener('click', bypassLogin);
  document.getElementById('login-email-btn').addEventListener('click', bypassLogin);
}

// 5. HOME & REUSABLE COMPONENTS INJECTION
function setupMainGrids() {
  // Inject Continue Listening Cards
  const continueGrid = document.getElementById('home-continue-grid');
  continueGrid.innerHTML = '';
  TRACK_LIBRARY.slice(0, 3).forEach(track => {
    continueGrid.appendChild(createMusicCard(track));
  });

  // Inject AI recommendations
  const aiPicksGrid = document.getElementById('home-ai-picks-grid');
  aiPicksGrid.innerHTML = '';
  TRACK_LIBRARY.forEach(track => {
    aiPicksGrid.appendChild(createMusicCard(track));
  });

  // Inject Regional Picks
  const regionalGrid = document.getElementById('home-regional-grid');
  regionalGrid.innerHTML = '';
  TRACK_LIBRARY.slice().reverse().forEach(track => {
    regionalGrid.appendChild(createMusicCard(track));
  });

  // Inject radio chips in Discover
  const radioGrid = document.getElementById('discover-radio-grid');
  radioGrid.innerHTML = '';
  TRACK_LIBRARY.slice(0, 4).forEach(track => {
    radioGrid.appendChild(createMusicCard(track, true));
  });

  // Home Banner Play Button
  document.getElementById('home-banner-play-btn').addEventListener('click', () => {
    playTrackIndex(0);
  });
  
  // Discover Spotlight
  document.getElementById('discover-spotlight-btn').addEventListener('click', () => {
    playTrackIndex(1);
  });

  // Hot Toggles
  document.getElementById('chip-aidj').addEventListener('click', () => {
    triggerAiResponse("Mixing soft acoustic sitar and ambient ocean pads at 68 BPM matching current calm weather pattern.");
  });
  document.getElementById('chip-commute').addEventListener('click', () => {
    triggerAiResponse("Switching to Smart Commute mode. Increasing bass punch and filters to isolate traffic noise.");
  });
  document.getElementById('chip-workout').addEventListener('click', () => {
    triggerAiResponse("Workout mode active. Analyzing heart rate and ramping track BPM to 135.");
  });
  
  // Custom Playlist Creator UI
  renderPlaylists();
  document.getElementById('btn-create-playlist').addEventListener('click', () => {
    const title = prompt("Enter Smart Playlist Name:", "My evening raagas");
    if (title) {
      appState.customPlaylists.push({
        title: title,
        tracksCount: 0,
        bg: 'linear-gradient(135deg, #111827, #1f2937)'
      });
      renderPlaylists();
    }
  });

  // Playlist Prompt generator
  document.getElementById('ai-playlist-generate-btn').addEventListener('click', () => {
    const promptText = document.getElementById('ai-playlist-prompt').value;
    if (!promptText) return;
    
    // Simulate generation loading state
    document.getElementById('ai-playlist-generate-btn').innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Synthesizing...';
    setTimeout(() => {
      appState.customPlaylists.push({
        title: `AI: ${promptText.substring(0, 20)}...`,
        tracksCount: 5,
        bg: 'linear-gradient(135deg, #7C3AED, #EC4899)'
      });
      renderPlaylists();
      document.getElementById('ai-playlist-prompt').value = '';
      document.getElementById('ai-playlist-generate-btn').innerHTML = '<i class="fa-solid fa-wand-magic-sparkles"></i> Generate';
      alert("AI successfully generated playlist matched with 5 lossless tracks matching: " + promptText);
    }, 1800);
  });
}

function createMusicCard(track, isRadio = false) {
  const card = document.createElement('div');
  card.className = 'glass-card music-card';
  card.innerHTML = `
    <div class="card-artwork-wrapper">
      <img class="card-artwork" src="${track.artwork}" alt="${track.title}">
      <button class="play-hover-btn"><i class="fa-solid fa-play"></i></button>
    </div>
    <div class="card-title">${track.title}</div>
    <div class="card-subtitle">${isRadio ? 'Live Broadcast' : track.artist}</div>
  `;
  card.querySelector('.play-hover-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    const idx = TRACK_LIBRARY.findIndex(t => t.id === track.id);
    playTrackIndex(idx);
  });
  card.addEventListener('click', () => {
    const idx = TRACK_LIBRARY.findIndex(t => t.id === track.id);
    playTrackIndex(idx);
    expandFullscreenPlayer();
  });
  return card;
}

function renderPlaylists() {
  const grid = document.getElementById('playlist-custom-grid');
  grid.innerHTML = '';
  appState.customPlaylists.forEach(pl => {
    const card = document.createElement('div');
    card.className = 'glass-card';
    card.style.background = pl.bg;
    card.innerHTML = `
      <div style="height:110px; display:flex; align-items:center; justify-content:center;">
        <i class="fa-solid fa-compact-disc" style="font-size:48px; color:rgba(255,255,255,0.25);"></i>
      </div>
      <h3 style="font-size:15px; margin-bottom:4px;">${pl.title}</h3>
      <p style="font-size:12px; color:var(--text-secondary);">${pl.tracksCount} Tracks</p>
    `;
    grid.appendChild(card);
  });
}

// 6. SEARCH & HUM DETECTOR SIMULATOR
function setupSearchEngine() {
  const input = document.getElementById('header-search-input');
  
  // Instant filtering on keyup
  input.addEventListener('keyup', () => {
    const query = input.value.toLowerCase();
    performSearch(query);
  });

  // Voice Search / Hum detector simulation
  const micBtn = document.getElementById('voice-search-trigger');
  micBtn.addEventListener('click', () => {
    micBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin" style="color:var(--accent-glow);"></i>';
    triggerAiResponse("Listening for hum frequency coordinates...");
    
    setTimeout(() => {
      micBtn.innerHTML = '<i class="fa-solid fa-microphone"></i>';
      input.value = "Calm Sanskrit Shlokas 432Hz";
      performSearch("sanskrit");
      switchScreen('screen-search');
      alert("AI Humming Detector identified frequency: 432Hz matching track 'Nila Kantham'");
    }, 2200);
  });
}

function performSearch(query) {
  const container = document.getElementById('search-results-list');
  container.innerHTML = '';
  
  const matches = TRACK_LIBRARY.filter(t => 
    t.title.toLowerCase().includes(query) || 
    t.artist.toLowerCase().includes(query) ||
    t.album.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:var(--space-8); color:var(--text-secondary);">
        <i class="fa-solid fa-face-frown-open" style="font-size:32px; margin-bottom:8px;"></i>
        <p>No matching tracks found. Try searching 'monsoon' or 'sufi'.</p>
      </div>
    `;
    return;
  }

  matches.forEach((track, idx) => {
    const row = document.createElement('div');
    row.className = 'song-row-item';
    row.innerHTML = `
      <div class="song-row-left">
        <span class="song-row-idx">${idx + 1}</span>
        <img class="song-row-artwork" src="${track.artwork}" alt="${track.title}">
        <div class="song-row-title-desc">
          <span class="song-row-title">${track.title}</span>
          <span class="song-row-artist">${track.artist}</span>
        </div>
      </div>
      <span class="song-row-album">${track.album}</span>
      <div class="song-row-actions">
        <span style="font-size:12px; color:var(--text-secondary); margin-right:12px;">${formatTime(track.duration)}</span>
        <button class="control-btn play-row-btn" style="width:28px; height:28px; font-size:12px;"><i class="fa-solid fa-play"></i></button>
      </div>
    `;
    row.querySelector('.play-row-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      const libraryIdx = TRACK_LIBRARY.findIndex(t => t.id === track.id);
      playTrackIndex(libraryIdx);
    });
    row.addEventListener('click', () => {
      const libraryIdx = TRACK_LIBRARY.findIndex(t => t.id === track.id);
      playTrackIndex(libraryIdx);
      expandFullscreenPlayer();
    });
    container.appendChild(row);
  });
}

// 7. AUDIO PLAYER STATE ENGINE
function setupAudioPlayer() {
  const playBtn = document.getElementById('player-btn-play');
  const epPlayBtn = document.getElementById('ep-btn-play');
  const trackName = document.getElementById('mini-player-title');
  const artistName = document.getElementById('mini-player-artist');
  const artwork = document.getElementById('mini-player-artwork');
  const durationText = document.getElementById('player-time-duration');
  
  // Progress Bar ticks
  const currentText = document.getElementById('player-time-current');
  const fill = document.getElementById('player-time-fill');
  const timeTrack = document.getElementById('player-time-track');

  // Expanded references
  const epTitle = document.getElementById('ep-title');
  const epArtist = document.getElementById('ep-artist');
  const epArtwork = document.getElementById('ep-artwork');
  const epExpl = document.getElementById('ep-ai-explanation');
  const epLyrics = document.getElementById('ep-lyrics-scroll-container');

  // Play/Pause bindings
  const togglePlay = () => {
    if (appState.isPlaying) {
      pausePlayback();
    } else {
      startPlayback();
    }
  };

  playBtn.addEventListener('click', togglePlay);
  epPlayBtn.addEventListener('click', togglePlay);

  // Next / Prev bindings
  document.getElementById('player-btn-next').addEventListener('click', nextTrack);
  document.getElementById('ep-btn-next').addEventListener('click', nextTrack);
  document.getElementById('player-btn-prev').addEventListener('click', prevTrack);
  document.getElementById('ep-btn-prev').addEventListener('click', prevTrack);

  // Progress Bar scrubbing
  timeTrack.addEventListener('click', (e) => {
    const rect = timeTrack.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const track = TRACK_LIBRARY[appState.currentTrackIndex];
    appState.currentTime = Math.floor(percent * track.duration);
    
    // Sync audio element's playback position
    const audioPlayer = document.getElementById('audio-player');
    if (audioPlayer && audioPlayer.src) {
      audioPlayer.currentTime = appState.currentTime;
    }
    
    updatePlayerUI();
  });

  // Open Full Screen player modal on mini player cover click
  document.getElementById('mini-player-expand-btn').addEventListener('click', expandFullscreenPlayer);
  document.getElementById('expanded-player-close-btn').addEventListener('click', collapseFullscreenPlayer);

  // Modal Mode Switch Tabs
  document.querySelectorAll('.player-mode-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.player-mode-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const targetPanel = tab.getAttribute('data-panel');
      document.querySelectorAll('.player-tab-panel').forEach(panel => {
        panel.classList.remove('active');
      });
      document.getElementById(targetPanel).classList.add('active');
    });
  });

  // Initialize display
  loadTrack(0);

  // Mobile now playing container tap play/pause toggle
  const nowPlayingRow = document.querySelector('.player-now-playing');
  nowPlayingRow.addEventListener('click', (e) => {
    const isArtworkBtn = e.target.closest('#mini-player-expand-btn');
    const isLikeBtn = e.target.closest('#mini-like-btn');
    if (!isArtworkBtn && !isLikeBtn) {
      togglePlay();
    }
  });
}

function loadTrack(idx) {
  appState.currentTrackIndex = idx;
  const track = TRACK_LIBRARY[idx];
  
  // Standard bar updates
  document.getElementById('mini-player-title').innerText = track.title;
  document.getElementById('mini-player-artist').innerText = track.artist;
  document.getElementById('mini-player-artwork').src = track.artwork;
  document.getElementById('player-time-duration').innerText = formatTime(track.duration);
  document.getElementById('ep-time-duration').innerText = formatTime(track.duration);

  // Expanded panel updates
  document.getElementById('ep-title').innerText = track.title;
  document.getElementById('ep-artist').innerText = track.artist;
  document.getElementById('ep-artwork').src = track.artwork;
  document.getElementById('ep-ai-explanation').innerText = track.aiText;

  // Load audio file
  const audioPlayer = document.getElementById('audio-player');
  audioPlayer.src = track.audioUrl || '';
  audioPlayer.load();
  audioPlayer.currentTime = 0;

  // Build lyrics Sync layout
  const lyricsContainer = document.getElementById('ep-lyrics-scroll-container');
  lyricsContainer.innerHTML = '';
  track.lyrics.forEach((line, index) => {
    const p = document.createElement('div');
    p.className = `lyric-line ${index === 0 ? 'active' : ''}`;
    p.innerHTML = `
      <div>${line.text}</div>
      <div class="lyric-translation">${line.trans}</div>
    `;
    lyricsContainer.appendChild(p);
  });

  appState.currentTime = 0;
  updatePlayerUI();
}

function startPlayback() {
  appState.isPlaying = true;
  document.getElementById('player-btn-play').innerHTML = '<i class="fa-solid fa-pause"></i>';
  document.getElementById('ep-btn-play').innerHTML = '<i class="fa-solid fa-pause"></i>';
  document.getElementById('app-shell').classList.add('playing');
  
  // Unpause active audio bars animations
  document.querySelectorAll('.mini-eq-bar').forEach(b => b.classList.remove('paused'));

  // Play actual audio
  const audioPlayer = document.getElementById('audio-player');
  if (audioPlayer.src) {
    audioPlayer.play().catch(err => console.log('[v0] Audio playback error:', err));
  }

  // Start ticker interval for UI sync
  clearInterval(appState.playbackInterval);
  appState.playbackInterval = setInterval(() => {
    const audioPlayer = document.getElementById('audio-player');
    if (audioPlayer && audioPlayer.src) {
      // Use actual audio element's current time
      appState.currentTime = Math.floor(audioPlayer.currentTime);
      updatePlayerUI();
      
      // Update lyrics sync highlighters
      const track = TRACK_LIBRARY[appState.currentTrackIndex];
      if (track && track.lyrics) {
        const step = Math.floor((appState.currentTime / track.duration) * track.lyrics.length);
        document.querySelectorAll('.lyric-line').forEach((line, lIdx) => {
          if (lIdx === step) {
            line.classList.add('active');
          } else {
            line.classList.remove('active');
          }
        });
      }
      
      // Auto-advance to next track when current ends
      if (appState.currentTime >= track.duration) {
        nextTrack();
      }
    }
  }, 500);
}

function pausePlayback() {
  appState.isPlaying = false;
  document.getElementById('player-btn-play').innerHTML = '<i class="fa-solid fa-play"></i>';
  document.getElementById('ep-btn-play').innerHTML = '<i class="fa-solid fa-play"></i>';
  document.getElementById('app-shell').classList.remove('playing');
  
  // Pause audio bars
  document.querySelectorAll('.mini-eq-bar').forEach(b => b.classList.add('paused'));
  
  // Pause actual audio
  const audioPlayer = document.getElementById('audio-player');
  if (audioPlayer) {
    audioPlayer.pause();
  }
  
  clearInterval(appState.playbackInterval);
}

function nextTrack() {
  let nextIdx = appState.currentTrackIndex + 1;
  if (nextIdx >= TRACK_LIBRARY.length) nextIdx = 0;
  loadTrack(nextIdx);
  if (appState.isPlaying) startPlayback();
}

function prevTrack() {
  let prevIdx = appState.currentTrackIndex - 1;
  if (prevIdx < 0) prevIdx = TRACK_LIBRARY.length - 1;
  loadTrack(prevIdx);
  if (appState.isPlaying) startPlayback();
}

function playTrackIndex(idx) {
  loadTrack(idx);
  startPlayback();
}

function updatePlayerUI() {
  const track = TRACK_LIBRARY[appState.currentTrackIndex];
  const percent = (appState.currentTime / track.duration) * 100;
  
  // Bottom progress slider
  document.getElementById('player-time-current').innerText = formatTime(appState.currentTime);
  document.getElementById('player-time-fill').style.width = `${percent}%`;

  // Expanded slider mirroring
  document.getElementById('ep-time-current').innerText = formatTime(appState.currentTime);
  document.getElementById('ep-time-fill').style.width = `${percent}%`;
}

function expandFullscreenPlayer() {
  document.getElementById('expanded-player').classList.add('active');
}

function collapseFullscreenPlayer() {
  document.getElementById('expanded-player').classList.remove('active');
}

function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

// 8. AI CHAT CONSOLE
function setupAiAssistant() {
  // Sidebar floating console triggers
  const btnSendPanel = document.getElementById('panel-ai-send-btn');
  const inputPanel = document.getElementById('panel-ai-input');
  
  const sendMessagePanel = () => {
    const text = inputPanel.value;
    if (!text) return;
    postMessageBubble('user', text, 'panel-ai-messages-list');
    inputPanel.value = '';
    
    // Simulate AI DJ thinking state
    setTimeout(() => {
      let reply = "I analyzed your mood context. Mixing high-resolution flutes matching your preferences.";
      if (text.toLowerCase().includes("workout")) {
        reply = "Heart rate match engine online. Ramping tracks to 138 BPM. Now playing 'Amritsar Drill'.";
        playTrackIndex(3);
      } else if (text.toLowerCase().includes("sleep") || text.toLowerCase().includes("rain")) {
        reply = "Generating 432Hz ambient rainfall acoustics mixed with Tanpura resonance. Now playing 'Monsoon Bhairav'.";
        playTrackIndex(0);
      }
      postMessageBubble('assistant', reply, 'panel-ai-messages-list');
    }, 1200);
  };

  btnSendPanel.addEventListener('click', sendMessagePanel);
  inputPanel.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') sendMessagePanel();
  });

  // Full Screen Console triggers
  const btnSendScreen = document.getElementById('screen-ai-send-btn');
  const inputScreen = document.getElementById('screen-ai-input');
  
  const sendMessageScreen = () => {
    const text = inputScreen.value;
    if (!text) return;
    postMessageBubble('user', text, 'screen-ai-messages-list');
    inputScreen.value = '';
    
    setTimeout(() => {
      let reply = "Compiling real-time dynamic soundscape based on your mood vector...";
      if (text.toLowerCase().includes("sanskrit") || text.toLowerCase().includes("shloka")) {
        reply = "Analyzing Sanskrit verses in track 'Nila Kantham'. The lines refer to the peaceful, unchanging state of pure consciousness.";
      }
      postMessageBubble('assistant', reply, 'screen-ai-messages-list');
    }, 1000);
  };

  btnSendScreen.addEventListener('click', sendMessageScreen);
  inputScreen.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') sendMessageScreen();
  });

  // Seed default Assistant bubble on start
  postMessageBubble('assistant', 'Welcome! Tell me what to play, or describe your mood.', 'screen-ai-messages-list');
}

function postMessageBubble(sender, text, targetId) {
  const container = document.getElementById(targetId);
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${sender}`;
  bubble.innerText = text;
  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
}

function triggerAiPreset(prompt) {
  postMessageBubble('user', prompt, 'screen-ai-messages-list');
  setTimeout(() => {
    let reply = `Generating custom algorithm playlist matching your prompt: "${prompt}". Playing now.`;
    if (prompt.includes("workout")) {
      playTrackIndex(3);
    } else if (prompt.includes("sleep") || prompt.includes("rain")) {
      playTrackIndex(0);
    } else if (prompt.includes("Capsule")) {
      playTrackIndex(2);
    } else if (prompt.includes("Shloka")) {
      playTrackIndex(4);
    }
    postMessageBubble('assistant', reply, 'screen-ai-messages-list');
  }, 1100);
}

function triggerAiResponse(messageText) {
  // Post directly to sidebar panel
  postMessageBubble('assistant', messageText, 'panel-ai-messages-list');
  // Expand panel if collapsed
  document.getElementById('app-shell').classList.remove('panel-collapsed');
}

// 9. SETTINGS & ACCESSIBILITY CONTROLS
function setupSettings() {
  const themeSwitch = document.getElementById('settings-theme-toggle');
  themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  });

  const contrastSwitch = document.getElementById('settings-contrast-toggle');
  contrastSwitch.addEventListener('change', () => {
    if (contrastSwitch.checked) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  });

  const fontScale = document.getElementById('settings-font-scale');
  fontScale.addEventListener('change', () => {
    document.documentElement.style.setProperty('--font-scale', fontScale.value);
  });
}

// 10. NOTIFICATIONS FEED INJECTION
function setupNotifications() {
  const feed = document.getElementById('notifications-list-container');
  feed.innerHTML = '';
  NOTIFICATIONS_SEED.forEach(noti => {
    const item = document.createElement('div');
    item.className = 'glass-card';
    item.style.padding = 'var(--space-4)';
    item.style.display = 'flex';
    item.style.alignItems = 'center';
    item.style.gap = 'var(--space-4)';
    
    let icon = '<i class="fa-solid fa-bell" style="color:var(--accent-glow);"></i>';
    if (noti.type === 'friend') icon = '<i class="fa-solid fa-user-group" style="color:var(--accent-glow);"></i>';
    if (noti.type === 'concert') icon = '<i class="fa-solid fa-ticket" style="color:var(--premium-gold);"></i>';
    if (noti.type === 'offer') icon = '<i class="fa-solid fa-crown" style="color:var(--premium-gold);"></i>';
    
    item.innerHTML = `
      <div style="font-size:18px;">${icon}</div>
      <div style="font-size:13.5px; line-height:1.4;">${noti.text}</div>
    `;
    feed.appendChild(item);
  });
}
