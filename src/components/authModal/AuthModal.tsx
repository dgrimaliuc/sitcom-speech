export default function AuthModal() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Authentication</h2>
      <p className="text-sm mb-6">Please log in to continue.</p>
      {/* Add your authentication form or components here */}
      <form>
        {/* Example input fields */}
        <input
          type="text"
          placeholder="Username"
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 p-2 border rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
}
