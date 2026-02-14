export default function Home() {
  return (
    <main className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">
        Mission Alerte
      </h1>

      <p className="text-lg text-blue-700 mb-8 text-center max-w-md">
        Apprends à réagir correctement lorsque l’avertisseur de fumée sonne.
      </p>

      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl text-lg shadow-md transition">
        Commencer
      </button>

      <p className="mt-12 text-sm text-gray-500">
        Prototype éducatif – Ville de Québec
      </p>
    </main>
  );
}
