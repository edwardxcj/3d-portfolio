# Build and Deploy an Amazing 3D Developer Portfolio in React with Three.js

![141706678125_ pic_hd](https://github.com/edwardxcj/3d-portfolio/assets/54835538/44df3718-6ef3-40cc-9277-b0358783bb4a)

## Contact form

The form uses [EmailJS](https://dashboard.emailjs.com/) to deliver messages to `edwardxcj@gmail.com`.

1. In EmailJS, open **Email Services**, confirm that the existing Gmail service is connected, and send a test email from the service settings. Reconnect Gmail if that test fails.
2. In **Email Templates**, set **To Email** to `edwardxcj@gmail.com`, use the service's default sender, and set **Reply To** to `{{from_email}}`. Include `{{from_name}}`, `{{from_email}}`, and `{{message}}` in the body so the recipient can see who wrote and reply directly.
3. Copy `.env.example` to `.env.local` for local development and fill in the service ID, template ID, and account public key. Set the same variables on the production build environment before rebuilding and redeploying. Vite includes these public values in the browser bundle.
4. Submit a message on `/contact` and confirm that it arrives in the destination inbox and that Reply addresses the visitor. If EmailJS rejects the request, check **Email History** in the EmailJS dashboard for the provider error.
