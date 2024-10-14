export function Feed() {
  return (
    <div className="h-screen container w-[620px]">
      <div>
        <h1 className="p-4">Feed de noticias</h1>
        <div className="border-t border-gray-300">
          <div className="flex flex-col p-4">
            <span>1 - Leia as perguntas frequentes</span>
            <span>A seção Feed permite que os usuários estejam cientes de toda a atividade atual relacionada a eles e à empr...</span>
          </div>
        </div>
        <div className="border-t  border-gray-300">
          <div className="flex flex-col p-4">
            <span>2 - Busca rápida</span>
            <span>Input</span>
          </div>
        </div>
        <div className="border-t border-gray-300">
          <div className="flex flex-col p-4">
            <span>3 - tambem pode ser util</span>
            <span>Lista de links que podem ajudar</span>
          </div>
        </div>
      </div>
    </div>
  )
}