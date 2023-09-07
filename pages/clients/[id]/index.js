import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();

  console.log(router.query);

  function handleLoadProject(){
    //router.replace: user cannot go back to this page after click
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: {id: 'max', clientprojectid: 'projecta'}
    });
  }
  return (
    <div>
      <h1>the project of a given client</h1>
      <button onClick={handleLoadProject}>Load Project A</button>
    </div>
  );
}

export default ClientProjectPage;
