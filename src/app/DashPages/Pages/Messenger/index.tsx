export function Messenger() {

  return (
    <div className="h-screen  w-[620px]">
      <div className="w-full ">
        <h1 className="p-4">Messenger</h1>
        <div className="border-t border-gray-300">
          <div className="flex flex-col p-4">
            <span>1 - Leia as perguntas frequentes</span>
            <span>Input</span>
          </div>
        </div>
        <div className="border-t  border-gray-300">
          <div className="flex flex-col p-4">
            <span>2 - Tambem pode ser util</span>
            <span>Links</span>
          </div>
        </div>
        <div className="border-t border-gray-300">
          <div className="flex flex-col p-4">
            <span>3 - aplicativos correlacionados</span>
            <span>Apps</span>
          </div>
        </div>
      </div>
    </div>
  )

}