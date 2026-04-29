import React from 'react';
import { 
  Scale, Shield, Zap, Eye, MapPin, Building2, 
  Users, ChevronRight, Landmark, FileCheck, PhoneCall, 
  Gavel, CheckCircle2, Navigation 
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import vargasImg from '../../assets/vargas.jpg';
import monzonImg from '../../assets/monzon.jpg';
import scappiniImg from '../../assets/scappini.jpg';
import llanesImg from '../../assets/llanes.jpg';
import dieselImg from '../../assets/cesarmanuel.jpg';
import fachadaImg from '../../assets/fachadapj.jpeg';

const Institutional = () => {
  const { t } = useTranslation();
  const [expandedMinister, setExpandedMinister] = React.useState(null);

  return (
    <section id="institucional" className="relative py-24 bg-white overflow-hidden scroll-mt-20">
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-64 bg-slate-900 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* 1. Presentación Institucional */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/80 border border-slate-200 text-slate-600 text-sm font-medium mb-6 backdrop-blur-md shadow-sm">
            <Landmark size={16} className="text-blue-700" />
            <span>{t('institutional.presentation_badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            {t('institutional.presentation_title_p1')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-slate-900">{t('institutional.presentation_title_p2')}</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
            {t('institutional.presentation_desc')}
          </p>
        </div>

        {/* 2. Identidad Estratégica (Grid) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 cursor-default">
          {/* Misión */}
          <div className="group bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <Navigation size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">{t('institutional.mission_title')}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t('institutional.mission_desc')}
            </p>
          </div>

          {/* Visión */}
          <div className="group bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
              <Eye size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">{t('institutional.vision_title')}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t('institutional.vision_desc')}
            </p>
          </div>

          {/* Valores: Independencia & Imparcialidad */}
          <div className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 sm:col-span-2 lg:col-span-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Scale size={120} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <Shield size={20} className="text-blue-300" />
                </div>
                <h3 className="text-lg font-bold">{t('institutional.values_title')}</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="flex items-center gap-2 font-semibold text-blue-200 mb-1">
                    <CheckCircle2 size={16} /> {t('institutional.value_ind_title')}
                  </h4>
                  <p className="text-slate-400 text-sm">{t('institutional.value_ind_desc')}</p>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 font-semibold text-blue-200 mb-1">
                    <CheckCircle2 size={16} /> {t('institutional.value_imp_title')}
                  </h4>
                  <p className="text-slate-400 text-sm">{t('institutional.value_imp_desc')}</p>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 font-semibold text-blue-200 mb-1">
                    <CheckCircle2 size={16} /> {t('institutional.value_tra_title')}
                  </h4>
                  <p className="text-slate-400 text-sm">{t('institutional.value_tra_desc')}</p>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 font-semibold text-blue-200 mb-1">
                    <CheckCircle2 size={16} /> {t('institutional.value_efi_title')}
                  </h4>
                  <p className="text-slate-400 text-sm">{t('institutional.value_efi_desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Autoridades Vigentes */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('institutional.authorities_title')}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">{t('institutional.authorities_desc')}</p>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Superintendentes - Destacados */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 pl-2 border-l-2 border-blue-600">{t('institutional.authorities_ministers')}</h3>
              
              {[
                { 
                  name: "Dra. María Carolina Llanes Ocampos", 
                  img: llanesImg,
                  bio: (
                    <div className="space-y-3 text-sm text-slate-600 mt-4 pt-4 border-t border-slate-100 leading-relaxed text-justify animate-in fade-in slide-in-from-top-2 duration-300">
                      <p><strong>Abogada y Doctora en Ciencias Jurídicas</strong> por la Universidad Nacional de Asunción (UNA) con calificación "Cum Laude". Cuenta con una destacada trayectoria en el ámbito judicial, fiscal y académico.</p>
                      <p>Inició su carrera como funcionaria judicial y fiscal en 1984. Posteriormente, se desempeñó como Procuradora Fiscal, Agente Fiscal Penal y Jueza de Garantías, accediendo por concurso de méritos.</p>
                      <p>Participó activamente en la redacción del Anteproyecto del Código Procesal Penal y en la revisión de la Ley Orgánica del Ministerio Público. Además, integró la Oficina Técnica del Poder Judicial para la implementación del nuevo Sistema Penal.</p>
                      <p>Es fundadora y miembro del Consejo Institucional del Inecip-Py (Instituto de Estudios Comparados en Ciencias Penales y Sociales del Paraguay).</p>
                      <p>Autora de diversas obras jurídicas y docente de grado y postgrado en instituciones de prestigio como la UNA, UCA y UAA, así como en la Escuela Judicial.</p>
                      <p>En la administración pública, ha sido asesora externa del Ministerio de Hacienda y del Jurado de Enjuiciamiento de Magistrados, Directora Jurídica del IPS, Interventora de la Municipalidad de Ciudad del Este y Secretaria Ejecutiva de la SENABICO.</p>
                      <p>Prestó juramento como <strong>Ministra de la Corte Suprema de Justicia</strong> en julio del año 2019.</p>
                    </div>
                  )
                },
                { 
                  name: "Dr. César Manuel Diesel Junghanns", 
                  img: dieselImg,
                  bio: (
                    <div className="space-y-3 text-sm text-slate-600 mt-4 pt-4 border-t border-slate-100 leading-relaxed text-justify animate-in fade-in slide-in-from-top-2 duration-300">
                      <p><strong>Abogado</strong> por la Universidad Nacional de Asunción (UNA) y <strong>Doctor en Ciencias Jurídicas</strong> por la Universidad Nacional de Pilar (UNP). Cuenta con una extensa carrera en la función pública y el ámbito gremial.</p>
                      <p>En la administración del Estado, ocupó altos cargos directivos, destacándose como Viceministro de Justicia, Director Jurídico del Ministerio de Justicia y Trabajo, y del Ministerio del Interior. Asimismo, tuvo un rol fundamental en la Justicia Electoral, donde ejerció como Superintendente, Director de Transparencia y Anticorrupción, y Director Jurídico.</p>
                      <p>Su aporte al sistema de justicia paraguayo incluye su desempeño como Miembro Titular y Vicepresidente del Consejo de la Magistratura en representación del Poder Ejecutivo. Integró diversas comisiones nacionales, incluyendo la Comisión Nacional para la Reforma de la Administración de Justicia.</p>
                      <p>En el ámbito gremial, fue Miembro Titular de la Comisión Directiva del Colegio de Abogados y ejerce como miembro del Tribunal de Justicia Deportiva de la Asociación Paraguaya de Fútbol desde 2001. Ha participado como observador internacional en múltiples procesos electorales en América Latina.</p>
                      <p>A lo largo de su trayectoria, participó en numerosos congresos y seminarios nacionales e internacionales, siendo disertante en temas de derecho electoral, justicia y administración pública. Es autor de publicaciones jurídicas especializadas.</p>
                      <p>Actualmente, se desempeña como <strong>Ministro de la Corte Suprema de Justicia</strong>.</p>
                    </div>
                  )
                }
              ].map((autoridad, idx) => (
                <div 
                  key={idx} 
                  onClick={() => autoridad.bio && setExpandedMinister(expandedMinister === idx ? null : idx)}
                  className={`flex flex-col bg-white border border-slate-200 p-4 rounded-xl shadow-sm transition-all ${autoridad.bio ? 'cursor-pointer hover:border-blue-400 hover:shadow-md' : 'cursor-default hover:border-blue-300'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 sm:w-12 sm:h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200 overflow-hidden">
                      {autoridad.img ? (
                        <img src={autoridad.img} alt={autoridad.name} className="w-full h-full object-cover" />
                      ) : (
                        <Users size={20} className="text-slate-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800 text-[15px] leading-tight">{autoridad.name}</h4>
                      <p className="text-xs text-blue-600 font-medium mt-0.5">{t('institutional.authorities_csj')}</p>
                    </div>
                    {autoridad.bio && (
                      <div className={`text-slate-400 transition-transform duration-300 ${expandedMinister === idx ? 'rotate-90' : ''}`}>
                        <ChevronRight size={20} />
                      </div>
                    )}
                  </div>
                  {autoridad.bio && expandedMinister === idx && autoridad.bio}
                </div>
              ))}
            </div>

            {/* Consejo */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 pl-2 border-l-2 border-slate-400">{t('institutional.authorities_council')}</h3>
              
              <div className="flex flex-col items-center gap-4">
                {/* Presidente */}
                <div className="p-5 rounded-xl border border-slate-100 bg-gradient-to-r from-slate-50 to-white flex items-center gap-4 transition-colors shadow-sm border-b-2 border-b-slate-200 w-full sm:w-[calc(50%-0.5rem)]">
                  <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
                    <img src={vargasImg} alt="Abg. Miguel Ángel Vargas Díaz" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">{t('institutional.council_pres')}</p>
                    <p className="font-semibold text-slate-800 leading-tight">Abg. Miguel Ángel Vargas Díaz</p>
                  </div>
                </div>
                
                {/* Vicepresidentas */}
                <div className="grid sm:grid-cols-2 gap-4 w-full">
                  {[
                    { title: t('institutional.council_vp1'), name: "Abg. Nilsa Inés Monzón de Sarquis", img: monzonImg },
                    { title: t('institutional.council_vp2'), name: "Abg. Claudia Andrea Scappini Parzajuk", img: scappiniImg }
                  ].map((member, idx) => (
                    <div key={idx} className="p-5 rounded-xl border border-slate-100 bg-slate-50 flex items-center gap-4 transition-colors">
                      <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">{member.title}</p>
                        <p className="font-semibold text-slate-800 leading-tight">{member.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Estructura y Presencia */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          
          {/* Tribunales */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('institutional.struct_title')}</h3>
              <p className="text-slate-500 text-sm">{t('institutional.struct_desc')}</p>
            </div>
            
            <div className="space-y-4">
              {/* Accordion-like cards */}
              <div className="bg-white border text-sm border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-3">
                  <Gavel size={18} className="text-blue-600"/> {t('institutional.struct_civil')}
                </h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase">{t('institutional.struct_civil_s1')}</span>
                    <p className="text-slate-700 mt-1">Lourdes Simón.</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase">{t('institutional.struct_civil_s2')}</span>
                    <p className="text-slate-700 mt-1">César Cáceres, Camilo Cantero, Miguel Ángel Vargas.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border text-sm border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-3">
                  <Gavel size={18} className="text-blue-600"/> {t('institutional.struct_penal')}
                </h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase">{t('institutional.struct_penal_s1')}</span>
                    <p className="text-slate-700 mt-1">Sandra Palacios, Víctor Vega, Soledad Benítez.</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase">{t('institutional.struct_penal_s2')}</span>
                    <p className="text-slate-700 mt-1">Bernardino Arzamendia, Claudia Scappini, Sonia Rojas.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border text-sm border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-3">
                  <Gavel size={18} className="text-blue-600"/> {t('institutional.struct_ninez')}
                </h4>
                <p className="text-slate-700">Augusto Paredes, Cristino Yeza Araújo, Nilsa Monzón de Sarquis.</p>
              </div>
            </div>
          </div>

          {/* Justicia de Paz */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('institutional.presence_title')}</h3>
              <p className="text-slate-500 text-sm">{t('institutional.presence_desc')}</p>
            </div>
            
            <div className="bg-slate-900 rounded-2xl p-1 shadow-xl">
              <div className="bg-slate-800/50 rounded-xl p-6 text-white h-full relative overflow-hidden backdrop-blur-md">
                {/* Decorative Map Pattern Here */}
                <div className="absolute right-0 bottom-0 opacity-10">
                  <MapPin size={200} />
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2 relative z-10">
                  <Scale size={20} className="text-blue-400"/>
                  {t('institutional.presence_highlight')}
                </h4>

                <ul className="space-y-4 relative z-10 text-sm">
                  <li className="flex gap-4 items-start">
                    <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                    <div>
                      <span className="font-bold text-blue-100">Encarnación:</span>
                      <p className="text-slate-300">Abg. Melina Konjati (S1) y Abg. María del Carmen Ferreira (S2)</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="mt-1 w-2 h-2 rounded-full bg-slate-400"></div>
                    <div>
                      <span className="font-bold text-slate-100">Cambyretá:</span>
                      <p className="text-slate-300">Abg. María Romilda Molinas</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="mt-1 w-2 h-2 rounded-full bg-slate-400"></div>
                    <div>
                      <span className="font-bold text-slate-100">Coronel Bogado:</span>
                      <p className="text-slate-300">Abg. Luz Marina del Rocío Miño</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                     <div className="mt-1 w-2 h-2 rounded-full bg-slate-400"></div>
                     <div>
                       <span className="font-bold text-slate-100">Hohenau & Bella Vista:</span>
                       <p className="text-slate-300">Abg. Laila Iwaskewysz y Abg. Tomasa Váldez</p>
                     </div>
                  </li>
                </ul>
                
                <div className="mt-8 pt-6 border-t border-slate-700 flex justify-between items-center relative z-10">
                  <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">{t('institutional.presence_total')}</span>
                  <span className="bg-slate-700/80 text-white font-bold px-3 py-1 rounded-md text-xs border border-slate-600">{t('institutional.presence_districts')}</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* 6. modernización e Infraestructura & 7. Servicios */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Infraestructura (Imagen/Texto) */}
          <div className="lg:col-span-8 bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col sm:flex-row group cursor-default">
            <div className="sm:w-2/5 md:w-1/2 relative overflow-hidden h-64 sm:h-auto min-h-[300px]">
              <img 
                src={fachadaImg} 
                alt="Palacio de Justicia de Encarnación" 
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 to-transparent"></div>
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold uppercase tracking-wider">
                <Building2 size={12} />
                {t('institutional.infra_badge')}
              </div>
            </div>
            
            <div className="p-8 sm:w-3/5 md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{t('institutional.infra_title')}</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 font-bold text-blue-700 mb-2 text-sm">
                    <Zap size={16} /> {t('institutional.infra_exp')}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {t('institutional.infra_exp_desc')}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-2 text-sm">
                    <Building2 size={16} /> {t('institutional.infra_palace')}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {t('institutional.infra_palace_desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Servicios Ciudadanos */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="bg-slate-900 text-white rounded-3xl p-8 flex-1 border border-slate-800 hover:border-slate-600 transition-colors">
              <h3 className="text-lg font-bold mb-6">{t('institutional.serv_title')}</h3>
              
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                    <Users size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1 text-slate-100">{t('institutional.serv_med')}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{t('institutional.serv_med_desc')}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                    <FileCheck size={18} className="text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1 text-slate-100">{t('institutional.serv_fac')}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{t('institutional.serv_fac_desc')}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                    <PhoneCall size={18} className="text-rose-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1 text-slate-100">{t('institutional.serv_247')}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{t('institutional.serv_247_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Institutional;
