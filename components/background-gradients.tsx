export function BackgroundGradients() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main large gradient - top edge */}
      <div 
        className="absolute -top-1/4 right-0 left-0 w-full h-[800px] bg-gradient-to-b from-rose-500/[0.43] via-orange-500/[0.23] to-transparent rounded-[100%] blur-[120px] mix-blend-normal animate-gradient-slow"
        style={{ animationDelay: "0ms" }}
      />
      
      {/* Corner accent gradient */}
      <div 
        className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-gradient-to-bl from-blue-400/[0.3] via-indigo-300/[0.34] to-transparent rounded-[100%] blur-[90px] mix-blend-multiply animate-gradient-rotate"
        style={{ animationDelay: "2000ms" }}
      />

      {/* Bottom complementary gradient */}
      <div 
        className="absolute -bottom-24 -left-24 w-[600px] h-[600px] bg-gradient-to-tr from-orange-400/[0.2] via-rose-300/[0.5] to-transparent rounded-[100%] blur-[200px] mix-blend-multiply animate-gradient-rotate-reverse"
        style={{ animationDelay: "4000ms" }}
      />
    </div>
  )
} 