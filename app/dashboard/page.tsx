import { ClipboardList, Layers, BookOpenText, List , User, SquareKanban, Component, Pencil, Settings, IndentDecrease  } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default async function Dashboard() {

  return (
   <div className="h-screen flex flex-col">
    <div className="flex flex-1">
      <aside className="w-72 bg-sky-950 p-6">
      <div className="flex itens-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <nav className="space-y-3 mt-10">
          <a href="/" className="flex itmes-center gap-3  text-3xl font-semibold text-zinc-400 hover:text-slate-50">
            <IndentDecrease />
            Help Desk
          </a> 
          </nav>     
        <nav className="space-y-6 mt-10">
          <a href="" className="flex items-center gap-6 text-sm font-semibold text-zinc-400 hover:text-slate-50">
            <ClipboardList/>
            Chamados
          </a>
          <a href="" className="flex items-center gap-6 text-sm font-semibold text-zinc-400 hover:text-slate-50">
            <Layers />
            Templates
          </a>
          <a href="" className="flex items-center gap-6 text-sm font-semibold text-zinc-400 hover:text-slate-50">
            <BookOpenText />
              Base de conhecimento
          </a>
          <a href="" className="flex items-center gap-6 text-sm font-semibold text-zinc-400 hover:text-slate-50">
            <List />
            Categorias
          </a>
        </nav>
        <nav className="mt-6 pt-6 border-t border-zinc-700">
        <nav className="space-y-6 mt-10">
          <a href="" className="flex items-center gap-6 text-sm font-semibold text-zinc-400 hover:text-slate-50">
          <User/>
            Team
          </a>
          <a href="" className="flex items-center gap-6 text-sm font-semibold text-zinc-400 hover:text-slate-50">
          <SquareKanban/>
            Relatório
          </a>
          <a href="" className="flex items-center gap-6 text-sm font-semibold text-zinc-400 hover:text-slate-50">
          <Component/>
            Modulos
          </a>
        </nav>
        </nav>
        <nav className="mt-6 pt-6 border-t border-zinc-700">
        <nav className="space-y-6 mt-10">
        <a href="" className="flex items-center gap-6 text-sm font-semibold text-zinc-400 hover:text-slate-50">
        <Pencil/>
            Tools
          </a>
          <a href="" className="flex items-center gap-6 text-sm font-semibold text-zinc-400 hover:text-slate-50">
          <Settings/>
            Settings
          </a>
        </nav>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <div className="flex items-center gap-3">
            <button className="bg-sky-800 p-4 font-semibold rounded space-x-3.5 text-zinc-400 hover:text-slate-50 ">Create New Ticket</button>            
        </div>
          
          <div className="bg-white border-b-2 py-6 px-8 lg:px-0">
            <div className="container mx-auto">
                <div className="mb-4 font-semibold">Busca Avançada</div>
                <div>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 lg:grid-cols-7 md:grid-cols-3 gap-4">
                            <div>
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">ARS</label>
                                <button className="items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex flex-row justify-between w-full mt-2" role="combobox" aria-expanded="false" type="button" aria-haspopup="dialog" aria-controls="radix-:r3:" data-state="closed">
                                    <p className="text-gray-400 font-normal text-sm">Selecione uma opção...</p>
                                    </button>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Departamento</label>
                                        <button className="items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex flex-row justify-between w-full mt-2" role="combobox" aria-expanded="false" type="button" aria-haspopup="dialog" aria-controls="radix-:r4:" data-state="closed">
                                            <p className="text-gray-400 font-normal text-sm">Selecione uma opção...</p>
                                            </button>
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">STATUS</label>
                                                <button className="items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex flex-row justify-between w-full mt-2" role="combobox" aria-expanded="false" type="button" aria-haspopup="dialog" aria-controls="radix-:r5:" data-state="closed">
                                                    <p className="text-gray-400 font-normal text-sm">Selecione uma opção...</p>
                                                    </button>
                                                    </div>
                                                    </div>
                                                    </form>
                                                    </div>
                                                    </div>
                                                    </div>
          
          
          
      </main>
    </div>
    <footer className="bg-slate-300 border-t border-zinc-100 p-2">
      footer
    </footer>
   </div>
   )
}