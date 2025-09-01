import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  // All gallery images
  const galleryImages = [
    '106134964_1000699030388546_8813291048160137992_n.jpg',
    '106247572_1000699117055204_4456303343505534921_n.jpg',
    '106297707_1000699020388547_3742152825019130347_n.jpg',
    '131286129_1130474167411031_6305891915664981449_n.jpg',
    '34963729_465011530623968_5935512865971634176_n.jpg',
    '35142974_465011027290685_3430021853941334016_n.jpg',
    '35146389_465011280623993_2076598348105646080_n.jpg',
    '35195628_465011497290638_7279601565332144128_n.jpg',
    '35265961_465011347290653_5438160287364546560_n.jpg',
    '474521395_2121866958271742_4611444455579135674_n.jpg',
    '474899528_2121866954938409_3484030516373131524_n.jpg',
    '475895077_2131634870628284_2408142642362214930_n.jpg',
    '476162088_2131634587294979_1782095260138082371_n.jpg',
    '476428657_2131634853961619_4220883679107877673_n.jpg',
    '476449935_2131634860628285_7349775265480968078_n.jpg',
    '487478839_2175370532921384_6515506247341114399_n.jpg',
    '488382977_2176650046126766_3068641811718048103_n.jpg',
    '488581623_2180745282383909_9140438318457290718_n.jpg',
    '488967764_2180745352383902_6596219046540462608_n.jpg',
    '50151392_625843877874065_7229677784606441472_n.jpg',
    '75388173_826265624498555_1906310608580509696_n.jpg'
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imagesPerPage = 8; // 4x2 grid
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);

  // Get current page images
  const getCurrentPageImages = () => {
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    return galleryImages.slice(startIndex, endIndex);
  };

  // Open lightbox with specific image
  const openLightbox = (imageIndex: number) => {
    const globalIndex = (currentPage - 1) * imagesPerPage + imageIndex;
    setCurrentImageIndex(globalIndex);
    setLightboxOpen(true);
  };

  // Navigate in lightbox
  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex((prev) =>
        prev > 0 ? prev - 1 : galleryImages.length - 1
      );
    } else {
      setCurrentImageIndex((prev) =>
        prev < galleryImages.length - 1 ? prev + 1 : 0
      );
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      navigateLightbox('prev');
    } else if (e.key === 'ArrowRight') {
      navigateLightbox('next');
    } else if (e.key === 'Escape') {
      setLightboxOpen(false);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
            Prosjekt <span className="text-primary">Galleri</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Se kvaliteten og håndverket som går inn i hvert Team Jæren prosjekt.
            Fra boliger til næringsbygg, vi leverer fortreffelighet.
          </p>
        </div>

        {/* Gallery Grid - 4x2 layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {getCurrentPageImages().map((image, index) => (
            <div
              key={`${currentPage}-${index}`}
              className="group cursor-pointer construction-card overflow-hidden aspect-square"
              onClick={() => openLightbox(index)}
            >
              <img
                src={`/gallery/${image}`}
                alt={`Team Jæren project ${(currentPage - 1) * imagesPerPage + index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination className="mb-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={() => setCurrentPage(page)}
                    isActive={currentPage === page}
                    className="cursor-pointer"
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}

        {/* Lightbox */}
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent
            className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none"
            onKeyDown={handleKeyDown}
          >
            <div className="relative w-full h-full flex items-center justify-center">

              {/* Previous button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                onClick={() => navigateLightbox('prev')}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              {/* Next button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                onClick={() => navigateLightbox('next')}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Main image */}
              <img
                src={`/gallery/${galleryImages[currentImageIndex]}`}
                alt={`Team Jæren project ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 text-sm">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;