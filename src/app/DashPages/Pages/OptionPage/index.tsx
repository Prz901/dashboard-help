type optionPageDashProp = {
  optionPageName: string;
}

// Pode ser feito tanto com paginas estaticas como utilizando a passagem de prop
// talvez assim seja uma forma mais simples de fazer e utilizar uma forma de jogar a responsabilidade apenas na hora de renderizar a pagina.
// talvez passando uma listagem dos campos que vamos preencher dentro da pagina.
export function OptionPageDash({optionPageName}:optionPageDashProp) {
  return (
<div className="h-screen container w-[620px]">
      <div>
        <h1 className="p-4">{optionPageName}</h1>
        <div className="border-t  border-gray-300">
          <div className="flex flex-col p-4">
            <span>1 - Busca rápida</span>
            <span>Input</span>
          </div>
        </div>
        <div className="border-t border-gray-300">
          <div className="flex flex-col p-4">
            <span>2 - tambem pode ser util</span>
            <span>Lista de links que podem ajudar</span>
          </div>
        </div>
        <div className="border-t border-gray-300">
          <div className="flex flex-col p-4">
            <span>3 - apps</span>
            <span>Lista de apps correlacionados</span>
          </div>
        </div>
      </div>
    </div>
  )
}