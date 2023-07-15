const FooterRights = (props: any) => {
  const footerLinks = [
    {
      label: "TED Talks Usage Policy",
      url: "https://www.ted.com/about/our-organization/our-policies-terms/ted-talks-usage-policy",
    },
    {
      label: "Privacy Policy",
      url: "https://www.ted.com/about/our-organization/our-policies-terms/privacy-policy",
    },
    {
      label: "Advertising / Partnership",
      url: "https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide/sponsors-finances/sponsors-partnerships/about-partnerships",
    },
    { label: "TED.com", url: "https://www.ted.com/" },
    {
      label: "Terms of Use",
      url: "https://www.ted.com/about/our-organization/our-policies-terms/ted-com-terms-of-use",
    },
    {
      label: "Jobs",
      url: "https://www.ted.com/about/our-organization/jobs-at-ted",
    },
    {
      label: "Press",
      url: "https://www.ted.com/about/our-organization/contact-us/press-and-media-information",
    },
    { label: "Help", url: "https://help.ted.com/hc/en-us" },
    {
      label: "Privacy Preferences",
      url: "https://www.ted.com/about/our-organization/our-policies-terms/privacy-policy",
    },
    { label: "Membership", url: "https://www.ted.com/membership" },
    {
      label: "© _________. All rights reserved.",
      url: "https://www.ted.com/attend/conferences",
      color: "#818794",
    },
  ];

  const getLinkStyles = () => {
    if (props.theme === "black") {
      return "text-red-800";
    } else {
      return "text-black";
    }
  };

  return (
    <div className="py-4 flex flex-wrap justify-center">
      {footerLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`mr-4 mb-2 ${getLinkStyles()}`}
          style={{ color: link.color || "" }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default FooterRights;
