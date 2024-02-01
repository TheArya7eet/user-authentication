export default function UserProfile({ params }: any) {
  return (
    <main className="bg-gray-950">
      <div className="flex flex-col items-center justify-center min-h-screen py-2 text-white">
        <h1>Profile</h1>
        <hr />
        <p className="text-4xl">
          Profile Name:{" "}
          <span className="text-4xl bg-orange-600 rounded-sm p-2">
            {params.id}
          </span>
        </p>
      </div>
    </main>
  );
}
