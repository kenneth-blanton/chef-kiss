const ParmesanTurkeyMeatballsDownload = () => {
  return (
    <div className="downloadPage">
      <div className="mainRunner">
        <a
          href="Turkey Spaghetti Meatballs.pdf"
          download="Turkey Spaghetti Meatballs.pdf"
        >
          <button className="downloadRec">
            Download Parmesan Turkey Meatballs Recipe PDF Here
          </button>
        </a>
      </div>
      <div className="mainRunner">
        <a href="Turkey Spaghetti Meatballs.pdf">
          <button className="downloadRec">
            Open Parmesan Turkey Meatballs Recipe PDF Here
          </button>
        </a>
      </div>
      <div className="text">Thank you for your purchase!</div>
    </div>
  );
};

export default ParmesanTurkeyMeatballsDownload;
