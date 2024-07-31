import Link from "next/link";

export default async function HeaderArs() {
    return (
    <div>
            <div className="navbar bg-blue-700">
                      <div className="flex itens-center gap-6">
                       <a className="btn btn-ghost text-xl">ARS SYSTEM</a>
                      </div>
                <div className="flex-none gap-2"></div>

    </div>
         
         <main className="flex-item bg-center col-end-2 p-6">
            <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center">
                        <div className="card bg-blue-300 rounded-box grid h-20 flex-grow place-items-center hover:bg-blue-950/5 transition-colors">Consulta ARS</div>
                                  <div className="divider divider-horizontal"></div>
                        <div className="card bg-blue-300 rounded-box grid h-20 flex-grow place-items-center hover:bg-blue-950/5 transition-colors">Cadastrar ARS</div>
                    </div>
            </div>                       
        </main>
        
    </div>
   )
}