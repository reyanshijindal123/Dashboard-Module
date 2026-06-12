import {cookies} from "next/headers";

export default async function Dashboard() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token");

  return (
    <div className ="min-h-screen bg-gray-100 p-10">
      <div className = "max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">

        <h1 className ="text-3xl font-bold mb-4">
          Dashboard
          </h1>
          
          <div className ="border p-4 rounded">
            <p className ="text-gray-500">
              Logged in as
            </p>

            <p className ="font-bold text-lg">
              {token?.value}
            </p>
          </div>

          <div className ="mt-4">
            <p>
              Status:
              <span className="text-green-600 font-bold ml-2">
                Active
              </span>
            </p>
          </div>
          <form
          action="/api/logout"
          method="POST"
        >
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </form>
      </div>
    </div>
  );
}