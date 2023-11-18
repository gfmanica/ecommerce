export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="mt-auto bg-gradient-to-r from-sky-100 to-indigo-100  px-12 py-6 flex items-center justify-center text-center">
      <p>
        Ecommerce© {year} <br />
        Telefone para suporte:
        <strong> (46) 98406-6636</strong> <br />
        Email para suporte:{' '}
        <strong>gabrielfelipemanica@alunos.utfpr.edu.br</strong>
      </p>
    </div>
  );
}
