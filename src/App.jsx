const Footer = () => {
  return (
    <>
      greeting app created by
      <a href="https://github.com/AnnamariKoo">AnnamariKoo</a>
    </>
  );
};

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;
  return (
    <>
      <p>
        Hello {name}, you are {age} years old.
      </p>
      <p>So you were probably born {bornYear()}.</p>
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
