export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="mt-auto bg-slate-200 h-12 px-12 flex items-center justify-center text-center">
      Gabriel Manica© {year} - Todos os direitos reservados
    </div>
  );
}
