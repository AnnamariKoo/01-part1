const Footer = () => {
  return (
    <>
      greeting app created by
      <a href="https://github.com/AnnamariKoo">AnnamariKoo</a>
    </>
  );
};

const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - props.age;
  };
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
  const friends = [
    { name: "Leevi", age: 4 },
    { name: "Venla", age: 10 },
  ];

  return (
    <>
      <section>
        <h1> Greetings</h1>
        <Hello name="Maya" age={26 + 10} />
        <Hello name={nimi} age={ika} />
        <p>
          Here is your friend {friends[0].name}, he is {friends[0].age} years
          old.
        </p>
        <p>
          And don't forget {friends[1].name}. She is {friends[1].age} years old.
        </p>
        <Footer />
      </section>
    </>
  );
};

export default App;
