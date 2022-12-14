export function Resume() {
  return (
    <div className="mt-4 dark:text-white">
      <h2 className="text-left text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-gray-700 mb-4 md:text-xl">
        Experiência
      </h2>
      <ul className="flex flex-wrap w-85 px-8 gap-4 align-center justify-between  text-gray-800">
        <li>
          <h3>Supermercado Barcelos Ltda</h3>
          <h5>Assistente administrativo</h5>
          <span>
            Janeiro/2016 - Atual (6 anos 9 meses) <br />
            Cabo Frio, Rio de Janeiro, Brasil
          </span>
          <ul className="experience-sec">
            <span>
              Lançamento, emissão e recebimento de Notas Fiscais
              <br />
              Contas a Pagar
              <br />
              Recebimento de Mercadoria
              <br />
              Departamento Pessoal <br />
              Supervisão de Equipe
            </span>
          </ul>
        </li>
        <li>
          <h3>Supermercado Barcelos Ltda</h3>
          <h5>Auxiliar administrativo</h5>
          <span>
            Maio/2012 - Junho/2015 (3 anos 2 meses) <br />
            Cabo Frio, Rio de Janeiro, Brasil
          </span>

          <ul className="experience-sec">
            <span>
              Lançamento, emissão e recebimento de Notas Fiscais
              <br />
              Contas a Pagar
              <br />
              Recebimento de Mercadoria
              <br />
              Departamento Pessoal <br />
            </span>
          </ul>
        </li>
      </ul>
    </div>
  )
}
