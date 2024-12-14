src/
│
├── assets/                        # Static files like images and icons
│   ├── weather-icons/             # Icons for weather conditions
│   │   ├── sunny.png
│   │   ├── cloudy.png
│   │   └── ...
│   ├── background.jpg             # Optional background image
│   └── ...
│
├── components/                    # Reusable components
│   ├── SearchBar.jsx              # Search input component
│   ├── WeatherCard.jsx            # Displays weather summary (home page)
│   └── WeatherDetailsCard.jsx     # Displays detailed weather info (details page)
│
├── hooks/                         # Custom hooks
│   ├── useFetchWeather.js         # Hook for API calls to fetch weather data
│   └── ...
│
├── pages/                         # Pages corresponding to routes
│   ├── HomePage.jsx               # Home page with search bar and summary
│   ├── WeatherDetailsPage.jsx     # Details page with additional info
│   └── ...
│
├── services/                      # API-related code
│   ├── weatherAPI.js              # API configuration and fetch functions
│   └── ...
│
├── styles/                        # Styles for the app
│   ├── global.css                 # Global styles
│   ├── HomePage.module.css        # Scoped styles for HomePage
│   ├── WeatherDetails.module.css  # Scoped styles for WeatherDetailsPage
│   └── ...
│
├── App.jsx                        # Main application component
├── index.js                       # Application entry point
├── routes.js                      # Define routes for navigation
└── constants.js                   # Constants like API keys, base URLs, etc.
