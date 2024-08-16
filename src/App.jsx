const Footer = () => {
  return (
    <>
      greeting app created by
      <a href="https://github.com/AnnamariKoo">AnnamariKoo</a>
    </>
  );
};

const Hello = (props) => {
  console.log(props);
  return (
    <>
      <p>
        Hello {props.name}, you are {props.age} years old.
      </p>
    </>
  );
};

const App = () => {
  const nimi = "Pekka";
  const ika = 10;
  return (
    <>
      <section>
        <h1> Greetings</h1>
        <Hello name="Maya" age={26 + 10} />
        <Hello name={nimi} age={ika} />
        <Footer />
      </section>
    </>
  );
};

export default App;
