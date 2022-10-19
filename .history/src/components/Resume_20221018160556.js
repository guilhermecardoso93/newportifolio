export function Resume() {
  return (
    <div className="flex flex-col mt-4 dark:text-white w-100 justify-center">
      <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-gray-700 px-2 py-2 md:text-3xl">
        Experience
      </h2>
      <div>
        <ul className="flex flex-wrap w-85 px-8 gap-4 align-center justify-between w-auto mx-40 text-gray-800 dark:text-gray-200">
          <li>
            <h3 className="font-bold">Supermercado Barcelos Ltda</h3>
            <h5 className="font-bold">Assistente administrativo</h5>
            <span>
              January/2016 - Nowdays <br />
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
            <h3 className="font-bold">Supermercado Barcelos Ltda</h3>
            <h5 className="font-bold">Auxiliar administrativo</h5>
            <span>
              May/2012 - June/2015
              <br />
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
    </div>
  )
}
