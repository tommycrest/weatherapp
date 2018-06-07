# Hi What's the weather? 
Simple and easy application for weather forecasting, with Yahoo Weather API and javascript.

# Tech

The page execute a simple query on the following endpoint: https://query.yahooapis.com/v1/public/yql?q=
The json data loaded from Yahoo Weather perform the query with YQL.

# Usage

- the code is personalized in the city of Milan 
- usable with XAMPP on Windows Platform or directly via Apache. Configure a simple vhosts as follow:

"<VirtualHost *:80>
    ServerAdmin yourfakemail@mailinator.com
	ServerName weather.localhost
    DocumentRoot "C:/path/to/your/htdocs/path-to-your-application"
    ErrorLog "logs/your-app-host-error.log"
    CustomLog "logs/your-app-host-access.log" common
</VirtualHost>"

# Todo and future update

 - search for an arbitrary city
 - save date on dashboard

# Feedback 
Every feedback for improvement are appreciate

# Donate
If you like this, donate on Paypal on PayPal.Me: 

https://www.paypal.me/TommyCrestanello

Or you can donate to this BTC address: 1DjHP57CUgV81dzTWvrGKeC8Nzbu3zriHa
