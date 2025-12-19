export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-koel-neutral-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-koel-neutral-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-koel-neutral-700 mb-4">
          Página no encontrada
        </h2>
        <p className="text-koel-neutral-600 mb-8">
          Lo sentimos, la página que buscas no existe.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-koel-blue text-white rounded-full font-semibold hover:bg-koel-blue-dark transition-colors duration-300"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
}
