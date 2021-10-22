import styles from "../../styles/Ninjas.module.css";


// This special  function runs before component render
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    // Set date from API to props
    props: {
      ninjas: data,
    },
  };
};

const  Ninjas = ({ ninjas }) => {  // <-- Destructuring this props 
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <div key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Ninjas;
