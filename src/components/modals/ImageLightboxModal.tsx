import React from 'react';
import { X, Image as ImageIcon } from 'lucide-react';

interface ImageLightboxModalProps {
  image: {
    url: string;
    title: string;
    caption?: string;
  } | null;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  image,
  onClose,
}) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#131b2e] border border-[#3c494e] max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl relative flex flex-col">
        {/* Header */}
        <div className="bg-[#060e20] border-b border-[#3c494e]/40 p-4 px-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-2 font-code-sm text-xs text-[#a4e6ff]">
            <ImageIcon className="w-4 h-4" />
            <span>ARCHIVE_PREVIEW // {image.title}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#859399] hover:text-[#dae2fd] transition-colors cursor-pointer"
            aria-label="Close image lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Canvas */}
        <div className="p-4 bg-[#060e20] flex items-center justify-center overflow-auto max-h-[65vh]">
          <img
            alt={image.title}
            className="max-h-[60vh] w-auto object-contain border border-[#3c494e]/30"
            src={image.url}
          />
        </div>

        {/* Footer info */}
        {image.caption && (
          <div className="p-4 bg-[#131b2e] border-t border-[#3c494e]/30 font-code-sm text-xs text-[#bbc9cf]">
            <span className="text-[#a4e6ff] mr-2">LOG NOTE:</span>
            {image.caption}
          </div>
        )}
      </div>
    </div>
  );
};
