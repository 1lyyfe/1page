import React from 'react';
import CodeLine from '../components/CodeLine';

const Home = () => {
  return (
    <div className="pl-8 pr-8 py-8">
      <div className="max-w-4xl mx-auto">
        <CodeLine number={1}>
          <span className="keyword">class</span> <span className="function">iOSEngineer</span> {'{'}
        </CodeLine>
        
        <CodeLine number={2}>
          <span className="comment">// Profile Image</span>
        </CodeLine>
        
        <CodeLine number={3}>
          <img 
            src="https://images.unsplash.com/photo-1519575706483-221027bfbb31?w=400&h=400&fit=crop"
            alt="Profile"
            className="w-32 h-32 rounded-full my-4"
          />
        </CodeLine>
        
        <CodeLine number={4}>
<span className="keyword">const</span> <span className="function">name</span> = <span className="string">"Haider Ashfaq"</span>;
        </CodeLine>
        
        <CodeLine number={5}>
<span className="keyword">const</span> <span className="function">role</span> = <span className="string">"Lead iOS Engineer"</span>;
        </CodeLine>

        <CodeLine number={6}></CodeLine>
        
        <CodeLine number={7}>
<span className="keyword">const</span> <span className="function">description</span> = <span className="string">"In the ethereal realms of iOS sorcery, I am the code-wielder, conjuring enchantments with the language of Swift 🌌✨ Join me in the mystical dance of code."</span>;
        </CodeLine>

        <CodeLine number={8}></CodeLine>
        
        <CodeLine number={9}>
<span className="keyword">const</span> <span className="function">skills</span> = [
        </CodeLine>
        
        <CodeLine number={10} indent={1}>
          <span className="string">"Swift"</span>, <span className="string">"UIKit"</span>, <span className="string">"SwiftUI"</span>,
        </CodeLine>
        
        <CodeLine number={11} indent={1}>
          <span className="string">"MVVM"</span>, <span className="string">"Clean Architecture"</span>, <span className="string">"SOLID"</span>,
        </CodeLine>

        <CodeLine number={12} indent={1}>
          <span className="string">"TDD"</span>, <span className="string">"Unit Testing"</span>, <span className="string">"Integration Testing"</span>,
        </CodeLine>

        <CodeLine number={13} indent={1}>
          <span className="string">"CI/CD"</span>, <span className="string">"Jenkins"</span>, <span className="string">"Docker"</span>,
        </CodeLine>

        <CodeLine number={14} indent={1}>
          <span className="string">"RESTful APIs"</span>, <span className="string">"GraphQL"</span>, <span className="string">"SQL"</span>,
        </CodeLine>

        <CodeLine number={15} indent={1}>
          <span className="string">"TCA"</span>, <span className="string">"Dependency Injection"</span>, <span className="string">"Snapshot Testing"</span>,
        </CodeLine>

        <CodeLine number={16} indent={1}>
          <span className="string">"Product Focus"</span>, <span className="string">"Jira"</span>, <span className="string">"Fastlane"</span>,
        </CodeLine>

        <CodeLine number={17} indent={1}>
          <span className="string">"Figma"</span>, <span className="string">"Firebase"</span>, <span className="string">"Bitrise"</span>,
        </CodeLine>

        <CodeLine number={18} indent={1}>
          <span className="string">"AppCenter"</span>, <span className="string">"AppStore Connect"</span>, <span className="string">"StoreKit"</span>,
        </CodeLine>

        <CodeLine number={19} indent={1}>
          <span className="string">"Swift Concurrency"</span>, <span className="string">"DevOps"</span>, <span className="string">"Distributed Systems"</span>
        </CodeLine>
        
        <CodeLine number={20}>];
        </CodeLine>
        
        <CodeLine number={21}>{'}'}</CodeLine>
      </div>
    </div>
  );
};

export default Home;