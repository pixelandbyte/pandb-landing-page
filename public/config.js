/* Pixel and Byte site settings. Both the home page and the client portal read this file.
   Leave a value empty to run that part in demo mode (nothing is sent).

   SUPABASE_URL / SUPABASE_ANON_KEY: from your Supabase project (Settings > API).
     Clients sign in with an emailed link. Only people you invite in Supabase
     (Authentication > Users > Invite) can sign in.
     In Supabase > Authentication > URL Configuration, add your portal address
     (for example https://pixelandbyte.com/portal/) to the allowed redirect URLs.
   CONTACT_WEBHOOK_URL: Make.com custom webhook for the "Get in touch" form.
   REQUEST_WEBHOOK_URL: Make.com custom webhook for client work requests.
     (These two can be the same webhook; each submission includes a "source" field.)
*/
window.PB_CONFIG = {
  SUPABASE_URL: "",
  SUPABASE_ANON_KEY: "",
  CONTACT_WEBHOOK_URL: "",
  REQUEST_WEBHOOK_URL: ""
};
