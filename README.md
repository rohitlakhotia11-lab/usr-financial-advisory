# USR Financial Advisory Website

## Files
- index.html
- style.css
- script.js

## Before publishing
Open `script.js` and replace:
1. `PAYMENT_LINK` with your Razorpay Payment Link.
2. `BOOKING_LINK` with your Google Calendar appointment schedule URL.

The WhatsApp number is already set to 8240523227.

## Free hosting
Upload all three files to a public GitHub repository and enable GitHub Pages from:
Settings → Pages → Deploy from a branch → main → /root.

Do not put payment gateway secret keys in these files. A Razorpay Payment Link is safe to use as a public destination URL; never expose API keys or secret credentials in front-end code.
