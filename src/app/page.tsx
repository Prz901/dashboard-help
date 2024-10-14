'use client'
import { useState } from 'react'

import { BeakerIcon, XCircleIcon } from '@heroicons/react/24/solid'
import { Feed } from './DashPages/Pages/Feed'
import { Messenger } from './DashPages/Pages/Messenger'
import { OptionPageDash } from './DashPages/Pages/OptionPage'


export default function Home() {
  const [openSide, setOpenSide] = useState(false)
  const [dash, setDash] = useState('feed')

  const handleOpenHelp = () => {
    setOpenSide(!openSide)
  }

  const handleChangeDash = (dashOption: string) => {
    setDash(dashOption)
  }

  const renderDash = () => {
    switch (dash) {
      case 'feed':
        return <Feed/>;
      case 'messeger':
        return <Messenger/>;
      case 'calendar':
        return <OptionPageDash optionPageName='calendar'/>;
      case 'document':
        return <OptionPageDash optionPageName='document'/>;
      case 'email':
        // return <Email />;
      case 'work':
        // return <Work />;
      default:
        return <Feed />;
    }
  };


  return (
    <div className="h-screen w-full bg-gray-300 flex">
      {/* Barra de ícones fixa */}
      <div className="h-screen w-10 bg-red-400 flex flex-col items-center gap-5 pt-10 cursor-pointer">
        <BeakerIcon className="size-6 text-blue-500 hover:text-gray-300" onClick={handleOpenHelp} />
        <BeakerIcon className="size-6 text-blue-500" />
        <BeakerIcon className="size-6 text-blue-500" />
        <BeakerIcon className="size-6 text-blue-500" />
        <BeakerIcon className="size-6 text-blue-500" />
        <BeakerIcon className="size-6 text-blue-500" />
      </div>

      {/* Barra lateral expansível */}
      <div
        className={`bg-white h-full fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out ${openSide ? 'w-[800px]' : 'w-0'
          }`}
      >
        {openSide && (
          <div className="flex items-start">
            {/* Cabeçalho da barra lateral */}
            <div className='h-screen bg-gray-300 w-52'>
              <div className='p-4'>
                <img src={'https://confirm8.com/dist/img/confirm8-logo.png'} alt='confirm8' className='w-36 cursor-pointer' />
              </div>
              {/* essa parte aqui é o header do menu */}
              <div className='flex flex-col  gap-4 pt-3 w-full'>
                <ul>
                  <li className='h-8 cursor-pointer hover:bg-gray-400 flex items-center'><span className='p-4'>Novo</span></li>
                  <li className='h-8 cursor-pointer hover:bg-gray-400 flex items-center'><span className='p-4'>Como começar?</span></li>
                </ul>
              </div>
              {/* a parte do menu que vai controlar a dashboard */}
              <div className='pt-10'>
                <ul>
                  <li className='h-8 cursor-pointer hover:bg-gray-400 flex items-center' onClick={() => handleChangeDash('feed')}><span className='p-4'>Feed</span></li>
                  <li className='h-8 cursor-pointer hover:bg-gray-400 flex items-center' onClick={() => handleChangeDash('messeger')}><span className='p-4'>Messenger</span></li>
                  <li className='h-8 cursor-pointer hover:bg-gray-400 flex items-center' onClick={() => handleChangeDash('calendar')}><span className='p-4'>Calendarios</span></li>
                  <li className='h-8 cursor-pointer hover:bg-gray-400 flex items-center' onClick={() => handleChangeDash('document')}><span className='p-4'>Documentos</span></li>
                  <li className='h-8 cursor-pointer hover:bg-gray-400 flex items-center' onClick={() => handleChangeDash('email')}><span className='p-4'>E-mail</span></li>
                  <li className='h-8 cursor-pointer hover:bg-gray-400 flex items-center' onClick={() => handleChangeDash('work')}><span className='p-4'>Tarefas</span></li>
                </ul>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between p-4">
                <p className="text-lg font-bold">Dash board de ajuda</p>
                <XCircleIcon className="size-6 text-blue-500 cursor-pointer" onClick={handleOpenHelp} />
              </div>
              <div>
                {renderDash()}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Conteúdo principal */}
      <div className="flex-grow bg-gray-100 p-8">
        <h1 className="text-2xl font-bold">Conteúdo Principal da Dashboard</h1>
      </div>
    </div>
  );
}
