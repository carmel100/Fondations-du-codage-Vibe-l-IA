import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

const Index = () => {
  const handleViewProjects = () => {
    // Action pour voir les projets
    console.log("Redirection vers les projets");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Image de fond avec overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-accent/20" />
      
      {/* Contenu principal */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Nom principal avec effet gradient */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
            <span className="text-gradient">N&apos;DA</span>
            <br />
            <span className="text-foreground">CARMEL</span>
          </h1>
          
          {/* Sous-titre élégant */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Développeur Full-Stack passionné par la création d'expériences numériques exceptionnelles
          </p>
          
          {/* Bouton héro avec effet */}
          <div className="animate-fade-in-up pulse-glow" style={{ animationDelay: "0.4s" }}>
            <Button 
              onClick={handleViewProjects}
              className="btn-hero"
              size="lg"
            >
              Voir mes projets
            </Button>
          </div>
          
          {/* Éléments décoratifs */}
          <div className="mt-16 flex justify-center space-x-8 text-muted-foreground/60">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
