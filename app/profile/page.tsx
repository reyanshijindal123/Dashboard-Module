export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Profile
      </h1>

      <div className="bg-white p-6 mt-5 rounded shadow">
        <p>Name: John Doe</p>
        <p>Email: john@example.com</p>
        <p>Role: Admin</p>
      </div>
    </div>
  );
}