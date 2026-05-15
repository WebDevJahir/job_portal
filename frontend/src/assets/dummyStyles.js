// Toast Component Styles
export const toastStyles = {
  container:
    "fixed top-6 right-6 z-[9999] flex items-center gap-3 px-4 py-3 rounded-2xl shadow-2xl border transform transition-all hover:scale-105 animate-slide-in-right",
  iconWrapper: "shrink-0",
  message: "text-sm font-bold tracking-tight pr-4",
  closeButton: "p-1 rounded-full hover:bg-black/5 transition-colors",
  closeIcon: "w-4 h-4 opacity-50 hover:opacity-100",

  variants: {
    success: {
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      text: "text-emerald-800",
    },
    error: {
      bg: "bg-rose-50",
      border: "border-rose-100",
      text: "text-rose-800",
    },
  },

  animations: `
    @keyframes slide-in-right {
      from {
        transform: translateX(100%) scale(0.9);
        opacity: 0;
      }
      to {
        transform: translateX(0) scale(1);
        opacity: 1;
      }
    }
    .animate-slide-in-right {
      animation: slide-in-right 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }
  `,
};

export const bannerStyles = {
  // ==================== LottieLogo Inline Styles ====================
  logoWrapper: (size) => ({
    width: size,
    height: size,
    borderRadius: Math.max(8, size * 0.15),
    overflow: "hidden",
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    boxShadow: "none",
  }),

  logoPreviewImg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "blur(12px) saturate(1.05)",
    transform: "scale(1.06)",
    transition: "opacity 360ms ease",
  },

  logoBlurOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))",
    backdropFilter: "blur(4px)",
    transition: "opacity 360ms ease",
  },

  logoContainer: (playerReady) => ({
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 360ms ease, transform 360ms ease",
    opacity: playerReady ? 1 : 0,
    transform: `scale(${playerReady ? 1 : 0.98})`,
    zIndex: 2,
  }),

  logoFallbackText: (size) => ({
    fontWeight: 700,
    fontSize: Math.round(size / 2.8),
  }),

  logoFallbackOverlay: (size) => ({
    zIndex: 3,
    color: "#fff",
    fontWeight: 800,
    fontSize: Math.round(size / 2.6),
    textShadow: "0 2px 6px rgba(0,0,0,0.15)",
  }),

  // ==================== Video Modal Inline Style ====================
  modalVideoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },

  // ==================== Tailwind Class Strings ====================
  // Banner Container
  bannerContainer:
    "relative font-mono min-h-screen overflow-hidden bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50",

  // Canvas
  canvas: "absolute inset-0 w-full h-full",

  // Content Wrapper
  contentWrapper:
    "relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28",

  // Max width container
  maxWidthContainer: "max-w-6xl mx-auto",

  // Grid
  grid: "grid lg:grid-cols-2 md:grid-cols-2 gap-8 md:gap-10 items-center",

  // Left Column
  leftColumn: "space-y-6 sm:space-y-8",

  // Badge
  badgeContainer:
    "inline-flex items-center gap-2 bg-linear-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-200 animate-pulse",
  badgeIcon: "w-4 h-4 text-yellow-500",
  badgeText:
    "text-sm sm:text-sm font-medium bg-linear-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent",

  // Heading
  heading:
    "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight",
  headingFindYour:
    "block bg-linear-to-r from-blue-600 via-indigo-700 to-purple-800 bg-clip-text text-transparent",
  headingDreamJobWrapper: "relative inline-block",
  headingDreamJob:
    "relative bg-linear-to-r from-blue-600 to-indigo-800 bg-clip-text text-transparent",
  headingUnderline:
    "absolute -bottom-2 left-0 w-full h-2 bg-linear-to-r from-blue-400 to-indigo-500 rounded-full blur-sm opacity-70",

  // Description
  description:
    "text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed animate-fade-in-up",

  // Buttons Container
  buttonsContainer: "flex flex-wrap gap-3 sm:gap-4",

  // Find Jobs Button
  findJobsButton:
    "group cursor-pointer relative px-5 sm:px-7 py-3 sm:py-4 bg-linear-to-r from-blue-600 to-indigo-700 text-white rounded-2xl font-semibold overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5",
  findJobsShine:
    "absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000",
  findJobsContent: "relative flex items-center gap-2 sm:gap-3",
  findJobsText: "text-sm sm:text-base",
  findJobsIcon:
    "w-5 h-5 group-hover:translate-x-2 transition-transform duration-300",
  findJobsGlow:
    "absolute -inset-1 bg-linear-to-r from-blue-400 to-indigo-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500",

  // Watch Demo Button
  watchDemoButton:
    "group cursor-pointer px-4 sm:px-6 py-3 sm:py-4 bg-white/90 backdrop-blur-sm text-gray-800 rounded-2xl font-semibold shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 sm:gap-3",
  watchDemoIcon: "w-5 h-5 text-indigo-600",
  watchDemoText: "text-sm sm:text-base",
  watchDemoArrow:
    "w-5 h-5 group-hover:translate-x-1 transition-transform duration-300",

  // Right Column
  rightColumn: "relative pb-4",
  cardContainer:
    "relative transform-gpu transition-transform duration-700 perspective-1000",
  card: "relative bg-linear-to-br from-white to-gray-50 rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-200",

  // Card Header
  cardHeader: "flex items-center justify-between mb-4 sm:mb-6",
  briefcaseIconContainer:
    "p-2 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl",
  briefcaseIcon: "w-6 h-6 text-white",
  featuredTitle: "font-bold text-gray-800",
  featuredSubtitle: "text-xs sm:text-sm text-gray-500",

  // Jobs List
  jobsList: "space-y-3 sm:space-y-4",
  jobItem:
    "group relative bg-white rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer",
  jobItemFlex: "flex items-center justify-between",
  jobItemLeft: "flex items-center gap-3 sm:gap-4",

  // Job Logo
  jobLogoContainer:
    "relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center overflow-hidden",
  jobFallbackLogo:
    "w-full h-full flex items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 shadow-lg text-white",
  jobFallbackText: "text-lg font-bold",

  // Job Details
  jobTitle: "font-semibold text-gray-800 text-sm sm:text-base",
  jobCompany: "text-xs sm:text-sm text-gray-500",

  // Salary
  salaryContainer: "text-right",
  salaryAmount: "font-bold text-gray-800",
  salaryPeriod: "text-xs text-gray-500",

  // Hover Overlay
  jobHoverOverlay:
    "absolute inset-0 bg-linear-to-r from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 rounded-xl transition-all duration-300",

  // View All Button
  viewAllContainer: "mt-4 sm:mt-6 pt-4 border-t border-gray-200",
  viewAllButton:
    "w-full py-2.5 sm:py-3 bg-linear-to-r from-blue-50 to-indigo-50 text-indigo-600 rounded-full cursor-pointer font-medium hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 flex items-center justify-center gap-2",
  viewAllText: "text-sm sm:text-base",
  viewAllIcon: "w-4 h-4",

  // SVG Wave
  waveContainer:
    "absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none",
  waveSvg: "relative w-full h-24 sm:h-32 lg:h-48",
  wavePathFill: "fill-current text-white",

  // ==================== Video Modal Class Strings ====================
  modalBackdrop: "absolute inset-0 bg-black/60 backdrop-blur-sm",
  modalPanel:
    "relative z-10 w-full max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-4xl mx-auto",
  modalCloseButton:
    "absolute cursor-pointer -top-6 right-0 md:-right-6 bg-white rounded-full p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400",
  modalCloseIcon: "w-5 h-5 text-gray-700",
  modalVideoWrapper: "bg-white rounded-xl overflow-hidden shadow-2xl",
  modalVideoContainerClass: "relative",

  // ==================== Global CSS (Keyframes + Utility Classes) ====================
  globalStyles: `
    @keyframes float {
      0%,100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(5deg); }
    }
    @keyframes float-slow {
      0%,100% { transform: translateY(0px); }
      50% { transform: translateY(-40px); }
    }
    @keyframes float-delayed {
      0%,100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-30px) rotate(-5deg); }
    }
    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
    .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
    .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
    .perspective-1000 { perspective: 1000px; }
    .rotate-y-12 { transform: rotateY(12deg); }
  `,
};

// assets/dummyStyles.js

export const candidateStyles = {
  // Container styles
  container:
    "min-h-screen bg-linear-to-br from-gray-50 via-white to-blue-50/30 p-4 md:p-8 font-sans overflow-hidden",
  innerContainer: "max-w-7xl font-mono mx-auto relative z-10",

  // Header styles
  header: "text-center mb-10 pt-6 md:pt-8",
  headerGlowWrapper: "flex justify-center mb-4",
  headerGlow: "relative",
  headerGlowEffect:
    "absolute -inset-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-30 animate-pulse",
  headerTitle:
    "relative text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-800",
  headerSpan:
    "bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent",
  headerSubtitle: "text-sm md:text-base text-gray-600 max-w-3xl mx-auto",

  // Grid styles
  grid: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-10 px-2 md:px-4",

  // Card styles
  cardWrapper: "relative group",
  cardGlow:
    "absolute -inset-3 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl",
  cardContainer: "relative cursor-pointer flip-card",
  cardBorder:
    "absolute inset-0 rounded-3xl border-2 border-white/20 pointer-events-none",

  // Front card styles
  frontCard:
    "absolute inset-0 rounded-3xl p-2 sm:p-6 md:p-6 lg:p-6 flex flex-col justify-between border-2 border-white/40 shadow-2xl overflow-hidden",
  frontCardOverlay: "absolute inset-0 opacity-5 pointer-events-none",
  frontCardCircle1:
    "absolute top-0 right-0 w-24 h-24 bg-white rounded-full -translate-y-12 translate-x-12",
  frontCardCircle2:
    "absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full translate-y-8 -translate-x-8",
  frontCardContent: "relative space-y-4",
  frontCardIconWrapper: "flex items-center justify-between",
  frontCardIcon:
    "p-3 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30",
  frontCardIconSvg: "w-6 h-6 text-white",
  frontCardTextContent: "space-y-3",
  frontCardTitle: "text-lg sm:text-2xl font-bold text-white leading-tight",
  frontCardDescription: "text-white/90 text-sm sm:text-sm leading-relaxed",
  frontCardStats:
    "relative mt-4 p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20",
  frontCardStatsRow: "flex items-center gap-3",
  frontCardStatsIcon: "p-2 rounded-full bg-white/20",
  frontCardStatsText: "flex-1",
  frontCardStatsLabel: "text-sm font-medium text-white",
  frontCardStatsBar: "w-full h-1 bg-white/20 rounded-full mt-2",
  frontCardStatsFill: "h-full rounded-full w-3/4",

  // Back card styles
  backCard:
    "absolute inset-0 rounded-3xl p-5 sm:p-6 md:p-6 lg:p-6 flex flex-col justify-center border-2 border-white/40 shadow-2xl overflow-hidden",
  backCardOverlay: "absolute inset-0 opacity-5 pointer-events-none",
  backCardCircle:
    "absolute top-1/2 left-1/2 w-36 h-36 bg-white rounded-full -translate-x-1/2 -translate-y-1/2",
  backCardContent: "relative space-y-6",
  backCardHeader: "text-center space-y-3",
  backCardHeaderIcon: "flex items-center justify-center gap-2",
  backCardIcon: "p-2 rounded-full",
  backCardHeaderTitle: "text-lg sm:text-xl font-bold text-white",
  backCardDivider: "w-20 h-1 bg-white/30 mx-auto rounded-full",
  backCardGrid: "grid grid-cols-1 gap-3 max-w-xs mx-auto",
  backCardItem:
    "flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300",
  backCardItemIcon: "shrink-0 p-2 rounded-lg bg-white/20",
  backCardItemIconSvg: "w-4 h-4 text-white",
  backCardItemText: "text-white font-medium text-sm flex-1 text-center",
  backCardItemCheck: "w-4 h-4 text-white/60 shrink-0",

  // Separator styles
  separatorWrapper: "flex items-center justify-center mb-8",
  separatorLine1:
    "h-px w-16 bg-linear-to-r from-transparent via-blue-300 to-transparent",
  separatorDots: "mx-6 flex items-center gap-2",
  separatorDot1: "w-2 h-2 rounded-full bg-blue-400 animate-pulse",
  separatorDot2: "w-2 h-2 rounded-full bg-cyan-400 animate-pulse",
  separatorDot3: "w-2 h-2 rounded-full bg-blue-400 animate-pulse",
  separatorLine2:
    "h-px w-16 bg-linear-to-r from-transparent via-cyan-300 to-transparent",

  // Footer styles
  footer: "text-center py-8 md:py-12",
  ctaButton:
    "group cursor-pointer relative overflow-hidden px-8 md:px-10 py-3 md:py-4 bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 text-white rounded-full font-bold text-base md:text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1",
  ctaButtonShine:
    "absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000",
  ctaButtonContent: "relative flex items-center justify-center gap-3 md:gap-4",
  ctaButtonIcon: "p-2 rounded-full bg-white/20",
  ctaButtonText: "tracking-wide",
  ctaButtonArrow:
    "w-5 h-5 group-hover:translate-x-2 transition-transform duration-300",
  ctaButtonGlow:
    "absolute -inset-3 bg-linear-to-r from-blue-500/20 to-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10",

  // Card height classes
  cardHeight: "h-64 sm:h-72 md:h-80 lg:h-96",

  // Color classes for each card type
  cardColors: {
    blue: {
      front: "from-blue-500 via-blue-400 to-cyan-400",
      back: "from-blue-600 to-blue-700",
      accent: "bg-blue-500",
    },
    emerald: {
      front: "from-emerald-500 via-emerald-400 to-green-400",
      back: "from-emerald-600 to-emerald-700",
      accent: "bg-emerald-500",
    },
    violet: {
      front: "from-violet-500 via-violet-400 to-purple-400",
      back: "from-violet-600 to-violet-700",
      accent: "bg-violet-500",
    },
    amber: {
      front: "from-amber-500 via-amber-400 to-orange-400",
      back: "from-amber-600 to-amber-700",
      accent: "bg-amber-500",
    },
  },

  // Global styles (CSS-in-JS string)
  globalStyles: `
    @keyframes float {
      0%, 100% { transform: translateY(0) translateX(0); }
      50% { transform: translateY(-15px) translateX(10px); }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .backface-hidden {
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }
    .group:hover {
      transform: translateY(-4px);
      transition: transform 0.3s ease;
    }
    @keyframes gradient-shift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    .gradient-text {
      background-size: 200% auto;
      animation: gradient-shift 3s ease-in-out infinite;
    }
  `,
};

export const careerPageStyles = {
  // ==================== Tailwind Class Strings ====================
  // Page Container
  pageContainer:
    "min-h-screen font-mono bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8",

  // Content Wrapper
  contentWrapper: "max-w-7xl mx-auto",

  // Header
  header: "text-center mb-16",
  headerTitle: "text-5xl font-bold text-gray-900 mb-4",
  headerHighlight: "text-blue-600",
  headerSubtitle: "text-xl text-gray-600 max-w-3xl mx-auto",

  // Row Container
  rowContainer: "mb-10 relative overflow-hidden",
  rowContainerLast: "relative overflow-hidden",

  // Scrolling Flex Containers
  scrollRow: "flex items-center py-6",
  scrollRowRightToLeft: "flex animate-scroll-right-to-left items-center py-6",
  scrollRowLeftToRight: "flex animate-scroll-left-to-right items-center py-6",

  // Company Item
  companyItem:
    "group shrink-0 mx-3 sm:mx-4 transition-all duration-300 w-40 sm:w-48 md:w-56 lg:w-60 xl:w-64",
  companyItemWithPadding:
    "group shrink-0 mx-3 sm:mx-4 p-4 sm:p-6 transition-all duration-300 w-40 sm:w-48 md:w-56 lg:w-60 xl:w-64",

  // Inner Container
  companyInner: "flex flex-col items-center",

  // Logo Link
  logoLink: "block w-36 h-18 sm:w-44 sm:h-24 md:w-48 md:h-28 lg:w-56 lg:h-32",

  // Logo Image
  logoImage: "w-full h-full object-contain",

  // ==================== Global CSS (Keyframes + Animations) ====================
  globalStyles: `
    @keyframes scrollRightToLeft {
      0% { transform: translateX(0); }
      100% { transform: translateX(calc(-50% - 1rem)); }
    }
    @keyframes scrollLeftToRight {
      0% { transform: translateX(calc(-50% - 1rem)); }
      100% { transform: translateX(0); }
    }
    
    .animate-scroll-right-to-left,
    .animate-scroll-left-to-right {
      display: flex;
      width: max-content;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

    /* Default (mobile) - faster so fewer items fit */
    .animate-scroll-right-to-left {
      animation-name: scrollRightToLeft;
      animation-duration: 24s;
    }
    .animate-scroll-left-to-right {
      animation-name: scrollLeftToRight;
      animation-duration: 24s;
    }

    /* Medium screens - a bit slower */
    @media (min-width: 640px) {
      .animate-scroll-right-to-left { animation-duration: 32s; }
      .animate-scroll-left-to-right { animation-duration: 32s; }
    }

    /* Large screens - approach original feel */
    @media (min-width: 1024px) {
      .animate-scroll-right-to-left { animation-duration: 36s; }
      .animate-scroll-left-to-right { animation-duration: 36s; }
    }

    /* XL screens (keep original exactly) */
    @media (min-width: 1280px) {
      .animate-scroll-right-to-left { animation-duration: 40s; }
      .animate-scroll-left-to-right { animation-duration: 40s; }
    }

    /* pause on hover */
    .animate-scroll-right-to-left:hover,
    .animate-scroll-left-to-right:hover {
      animation-play-state: paused;
    }
  `,
};

// Add this to your existing dummyStyles.js file

// CompanyPage Component Styles
export const companyPageStyles = {
  // Container styles
  container:
    "min-h-screen font-[pacifico] bg-linear-to-br from-gray-50 to-blue-50 p-6 md:p-10 overflow-x-hidden",
  innerContainer: "max-w-7xl mx-auto px-4",

  // Header styles
  headerWrapper: "mb-8 flex items-center justify-between",
  headerTitleWrapper: "flex items-center gap-3 mb-3",
  headerIcon: "w-8 h-8 text-blue-600",
  headerTitle:
    "text-3xl md:text-4xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",

  // Company tabs styles
  tabsContainer: "mb-8",
  tabsGrid:
    "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 justify-center gap-3",
  tabButton:
    "flex flex-col cursor-pointer items-center p-4 rounded-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden",
  tabImageWrapper: "mb-2",
  tabImageContainer: "w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded",
  tabImage: "w-full h-full object-cover max-w-full",
  tabText:
    "font-semibold text-sm mb-1 text-center whitespace-normal wrap-break-word",
  tabTextSelected: "text-blue-700",
  tabTextUnselected: "text-gray-700",

  // Questions header styles
  questionsHeader: "mb-6",
  questionsTitle: "text-2xl font-bold text-gray-800",
  questionsCount: "text-gray-500 text-lg ml-2",

  // Loading skeleton styles
  skeletonGrid: "grid grid-cols-1 sm:grid-cols-2 gap-6",
  skeletonCard: "bg-white rounded-2xl shadow-lg border p-6 animate-pulse",
  skeletonLine1: "h-6 bg-gray-200 rounded w-3/4 mb-4",
  skeletonLine2: "h-4 bg-gray-200 rounded w-1/2 mb-6",
  skeletonLine3: "h-24 bg-gray-100 rounded",

  // Empty state styles
  emptyState: "text-center py-16 bg-white rounded-2xl shadow-lg border",
  emptyStateTitle: "text-xl font-bold text-gray-600 mb-2",
  emptyStateText: "text-gray-500 mb-6",

  // Questions grid styles
  questionsGrid: "grid grid-cols-1 sm:grid-cols-2 gap-6",

  // Question card styles
  questionCard:
    "bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 relative",
  saveButton:
    "absolute cursor-pointer top-4 right-4 z-20 p-2 rounded-lg transition-all",
  saveButtonSaved: "bg-purple-600 text-white shadow-md",
  saveButtonUnsaved: "bg-white text-gray-600",
  saveIcon: "w-5 h-5",

  // Question card content
  cardContent: "p-6 relative z-10",
  cardHeader: "flex items-start justify-between gap-4 mb-4",
  cardHeaderContent: "flex-1",
  dateWrapper: "flex items-center gap-3 mb-3",
  date: "flex items-center gap-1 text-gray-500 text-sm",
  dateIcon: "w-3 h-3",
  questionTitle: "text-xl font-bold text-gray-800 mb-3 wrap-break-word",

  // Answer section
  answerSection:
    "rounded-xl p-5 border border-transparent bg-linear-to-r from-gray-50 to-blue-50",
  answerHeader: "flex items-center gap-2 mb-3",
  answerIcon: "w-5 h-5 text-yellow-600",
  answerTitle: "font-bold text-gray-700",
  answerText:
    "text-gray-700 leading-relaxed mb-3 whitespace-pre-wrap wrap-break-word break-all sm:break-normal",

  // Key points list
  pointsList: "text-gray-700 mt-3 space-y-2",
  pointItem: "flex items-start gap-2 text-sm",
  pointIcon: "w-4 h-4 text-gray-900 mt-0.5 shrink-0",
  pointText: "wrap-break-word",

  // Show more button
  showMoreWrapper: "mt-10 text-center",
  showMoreButton:
    "btn-3d inline-flex items-center gap-2 px-8 py-3 rounded-2xl text-white font-medium transform transition-transform will-change-transform",
  showMoreIcon: "w-5 h-5",

  // Global styles
  globalStyles: `
    img { max-width: 100%; height: auto; display: block; }
  `,
};

export const contactPageStyles = {
  // ==================== Tailwind Class Strings ====================
  // Page Container
  pageContainer:
    "min-h-screen font-[pacifico] py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden",

  // Main Wrapper
  mainWrapper: "max-w-7xl mx-auto relative z-10",

  // Header
  header: "text-center mb-10 sm:mb-14",
  headerTitle:
    "text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400 mb-3 sm:mb-4",
  headerSubtitle: "text-base sm:text-lg text-gray-500 max-w-2xl mx-auto",

  // Form Card Container
  formCardContainer: "flex justify-center",
  formCardInner: "w-full max-w-6xl",
  formCard:
    "bg-white/80 backdrop-blur-xl rounded-3xl sm:rounded-4xl shadow-2xl border border-white/50 overflow-hidden",

  // Grid Layout
  grid: "grid grid-cols-1 lg:grid-cols-5",

  // Left Panel (Contact Info)
  leftPanel:
    "order-2 lg:order-1 lg:col-span-2 bg-linear-to-br from-indigo-100 to-purple-100 p-6 sm:p-8 md:p-10 text-gray-700 flex flex-col justify-between",
  leftPanelTitle: "text-2xl sm:text-3xl font-bold mb-3 text-gray-800",
  leftPanelDescription: "text-sm sm:text-base text-gray-600 mb-6",
  contactInfoList: "space-y-5 sm:space-y-6",
  contactItem: "flex items-start gap-4",
  contactIconWrapper:
    "w-10 h-10 sm:w-12 sm:h-12 bg-white/60 rounded-2xl flex items-center justify-center backdrop-blur-sm shrink-0",
  mapIcon: "w-5 h-5 sm:w-6 sm:h-6 text-indigo-500",
  mailIcon: "w-5 h-5 sm:w-6 sm:h-6 text-purple-500",
  phoneIcon: "w-5 h-5 sm:w-6 sm:h-6 text-amber-500",
  contactLabel: "text-xs sm:text-sm text-gray-500",
  contactValue: "font-medium text-gray-700 text-sm sm:text-base",
  leftPanelFooter: "mt-6 text-xs sm:text-sm text-gray-500",

  // Right Panel (Form)
  rightPanel: "order-1 lg:order-2 lg:col-span-3 p-6 sm:p-8 md:p-10",
  rightPanelTitle:
    "text-2xl sm:text-3xl font-bold text-gray-800 mb-3 flex items-center gap-2",
  briefcaseIcon: "w-7 h-7 text-indigo-400",
  form: "space-y-5 sm:space-y-6",

  // Form Fields Grid
  formGrid: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6",

  // Form Field Group
  fieldGroup: "group",
  fieldLabel: "block text-sm font-medium text-gray-600 mb-2",

  // Input Wrapper
  inputWrapper: "relative",
  inputGlow:
    "absolute -inset-0.5 bg-linear-to-r from-indigo-200 to-purple-200 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 blur-sm group-focus-within:animate-gradientFlow",
  inputContainer:
    "relative flex items-center bg-white rounded-2xl border border-gray-200 group-focus-within:border-transparent transition-all group-focus-within:shadow-lg group-focus-within:shadow-indigo-50",

  // Input Icons
  userIcon:
    "absolute left-4 w-5 h-5 text-gray-400 group-focus-within:text-indigo-400 transition-colors",
  emailIcon:
    "absolute left-4 w-5 h-5 text-gray-400 group-focus-within:text-indigo-400 transition-colors",
  phoneInputIcon:
    "absolute left-4 w-5 h-5 text-gray-400 group-focus-within:text-indigo-400 transition-colors",
  subjectIcon:
    "absolute left-4 w-5 h-5 text-gray-400 group-focus-within:text-indigo-400 transition-colors",

  // Input Field
  inputField:
    "w-full pl-12 pr-4 py-3 sm:py-4 bg-transparent rounded-2xl outline-none text-gray-700 placeholder-gray-400",

  // Textarea
  textareaWrapper: "relative",
  textareaContainer:
    "relative flex bg-white rounded-2xl border border-gray-200 group-focus-within:border-transparent transition-all group-focus-within:shadow-lg group-focus-within:shadow-indigo-50",
  messageIcon:
    "absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-indigo-400 transition-colors",
  textareaField:
    "w-full pl-12 pr-4 py-3 sm:py-4 bg-transparent rounded-2xl outline-none text-gray-700 placeholder-gray-400 resize-none",

  // Submit Button
  submitButtonContainer: "pt-2 flex justify-center",
  submitButton:
    "group relative cursor-pointer bg-linear-to-r from-indigo-300 to-purple-400 text-white font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden",
  submitButtonDisabled: "opacity-70 cursor-not-allowed",
  submitButtonContent:
    "relative flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg",
  sendIcon: "w-5 h-5",

  // ==================== Toast Component Class Strings ====================
  toastContainer: (borderClass, isExiting) =>
    `fixed top-4 right-4 z-50 flex items-center gap-3 bg-white rounded-lg shadow-lg border-l-4 ${borderClass} p-4 pr-6 min-w-55 transition-all duration-300 ${
      isExiting ? "opacity-0 translate-x-2" : "opacity-100 translate-x-0"
    }`,
  toastSuccessIcon: "w-5 h-5 text-green-500",
  toastErrorIcon: "w-5 h-5 text-red-500",
  toastMessage: "text-gray-700 flex-1",
  toastCloseButton: "text-gray-400 hover:text-gray-600 transition",
  toastCloseIcon: "w-4 h-4",

  // ==================== Global CSS (Keyframes) ====================
  globalStyles: `
    @keyframes gradientFlow {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .animate-gradientFlow {
      background-size: 200% 200%;
      animation: gradientFlow 3s ease infinite;
    }
  `,
};

// Add this to your existing dummyStyles.js file

// FindJobPage Component Styles
export const findJobPageStyles = {
  // Container styles
  container:
    "min-h-screen bg-linear-to-br from-gray-50 to-gray-100/50 font-mono overflow-x-hidden",
  relativeWrapper: "relative",
  gradientOverlay:
    "absolute inset-0 bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10",
  contentContainer: "container mx-auto px-4 pt-8 pb-12 relative",

  // Header styles
  headerCenter: "text-center mb-10",
  headerTitleWrapper: "flex items-center justify-center gap-3 mb-4",
  headerTitle:
    "text-5xl font-[pacifico] font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient",

  // Search container
  searchContainer: "max-w-6xl mx-auto",
  searchCard:
    "bg-white rounded-3xl shadow-2xl p-8 border border-gray-200/80 mb-8 transform transition-all duration-300 hover:shadow-3xl",
  searchGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6",

  // Search input styles
  inputGroup: "relative group",
  inputLabel: "block text-xs text-gray-500 mb-2 uppercase tracking-wider",
  inputIcon:
    "absolute left-4 top-12 transform -translate-y-1/2 pointer-events-none",
  inputIconSvg:
    "w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300",
  input:
    "w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-200/30 outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm",

  // Action buttons
  actionBar: "flex flex-wrap items-center justify-between gap-4",
  clearButton:
    "flex items-center gap-2 px-6 py-3.5 rounded-2xl border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 text-gray-700 font-medium transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95",
  clearIcon: "w-5 h-5",

  // Main content layout
  mainContent: "container mx-auto px-4 pt-6",
  contentGrid: "flex flex-col md:fles lg:flex-row gap-8",

  // Sidebar styles
  sidebar: "w-full lg:w-1/4 block lg:block",
  sidebarSticky: "sticky top-4 pb-8",
  filterCard: "bg-white rounded-3xl shadow-xl p-6 border border-gray-200",
  filterHeader:
    "flex items-center justify-between mb-8 pb-4 border-b border-gray-100",
  filterTitle: "flex items-center gap-3",
  filterIcon: "w-6 h-6 text-blue-600",
  filterTitleText: "text-xl font-bold text-gray-800",
  filterActions: "flex items-center gap-2",
  clearFiltersText: "text-sm text-blue-600 hover:text-blue-800 font-medium",
  mobileCloseButton: "lg:hidden p-2 hover:bg-gray-100 rounded-lg",
  mobileCloseIcon: "w-5 h-5",

  // Filter sections
  filterSection: "mb-8",
  filterSectionTitle:
    "text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2 uppercase tracking-wider",
  filterSectionIcon: "w-4 h-4",

  // Job type buttons
  jobTypeGrid:
    "grid grid-cols-1 lg:grid-cols-1 md:grid-cols-3 xl:grid-cols-2 gap-2",
  jobTypeButton:
    "px-4 py-3 rounded-xl text-xs transition-all duration-300 font-medium",
  jobTypeButtonActive:
    "bg-linear-to-r from-blue-500 to-blue-600 text-white shadow-md",
  jobTypeButtonInactive:
    "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200",

  // Salary inputs
  salaryGrid: "space-y-4 grid grid-cols-2 gap-3",
  salaryInputWrapper: "relative",
  salaryLabel: "block text-xs text-gray-500 mb-2 uppercase tracking-wider",
  salaryInput:
    "w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-200/30 outline-none transition-all",

  // Category buttons
  categoryGrid:
    "space-y-2 grid md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-1 gap-2",
  categoryButton:
    "w-full cursor-pointer h-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all duration-300 font-medium",
  categoryButtonActive:
    "bg-linear-to-r from-green-500 to-green-600 text-white shadow-md",
  categoryButtonInactive:
    "text-gray-700 hover:bg-gray-50 border border-gray-200",
  categoryCount: "px-2 py-1 rounded-full text-xs",
  categoryCountActive: "bg-white/20 text-white",
  categoryCountInactive: "bg-gray-100 text-gray-600",

  // Active filters
  activeFiltersSection: "mt-8 pt-6 border-t border-gray-200",
  activeFiltersTitle: "text-sm font-semibold text-gray-700 mb-3",
  activeFiltersWrapper: "flex flex-wrap gap-2",
  filterTag:
    "inline-flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium border",
  filterTagBlue: "bg-blue-100 text-blue-700 border-blue-200",
  filterTagGreen: "bg-green-100 text-green-700 border-green-200",
  filterTagYellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
  filterTagClose: "ml-1 hover:text-opacity-80",
  filterTagCloseIcon: "w-3 h-3",

  // Job cards container
  jobCardsContainer: "w-full lg:w-3/4",
  jobCardsGrid:
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6",

  // Job card styles
  jobCard:
    "group relative bg-white rounded-3xl shadow-lg border-2 border-gray-200 hover:shadow-2xl hover:border-blue-300 transition-all duration-500 overflow-hidden transform hover:-translate-y-2 flex flex-col h-full",
  jobCardContent: "p-2 flex-1 flex flex-col",

  // Job card header
  jobCardHeader: "flex items-start gap-4 mb-4",
  logoContainer: "w-16 h-16 shrink-0 shadow-lg rounded-2xl",
  logoFallback:
    "w-full h-full flex items-center justify-center overflow-hidden relative text-white rounded-2xl shadow-lg font-bold text-2xl",
  logoImage: "w-full h-full object-contain relative z-10",
  logoInitial: "relative z-0",
  jobInfo: "min-w-0",
  jobTitle:
    "text-md font-bold text-gray-800 group-hover:text-blue-600 transition-colors wrap-break-word",
  companyName: "text-gray-600 font-medium truncate",

  // Tech stack
  techStackContainer: "flex flex-wrap gap-2 mb-4",
  techTag:
    "px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-medium transition-colors border border-gray-200",

  // Job details grid
  jobDetailsGrid:
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mb-4",
  detailItem: "flex items-center gap-3",
  detailIconWrapper: "p-2 rounded-lg",
  detailIconWrapperBlue: "bg-blue-50",
  detailIconWrapperPurple: "bg-purple-50",
  detailIconWrapperGreen: "bg-green-50",
  detailIconWrapperOrange: "bg-orange-50",
  detailIcon: "w-4 h-4",
  detailIconBlue: "text-blue-600",
  detailIconPurple: "text-purple-600",
  detailIconGreen: "text-green-600",
  detailIconOrange: "text-orange-600",
  detailTag: "px-3 py-1.5 rounded-full line-clamp-3 text-xs font-bold border",
  detailTagBlue: "bg-blue-100 text-blue-700 border-blue-200",
  detailTagPurple: "bg-purple-100 text-purple-700 border-purple-200",
  detailTagGreen:
    "bg-linear-to-r from-green-100 to-emerald-100 text-green-700 border-green-200",
  detailTagOrange: "bg-orange-100 text-orange-700 border-orange-200",

  // Job footer
  jobFooter: "flex items-center justify-between mb-4 mt-auto",
  dateWrapper: "flex items-center gap-2",
  dateIcon: "w-4 h-4 text-gray-400",
  dateText: "text-sm text-gray-500",
  categoryTag: "px-3 py-1.5 rounded-full text-xs font-bold border",

  // Action buttons
  actionButtons: "flex items-center justify-between mt-2",
  applyButton:
    "flex cursor-pointer items-center gap-2 px-4 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95",
  applyButtonActive:
    "bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white",
  applyButtonApplied: "bg-gray-300 text-gray-800",
  applyIcon: "w-4 h-4",
  actionIcons: "flex items-center gap-2",
  viewButton:
    "p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-200 inline-flex items-center justify-center",
  viewIcon: "w-5 h-5",
  saveButton: "p-3 cursor-pointer rounded-full transition-all duration-200",
  saveButtonActive: "bg-blue-600 text-white shadow-md",
  saveButtonInactive: "bg-gray-100 text-gray-600 hover:bg-gray-200",
  saveIcon: "w-5 h-5",

  // Empty state
  emptyState: "text-center py-20",
  emptyStateIconWrapper:
    "w-40 h-40 mx-auto mb-8 bg-linear-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center shadow-xl",
  emptyStateIcon: "w-20 h-20 text-gray-400",
  emptyStateTitle: "text-3xl font-bold text-gray-800 mb-4",
  emptyStateText: "text-gray-600 mb-8 max-w-md mx-auto text-lg",
  resetButton:
    "px-10 py-4 rounded-2xl bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1",

  // Pagination
  paginationWrapper: "mt-12",
  paginationContainer: "flex items-center justify-center mb-8",
  paginationInner: "flex items-center gap-2",
  paginationButton:
    "px-5 py-2.5 rounded-full cursor-pointer border-2 border-gray-200 hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
  pageNumbers: "flex items-center gap-2",
  pageDots: "px-3 py-2 text-gray-400",
  pageNumber:
    "px-4 py-2.5 cursor-pointer rounded-full text-sm font-medium transition-all duration-300",
  pageNumberActive:
    "bg-linear-to-r from-blue-500 to-blue-600 text-white shadow-md",
  pageNumberInactive: "text-gray-700 hover:bg-gray-100 border border-gray-200",

  // Confirmation toast
  confirmToast:
    "fixed right-4 top-4 xl:mt-20 z-60 w-11/12 sm:w-96 max-w-full p-4 rounded-2xl shadow-2xl bg-white border border-gray-200 transform transition-all duration-300 animate-slideDown",
  confirmToastContent: "flex items-start gap-3",
  confirmToastIcon: "shrink-0",
  confirmToastIconSvg: "w-6 h-6 text-blue-600",
  confirmToastBody: "flex-1",
  confirmToastTitle: "text-sm font-semibold text-gray-800 mb-1",
  confirmToastMessage: "text-xs text-gray-600 mb-3",
  confirmToastActions: "flex items-center gap-3",
  confirmButton:
    "px-4 py-2 cursor-pointer rounded-full bg-linear-to-r from-blue-500 to-blue-600 text-white font-medium shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-0.5",
  cancelButton:
    "px-4 py-2 cursor-pointer rounded-full bg-gray-100 text-gray-700 font-medium border border-gray-200",
  closeToastButton: "ml-auto text-gray-400 hover:text-gray-600",
  closeToastIcon: "w-4 h-4",

  // Global styles
  globalStyles: `
    @keyframes fadeIn { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: translateY(0);} }
    @keyframes gradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
    @keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
    .animate-fadeIn { animation: fadeIn 0.45s ease-out forwards; }
    .animate-gradient { background-size: 200% 200%; animation: gradient 3s ease infinite; }
    .animate-slideDown { animation: slideDown 0.3s ease-out forwards; }
    .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
    .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
    html { scroll-behavior: smooth; }
    img { max-width: 100%; height: auto; display: block; }
  `,
};

export const footerStyles = {
  // ==================== Footer Container ====================
  footer:
    "bg-linear-to-b from-white to-blue-50 font-mono pt-8 sm:pt-10 md:pt-12 pb-8 border-t border-gray-200",
  footerInner: "max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10",

  // ==================== Grid Layout ====================
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-8 md:mb-12",

  // ==================== Company Info Section ====================
  companySection: "space-y-4",
  logoWrapper: "flex items-start sm:items-center gap-3",
  logoLink: "block shrink-0",
  logoImage: "w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover shadow-sm",
  companyTitle:
    "text-lg sm:text-xl md:text-2xl font-bold bg-linear-to-r from-blue-400 to-indigo-700 bg-clip-text text-transparent",
  companyTagline: "text-xs sm:text-sm text-gray-500",
  companyDescription: "text-sm sm:text-base text-gray-600",
  socialIconsContainer: "flex gap-3 sm:gap-4 pt-2",

  // ==================== Section Headers ====================
  sectionHeader:
    "text-base sm:text-lg md:text-lg font-semibold text-gray-900 mb-5 pb-2 border-b border-blue-100 inline-block",
  linkList: "space-y-3 mt-4",

  // ==================== Contact Section ====================
  contactList: "space-y-3 mt-4",

  // ==================== Divider ====================
  divider: "border-t border-gray-200 my-6 md:my-8",

  // ==================== Bottom Footer ====================
  bottomFooter:
    "flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-gray-600",
  bottomLogo: "w-5 h-5 sm:w-6 sm:h-6 object-contain",
  designedByText: "text-xs sm:text-sm",
  designedByLink:
    "font-semibold hover:text-blue-600 transition-colors text-xs sm:text-sm",

  // ==================== SocialIcon Component ====================
  socialIcon:
    "w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-linear-to-r hover:from-blue-200 hover:to-purple-300 hover:border-transparent transition-all duration-300 hover:scale-105 shadow-sm",

  // ==================== FooterLink Component ====================
  footerLinkItem:
    "flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group text-sm sm:text-base",
  footerLinkIcon:
    "text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity",
  footerLinkText: "group-hover:translate-x-1 transition-transform",

  // ==================== ContactItem Component ====================
  contactItemContainer: "flex items-start gap-3",
  contactIconWrapper:
    "w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 shrink-0",
  contactText:
    "text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base pt-1",
  contactTextNoLink: "text-gray-600 text-sm sm:text-base pt-1",

  // ==================== StatItem Component (kept for compatibility) ====================
  statItem:
    "text-center p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow",
  statNumber:
    "text-lg sm:text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
  statLabel: "text-gray-600 text-xs sm:text-sm mt-1",
};

export const interviewQuestionsStyles = {
  // ==================== Page Container ====================
  pageContainer:
    "min-h-screen font-mono bg-linear-to-br from-blue-50 to-purple-50 p-4 sm:p-6 md:p-8 lg:p-10",
  innerContainer: "max-w-8xl mx-auto",

  // ==================== Grid Layout ====================
  mainGrid:
    "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8",

  // ==================== Section ====================
  section: "mt-6 md:mt-8",
  sectionHeader:
    "flex flex-col lg:flex-row xl:flex-row md:flex-row items-center justify-between mb-6",
  sectionTitle:
    "text-md lg:text-md sm:text-xl md:text-2xl font-bold text-gray-900",
  viewAllLink:
    "flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base",
  chevronIcon: "w-4 h-4",

  // ==================== Card Grids ====================
  companiesGrid:
    "grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 gap-4",
  rolesGrid:
    "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 gap-4",

  // ==================== Loading Spinner ====================
  loadingContainer: "min-h-[400px] flex items-center justify-center",
  spinner: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600",

  // ==================== CompanyCard ====================
  cardLink: "group relative block rounded-2xl overflow-visible",
  cardGlow:
    "absolute -inset-0.5 rounded-2xl bg-linear-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-25 blur transition-opacity duration-300 pointer-events-none",
  cardArticle:
    "relative bg-white rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-lg transform transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-[1.01]",
  cardFlex: "flex items-start justify-between",
  cardLeftFlex: "flex items-center gap-3",
  logoContainer: (colorClass) =>
    `flex items-center justify-center rounded-lg ${colorClass}`,
  logoImage: "max-w-full max-h-full object-contain p-1",
  logoFallbackText: "font-semibold text-sm",
  cardTitle: "text-sm sm:text-base md:text-lg font-semibold text-gray-900",
  cardSubtitle: "text-xs sm:text-sm text-gray-600 mt-1",
  cardIcon: "w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors",

  // ==================== RoleCard ====================
  roleCardGlow:
    "absolute -inset-0.5 rounded-2xl bg-linear-to-r from-green-400 to-blue-400 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 pointer-events-none",

  // ==================== Color Classes Helper ====================
  companyColorClasses: [
    "bg-orange-100 text-orange-600",
    "bg-blue-100 text-blue-600",
    "bg-purple-100 text-purple-600",
    "bg-red-100 text-red-600",
    "bg-green-100 text-green-600",
  ],
  roleColorClasses: [
    "bg-green-100 text-green-600",
    "bg-purple-100 text-purple-600",
    "bg-blue-100 text-blue-600",
    "bg-emerald-100 text-emerald-600",
    "bg-pink-100 text-pink-600",
  ],
  getColorClass: (type, name) => {
    const classes =
      type === "company"
        ? interviewQuestionsStyles.companyColorClasses
        : interviewQuestionsStyles.roleColorClasses;
    const index = (name?.length || 0) % classes.length;
    return classes[index];
  },
};

// Add this to your existing dummyStyles.js file

// JobDetailPage Component Styles
export const jobDetailPageStyles = {
  // Container styles
  container:
    "min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 py-6 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 font-mono overflow-x-hidden",
  innerContainer:
    "mx-auto max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl",

  // Loading styles
  loadingContainer:
    "min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-50 via-white to-purple-50",
  loadingSpinner: "relative",
  loadingSpinnerCircle:
    "animate-spin rounded-full h-20 w-20 border-4 border-indigo-200 border-t-indigo-600",
  loadingIconWrapper: "absolute inset-0 flex items-center justify-center",
  loadingIcon: "w-8 h-8 text-indigo-600 animate-pulse",

  // Not found styles
  notFoundContainer:
    "min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-indigo-50 via-white to-purple-50",
  notFoundCard:
    "bg-white/80 backdrop-blur-sm p-8 sm:p-12 rounded-3xl shadow-2xl text-center max-w-md mx-4",
  notFoundTitle:
    "text-3xl sm:text-4xl font-bold text-gray-800 mb-4 animate-fade-in",
  notFoundText: "text-gray-600 mb-6",
  notFoundButton:
    "inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300",
  notFoundIcon: "w-4 h-4",

  // Back button
  backButton:
    "inline-flex items-center gap-2 text-gray-600 hover:text-indigo-600 mb-4 sm:mb-6 transition-all duration-300 group",
  backIcon: "w-4 h-4 group-hover:-translate-x-1 transition-transform",
  backText: "text-sm sm:text-base",

  // Main card
  mainCard:
    "bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-white/20 animate-fade-in-up",

  // Header section
  headerSection:
    "flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-200/50 relative",
  logoWrapper:
    "shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center",
  logoFallback:
    "rounded-2xl bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-xl",
  logoImage: "w-full h-full object-contain",
  logoText: "text-xl font-bold",
  logoTextSmall: "text-sm font-semibold line-clamp-1",
  headerContent: "flex-1 min-w-0",
  headerTitle:
    "text-2xl sm:text-3xl md:text-4xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2 animate-slide-in-right wrap-break-word",
  headerCompany: "flex items-center gap-2 text-sm sm:text-base text-gray-600",
  headerCompanyIcon: "w-4 h-4",
  headerCompanyName: "truncate",

  // Save button
  saveButtonWrapper: "mt-3 sm:mt-0",
  saveButton:
    "p-3 sm:p-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center",
  saveButtonActive:
    "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-xl",
  saveButtonInactive: "bg-gray-100 text-gray-600 hover:bg-gray-200",
  saveIcon: "w-5 h-5",

  // Details grid
  detailsGrid: "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6",
  detailItem: "flex items-center gap-3 animate-fade-in",
  detailIconWrapper: "p-2 sm:p-3 rounded-lg",
  detailIconWrapperBlue: "bg-blue-50",
  detailIconWrapperPurple: "bg-purple-50",
  detailIconWrapperGreen: "bg-green-50",
  detailIconWrapperOrange: "bg-orange-50",
  detailIconWrapperPink: "bg-pink-50",
  detailIcon: "w-5 h-5",
  detailIconBlue: "text-blue-600",
  detailIconPurple: "text-purple-600",
  detailIconGreen: "text-green-600",
  detailIconOrange: "text-orange-600",
  detailIconPink: "text-pink-600",
  detailContent: "min-w-0",
  detailLabel: "text-xs text-gray-500",
  detailValue:
    "inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-bold wrap-break-word border",
  detailValueGreen:
    "bg-linear-to-r from-green-100 to-emerald-100 text-green-700 border-green-200",
  detailValuePink:
    "bg-linear-to-r from-pink-100 to-rose-100 mt-1 text-pink-700 border-pink-200",

  // Category section
  categorySection: "mb-6 animate-fade-in",
  sectionTitle:
    "text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider",
  categoryTag:
    "inline-block px-4 py-2 rounded-full text-sm font-bold border hover:scale-105 transition-transform duration-200",

  // Content sections
  contentSection: "mb-6 animate-fade-in",
  contentCard:
    "text-gray-600 leading-relaxed bg-gray-50/50 p-4 rounded-xl border border-gray-100 wrap-break-word",
  contentList:
    "list-disc list-inside text-gray-600 space-y-1 bg-gray-50/50 p-4 rounded-xl border border-gray-100",
  contentListItem: "hover:translate-x-1 transition-transform wrap-break-word",

  // Tech stack
  techStackContainer: "flex flex-wrap gap-2",
  techTag:
    "px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium border border-gray-200 hover:bg-indigo-100 hover:text-indigo-700 hover:border-indigo-200 hover:scale-105 transition-all duration-200 wrap-break-word",

  // Footer
  footer:
    "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-200/50 animate-fade-in",
  dateWrapper: "flex items-center gap-2",
  dateIcon: "w-4 h-4 text-gray-400",
  dateText: "text-sm text-gray-500",

  // Apply button
  applyButton:
    "px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95 flex items-center gap-2",
  applyButtonActive:
    "bg-linear-to-r from-indigo-600 to-purple-600 text-white hover:scale-105",
  applyButtonApplied: "bg-gray-300 text-gray-800 cursor-not-allowed",
  applyIcon: "w-4 h-4",

  // Confirmation toast
  confirmToast: "fixed top-10 right-4 z-50 w-full max-w-sm animate-fade-in-up",
  confirmToastCard:
    "bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 flex flex-col gap-4",
  confirmToastHeader: "flex items-start justify-between",
  confirmToastContent: "flex items-center gap-3",
  confirmToastIconWrapper: "p-2 bg-indigo-50 rounded-lg",
  confirmToastIcon: "w-5 h-5 text-indigo-600",
  confirmToastInfo: "",
  confirmToastTitle: "text-sm font-bold text-gray-800",
  confirmToastMessage: "text-xs text-gray-500",
  confirmToastClose: "text-gray-400 hover:text-gray-600",
  confirmToastCloseIcon: "w-4 h-4",
  confirmToastActions: "flex gap-2",
  confirmButton:
    "flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-bold hover:bg-indigo-700 transition-colors",
  cancelButton:
    "flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors",

  // Global styles
  globalStyles: `
    @keyframes fade-in-up {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes fade-in {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes slide-in-right {
      0% {
        opacity: 0;
        transform: translateX(20px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
    @keyframes float {
      0%,
      100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-8px);
      }
    }
    .animate-fade-in-up {
      animation: fade-in-up 0.6s ease-out;
    }
    .animate-fade-in {
      animation: fade-in 0.45s ease-out forwards;
      opacity: 0;
    }
    .animate-slide-in-right {
      animation: slide-in-right 0.45s ease-out;
    }
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
    .line-clamp-1 {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    img {
      max-width: 100%;
      height: auto;
      display: block;
    }
  `,
};

export const loginPageStyles = {
  // ==================== Page Container ====================
  pageContainer:
    "min-h-screen font-[pacifico] bg-linear-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden",

  // ==================== Back Link ====================
  backLink:
    "absolute top-4 left-4 sm:top-6 sm:left-6 md:top-6 md:left-6 lg:top-8 lg:left-8 flex items-center gap-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md text-gray-700 hover:text-gray-900 hover:bg-white transition-all duration-200 group z-10",
  backLinkIcon: "w-4 h-4 group-hover:-translate-x-1 transition-transform",
  backLinkText: "text-xs sm:text-sm",

  // ==================== Card Wrapper ====================
  cardWrapper:
    "relative w-full max-w-[96%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-md z-10",
  animatedBorderContainer: "animated-border relative",
  cardInner:
    "relative bg-white/95 backdrop-blur-sm m-0.5 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 z-10",

  // ==================== Headers ====================
  headerTitle:
    "text-2xl sm:text-3xl md:text-3xl font-bold text-gray-800 mb-2 text-center",
  headerSubtitle: "text-center text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base",

  // ==================== Form ====================
  form: "space-y-4 sm:space-y-5",
  formGroup: "",
  label: "block text-sm font-medium text-gray-700 mb-1",
  inputWrapper: "relative",
  inputIcon:
    "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5",
  inputField:
    "w-full pl-10 pr-3 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 outline-hidden bg-gray-50/50",
  passwordInput:
    "w-full pl-10 pr-10 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 outline-hidden bg-gray-50/50",
  passwordToggle:
    "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer",

  // ==================== Forgot Password ====================
  forgotPasswordContainer: "text-right",
  forgotPasswordButton:
    "text-sm text-blue-600 hover:text-blue-800 transition font-medium",

  // ==================== Submit Button ====================
  submitButton:
    "w-full cursor-pointer bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-full hover:scale-105 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50 flex items-center justify-center gap-2",
  submitButtonReset:
    "w-full bg-linear-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 rounded-full hover:scale-105 transition-all shadow-lg",
  submitButtonForgot:
    "w-full bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-full hover:scale-105 transition-all shadow-lg",

  // ==================== Secondary Buttons ====================
  secondaryButton:
    "w-full text-sm text-gray-500 hover:text-gray-700 transition font-medium",

  // ==================== OTP Input ====================
  otpInput:
    "w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 outline-hidden bg-gray-50/50 text-center text-2xl tracking-[10px] font-bold",

  // ==================== Signup Link ====================
  signupContainer: "mt-4 sm:mt-6 text-center",
  signupText: "text-gray-600 text-sm",
  signupLink: "text-blue-600 hover:text-blue-800 font-medium transition",

  // ==================== Decorative Blobs ====================
  blobTop:
    "hidden md:block absolute -top-20 -left-12 w-48 h-48 bg-purple-200 rounded-full opacity-30 animate-blob animation-delay-2000 pointer-events-none",
  blobBottom:
    "hidden lg:block absolute -bottom-24 -right-20 w-72 h-72 bg-indigo-200 rounded-full opacity-20 animate-blob animation-delay-4000 pointer-events-none",

  // ==================== Toast Component Classes ====================
  toastContainer: (borderClass, isExiting) =>
    `fixed top-4 right-4 z-50 flex items-center gap-3 bg-white rounded-lg shadow-lg border-l-4 ${borderClass} p-3 pr-5 min-w-55 transition-all duration-300 ${
      isExiting ? "opacity-0 translate-x-2" : "opacity-100 translate-x-0"
    }`,
  toastSuccessIcon: "w-5 h-5 text-green-500",
  toastErrorIcon: "w-5 h-5 text-red-500",
  toastMessage: "text-gray-700 flex-1 text-sm",
  toastCloseButton: "text-gray-400 hover:text-gray-600 transition",
  toastCloseIcon: "w-4 h-4",

  // ==================== Inline Styles ====================
  blobTopStyle: { filter: "blur(36px)" },
  blobBottomStyle: { filter: "blur(46px)" },
  toastAnimationStyle: { animation: "slideIn 0.28s ease-out" },

  // ==================== Global CSS (Keyframes) ====================
  globalStyles: `
    @keyframes borderRotate {
      0% { background-position: 0% 50%; }
      100% { background-position: 200% 50%; }
    }
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(20px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.06); }
      66% { transform: translate(-20px, 20px) scale(0.98); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    .animated-border::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, #ec4899, #8b5cf6, #3b82f6, #ec4899);
      background-size: 200% 100%;
      animation: borderRotate 4s linear infinite;
      border-radius: 1rem;
      z-index: 0;
    }
    .animate-blob {
      animation: blob 10s infinite;
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    .animation-delay-4000 {
      animation-delay: 4s;
    }
  `,
};

export const navbarStyles = {
  // ==================== Navbar Container ====================
  navbar: (isScrolled) =>
    `sticky top-0 z-50 transition-all duration-500 ${
      isScrolled
        ? "bg-white/95 backdrop-blur-xl shadow-lg py-3"
        : "bg-linear-to-r from-blue-50 to-indigo-50 py-5"
    }`,

  container: "container font-mono mx-auto px-4 lg:px-8",
  flexContainer: "flex items-center justify-between",

  // ==================== Logo Section ====================
  logoSection: "flex items-center space-x-3 group cursor-pointer",
  logoWrapper: "relative shrink-0",
  logoImage: "object-cover rounded-full",

  logoTextContainer: "flex flex-col leading-4",
  logoTitle:
    "text-xl md:text-2xl xl:text-2xl lg:text-sm font-bold bg-linear-to-r from-blue-400 to-indigo-700 bg-clip-text text-transparent",
  logoSubtitle: "text-[10px] sm:text-xs text-gray-500 flex items-center gap-1",

  // ==================== Desktop Navigation ====================
  desktopNav: "hidden lg:flex items-center space-x-1",

  navItemContainer: "relative",
  navButton: (active) =>
    `flex items-center lg:text-sm xl:text-lg cursor-pointer space-x-2 px-4 md:px-5 py-2 md:py-3 rounded-xl transition-all duration-300 text-sm md:text-base ${
      active
        ? "text-blue-600 bg-blue-50 shadow-inner"
        : "text-gray-600 hover:text-blue-600 hover:bg-blue-50/50"
    }`,

  navIcon: (isHovered) =>
    `transition-transform duration-300 ${
      isHovered ? "scale-110" : "scale-100"
    }`,

  navLabel: "font-medium",

  navUnderline: (isHovered) =>
    `absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-linear-to-r from-blue-400 to-indigo-500 rounded-full transition-all duration-300 ${
      isHovered ? "w-3/4 opacity-100" : "w-0 opacity-0"
    }`,

  // ==================== Right Actions ====================
  desktopActions: "hidden lg:flex items-center space-x-4",
  actionInner: "flex items-center space-x-3",

  loginButton:
    "group cursor-pointer relative px-5 md:px-6 py-2 md:py-3 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg",
  loginButtonBg:
    "absolute inset-0 bg-linear-to-r from-blue-500 to-indigo-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-300",
  loginButtonContent: "relative flex items-center space-x-2",
  loginIcon:
    "w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300",
  loginText:
    "font-medium text-blue-600 group-hover:text-white transition-colors duration-300",

  // Profile Button & Dropdown
  profileButtonContainer: "relative",
  profileButton:
    "profile-button cursor-pointer flex items-center gap-3 px-3 py-2 rounded-full transition-all duration-300 bg-white/60 hover:shadow-lg",
  profileAvatar:
    "w-8 h-8 rounded-full bg-linear-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-sm font-medium text-white animate-gradient",
  profileInfo: "flex items-center gap-2",
  profileName: "text-sm lg:text-xs text-gray-800 font-medium",
  profileChevron: "w-4 h-4 text-gray-600",

  userDropdown: (isOpen) =>
    `absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-lg border border-gray-100 p-2 transition transform origin-top-right ${
      isOpen
        ? "opacity-100 scale-100"
        : "opacity-0 scale-95 pointer-events-none"
    }`,

  dropdownItem:
    "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition",
  dropdownIcon: "w-4 h-4 text-gray-600",
  dropdownText: "text-sm text-gray-700",

  // ==================== Mobile Toggle ====================
  mobileToggle:
    "lg:hidden p-3 rounded-xl bg-linear-to-r from-blue-50 to-indigo-50 hover:shadow-md transition duration-300",
  mobileToggleIcon: "w-6 h-6 text-blue-600",

  // ==================== Mobile Menu ====================
  mobileMenu: (isOpen) =>
    `lg:hidden overflow-y-auto transition-all duration-500 ${
      isOpen ? "max-h-[80vh] opacity-100 mt-4" : "max-h-0 opacity-0"
    }`,

  mobileMenuCard:
    "bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6 max-w-full",
  mobileMenuSpace: "space-y-3",

  mobileNavButton: (active) =>
    `flex items-center space-x-3 w-full p-3 sm:p-4 rounded-xl transition-all duration-300 text-sm sm:text-base ${
      active
        ? "bg-linear-to-r from-blue-50 to-indigo-50 text-blue-600 border border-blue-100"
        : "text-gray-600 hover:bg-gray-50"
    }`,

  mobileNavIconWrapper: (active) =>
    `p-2 rounded-lg ${
      active ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"
    }`,

  mobileNavLabel: "font-medium flex-1 text-left",

  mobileDivider: "pt-2 border-t border-gray-100",

  mobileLoginButton:
    "flex items-center justify-center space-x-2 p-3 rounded-xl border border-blue-200 text-blue-600 hover:bg-blue-50 transition duration-300 w-full text-sm sm:text-base",

  mobileUserInfo: "flex items-center gap-3 px-3",
  mobileAvatar:
    "w-10 h-10 rounded-full bg-linear-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-sm font-medium text-white",
  mobileUserName: "text-sm font-medium text-gray-800",

  mobileProfileGrid: "grid grid-cols-2 gap-3 pt-2",
  mobileProfileButton:
    "flex items-center justify-center space-x-2 p-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition duration-300 text-sm",

  // ==================== Global CSS ====================
  globalStyles: `
    @keyframes border-pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4);
      }
      70% {
        box-shadow: 0 0 0 6px rgba(79, 70, 229, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(79, 70, 229, 0);
      }
    }
    .profile-button {
      border: 2px solid transparent;
      background-clip: padding-box;
      transition: all 0.3s ease;
    }
    .profile-button:hover {
      animation: border-pulse 1.5s infinite;
      border-color: #4f46e5;
    }
    @keyframes gradient-shift {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    .animate-gradient {
      background-size: 200% 200%;
      animation: gradient-shift 3s ease infinite;
    }
  `,
};

// Add this to your existing dummyStyles.js file

// RolePage Component Styles
export const rolePageStyles = {
  // Container styles
  container:
    "min-h-screen font-[pacifico] bg-linear-to-br from-indigo-50/50 via-white to-purple-50/50",
  innerContainer:
    "mx-auto max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl px-4 py-10 sm:px-6 lg:px-8",

  // Header styles
  header: "mb-10 text-center animate-fadeIn",
  headerTitle: "text-2xl sm:text-3xl md:text-4xl font-bold",
  headerSpan:
    "bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",
  headerSubtitle: "mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto",

  // Role selector styles
  roleSelector: "mb-12",
  roleButtonsWrapper: "flex flex-wrap justify-center gap-4",
  roleButton:
    "group cursor-pointer relative flex items-center gap-3 rounded-2xl px-5 py-4 transition-all max-w-xs sm:max-w-none",
  roleButtonActive: "bg-white shadow-xl ring-2 ring-indigo-500",
  roleButtonInactive: "bg-white/70 shadow-md hover:shadow-lg",
  roleImageWrapper: "h-10 w-10 shrink-0 overflow-hidden rounded",
  roleImage: "h-full w-full object-cover",
  roleName: "text-sm font-medium whitespace-normal wrap-break-word text-left",
  roleActiveIndicator:
    "absolute -right-1 -top-1 h-5 w-5 bg-white rounded-full flex items-center justify-center shadow",
  roleActiveIcon: "h-3 w-3 text-indigo-600",

  // Loading skeleton styles
  roleSkeleton: "w-32 h-20 bg-gray-200 animate-pulse rounded-2xl",
  questionsSkeletonGrid: "grid grid-cols-1 md:grid-cols-2 gap-6",
  questionSkeleton: "h-64 bg-gray-100 animate-pulse rounded-2xl shadow-lg",

  // Empty state styles
  emptyState: "text-center py-8 sm:py-12 bg-white rounded-2xl shadow-lg",
  emptyStateIcon: "h-10 w-10 text-gray-300 mx-auto",
  emptyStateText: "mt-4 text-base sm:text-lg text-gray-600",

  // Questions grid styles
  questionsGrid: "grid grid-cols-1 md:grid-cols-2 gap-6",

  // Question card styles
  questionCard:
    "relative rounded-2xl bg-white/80 p-4 sm:p-6 shadow-lg hover:shadow-2xl transition",
  saveButton: "absolute cursor-pointer right-3 top-3 p-2 rounded-lg",
  saveButtonActive: "bg-purple-600 text-white",
  saveButtonInactive: "bg-white",
  saveIcon: "h-5 w-5",

  // Question content
  questionTitle: "text-lg sm:text-xl font-bold mb-3 pr-8 wrap-break-word",

  // Answer section
  answerSection:
    "mb-3 bg-indigo-50 p-3 rounded-xl border-l-4 border-indigo-400 text-sm sm:text-sm",
  answerLabel: "font-semibold text-indigo-800",

  // Key points section
  keyPointsSection: "mb-4",
  keyPointsLabel: "text-xs font-semibold text-gray-500 mb-2",
  keyPointsWrapper: "flex flex-wrap gap-2",
  keyPointTag:
    "inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs",
  keyPointIcon: "h-3 w-3 text-emerald-500",

  // Asked at section
  askedAtSection: "",
  askedAtLabel:
    "text-xs font-semibold text-gray-500 mb-2 flex items-center gap-1",
  askedAtIcon: "h-3.5 w-3.5",
  companiesWrapper: "flex flex-wrap gap-2",
  companyTag:
    "flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-lg text-xs",
  companyName: "font-medium",
  companyDot: "h-3.5 w-3.5 text-gray-400",
  companyDate: "text-gray-500",
  noCompanyData: "text-xs text-gray-400",

  // Global styles
  globalStyles: `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fadeIn {
      animation: fadeIn 0.5s ease-out forwards;
    }
  `,
};

// Add this to your existing dummyStyles.js file

// SignUpPage Component Styles
export const signUpPageStyles = {
  // Container styles
  container:
    "min-h-screen font-[pacifico] bg-linear-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center p-4 relative overflow-hidden",

  // Back button
  backButton:
    "absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 flex items-center gap-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md text-gray-700 hover:text-gray-900 hover:bg-white transition-all duration-200 group z-10",
  backIcon: "w-4 h-4 group-hover:-translate-x-1 transition-transform",
  backText: "text-xs sm:text-sm",

  // Card wrapper
  cardWrapper:
    "relative w-full max-w-[96%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-md z-10",

  // Animated border
  animatedBorder: "animated-border relative",
  animatedBorderInner:
    "relative bg-white/95 backdrop-blur-sm m-0.5 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 z-10",

  // Header
  title: "text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-center",
  subtitle: "text-center text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base",

  // Form styles
  form: "space-y-4 sm:space-y-5",
  formVerifying: "space-y-6",

  // Input group
  inputGroup: "",
  inputLabel: "block text-sm font-medium text-gray-700 mb-1",
  inputWrapper: "relative",
  inputIcon:
    "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5",
  input:
    "w-full pl-10 pr-3 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200 bg-gray-50/50 text-sm sm:text-base",
  inputWithButton:
    "w-full pl-10 pr-10 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200 bg-gray-50/50 text-sm sm:text-base",

  // OTP input
  otpLabel: "block text-sm font-medium text-gray-700 mb-1 text-center",
  otpInput:
    "w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200 bg-gray-50/50 text-center text-2xl font-bold tracking-[8px]",

  // Password toggle
  passwordToggle:
    "absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",
  passwordToggleIcon: "w-5 h-5",

  // Password strength
  passwordStrengthWrapper: "mt-2",
  passwordStrengthBar: "flex gap-1",
  passwordStrengthSegment: "h-1 flex-1 rounded-full transition-all",
  passwordStrengthWeak: "bg-red-400",
  passwordStrengthMedium: "bg-yellow-400",
  passwordStrengthStrong: "bg-emerald-500",
  passwordStrengthEmpty: "bg-gray-200",

  // Buttons
  submitButton:
    "w-full cursor-pointer bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-2.5 sm:py-3 px-4 rounded-full transition duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/30 text-sm sm:text-base",
  verifyButton:
    "w-full cursor-pointer bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-full transition duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/30",
  buttonIcon: "w-4 h-4 sm:w-5 sm:h-5",

  // Resend link
  resendLink: "text-center",
  resendButton:
    "text-sm text-indigo-600 hover:text-indigo-800 font-medium transition",

  // Footer
  footer: "mt-4 sm:mt-6 text-center",
  footerText: "text-gray-600 text-sm",
  footerLink: "text-emerald-600 font-medium transition",

  // Decorative blobs
  blob1:
    "hidden md:block absolute -top-24 -left-12 w-44 h-44 bg-emerald-200 rounded-full opacity-28 animate-blob pointer-events-none",
  blob2:
    "hidden lg:block absolute -bottom-28 -right-20 w-72 h-72 bg-teal-200 rounded-full opacity-20 animate-blob pointer-events-none",

  // Toast styles (inline toast within SignUpPage)
  toast: {
    container:
      "fixed top-4 right-4 z-50 flex items-center gap-3 bg-white rounded-lg shadow-lg border-l-4 p-4 pr-6 min-w-60 transition-all duration-300",
    containerExiting: "opacity-0 translate-x-2",
    containerEntered: "opacity-100 translate-x-0",
    borderSuccess: "border-green-500",
    borderError: "border-red-500",
    iconSuccess: "w-5 h-5 text-green-500",
    iconError: "w-5 h-5 text-red-500",
    message: "text-gray-700 flex-1 text-sm",
    closeButton: "text-gray-400 hover:text-gray-600 transition",
    closeIcon: "w-4 h-4",
  },

  // Global styles
  globalStyles: `
    @keyframes borderRotate { 
      0% { background-position: 0% 50%; } 
      100% { background-position: 200% 50%; } 
    }
    @keyframes slideIn { 
      from { opacity: 0; transform: translateX(20px); } 
      to { opacity: 1; transform: translateX(0); } 
    }
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.06); }
      66% { transform: translate(-20px, 20px) scale(0.98); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    .animated-border::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6, #10b981);
      background-size: 200% 100%;
      animation: borderRotate 4s linear infinite;
      border-radius: 1.5rem;
      z-index: 0;
    }
    .animate-blob { 
      animation: blob 10s infinite; 
    }
    .animate-blob:nth-child(2) {
      animation-delay: 2s;
    }
  `,
};

export const savePageStyles = {
  // ==================== Page Container ====================
  pageContainer:
    "min-h-screen font-[pacifico] bg-linear-to-br from-gray-50 to-blue-50 p-4 sm:p-6 md:p-8 lg:p-10",
  innerContainer: "max-w-7xl mx-auto",

  // ==================== Filter Section ====================
  filterSection:
    "mb-6 sm:mb-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border border-white/20 animate-fadeIn",
  filterTitleWrapper: "flex items-center gap-3",
  filterTitle:
    "text-2xl sm:text-3xl md:text-4xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",
  filterSubtitle: "text-sm text-gray-600",
  filterControls:
    "w-full md:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3",

  // Filter Select
  filterSelect:
    "rounded-full px-4 py-2 bg-white/80 border border-gray-200 text-sm font-medium focus:ring-2 focus:ring-purple-300 focus:border-purple-300 outline-none transition-all hover:shadow-sm w-full sm:w-auto",
  filterClearButton:
    "rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition-all hover:shadow-sm active:scale-95 border border-gray-200 w-full sm:w-auto",

  // ==================== Loading ====================
  loadingContainer: "col-span-full text-center py-12",
  loadingText: "text-gray-500",

  // ==================== Grid ====================
  grid: "grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6",

  // ==================== Role Card ====================
  roleCard:
    "relative rounded-2xl bg-white/80 p-4 sm:p-6 shadow-lg hover:shadow-2xl transition",
  roleSaveButton: (isSaved) =>
    `absolute cursor-pointer right-3 top-3 p-2 rounded-lg ${
      isSaved ? "bg-purple-600 text-white" : "bg-white border"
    }`,
  roleMostAskedBadge:
    "absolute -top-3 left-4 bg-linear-to-r from-amber-400 to-orange-400 text-white text-xs px-3 py-1 rounded-full shadow",
  roleAwardIcon: "h-3 w-3 inline mr-1",
  roleTitle: "text-lg sm:text-xl font-bold mb-2 pr-8",
  roleNameText: "text-sm text-gray-600 mb-3",
  roleAnswerContainer:
    "mb-4 bg-indigo-50 p-3 rounded-xl border-l-4 border-indigo-400 text-sm",
  roleAnswerLabel: "font-semibold text-indigo-800",
  roleKeyPointsHeading: "text-xs font-semibold text-gray-500 mb-2",
  roleKeyPointsWrapper: "flex flex-wrap gap-2",
  roleKeyPointTag:
    "inline-flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-gray-100",
  roleKeyPointIcon: "h-3 w-3 text-emerald-500",
  roleAskedInHeading:
    "text-xs font-semibold text-gray-500 mb-2 flex items-center gap-1",
  roleAskedInIcon: "h-3.5 w-3.5",
  roleCompanyTagsWrapper: "flex flex-wrap gap-2",
  roleCompanyTag:
    "flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-lg text-xs",
  roleCompanyName: "font-medium",
  roleCompanyDot: "h-3.5 w-3.5 text-gray-400",
  roleCompanyDate: "text-gray-500",
  roleNoCompanyText: "text-xs text-gray-400",

  // ==================== Company Card ====================
  companyCard:
    "bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 relative",
  companySaveButton: (isSaved) =>
    `absolute cursor-pointer top-3 right-3 z-20 p-2 rounded-lg transition-all ${
      isSaved
        ? "bg-purple-600 text-white shadow-md"
        : "bg-white text-gray-600 border border-gray-100"
    }`,
  companyCardInner: "p-4 sm:p-6 relative z-10",
  companyDateWrapper: "flex items-center gap-2 text-xs text-gray-500 mb-2",
  companyDateIcon: "w-3 h-3",
  companyTitle: "text-lg sm:text-xl font-bold text-gray-800 mb-1",
  companyInfo: "text-sm text-gray-600",
  companyAnswerBox:
    "rounded-xl p-4 sm:p-5 border border-transparent bg-linear-to-r from-gray-50 to-blue-50",
  companyLightbulbWrapper: "flex items-center gap-2 mb-3",
  companyLightbulbIcon: "w-5 h-5 text-yellow-600",
  companyAnswerHeading: "font-bold text-gray-700",
  companyAnswerText: "text-gray-700 leading-relaxed mb-3 whitespace-pre-wrap",
  companyPointsList: "text-gray-700 mt-3 space-y-2",
  companyPointItem: "flex items-start gap-2 text-sm",
  companyPointIcon: "w-4 h-4 text-gray-900 mt-0.5 shrink-0",

  // ==================== Job Card ====================
  jobCard:
    "group relative bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl hover:border-blue-300 transition-all duration-500 overflow-hidden transform hover:-translate-y-1 flex flex-col h-full p-4",
  jobHeader: "flex items-start gap-4 mb-4",
  jobLogoContainer: (hasLogo) =>
    `w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shrink-0 ${
      hasLogo
        ? ""
        : "rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 text-white text-xl font-bold shadow-lg"
    }`,
  jobLogoImage: "w-full h-full object-contain",
  jobLogoFallback: "text-xl font-bold",
  jobTitle:
    "text-md sm:text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors",
  jobCompany: "text-gray-600 font-medium truncate",
  techStackWrapper: "flex flex-wrap gap-2 mb-4",
  techStackTag:
    "px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-medium transition-colors border border-gray-200",
  jobDetailsGrid: "grid grid-cols-1 md:grid-cols-2 gap-3 mb-4",
  jobDetailItem: "flex items-center gap-3",
  jobDetailIconWrapper: (color) => `p-2 bg-${color}-50 rounded-lg`,
  jobDetailIcon: (color) => `w-4 h-4 text-${color}-600`,
  jobDetailBadge: (color) =>
    `px-3 py-1.5 rounded-full text-xs font-bold bg-${color}-100 text-${color}-700 border border-${color}-200`,
  jobFooter: "flex items-center justify-between mb-4 mt-auto",
  jobDateWrapper: "flex items-center gap-2",
  jobDateIcon: "w-4 h-4 text-gray-400",
  jobDateText: "text-sm text-gray-500",
  jobCategoryBadge:
    "px-3 py-1.5 rounded-full text-xs font-bold bg-gray-100 text-gray-700 border border-gray-200",
  jobActions: "flex flex-row sm:flex-row items-center gap-3 mt-2",
  applyButton: (isApplied) =>
    `flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-md transform active:scale-95 ${
      isApplied
        ? "bg-gray-300 text-gray-800"
        : "bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
    }`,
  applyButtonIcon: "w-4 h-4",
  viewButton:
    "p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-200 inline-flex items-center justify-center shadow-sm",
  viewButtonIcon: "w-5 h-5",
  jobSaveButton: (isSaved) =>
    `p-2 rounded-full cursor-pointer shadow-xl transition-all duration-200 inline-flex items-center justify-center ${
      isSaved
        ? "bg-blue-600 text-white shadow-md"
        : "bg-white text-gray-600 hover:bg-gray-100"
    }`,
  jobSaveIcon: "w-5 h-5",

  // ==================== Missing Item Card ====================
  missingCard: "bg-white rounded-2xl shadow-lg p-4 sm:p-6",
  missingHeader: "flex items-center justify-between mb-3",
  missingTitle: "text-lg font-semibold",
  missingSaveButton:
    "p-2 cursor-pointer rounded-lg bg-white text-gray-600 border border-gray-100",
  missingIdText: "text-sm text-gray-500",
  missingErrorText: "text-sm text-red-500 mt-2",

  // ==================== Empty State ====================
  emptyStateContainer: "col-span-full",
  emptyStateCard:
    "bg-white rounded-3xl shadow-xl p-12 text-center border-2 border-dashed border-gray-200",
  emptyStateIconWrapper:
    "w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6",
  emptyStateIcon: "w-10 h-10 text-gray-300",
  emptyStateTitle: "text-2xl font-bold text-gray-800 mb-2",
  emptyStateText: "text-gray-500 max-w-sm mx-auto",

  // ==================== Confirm Toast ====================
  confirmToastContainer:
    "fixed right-4 sm:right-6 left-4 sm:left-auto top-6 z-50 w-auto sm:w-96 max-w-full p-4 rounded-2xl shadow-2xl bg-white border border-gray-200 transform transition-all duration-300 animate-slideDown",
  confirmToastInner: "flex items-start gap-3",
  confirmToastIconWrapper: "shrink-0",
  confirmToastIcon: "w-6 h-6 text-blue-600",
  confirmToastContent: "flex-1",
  confirmToastTitle: "text-sm font-semibold text-gray-800 mb-1",
  confirmToastMessage: "text-xs text-gray-600 mb-3",
  confirmToastRole: "font-medium",
  confirmToastCompany: "font-medium",
  confirmToastActions: "flex items-center gap-3",
  confirmButton:
    "px-4 py-2 cursor-pointer rounded-full bg-linear-to-r from-blue-500 to-blue-600 text-white font-medium shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-0.5",
  cancelButton:
    "px-4 py-2 cursor-pointer rounded-full bg-gray-100 text-gray-700 font-medium border border-gray-200",
  closeButton: "ml-auto text-gray-400 hover:text-gray-600",

  // ==================== Global CSS ====================
  globalStyles: `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn {
      animation: fadeIn 0.6s ease-out forwards;
    }

    @keyframes slideDown { 
      from { opacity: 0; transform: translateY(-20px);} 
      to { opacity: 1; transform: translateY(0);} 
    }
    .animate-slideDown { animation: slideDown 0.45s ease-out forwards; }
  `,
};


// Add this to your existing dummyStyles.js file

// ViewProfilePage Component Styles
export const viewProfilePageStyles = {
  // Container styles
  container: "min-h-screen font-[pacifico] bg-linear-to-br from-indigo-50 via-white to-purple-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8",
  innerContainer: "max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-4xl mx-auto",
  
  // Header styles
  header: "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 animate-fade-in-down gap-4",
  headerTitle: "text-3xl sm:text-4xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",
  
  // Edit button
  editButton: "group w-full sm:w-auto cursor-pointer flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300",
  editIcon: "w-5 h-5 group-hover:rotate-12 transition-transform",
  
  // Action buttons wrapper
  actionButtons: "flex flex-col sm:flex-row gap-3 w-full sm:w-auto",
  cancelButton: "flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-all duration-300 w-full sm:w-auto",
  cancelIcon: "w-5 h-5",
  saveButton: "flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto",
  saveButtonDisabled: "opacity-70 cursor-not-allowed",
  saveIcon: "w-5 h-5",
  savingSpinner: "w-5 h-5 animate-spin",
  
  // Profile card
  profileCard: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/20 animate-fade-in-up",
  
  // Avatar section
  avatarSection: "flex flex-col sm:flex-row sm:items-center gap-4 mb-6 pb-4 sm:pb-6 border-b border-gray-200/50",
  avatar: "shrink-0 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-xl w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-24 lg:h-24 xl:w-24 xl:h-24 text-2xl sm:text-3xl md:text-4xl",
  avatarInfo: "flex-1",
  avatarName: "text-xl sm:text-2xl md:text-2xl font-bold text-gray-800",
  avatarEmail: "text-gray-500 flex items-center gap-2 mt-1 text-sm sm:text-base",
  avatarEmailIcon: "w-4 h-4",
  
  // Form grid
  formGrid: "grid grid-cols-1 md:grid-cols-2 gap-6",
  
  // Field styles
  fieldGroup: "space-y-2",
  fieldLabel: "flex items-center gap-2 text-sm font-semibold text-gray-700",
  fieldIcon: "w-4 h-4 text-indigo-600",
  requiredStar: "text-red-500",
  
  // Input styles
  input: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 transition-all bg-white/50 text-sm sm:text-base",
  displayText: "text-gray-800 px-4 py-3 bg-gray-50/50 rounded-xl border border-gray-100 text-sm sm:text-base",
  
  // Resume section
  resumeSection: "space-y-2 md:col-span-2",
  resumeUploadWrapper: "space-y-3",
  resumeUploadRow: "flex flex-col sm:flex-row items-stretch sm:items-center gap-3",
  resumeUploadLabel: "flex-1 cursor-pointer",
  resumeUploadBox: "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 flex items-center gap-2 text-gray-500 hover:bg-gray-100 transition-colors text-sm sm:text-base",
  resumeUploadIcon: "w-5 h-5 text-indigo-600",
  resumeFileName: "truncate",
  resumeDeleteButton: "p-3 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-colors border border-red-200 shrink-0",
  resumeDeleteIcon: "w-5 h-5",
  resumeSuccessText: "text-sm text-green-600 truncate",
  
  // Resume view button
  resumeViewButton: "inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-xl border border-indigo-200 hover:bg-indigo-100 transition-colors text-sm sm:text-base cursor-pointer",
  resumeViewIcon: "w-4 h-4",
  noResumeText: "text-gray-500 italic text-sm sm:text-base",
  
  // Toast styles (internal)
  toast: {
    container: "fixed bottom-4 right-4 z-50 animate-slide-up",
    card: "flex items-center gap-3 px-5 py-3 rounded-2xl shadow-2xl border",
    cardSuccess: "bg-green-50 border-green-200 text-green-800",
    cardError: "bg-red-50 border-red-200 text-red-800",
    indicator: "w-2 h-2 rounded-full animate-pulse",
    indicatorSuccess: "bg-green-500",
    indicatorError: "bg-red-500",
    message: "font-medium text-sm",
    closeButton: "ml-4 hover:opacity-70",
    closeIcon: "w-4 h-4"
  },
  
  // Global styles
  globalStyles: `
    @keyframes fade-in-down {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes fade-in-up {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes slide-up {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fade-in-down {
      animation: fade-in-down 0.6s ease-out;
    }
    .animate-fade-in-up {
      animation: fade-in-up 0.6s ease-out;
    }
    .animate-slide-up {
      animation: slide-up 0.3s ease-out;
    }
    .truncate {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `
};