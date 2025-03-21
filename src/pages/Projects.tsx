import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, ShoppingBag, Dumbbell, FolderRoot as Football, Tag, Timer, Users as Horse, Shield } from 'lucide-react';
import CodeLine from '../components/CodeLine';

interface Project {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const projects: Project[] = [
  {
    id: 'fordpass',
    name: 'FordPass',
    description: "Ford's official car companion app enabling remote vehicle control and management",
    icon: <Smartphone className="text-[var(--vscode-function)]" />,
    image: 'https://www.globalowneraem.ford.com/content/dam/global-owner/ford/us/en-us/images/category/fordpass/fordpass-connect-wifi-hotspot/component-box-5050/06_CTA-Image.png'
  },
  {
    id: 'gymshark-ecom',
    name: 'Gymshark Ecommerce',
    description: 'Leading fitness apparel shopping experience',
    icon: <ShoppingBag className="text-[var(--vscode-string)]" />,
    image: 'https://cdn.dribbble.com/userupload/32787319/file/original-90d410573468876e494c567bc79730ec.png?resize=752x&vertical=center'
  },
  {
    id: 'gymshark-workout',
    name: 'Gymshark Training',
    description: 'Comprehensive workout and training companion app',
    icon: <Dumbbell className="text-[var(--vscode-keyword)]" />,
    image: 'https://uk.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F8urtyqugdt2l%2F5fm4e61p4RiuBalHOp8jfV%2F5417c31592d5987de2785f8262013c86%2FTraining_app_desktop.jpg&w=3840&q=85'
  },
  {
    id: 'talent-aint-enough',
    name: 'Talent Ain\'t Enough',
    description: 'Premier football training application',
    icon: <Football className="text-[var(--vscode-function)]" />,
    image: 'https://static.wixstatic.com/media/d00fc4_31a458aa2d344e16ba02f3ddbd5424d8~mv2.png/v1/fill/w_820,h_684,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/WEB%20BANNER.png'
  },
  {
    id: 'resell-connect',
    name: 'Resell Connect',
    description: 'Leading product reselling platform',
    icon: <Tag className="text-[var(--vscode-string)]" />,
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/0c/e1/13/0ce1135e-c110-dd83-b0e0-c7340920f333/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1200x600wa.png'
  },
  {
    id: 'cheltenham-racecourse',
    name: 'Cheltenham Racecourse',
    description: 'Official app for Cheltenham Racecourse events and betting',
    icon: <Horse className="text-[var(--vscode-keyword)]" />,
    image: 'https://eu-assets.simpleview-europe.com/cheltenham2017/imageresizer/?image=%2Fdmsimgs%2FCheltenham-Festival-02_635867840.jpg&action=ProductDetail'
  },
  {
    id: 'royal-windsor-racecourse',
    name: 'Royal Windsor Racecourse',
    description: 'Official Royal Windsor Racecourse companion app',
    icon: <Horse className="text-[var(--vscode-function)]" />,
    image: 'https://www.windsor-racecourse.co.uk/WindsorRacecourse/images/upload/804c2d2d-c436-45ba-8765-b8a9ad06fb84.jpg'
  },
  {
    id: 'blackburn-rovers',
    name: 'Blackburn Rovers FC',
    description: 'Official Blackburn Rovers Football Club app',
    icon: <Shield className="text-[var(--vscode-string)]" />,
    image: 'https://play-lh.googleusercontent.com/kQzVNF1MTyPbRH-nPCvTrSwLI_eubO2N8SpEtekEM_PI1teviSqpNaoa0_7Sse2G8U8'
  },
  {
    id: 'bristol-city',
    name: 'Bristol City FC',
    description: 'Official Bristol City Football Club app',
    icon: <Shield className="text-[var(--vscode-keyword)]" />,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsBM0trymR2rcU3kvurUKFSl0qALYwUWNE3Q&s'
  },
  {
    id: 'bristol-bears',
    name: 'Bristol Bears Rugby',
    description: 'Official Bristol Bears Rugby Union Club app',
    icon: <Shield className="text-[var(--vscode-function)]" />,
    image: 'https://ichef.bbci.co.uk/ace/standard/624/cpsprodpb/2061/production/_100898280_bears.jpg'
  },
  {
    id: 'ufc-pickem',
    name: 'UFC Pick-Em\'s',
    description: 'UFC betting game application',
    icon: <Timer className="text-[var(--vscode-string)]" />,
    image: 'https://pbs.twimg.com/profile_images/1334515411082227714/wsygDiS2_400x400.jpg'
  },
];

const Projects = () => {
  return (
    <div className="pl-8 pr-8 py-8">
      <div className="max-w-6xl mx-auto">
        <CodeLine number={1}>
          <span className="keyword">const</span> <span className="function">projects</span> = {'{'}
        </CodeLine>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4 pl-8">
          {projects.map((project, index) => (
            <Link 
              to={`/projects/${project.id}`} 
              key={project.id}
              className="project-card group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">View Details</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  {project.icon}
                  <h3 className="text-[var(--vscode-function)] font-medium">{project.name}</h3>
                </div>
                <p className="text-sm text-[var(--vscode-text)] opacity-80">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <CodeLine number={2}>{'};'}</CodeLine>
      </div>
    </div>
  );
};

export default Projects;