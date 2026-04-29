import React, { useState } from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { Modal } from '..';
import { useTranslation } from 'react-i18next';

const DistrictsGuide = () => {
  const { t } = useTranslation();
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const districts = [
    { name: "Alto Verá", address: "Sede Judicial de Alto Verá, Avda. Principal", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "Bella Vista", address: "Juzgado de Paz, Bella Vista", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "Cambyretá", address: "Juzgado de Paz de Cambyretá", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "Capitán Meza", address: "Sede Judicial Cap. Meza", phone: "(071) 219 2000", hours: "07:00 a 13:00", mapLink: "https://www.google.com/maps/place/Juzgado+De+Paz+de+Capit%C3%A1n+Meza/@-26.8250237,-55.336846,17z/data=!3m1!4b1!4m6!3m5!1s0x94f7f84aa5dc5035:0xfa308cbc1d2ff623!8m2!3d-26.8250237!4d-55.336846!16s%2Fg%2F11c6v4hf_3!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D" },
    { name: "Capitán Miranda", address: "Juzgado de Paz Cap. Miranda", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "Carlos Antonio López", address: "Juzgado de Paz C.A.L.", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "Carmen del Paraná", address: "Juzgado de Paz Carmen del Paraná", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "Coronel Bogado", address: "Palacio de Justicia de Coronel Bogado", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "Edelira", address: "Juzgado de Paz de Edelira", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "Encarnación", address: "Palacio de Justicia, Luis M. Argaña y Jovenes por la Democracia", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "Fram", address: "Juzgado de Paz de Fram", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "General Artigas", address: "Juzgado de Paz Gral. Artigas", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "General Delgado", address: "Juzgado de Paz Gral. Delgado", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "Hohenau", address: "Juzgado de Paz de Hohenau", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "Itapúa Poty", address: "Juzgado de Paz de Itapúa Poty", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "Jesús", address: "Juzgado de Paz de Jesús", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "José Leandro Oviedo", address: "Juzgado de Paz J.L.O.", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "La Paz", address: "Juzgado de Paz de La Paz", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "Mayor Otaño", address: "Juzgado de Paz de Mayor Otaño", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "Natalio", address: "Juzgado de Paz de Natalio", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "Nueva Alborada", address: "Juzgado de Paz Nueva Alborada", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "Obligado", address: "Juzgado de Paz de Obligado", phone: "(071) 219 2000", hours: "07:00 a 13:00", mapLink: "https://www.google.com/maps/place/27%C2%B003'28.0%22S+55%C2%B037'30.7%22W/@-27.0574856,-55.6286875,16.5z/data=!4m4!3m3!8m2!3d-27.0577668!4d-55.6252003?hl=es&entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D" },
    { name: "Pirapó", address: "Juzgado de Paz de Pirapó", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "San Cosme y Damián", address: "Juzgado de Paz San Cosme y Damián", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "San Juan del Paraná", address: "Juzgado de Paz San Juan del Paraná", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "San Pedro del Paraná", address: "Juzgado de Paz San Pedro del Paraná", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "San Rafael del Paraná", address: "Juzgado de Paz San Rafael del Paraná", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "Tomás Romero Pereira", address: "Juzgado de Paz T.R.P. (María Auxiliadora)", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "Trinidad", address: "Juzgado de Paz de Trinidad", phone: "(071) 219 2000", hours: "07:00 a 13:00" },
    { name: "Yatytay", address: "Juzgado de Paz de Yatytay", phone: "(071) 219 2000", hours: "07:00 a 13:00" }
  ];

  const handleOpenModal = (district) => {
    setSelectedDistrict(district);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200" id="distritos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">{t('districts.title')}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            {t('districts.desc1')}
            <span className="block mt-2 font-semibold text-primary-700">{t('districts.desc2')}</span>
          </p>
        </div>

        {/* Sede Central - Simplificado */}
        <div className="max-w-xl mx-auto mb-16 bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 text-center">
          <div className="bg-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-primary-900 mx-auto">
            <MapPin size={32} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Sede Central</h3>
          <p className="text-primary-700 font-semibold mb-4">Palacio de Justicia de Encarnación</p>
          <p className="text-slate-500 text-sm leading-relaxed mb-8">Luis María Argaña y Jóvenes por la Democracia. Concentrando los Tribunales de Apelación y Juzgados de Primera Instancia.</p>
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Palacio+de+Justicia,+Encarnación,+Itapúa,+Paraguay" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-primary-900 hover:bg-primary-800 px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-primary-900/20 active:scale-95"
          >
            <ExternalLink size={18} /> {t('districts.modal_google_maps')}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {districts.map((d, i) => (
            <button 
              key={i} 
              onClick={() => handleOpenModal(d)}
              className="bg-white px-5 py-2.5 rounded-full border border-slate-200 text-sm font-bold text-slate-700 hover:bg-primary-900 hover:text-white hover:border-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              {d.name}
            </button>
          ))}
        </div>
      </div>

      {/* Modal de Información del Distrito */}
      {selectedDistrict && (
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          title={`${t('districts.modal_title_prefix')} ${selectedDistrict.name}`}
        >
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex gap-4">
                <div className="bg-primary-900/10 text-primary-900 p-3 rounded-xl h-fit">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{t('districts.modal_address')}</p>
                  <p className="text-slate-700 font-semibold leading-relaxed">{selectedDistrict.address}</p>
                  <a href={selectedDistrict.mapLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedDistrict.address + ', ' + selectedDistrict.name + ', Itapúa, Paraguay')}`} target="_blank" rel="noreferrer" className="text-primary-700 text-xs font-bold mt-2 flex items-center gap-1 hover:underline w-fit">
                    <ExternalLink size={12} /> {t('districts.modal_google_maps')}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col gap-2">
                  <div className="flex items-center gap-2 mb-1 text-slate-400 uppercase tracking-widest text-xs font-bold">
                    <Clock size={14} /> {t('districts.modal_hours')}
                  </div>
                  <p className="text-slate-700 font-semibold">{selectedDistrict.hours}</p>
                </div>
              </div>
            </div>

          </div>
        </Modal>
      )}
    </section>
  );
};

export default DistrictsGuide;
