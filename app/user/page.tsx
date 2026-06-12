const users = [
  {
    id: 1,
    name: "Rahul",
  },
  {
    id: 2,
    name: "Anjali",
  },
  {
    id: 3,
    name: "Kiran",
  },
];

export default function UsersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">
        Users
      </h1>

      <div className="bg-white rounded shadow p-5">
        {users.map((user) => (
          <p
            key={user.id}
            className="border-b py-2"
          >
            {user.name}
          </p>
        ))}
      </div>
    </div>
  );
}