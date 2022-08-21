

export const Estudios = () => {
    return (
        <div className="animate__animated animate__fadeIn">

            <ul className="grid  justify-items-center h-full min-h-[300px]">
                <li className="flex flex-col">
                    <div className="flex mt-2 gap-2">
                        <img
                            src="https://www.carrerasadistancia.com.pe/logos/original/logo-universidad-cesar-vallejo.png"
                            className="h-10" />
                        <p className="text-white font-semibold text-lg">Universidad Cesar Vallejo</p>
                    </div>
                    <div className="w-full flex text-sm font-medium text-slate-300 gap-4 justify-center">
                        <p className="text-center">
                            Ingeneria de Sitemas 8tavo ciclo
                        </p>
                        <p className="text-center">
                            2017 - 2023
                        </p>
                    </div>
                </li>
                <hr className="w-3/4 h-1 mx-10 opacity-30"/>
                <li className="flex flex-col">
                    <div className="flex mt-2 gap-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/512px-Udemy_logo.svg.png"
                            className="h-6" />
                        <p className="text-white font-semibold text-lg">Udemy Online Courses</p>
                    </div>
                    <div className="flex gap-2">
                        <p className="text-slate-300 text-sm text-start">React</p>
                        <p className="text-slate-300 text-sm text-start">JavaScript</p>
                        <p className="text-slate-300 text-sm text-start">Next.js</p>
                    </div>
                </li>
                <hr className="w-3/4 h-1 mx-10 opacity-30"/>
                <li className="flex flex-col">
                    <div className="flex mt-2 gap-2">
                        <img
                            src="https://www.sistemasuni.edu.pe/templates/sistemasuni/nuevo/img/logo-footer.png"
                            className="h-6" />
                        <p className="text-white font-semibold text-lg">Sistemas Uni</p>
                    </div>
                    <p className="text-slate-300 text-sm text-start">Desarrollo web con Java</p>
                </li>
            </ul>
        </div>
    )
}
