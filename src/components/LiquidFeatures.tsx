import { Glass } from "@samasante/liquid-glass";

const features = [
  {
    title: "Real Time Housekeeping Management",
    description:
      "Track room status, cleaning progress, and housekeeping updates in real time from one dashboard.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    title: "Live Preview Dashboard",
    description:
      "Preview screen content before publishing to avoid display errors and keep every screen consistent.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
  {
    title: "Analytic Dashboard",
    description:
      "Monitor engagement, content performance, and screen activity to make smarter decisions.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "Cloud Based Architecture",
    description:
      "Manage screens remotely without depending on manual on-site updates.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
  },
];

export default function LiquidFeatures() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dark background with Dot Grid pattern to showcase the refraction */}
      <div className="absolute inset-0 w-full h-full bg-[#0a0a0a] z-0">
        {/* The Dot Pattern */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            backgroundPosition: "0 0",
          }}
        ></div>

        {/* Subtle static glowing orbs for extra color */}
        <div className="absolute top-[10%] left-[20%] w-96 h-96 bg-indigo-600/10 rounded-full mix-blend-screen filter blur-[100px]"></div>
        <div className="absolute -bottom-32 right-[20%] w-96 h-96 bg-purple-600/10 rounded-full mix-blend-screen filter blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Glass
          className="w-full relative z-10 p-12 md:p-20 shadow-[0_32px_64px_rgba(0,0,0,0.5)] transition-all duration-700"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            borderRadius: "48px",
          }}
          optics={{
            strength: 0.14,
            depth: 0.95,
            curvature: 0.65,
            dispersion: 0.6,
            bend: 1,
            bendWidth: 0.3,
            sheen: 0,
            sheenWidth: 0,
            specular: 1.6,
            sheenAngle: 0,
            frost: 0,
            glow: 0,
          }}
        >
          <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Features Built to{" "}
              <span className="text-white">
                Simplify Screen & Property Management
              </span>
            </h2>
          </div>

          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center z-10 px-4 group"
                >
                  {/* Vertical Divider with Dot (Desktop) */}
                  {index < features.length - 1 && (
                    <div className="hidden md:flex absolute top-10 -right-4 bottom-0 w-px flex-col items-center justify-center z-20">
                      <div className="w-px h-full bg-white/20"></div>
                      <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]"></div>
                    </div>
                  )}

                  <div className="mb-8">
                    <div className="w-28 h-28 flex items-center justify-center text-white border border-white/20 rounded-full transition-transform group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] duration-500 ease-out bg-white/5 backdrop-blur-md shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]">
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-4 min-h-14 flex items-center justify-center drop-shadow-md">
                    {feature.title}
                  </h3>

                  <p className="text-white/80 text-sm leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Glass>
      </div>
    </section>
  );
}
