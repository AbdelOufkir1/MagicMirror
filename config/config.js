/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				colored: true,
				showLocation: true,
				maxTitleLength: 30,
				maxLocationTitleLength: 30,
				wrapEvents: true,
				wrapLocationEvents: true,
				timeFormat: "absolute",
				dateFormat: "LLLL",
				excludedEvents: ["hide"],
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics",
									},
						{
							symbol: "Abdel-calendar",
							url: "https://calendar.google.com/calendar/ical/abdel.oufkir%40gmail.com/private-a769e053102739cf0b1cc13ea83e5fa0/basic.ics",
							color: "#FB1961",
							symbol: "far fa-calendar-alt",
						},
				]
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				units: "imperial",
				locationID: "5102713", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "724bfcac3075a14a3ae85a6ed3fa66e3"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast For",
			config: {
				units: "imperial",
				locationID: "5102713", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "724bfcac3075a14a3ae85a6ed3fa66e3",
				showRainAmount: true,
				colored: true,
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					},
					{
						title: "BBC",
						url: "http://feeds.bbci.co.uk/news/rss.xml?edition=uk"
					},
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: 'MMM-PrayerTime',
			position: 'top_right',	// This can be any of the regions. Best result is in the top_left/top_right.
			config: {
				apiVersion: '1.0', // please, leave unchanged. reserved for future use.
				lat: "40.555", // latitude of your position (city)
				lon: "-74.461", // longitude of your position (city)
				timezone: false, // please refer to http://php.net/manual/en/timezones.php
				timeFormat: 24,
				method: 2,
				playAdzan: ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'],
				notDisplayed: ['midnight', 'sunset'],
				useUpdateInterval: true,
				updateInterval: 86400 * 1000, // How often do you want to fetch new praying time? (milliseconds)
				animationSpeed: 2.5 * 1000, // Speed of the update animation. (milliseconds)
				language: "en",
				showAdzanAlert: true,
				showTomorrow: true,
				vertical: true, // set false for horizontal view
				alertTimer: 15000
			},
		},
		{
			module: 'MMM-RandomQuranAyah',
			position: 'lower_third',	// This can be any of the regions. Best result is in the top_bar/bottom_bar as ayah (verse) can take multiple lines.
			config: {
				apiVersion: '1.0', // please, leave unchanged. reserved for future use.
				showArabic: true,
				showTranslation: true,
				surahArabicName:true,
				translationLang:'id.indonesian',
				updateInterval: 3600 * 1000, // milliseconds
			}
		},
		{
			module: "MMM-Wallpaper",
			position: "fullscreen_below",
			config: { // See "Configuration options" for more information.
			  source: "bing",
			  slideInterval: 60 * 1000, // Change slides every minute
			  filter: "grayscale(0.8) brightness(0.5)",

			}
		  }
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
