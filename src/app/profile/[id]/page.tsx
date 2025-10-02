export default function UserProfile({params}: {params: {id: any}}) {
  return (
    <div>
      <h1>Profile Page</h1>
      <br />
        <h2 className="text-4xl text-green-500 ">User ID Profile Page: {params.id}</h2>
    </div>
  );
}
