import "./loading.css";

export function Loading() {
  return (
    <main className="main-loading">
      <div className="looping" data-testid="spinner"></div>
      <h1 className="text-loading">Carregando...</h1>
    </main>
  );
}
