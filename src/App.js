import React, { useState } from 'react';
import { Heart, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ValentineGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isLiked, setIsLiked] = useState({});

  // PERSONNALISE CES PHOTOS ET SOUVENIRS
  const memories = [
    {
      id: 1,
      image: 'https://photos.google.com/photo/AF1QipMWSVnaxACcilZKti0_0GeCfs1JIpKxXf3vSQ3R',
      title: 'Ta première anniversaire avec moi',
      date: 'Novembre 2021',
      caption: 'Là où tout a commencé...',
    },
    {
      id: 2,
      image: 'https://photos.google.com/photo/AF1QipMXeMuzSuPUNBFwmn-vuM_g6FeQddO4uWnMBoKY',
      title: 'La première je t\'aime que j\'ai reçu de ta part',
      date: 'Novembre 2021',
      caption: 'Là où notre vie a commencé ensemble... je ne pourrais jamais l\'oublié la palpitation que j\'ai ressenti ce jours là',
    },
    {
      id: 3,
      image: 'https://photos.google.com/photo/AF1QipPNTs-aFzcX6TbBDO9w2hlvwOmsdkpmRazJ2I4Z',
      title: 'Une épreuve très dure',
      date: '21 février 2022',
      caption: 'Je ne sais pas toi mais quand je vois cette photo, toutes les mauvaises choses que je t\'ai fait me revienne, mais tu es encore là, et je tiens beaucoup à te remercier.',
    },
    {
      id: 4,
      image: 'https://photos.google.com/photo/AF1QipO82SE0k4NBqIwz8wAkQn9VKUVmeLQZqtgMlRiBp',
      title: 'Notre premiere photo ensemble',
      date: '6 Avril 2023',
      caption: 'C\'est drôle mais c\'est vrai, c\'est notre première photo ensemble',
    },
    {
      id: 5,
      image: 'https://photos.google.com/photo/AF1QipNU_DcTAt6FgNp2bG-DdQ8ajVZljtQXdfdiyfqa',
      title: 'première feux d\'artifices',
      date: '25 juin 2023',
      caption: 'Notre permière fête de l\'indépendence ensemble, ça m\'a beaucoup marqué.',
    },
    {
      id: 6,
      image: 'https://photos.google.com/photo/AF1QipPairKU_hZSyWuOQmQbLi4vPsmQv2KiA-kbFsG9',
      title: 'La veille d\'une nouvelle aventure',
      date: 'Septembre 2023',
      caption: 'On était à Mahatamana, avant que je parte pour trouver notre nouvel foyer à Fianarantsoa',
    }
    {
      id: 7,
      image: 'https://photos.google.com/photo/AF1QipPairKU_hZSyWuOQmQbLi4vPsmQv2KiA-kbFsG9',
      title: 'La veille d\'une nouvelle aventure',
      date: 'Septembre 2023',
      caption: 'On était à Mahatamana, avant que je parte pour trouver notre nouvel foyer à Fianarantsoa'
    }
    {
      id: 8,
      image: 'https://photos.google.com/photo/AF1QipPairKU_hZSyWuOQmQbLi4vPsmQv2KiA-kbFsG9',
      title: 'La veille d\'une nouvelle aventure',
      date: 'Septembre 2023',
      caption: 'On était à Mahatamana, avant que je parte pour trouver notre nouvel foyer à Fianarantsoa'
    }
    {
      id: 9,
      image: 'https://photos.google.com/photo/AF1QipPairKU_hZSyWuOQmQbLi4vPsmQv2KiA-kbFsG9',
      title: 'La veille d\'une nouvelle aventure',
      date: 'Septembre 2023',
      caption: 'On était à Mahatamana, avant que je parte pour trouver notre nouvel foyer à Fianarantsoa'
    }
    {
      id: 10,
      image: 'https://photos.google.com/photo/AF1QipPairKU_hZSyWuOQmQbLi4vPsmQv2KiA-kbFsG9',
      title: 'La veille d\'une nouvelle aventure',
      date: 'Septembre 2023',
      caption: 'On était à Mahatamana, avant que je parte pour trouver notre nouvel foyer à Fianarantsoa'
    }
    {
      id: 11,
      image: 'https://photos.google.com/photo/AF1QipPairKU_hZSyWuOQmQbLi4vPsmQv2KiA-kbFsG9',
      title: 'La veille d\'une nouvelle aventure',
      date: 'Septembre 2023',
      caption: 'On était à Mahatamana, avant que je parte pour trouver notre nouvel foyer à Fianarantsoa'
    }
    {
      id: 12,
      image: 'https://photos.google.com/photo/AF1QipPairKU_hZSyWuOQmQbLi4vPsmQv2KiA-kbFsG9',
      title: 'La veille d\'une nouvelle aventure',
      date: '26 Juillet 2023',
      caption: 'On était à Mahatamana, avant que je parte pour trouver notre nouvel foyer à Fianarantsoa'
    }
  ];

  const toggleLike = (id) => {
    setIsLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const openPhoto = (memory) => {
    setSelectedPhoto(memory);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction) => {
    const currentIndex = memories.findIndex(m => m.id === selectedPhoto.id);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % memories.length 
      : (currentIndex - 1 + memories.length) % memories.length;
    setSelectedPhoto(memories[newIndex]);
  };

  return (
    <div className="min-h-screen" style={{ 
      background: 'linear-gradient(135deg, #ffeef8 0%, #fff5f7 50%, #ffe8f0 100%)',
      fontFamily: '"Playfair Display", serif'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1); }
        }
        
        .floating-heart {
          animation: float 6s ease-in-out infinite;
        }
        
        .memory-card {
          animation: fadeInUp 0.6s ease-out backwards;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .memory-card:hover {
          transform: translateY(-12px) scale(1.02);
        }
        
        .memory-card:hover .image-overlay {
          opacity: 1;
        }
        
        .memory-card:hover img {
          transform: scale(1.1);
        }
        
        .image-overlay {
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .modal-content {
          animation: scaleIn 0.3s ease-out;
        }
        
        .heart-btn {
          transition: all 0.3s ease;
        }
        
        .heart-btn:hover {
          transform: scale(1.1);
        }
        
        .heart-btn.liked {
          animation: heartBeat 0.5s ease;
        }
        
        .photo-image {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }
        
        .grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
        }
      `}</style>

      {/* Floating hearts decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none grain" style={{ zIndex: 1 }}>
        <div className="floating-heart absolute top-20 left-10 text-pink-200 opacity-20" style={{ animationDelay: '0s' }}>
          <Heart size={40} fill="currentColor" />
        </div>
        <div className="floating-heart absolute top-40 right-20 text-rose-200 opacity-15" style={{ animationDelay: '2s' }}>
          <Heart size={60} fill="currentColor" />
        </div>
        <div className="floating-heart absolute bottom-32 left-1/4 text-pink-300 opacity-10" style={{ animationDelay: '4s' }}>
          <Heart size={50} fill="currentColor" />
        </div>
        <div className="floating-heart absolute top-1/3 right-1/3 text-rose-200 opacity-12" style={{ animationDelay: '3s' }}>
          <Heart size={35} fill="currentColor" />
        </div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center pt-16 pb-12 px-6">
        <h1 className="text-6xl md:text-7xl font-bold mb-4" style={{
          background: 'linear-gradient(135deg, #ec4899 0%, #be185d 50%, #9f1239 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.02em'
        }}>
          Nos Souvenirs
        </h1>
        <p className="text-2xl md:text-3xl text-rose-700 mb-3" style={{ 
          fontFamily: '"Cormorant Garamond", serif',
          fontStyle: 'italic',
          fontWeight: 300
        }}>
          Chaque moment avec toi est précieux
        </p>
        <div className="flex justify-center items-center gap-2 text-pink-600">
          <Heart size={20} fill="currentColor" />
          <span className="text-lg" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
            Pour Manjakeliko
          </span>
          <Heart size={20} fill="currentColor" />
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <div 
              key={memory.id}
              className="memory-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openPhoto(memory)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl" style={{
                background: 'linear-gradient(135deg, #fff 0%, #fffbfc 100%)',
                border: '1px solid rgba(236, 72, 153, 0.1)'
              }}>
                {/* Image container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-rose-50">
                  <img 
                    src={memory.image}
                    alt={memory.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="image-overlay absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-2xl font-semibold mb-1">{memory.title}</h3>
                      <p className="text-rose-200 text-sm" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                        {memory.date}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card footer */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-rose-900 mb-2">{memory.title}</h3>
                      <p className="text-rose-700 text-sm leading-relaxed" style={{ 
                        fontFamily: '"Cormorant Garamond", serif',
                        fontStyle: 'italic'
                      }}>
                        {memory.caption}
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(memory.id);
                      }}
                      className={`heart-btn flex-shrink-0 ${isLiked[memory.id] ? 'liked' : ''}`}
                    >
                      <Heart 
                        size={28} 
                        className={isLiked[memory.id] ? 'text-rose-600' : 'text-rose-300'}
                        fill={isLiked[memory.id] ? 'currentColor' : 'none'}
                      />
                    </button>
                  </div>
                  <div className="mt-4 text-xs text-rose-500" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                    {memory.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged photo */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={closePhoto}
        >
          <div className="modal-content relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={closePhoto}
              className="absolute -top-12 right-0 text-white hover:text-rose-300 transition-colors"
            >
              <X size={32} />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); navigatePhoto('prev'); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 backdrop-blur-sm transition-all"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigatePhoto('next'); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 backdrop-blur-sm transition-all"
            >
              <ChevronRight size={32} />
            </button>

            {/* Photo content */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="photo-image aspect-square md:aspect-auto overflow-hidden">
                  <img 
                    src={selectedPhoto.image}
                    alt={selectedPhoto.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center" style={{
                  background: 'linear-gradient(135deg, #fff5f7 0%, #ffeef8 100%)'
                }}>
                  <div className="mb-6">
                    <Heart size={40} className="text-rose-500 mb-4" fill="currentColor" />
                    <h2 className="text-4xl font-bold text-rose-900 mb-3">
                      {selectedPhoto.title}
                    </h2>
                    <p className="text-rose-600 text-lg mb-6" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                      {selectedPhoto.date}
                    </p>
                  </div>
                  <p className="text-xl text-rose-800 leading-relaxed" style={{ 
                    fontFamily: '"Cormorant Garamond", serif',
                    fontStyle: 'italic'
                  }}>
                    "{selectedPhoto.caption}"
                  </p>
                  <div className="mt-8 pt-8 border-t border-rose-200">
                    <p className="text-sm text-rose-600" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                      Avec tout mon amour ❤️
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer message */}
      <div className="relative z-10 text-center pb-16 px-6">
        <div className="max-w-2xl mx-auto p-8 rounded-3xl" style={{
          background: 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(236, 72, 153, 0.2)'
        }}>
          <Heart size={40} className="text-rose-500 mx-auto mb-4" fill="currentColor" />
          <p className="text-2xl md:text-3xl text-rose-900 mb-3" style={{ 
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: 'italic'
          }}>
            Chaque photo raconte notre histoire
          </p>
          <p className="text-rose-700 text-lg" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
            Et je suis tellement reconnaissant pour chaque moment passé avec toi.
            <br />
            Joyeuse Saint-Valentin, mon amour ! 💕
          </p>
        </div>
      </div>
    </div>
  );
}