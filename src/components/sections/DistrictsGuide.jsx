import React from 'react';

const DistrictsGuide = () => {
  const districts = [
    "Encarnación", "Fram", "Coronel Bogado", "Bella Vista", "Hohenau", "Obligado",
    "Natalio", "Mayor Otaño", "Edelira", "San Pedro del Paraná", "Carmen del Paraná",
    "Capitán Meza", "Pirapó", "Nueva Alborada", "Cambyretá", "San Juan del Paraná"
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Presencia en todo el Departamento</h2>
        <p className="text-slate-500 max-w-2xl mx-auto mb-12">
          Contamos con Juzgados de Paz y sedes judiciales en los 30 distritos de Itapúa para garantizar el acceso a la justicia de cada ciudadano.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {districts.map((d, i) => (
            <span key={i} className="bg-white px-5 py-2 rounded-full border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-primary-600 hover:text-white hover:border-primary-600 cursor-default transition-all shadow-sm">
              {d}
            </span>
          ))}
          <span className="bg-slate-200 px-5 py-2 rounded-full text-sm font-bold text-slate-600">+14 más</span>
        </div>
      </div>
    </section>
  );
};

export default DistrictsGuide;
