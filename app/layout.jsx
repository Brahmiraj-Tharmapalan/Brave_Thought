import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Brave_Thought",
  description: "Discover & Share AI thoughts",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          <div className="-z-10">{children}</div>
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
