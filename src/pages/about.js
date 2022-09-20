import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const About = () => {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery(["Person"], () =>
    fetch("/api/person").then((res) => res.json())
  );
  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const fname = e.target.elements.fname.value;
          const lname = e.target.elements.lname.value;
          console.log(fname);
          console.log(lname);

          const data = await axios.post("/api/person", {
            firstName: fname,
            lastName: lname,
          });
          console.log("data", data);
          queryClient.invalidateQueries(["Person"]);
        }}
      >
        <input placeholder="First Name" name="fname"></input>
        <input placeholder="Last Name" name="lname"></input>
        <button>Submit</button>
        {JSON.stringify(data)}
      </form>
    </div>
  );
};

export default About;
