// This special  function runs before component render, it returns all the possible values for route parameter
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // get paths from date
  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });
  return {
    paths, // set paths to the property, it returns 10 object with 10 different ids. Next creates different HTML pages, base on this object.
    fallback: false, // show 404 page if route does not exist
  };
};

// This special  function runs before component render
export const getStaticProps = async (context) => {
  const id = context.params.id; // <--  get id s from getStaticPaths function

  // this fetch request runs 10 times, based on paths object in getStaticPaths function
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    // Set data from API to props
    props: {
      ninja: data,
    },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default Details;
