import "@styles/globals.css";



export const metadata = {
  title: "Tixsage",
  description: "Your one stop shop to fun concerts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app bg-[#ffffff]">
          {children}
          <h2>WHYY</h2>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
