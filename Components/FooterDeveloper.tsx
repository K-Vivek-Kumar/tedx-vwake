const FooterDeveloper = (props: any) => {
  const developerName = "K Vivek Kumar";

  const getTextColor = () => {
    return props.theme === "black" ? "text-slate-900" : "text-black";
  };

  return (
    <div className="pb-24 text-center">
      <p className={`${getTextColor()} text-sm`}>
        This website is developed by {developerName} as a part of
        TEDxIITHyderabad selection round.
      </p>
    </div>
  );
};

export default FooterDeveloper;
