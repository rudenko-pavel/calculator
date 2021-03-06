const configTextForElements = {
  siteName: "http://theBestSite.com",
  switchBlock: {
    values: ["light", "dark"]
  },
  buttons: {
    commonButtons: {
      showSelectedData: { text: "show selected data" },
      up: { text: "UP" }
    },
    resetValues: {
      btn1: { text: "Reset all" },
      btn2: { text: "Reset maintenance costs" },
      btn3: { text: "Reset market trends" }
    }
  },
  divElements: {
    titles: {
      title1: { text: "General data" },
      title2: { text: "Mortgage details" },
      title3: { text: "Taxes and basic costs" },
      title4: { text: "Closing costs" },
      title5: { text: "Maintenance and Taxes" },
      title6: { text: "Property rate of growth" } // "Market trends"
    },
    summaryBlock: {
      div0: { text: "monthly payments!" },
      div1: { text: "rent" },
      div2: { text: "buy" },
      div3: { text: "rent or mortgage" },
      div4: { text: "property expenses" },
      div5: { text: "monthly savings" },
      div6: { text: "total" },
      divEmpty: { text: "" }
    }
  },
  pdfBlock: {
    btn: "Create PDF",
    nameFile: "Mortgage_OurBeautifulSite.pdf",
    headerText: "www.OurBeautifulSite.com"
  },
  copyLinkBlock: {
    btn: "Copy link",
    title: "Success!",
    description:
      "Link was copied to Clipboard. Use Ctrl+V to share Link in your favorite messenger."
  }
};

export default configTextForElements;
