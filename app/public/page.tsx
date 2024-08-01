import Link from "next/link";

export default async function HeaderArs() {
    return (      
            <div className="container w-full">
               <div className="flex flex-col md:flex-row justify-between items-center p-10 bg-blue-700 text-white">
                  <div className="m-auto">
                     <div className="text-center">
                        <h2 className="font-semibold">ARS SYSTEM</h2>
                   </div>
                </div>
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