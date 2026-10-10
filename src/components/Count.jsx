import { useState, useRef, useId } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const [kick, setKick] = useState(0);
  const [particles, setParticles] = useState([]);
  const gradId = useId();
  const particleId = useRef(0);

  const handleClick = () => {
    setCount((c) => c + 1);
    setKick((k) => k + 1);

    const newParticles = Array.from({ length: 6 }).map(() => {
      particleId.current += 1;
      return {
        id: particleId.current,
        tx: (Math.random() - 0.5) * 44,
        delay: Math.random() * 70,
        big: Math.random() > 0.5,
      };
    });
    setParticles((p) => [...p, ...newParticles]);
  };

  const removeParticle = (id) => {
    setParticles((p) => p.filter((particle) => particle.id !== id));
  };

  return (
    <div className="p-16">
      <style>{`
        @keyframes fireKick {
          0%   { transform: scale(1) rotate(0deg); }
          25%  { transform: scale(1.32) rotate(-10deg); }
          50%  { transform: scale(0.9) rotate(8deg); }
          70%  { transform: scale(1.15) rotate(-4deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes glowPulse {
          0%   { opacity: 0.55; transform: scale(0.5); }
          100% { opacity: 0; transform: scale(2); }
        }
        @keyframes emberFloat {
          0%   { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(var(--tx), -38px) scale(0.2); opacity: 0; }
        }
        .fire-kick   { animation: fireKick 0.55s cubic-bezier(.36,.07,.19,.97); filter: drop-shadow(0 0 6px rgba(255,120,10,0.55)); }
        .glow-pulse  { animation: glowPulse 0.55s ease-out forwards; }
        .ember       { animation: emberFloat 0.7s ease-out forwards; }
      `}</style>

      <button
        onClick={handleClick}
        className="relative flex items-center gap-3 pl-3 pr-6 py-2 rounded-full bg-white shadow-md hover:shadow-lg active:scale-95 transition-all duration-150"
      >
        <span className="relative flex items-center justify-center w-9 h-9">
          {kick > 0 && (
            <span
              key={kick}
              className="absolute inset-0 rounded-full bg-orange-400 glow-pulse"
            />
          )}

          {particles.map((p) => (
            <span
              key={p.id}
              onAnimationEnd={() => removeParticle(p.id)}
              className="ember absolute rounded-full"
              style={{
                width: p.big ? 6 : 4,
                height: p.big ? 6 : 4,
                background: p.big ? "#fce202" : "#fc9502",
                left: "50%",
                bottom: "12%",
                marginLeft: p.big ? -3 : -2,
                animationDelay: `${p.delay}ms`,
                "--tx": `${p.tx}px`,
              }}
            />
          ))}

          <svg
            key={kick}
            viewBox="-33 0 255 255"
            className={`relative w-7 h-7 ${kick > 0 ? "fire-kick" : ""}`}
          >
            <defs>
              <linearGradient
                id={gradId}
                gradientUnits="userSpaceOnUse"
                x1="94.141"
                y1="255"
                x2="94.141"
                y2="0.188"
              >
                <stop offset="0" stopColor="#ff4c0d" />
                <stop offset="1" stopColor="#fc9502" />
              </linearGradient>
            </defs>
            <path
              d="M187.899,164.809 C185.803,214.868 144.574,254.812 94.000,254.812 C42.085,254.812 -0.000,211.312 -0.000,160.812 C-0.000,154.062 -0.121,140.572 10.000,117.812 C16.057,104.191 19.856,95.634 22.000,87.812 C23.178,83.513 25.469,76.683 32.000,87.812 C35.851,94.374 36.000,103.812 36.000,103.812 C36.000,103.812 50.328,92.817 60.000,71.812 C74.179,41.019 62.866,22.612 59.000,9.812 C57.662,5.384 56.822,-2.574 66.000,0.812 C75.352,4.263 100.076,21.570 113.000,39.812 C131.445,65.847 138.000,90.812 138.000,90.812 C138.000,90.812 143.906,83.482 146.000,75.812 C148.365,67.151 148.400,58.573 155.999,67.813 C163.226,76.600 173.959,93.113 180.000,108.812 C190.969,137.321 187.899,164.809 187.899,164.809 Z"
              fill={`url(#${gradId})`}
              fillRule="evenodd"
            />
            <path
              d="M94.000,254.812 C58.101,254.812 29.000,225.711 29.000,189.812 C29.000,168.151 37.729,155.000 55.896,137.166 C67.528,125.747 78.415,111.722 83.042,102.172 C83.953,100.292 86.026,90.495 94.019,101.966 C98.212,107.982 104.785,118.681 109.000,127.812 C116.266,143.555 118.000,158.812 118.000,158.812 C118.000,158.812 125.121,154.616 130.000,143.812 C131.573,140.330 134.753,127.148 143.643,140.328 C150.166,150.000 159.127,167.390 159.000,189.812 C159.000,225.711 129.898,254.812 94.000,254.812 Z"
              fill="#fc9502"
              fillRule="evenodd"
            />
            <path
              d="M95.000,183.812 C104.250,183.812 104.250,200.941 116.000,223.812 C123.824,239.041 112.121,254.812 95.000,254.812 C77.879,254.812 69.000,240.933 69.000,223.812 C69.000,206.692 85.750,183.812 95.000,183.812 Z"
              fill="#fce202"
              fillRule="evenodd"
            />
          </svg>
        </span>

        <span className="text-2xl font-bold text-gray-800 tabular-nums">
          {count}
        </span>
      </button>
    </div>
  );
}



const cards = document.querySelectorAll('.wrapper-bottom_images');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const nameElement = card.querySelector('.image-tag div');
    const doctorName = nameElement ? nameElement.innerText.toLowerCase() : '';

    let popupId = '';

    if (doctorName.includes('norman')) {
      popupId = 'norman';
    } else if (doctorName.includes('montalcini')) {
      popupId = 'rita';
    } else if (doctorName.includes('alvaro')) {
      popupId = 'Alvaro';
    } else if (doctorName.includes('edward')) {
      popupId = 'edward';
    } else if (doctorName.includes('jordan')) {
      popupId = 'jordan';
    } else if (doctorName.includes('paul')) {
      popupId = 'paul';
    }

    if (popupId) {
      // 1. Hide/close all popups
      document.querySelectorAll('.pop_marquee').forEach(popup => {
        popup.style.display = 'none';
        popup.style.opacity = '0';
        popup.classList.add('is_closed');
      });

      // 2. Open the matching popup
      const targetPopup = document.getElementById(popupId);
      if (targetPopup) {
        targetPopup.style.display = 'flex';
        targetPopup.style.opacity = '1';
        targetPopup.classList.remove('is_closed');

        const pop_up = document.querySelector('.b_pop_overlay');
        if (pop_up) {
          pop_up.classList.add('b_bg_dark');
        }
      }
    }
  });
});

// Close button handler
document.querySelectorAll('.cancel-btn').forEach(cancelBtn => {
  cancelBtn.addEventListener('click', () => {
    const activePopup = cancelBtn.closest('.pop_marquee');
    if (activePopup) {
      activePopup.style.display = 'none';
      activePopup.style.opacity = '0';
      activePopup.classList.add('is_closed');
    }

    const popOverlay = cancelBtn.closest('.b_pop_overlay');
    if (popOverlay) {
      popOverlay.classList.remove('b_bg_dark');
    }
  });
});