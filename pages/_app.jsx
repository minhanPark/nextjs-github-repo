import Header from "../components/Header";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            margin: 0;
            font-family: "Lexend Mega", sans-serif;
          }
        `}
      </style>
    </>
  );
};

export default MyApp;
