import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { supabase } from '../../lib/supabase';
import { useNavigate } from 'react-router-dom';
import { LogOut, Plus, Trash2, Pencil, Image as ImageIcon, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const NewsManager = () => {
  const { user, logout, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  const [news, setNews] = useState([]);
  const [loadingItems, setLoadingItems] = useState(true);
  
  // States del Formulario
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    tag: 'Institucional',
    tagColor: 'bg-emerald-100 text-emerald-700',
    instagramUrl: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [currentImageUrl, setCurrentImageUrl] = useState('');
  
  // Notificaciones
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Protección de ruta
  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/comunicaciones');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      fetchNews();
    }
  }, [user]);

  const fetchNews = async () => {
    setLoadingItems(true);
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (!error && data) {
      setNews(data);
    }
    setLoadingItems(false);
  };

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    setError('');

    try {
      let imageUrl = currentImageUrl;

      // 1. Subir la imagen si existe
      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('news-images')
          .upload(filePath, imageFile);

        if (uploadError) throw uploadError;

        // Obtener la URL pública
        const { data: { publicUrl } } = supabase.storage
          .from('news-images')
          .getPublicUrl(filePath);
          
        imageUrl = publicUrl;
      }

      if (editingId) {
        // 2. Actualizar en la base de datos
        const { error: updateError } = await supabase
          .from('news')
          .update({
            title: formData.title,
            excerpt: formData.excerpt,
            tag: formData.tag,
            tag_color: formData.tagColor,
            image_url: imageUrl || 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
            instagram_url: formData.instagramUrl
          })
          .eq('id', editingId);

        if (updateError) throw updateError;
        setMessage('Noticia actualizada exitosamente.');
      } else {
        // 3. Insertar en la base de datos
        const { error: insertError } = await supabase.from('news').insert([
          {
            title: formData.title,
            excerpt: formData.excerpt,
            tag: formData.tag,
            tag_color: formData.tagColor,
            image_url: imageUrl || 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
            instagram_url: formData.instagramUrl
          }
        ]);

        if (insertError) throw insertError;
        setMessage('Noticia publicada exitosamente.');
      }

      setShowForm(false);
      setEditingId(null);
      setCurrentImageUrl('');
      setFormData({ title: '', excerpt: '', tag: 'Institucional', tagColor: 'bg-emerald-100 text-emerald-700', instagramUrl: '' });
      setImageFile(null);
      fetchNews(); // Recargar lista

    } catch (error) {
       console.error("Error al publicar:", error);
       setError('Ocurrió un error al subir la noticia. Recuerda crear el "Bucket" en Supabase.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setCurrentImageUrl(item.image_url);
    setFormData({
      title: item.title,
      excerpt: item.excerpt,
      tag: item.tag || 'Institucional',
      tagColor: item.tag_color || 'bg-emerald-100 text-emerald-700',
      instagramUrl: item.instagram_url || ''
    });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Seguro que deseas eliminar esta noticia?")) {
      const { error } = await supabase.from('news').delete().eq('id', id);
      if (!error) {
        fetchNews();
      } else {
        alert("Error al eliminar la noticia");
      }
    }
  };

  if (authLoading || !user) return <div className="min-h-screen bg-slate-50 flex items-center justify-center"><Loader2 className="animate-spin text-primary-500 w-10 h-10"/></div>;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Admin */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-slate-800">Panel de Comunicaciones</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-500">{user.email}</span>
              <button 
                onClick={handleLogout}
                className="flex items-center text-sm font-medium text-slate-600 hover:text-red-600 transition-colors bg-slate-100/50 hover:bg-red-50 px-3 py-2 rounded-lg"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Salir
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Notificaciones */}
        {message && (
          <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl flex items-center text-sm shadow-sm">
            <CheckCircle2 className="w-5 h-5 mr-2" />
            {message}
          </div>
        )}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center text-sm shadow-sm">
            <AlertCircle className="w-5 h-5 mr-2" />
            {error}
          </div>
        )}

        {/* Formulario Collapse */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
             <h2 className="text-xl font-semibold text-slate-800">Tus Noticias publicadas</h2>
             <button 
                onClick={() => {
                  if (showForm) {
                    setEditingId(null);
                    setCurrentImageUrl('');
                    setFormData({ title: '', excerpt: '', tag: 'Institucional', tagColor: 'bg-emerald-100 text-emerald-700', instagramUrl: '' });
                  }
                  setShowForm(!showForm);
                }}
                className="flex items-center bg-primary-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-primary-700 transition-colors shadow-sm"
             >
               {showForm ? 'Cancelar' : <><Plus className="w-4 h-4 mr-2" /> Nueva Noticia</>}
             </button>
          </div>

          {showForm && (
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 mb-8 animation-fade-in origin-top">
              <h3 className="text-lg font-medium text-slate-900 mb-6 border-b border-slate-100 pb-4">Redactar Noticia</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Título de la noticia</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                        placeholder="Ej. Nuevo sistema de expedientes..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Enlace de Instagram (Opcional)</label>
                      <input 
                        type="url" 
                        value={formData.instagramUrl}
                        onChange={(e) => setFormData({...formData, instagramUrl: e.target.value})}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                        placeholder="https://www.instagram.com/p/..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Categoría / Etiqueta</label>
                      <select 
                        value={formData.tag}
                        onChange={(e) => {
                          const val = e.target.value;
                          let color = 'bg-slate-100 text-slate-700'; // default
                          if(val === 'Institucional') color = 'bg-emerald-100 text-emerald-700';
                          if(val === 'Comunicado') color = 'bg-amber-100 text-amber-700';
                          if(val === 'Innovación') color = 'bg-blue-100 text-blue-700';
                          setFormData({...formData, tag: val, tagColor: color});
                        }}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                      >
                        <option value="Institucional">Institucional (Verde)</option>
                        <option value="Comunicado">Comunicado (Naranja)</option>
                        <option value="Innovación">Innovación (Azul)</option>
                        <option value="Varios">Varios (Gris)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                     <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Resumen (2 o 3 líneas máximo)</label>
                        <textarea 
                          required
                          rows="4" 
                          value={formData.excerpt}
                          onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none"
                          placeholder="Breve descripción que aparecerá en la tarjeta..."
                        ></textarea>
                     </div>
                  </div>
                </div>

                <div className="border border-dashed border-slate-300 rounded-2xl p-6 flex flex-col items-center justify-center bg-slate-50">
                   <ImageIcon className="w-10 h-10 text-slate-400 mb-3" />
                   <label className="cursor-pointer bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                     <span>Seleccionar Imagen para Portada</span>
                     <input type="file" required accept="image/*" className="hidden" onChange={handleImageChange} />
                   </label>
                   {imageFile && <span className="mt-3 text-sm text-emerald-600 font-medium">Archivo seleccionado: {imageFile.name}</span>}
                   <p className="mt-2 text-xs text-slate-500">Se recomiendan imágenes horizontales (16:9)</p>
                </div>

                <div className="flex justify-end pt-4 border-t border-slate-100">
                   <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="flex items-center bg-primary-600 text-white px-8 py-3 rounded-xl font-medium shadow-md shadow-primary-500/20 hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/30 transition-all disabled:opacity-75"
                   >
                     {isSubmitting ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Publicando...</> : 'Publicar Noticia'}
                   </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Tabla Lista de Noticias */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
           {loadingItems ? (
             <div className="p-12 flex justify-center"><Loader2 className="w-8 h-8 text-slate-300 animate-spin" /></div>
           ) : news.length === 0 ? (
             <div className="p-12 text-center text-slate-500">Aún no hay noticias subidas en la base de datos.</div>
           ) : (
             <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                 <thead>
                   <tr className="bg-slate-50 text-slate-600 text-sm font-medium border-b border-slate-200">
                     <th className="py-4 px-6">Foto</th>
                     <th className="py-4 px-6 w-1/3">Título</th>
                     <th className="py-4 px-6">Publicación</th>
                     <th className="py-4 px-6">Etiqueta</th>
                     <th className="py-4 px-6 text-right">Acciones</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100">
                    {news.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 px-6">
                           <div className="w-16 h-12 rounded-lg bg-slate-200 overflow-hidden shadow-sm">
                             {item.image_url ? (
                               <img src={item.image_url} alt="N/A" className="w-full h-full object-cover" />
                             ) : (
                               <span className="flex items-center justify-center h-full text-xs text-slate-400">N/A</span>
                             )}
                           </div>
                        </td>
                        <td className="py-4 px-6 font-medium text-slate-800 line-clamp-2">{item.title}</td>
                        <td className="py-4 px-6 text-slate-500 text-sm">
                          {new Date(item.created_at).toLocaleDateString('es-ES')}
                        </td>
                        <td className="py-4 px-6">
                           <span className={`px-2.5 py-1 text-xs font-semibold rounded-md ${item.tag_color || 'bg-slate-100 text-slate-600'}`}>
                             {item.tag || 'Sin Etiqueta'}
                           </span>
                        </td>
                        <td className="py-4 px-6 text-right">
                           <button 
                              onClick={() => handleEdit(item)}
                              className="p-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors mr-2"
                              title="Editar Noticia"
                           >
                             <Pencil className="w-5 h-5" />
                           </button>
                           <button 
                              onClick={() => handleDelete(item.id)}
                              className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Eliminar Noticia"
                           >
                             <Trash2 className="w-5 h-5" />
                           </button>
                        </td>
                      </tr>
                    ))}
                 </tbody>
               </table>
             </div>
           )}
        </div>

      </main>
    </div>
  );
};

export default NewsManager;
