function Footer({ appName = "My React App", year }) {
    let footerContent = <p>© {year} {appName}</p>;
  
    if (year === 2025) {
      footerContent = <p>© {year} {appName} - Celebrating 2025! 🎉</p>;
    }
  
    return <footer>{footerContent}</footer>;
  }
  
  export default Footer;