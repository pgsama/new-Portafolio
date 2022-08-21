export const Experiencia = () => {
    return (
        <div className="animate__animated animate__fadeIn overflow-x-hidden overflow-y-auto scroll">

            <ul className="text-white min-h-[300px] flex flex-col justify-evenly">
                <li className="flex flex-col">
                    <div className="flex justify-center gap-2 mt-2 w-full">
                        <img
                            src="https://iconape.com/wp-content/files/vk/167990/svg/167990.svg"
                            className="h-10 bg-white"
                        />
                        <p className="text-lg font-semibold">Grupo Jimenez</p>
                    </div>
                    <div className="w-full flex text-sm font-medium text-slate-300 gap-2 mt-2 justify-center">
                    <p className="text-center font-bold text-teal-400">
                            @Operador de Sistema
                        </p>
                        <p className="text-center">
                            Noviembre - Diciembre 2021
                        </p>
                    </div>
                </li>
                <hr className="w-3/4 h-1 mx-10 opacity-30"/>
                <li className="flex flex-col">
                    <div className="flex justify-center gap-2 mt-2 w-full">
                        <img
                            src="https://cdn.www.gob.pe/uploads/document/file/1711029/standard_x-v4v6Ad_400x400.jpg.jpg"
                            className="h-8 bg-white"
                        />
                        <p className="text-lg font-semibold">ONPE</p>
                    </div>
                    <div className="w-full flex text-sm font-medium text-slate-300 gap-2 mt-2 justify-center">
                        <p className="text-center font-bold text-teal-400">
                            @Coordinador Tecnico de Mesa
                        </p>
                        <p className="text-center">
                            Julio 2021
                        </p>
                    </div>
                </li>
                <hr className="w-3/4 h-1 mx-10 opacity-30"/>
                <li className="flex flex-col">
                    <div className="flex justify-center gap-2 mt-2 w-full">
                        <img
                            src="https://cdn.worldvectorlogo.com/logos/atento-59616.svg"
                            className="h-6 bg-white"
                        />
                        <p className="text-lg font-semibold">Atento Perù</p>
                    </div>
                    <div className="w-full flex text-sm font-medium text-slate-300 gap-2 mt-2 justify-center">
                        <p className="text-center font-bold text-teal-400">
                           @Soporte Técnico
                        </p>
                        <p className="text-center">
                            Mayo - Julio 2018
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    );
};
