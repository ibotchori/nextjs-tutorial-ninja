// This special  function runs before component render, it returns all the possible values for route parameter
export const getStaticPaths = async () => {
const res = await fetch('https://jsonplaceholder.typicode.com/users')
const data = await res.json()

// get paths from date
const paths = data.map(user => {
    return {
        params: {id: user.id.toString()}
    }
})
return {
    paths, // set paths to the property
    fallback: false // show 404 page if route does not exist
}
} 



const Details = () => {
  return (
    <div>
      <h1>Details page</h1>
    </div>
  );
};

export default Details;
