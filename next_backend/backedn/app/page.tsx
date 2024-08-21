import axios from "axios";

async function getUserData(){
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
  return response.data;
}
export default async function Home() {
  const userDetails = await getUserData();
  return (
  <>
    <h1>Hey youre here</h1>
   
   
   </>
  );
}
