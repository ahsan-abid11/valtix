export const siteConfig = {
  name: "Valtix Business Solutions",
  title: "Valtix Business Solutions | UAE Virtual Accounting, Tax & Web Engineering",
  description:
    "Dedicated virtual bookkeeping, UAE VAT & FTA Corporate Tax compliance, WPS payroll, and corporate digital engineering for SMEs across Dubai, Abu Dhabi, Sharjah, and UAE Free Zones.",
  url: "https://valtixsolutions.com/",
  phone: "971528834899",
  formattedPhone: "+971 52 883 4899",
  email: "info@valtixsolutions.com",
  operatingHours: "Mon – Fri, 9:00 AM – 6:00 PM (GST / UTC+4)",
  operatingModel: "100% Virtual — Dubai, Abu Dhabi, Sharjah & Free Zones",
  defaultWhatsAppMessage:
    "Hello Valtix Business Solutions, I would like to inquire about your UAE accounting, tax compliance, and web engineering services.",
  getWhatsAppUrl(customMessage) {
    const msg = encodeURIComponent(customMessage || this.defaultWhatsAppMessage);
    return `https://wa.me/${this.phone}?text=${msg}`;
  },
};
